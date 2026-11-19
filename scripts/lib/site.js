'use strict';
/** Helpers that read the existing static site (header, footer, product pages) without changing it. */
const fs = require('fs');
const path = require('path');

function rewriteRelativeUrls(html) {
  return html.replace(/\b(href|src)="([^"]*)"/g, (m, attr, val) => {
    if (!val || /^(https?:|\/|#|mailto:|tel:|data:|javascript:)/i.test(val)) return m;
    return `${attr}="/${val.replace(/^\.?\//, '')}"`;
  });
}

function loadFragments(root) {
  const read = (f) => fs.readFileSync(path.join(root, f), 'utf8');
  const hdr = read('header.html');
  const ftr = read('footer.html');
  const hStart = hdr.indexOf('<header');
  const hEnd = hdr.lastIndexOf('</header>');
  const fStart = ftr.indexOf('<footer');
  const fEnd = ftr.lastIndexOf('</body>');
  if (hStart < 0 || hEnd < 0) throw new Error('header.html: <header> element not found');
  if (fStart < 0 || fEnd < 0) throw new Error('footer.html: <footer> element not found');
  let header = rewriteRelativeUrls(hdr.slice(hStart, hEnd + '</header>'.length));
  const footer = rewriteRelativeUrls(ftr.slice(fStart, fEnd));
  // Give the main navbar an accessible name so it is distinct from the breadcrumb and TOC landmarks.
  header = header.replace(/<nav class="navbar/, '<nav aria-label="Main navigation" class="navbar');
  // Highlight the Blog link on blog pages (the runtime loader does this on other pages).
  header = header.replace(/class="nav-link"(\s+href="\/blogs\/")/, 'class="nav-link active" aria-current="page"$1');
  return { header, footer };
}

function pageMeta(root, urlPath) {
  const file = path.join(root, urlPath.replace(/^\//, ''));
  if (!fs.existsSync(file)) return null;
  const html = fs.readFileSync(file, 'utf8');
  const title = (/<title>([^<]*)<\/title>/i.exec(html) || [])[1] || '';
  const desc = (/<meta\s+name="description"\s+content="([^"]*)"/i.exec(html.replace(/\s+/g, ' ')) || [])[1] || '';
  return { title: title.trim(), description: desc.trim() };
}

function buildSitemap(root, siteUrl, blogEntries) {
  const skipPrefixes = ['google'];
  const fragments = new Set(['header.html', 'footer.html']);
  const entries = [];
  const warnings = [];
  for (const f of fs.readdirSync(root).sort()) {
    if (!f.endsWith('.html') || fragments.has(f) || skipPrefixes.some((p) => f.startsWith(p))) continue;
    const html = fs.readFileSync(path.join(root, f), 'utf8');
    if (/<meta[^>]+name="robots"[^>]+noindex/i.test(html)) continue;
    const canon = (/<link\s+rel="canonical"\s+href="([^"]+)"/i.exec(html) || [])[1];
    if (!canon) {
      warnings.push(`${f}: no canonical URL, left out of sitemap`);
      continue;
    }
    if (!canon.startsWith(siteUrl)) continue;
    entries.push({ loc: canon });
  }
  for (const b of blogEntries) entries.push(b);
  const seen = new Set();
  const xml =
    '<?xml version="1.0" encoding="UTF-8"?>\n<!-- generated:igb-blog -->\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
    entries
      .filter((e) => !seen.has(e.loc) && seen.add(e.loc))
      .map((e) => `  <url><loc>${e.loc}</loc>${e.lastmod ? `<lastmod>${e.lastmod}</lastmod>` : ''}</url>`)
      .join('\n') +
    '\n</urlset>\n';
  return { xml, warnings, count: seen.size };
}

module.exports = { loadFragments, pageMeta, buildSitemap, rewriteRelativeUrls };
