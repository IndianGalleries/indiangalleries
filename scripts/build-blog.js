#!/usr/bin/env node
'use strict';
/**
 * Indian Galleries blog generator.
 *
 * Reads blogs/*.md (Pages CMS output), and for every article with `published: true`
 * writes static HTML. Nothing else in the repository is modified.
 *
 * Writes (all marked "generated:igb-blog", all git-ignored):
 *   blogs/index.html                  listing page
 *   blogs/<slug>/index.html           one page per published article
 *   blogs/assets/img/*                optimised copies of article images
 *   sitemap.xml                       static pages + published blog URLs only
 *
 * Refuses to overwrite any file that lacks the generated marker.
 */
const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const { renderMarkdown } = require('./lib/markdown');
const images = require('./lib/images');
const site = require('./lib/site');
const T = require('./lib/templates');

const ROOT = path.resolve(__dirname, '..');
const MARKER = '<!-- generated:igb-blog -->';
const SLUG_RE = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

const toISO = (v) => {
  if (v instanceof Date && !isNaN(v)) return v.toISOString().slice(0, 10);
  const m = typeof v === 'string' && /^(\d{4}-\d{2}-\d{2})/.exec(v.trim());
  return m ? m[1] : null;
};
const clean = (s) => String(s ?? '').replace(/\s+/g, ' ').trim();
const isPublished = (v) => v === true || (typeof v === 'string' && v.trim().toLowerCase() === 'true');

function safeWrite(file, content) {
  if (fs.existsSync(file) && !fs.readFileSync(file, 'utf8').includes(MARKER)) {
    throw new Error(`Refusing to overwrite non-generated file: ${path.relative(ROOT, file)}`);
  }
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, content);
}

function pickProducts(cfg, a, root) {
  const hay = `${a.title} ${a.tags.join(' ')} ${a.text}`.toLowerCase();
  const scored = cfg.products.map((p, i) => {
    const hits = p.keywords.reduce((n, k) => n + (hay.split(k.toLowerCase()).length - 1), 0);
    return { p, i, score: (p.categories.includes(a.category) ? 1 : 0) + Math.min(5, hits) };
  });
  return scored
    .filter((s) => s.score > 0)
    .sort((x, y) => y.score - x.score || x.i - y.i)
    .slice(0, 4)
    .map(({ p }) => {
      const meta = site.pageMeta(root, p.url);
      if (!meta) throw new Error(`blog.config.json product page does not exist: ${p.url}`);
      return { ...p, description: T.truncate(meta.description, 140) };
    });
}

async function build({ root = ROOT, log = console.log } = {}) {
  const cfg = JSON.parse(fs.readFileSync(path.join(root, 'blog.config.json'), 'utf8'));
  const blogsDir = path.join(root, 'blogs');
  const imgDir = path.join(blogsDir, 'assets', 'img');
  const imgUrl = `${cfg.blogPath}assets/img`;
  const siteHost = new URL(cfg.siteUrl).hostname;
  const errors = [];
  const warnings = [];

  // 1. Read Markdown sources.
  const files = fs.existsSync(blogsDir)
    ? fs.readdirSync(blogsDir).filter((f) => f.toLowerCase().endsWith('.md')).sort()
    : [];
  const published = [];
  let drafts = 0;
  for (const file of files) {
    let parsed;
    try {
      parsed = matter(fs.readFileSync(path.join(blogsDir, file), 'utf8'));
    } catch (e) {
      errors.push(`${file}: invalid frontmatter (${e.message.split('\n')[0]})`);
      continue;
    }
    const d = parsed.data;
    if (!isPublished(d.published)) {
      drafts++;
      continue;
    }
    const where = `${file}`;
    const need = (cond, msg) => cond || errors.push(`${where}: ${msg}`);
    need(clean(d.title), 'title is required');
    need(SLUG_RE.test(clean(d.slug)), 'slug must be lowercase words separated by hyphens');
    need(clean(d.slug) !== 'assets', 'slug "assets" is reserved');
    need(cfg.categories.includes(clean(d.category)), `category must be one of: ${cfg.categories.join(', ')}`);
    need(clean(d.excerpt), 'excerpt is required');
    need(clean(d.featured_image), 'featured_image is required');
    need(clean(d.image_alt), 'image_alt is required');
    need(toISO(d.date), 'date is required (YYYY-MM-DD)');
    need(clean(parsed.content), 'body is empty');
    published.push({ file, d, content: parsed.content });
  }
  const slugs = new Map();
  for (const p of published) {
    const s = clean(p.d.slug);
    if (slugs.has(s)) errors.push(`${p.file}: slug "${s}" is also used by ${slugs.get(s)}`);
    slugs.set(s, p.file);
  }
  if (errors.length) throw new Error('Blog build failed:\n  - ' + errors.join('\n  - '));

  // 2. Remove stale generated article folders (only ones carrying our marker).
  if (fs.existsSync(blogsDir)) {
    for (const entry of fs.readdirSync(blogsDir, { withFileTypes: true })) {
      if (!entry.isDirectory() || entry.name === 'assets') continue;
      const idx = path.join(blogsDir, entry.name, 'index.html');
      if (fs.existsSync(idx) && fs.readFileSync(idx, 'utf8').includes(MARKER) && !slugs.has(entry.name)) {
        fs.rmSync(idx);
        try { fs.rmdirSync(path.join(blogsDir, entry.name)); } catch (_) {}
      }
    }
  }

  // 3. Render every published article.
  const fragments = site.loadFragments(root);
  const articles = [];
  const usedImages = new Set();
  const track = (u) => u && usedImages.add(path.basename(u));

  for (const { file, d, content } of published) {
    const slug = clean(d.slug);
    const title = clean(d.title);
    let imgs;
    try {
      imgs = await images.featuredVariants({ root, ref: clean(d.featured_image), slug, outDir: imgDir, urlBase: imgUrl });
    } catch (e) {
      throw new Error(`Blog build failed:\n  - ${file}: ${e.message}`);
    }
    if (!imgs) {
      // Remote featured image: use it directly everywhere.
      const u = clean(d.featured_image);
      const one = { url: u, width: 1200, height: 800 };
      imgs = { card: one, wide: one, hero: null, 'hero-sm': null, og: one };
    }
    Object.values(imgs).forEach((v) => v && track(v.url));

    const rendered = await renderMarkdown(content, {
      siteHost,
      autoLinks: cfg.autoLinks,
      maxAutoLinks: cfg.maxAutoLinks,
      imageResolver: async (src) => {
        const r = await images.bodyImage({ root, ref: src, outDir: imgDir, urlBase: imgUrl });
        if (r) track(r.src);
        return r;
      }
    });

    const tags = (Array.isArray(d.tags) ? d.tags : d.tags ? [d.tags] : []).map(clean).filter(Boolean);
    const date = toISO(d.date);
    const metaDescription = clean(d.meta_description) || T.truncate(clean(d.excerpt), 155);
    const a = {
      file, slug, title, tags, date,
      updated: toISO(d.updated_date) || date,
      category: clean(d.category),
      excerpt: clean(d.excerpt),
      imageAlt: clean(d.image_alt),
      author: clean(d.author) || cfg.siteName,
      metaTitle: clean(d.seo_title) || `${title} | ${cfg.siteName}`,
      metaDescription,
      url: `${cfg.blogPath}${slug}/`,
      canonical: `${cfg.siteUrl}${cfg.blogPath}${slug}/`,
      images: imgs,
      ogImage: imgs.og.url.startsWith('http') ? imgs.og.url : cfg.siteUrl + imgs.og.url,
      ...rendered
    };
    if (/®/.test(content + a.title + a.excerpt)) warnings.push(`${file}: contains ® (brand rule: write "Indian Galleries" without it)`);
    if (metaDescription.length > 165) warnings.push(`${file}: meta description is ${metaDescription.length} chars (aim for under 160)`);
    articles.push(a);
  }
  articles.sort((x, y) => y.date.localeCompare(x.date) || y.updated.localeCompare(x.updated) || x.title.localeCompare(y.title));

  const dupCheck = (key, label) => {
    const seen = new Map();
    for (const a of articles) {
      const v = a[key].toLowerCase();
      if (seen.has(v)) warnings.push(`${a.file}: ${label} duplicates ${seen.get(v)}`);
      seen.set(v, a.file);
    }
  };
  dupCheck('metaTitle', 'SEO title');
  dupCheck('metaDescription', 'meta description');

  // 4. Write article pages.
  for (const a of articles) {
    const others = articles.filter((o) => o.slug !== a.slug);
    const related = others
      .map((o) => ({ o, s: (o.category === a.category ? 3 : 0) + o.tags.filter((t) => a.tags.includes(t)).length }))
      .sort((x, y) => y.s - x.s || y.o.date.localeCompare(x.o.date))
      .slice(0, 3)
      .map((x) => x.o);
    const products = pickProducts(cfg, a, root);
    const html = T.document({
      cfg, fragments,
      title: a.metaTitle,
      description: a.metaDescription,
      canonical: a.canonical,
      robots: 'index, follow, max-image-preview:large',
      og: {
        type: 'article', image: a.ogImage, imageAlt: a.imageAlt, author: a.author,
        published: a.date, modified: a.updated, section: a.category, tags: a.tags
      },
      jsonld: T.articleJsonLd(cfg, a),
      main: T.articleMain(cfg, a, related, products)
    });
    safeWrite(path.join(blogsDir, a.slug, 'index.html'), html);
  }

  // 5. Listing page (noindex while there is nothing to list).
  const listUrl = cfg.siteUrl + cfg.blogPath;
  const first = articles[0];
  safeWrite(
    path.join(blogsDir, 'index.html'),
    T.document({
      cfg, fragments,
      title: cfg.listing.title,
      description: cfg.listing.description,
      canonical: listUrl,
      robots: first ? 'index, follow, max-image-preview:large' : 'noindex, follow',
      og: {
        type: 'website',
        image: first ? first.ogImage : cfg.siteUrl + '/Images/favicon-light.webp',
        imageAlt: first ? first.imageAlt : ''
      },
      jsonld: T.listingJsonLd(cfg, articles),
      main: T.listingMain(cfg, articles)
    })
  );

  // 6. Remove optimised images no longer referenced.
  if (fs.existsSync(imgDir)) {
    for (const f of fs.readdirSync(imgDir)) if (!usedImages.has(f)) fs.rmSync(path.join(imgDir, f));
  }

  // 7. Sitemap: static pages + published blog URLs only.
  const blogEntries = articles.length
    ? [
        { loc: listUrl, lastmod: articles.map((a) => a.updated).sort().pop() },
        ...articles.map((a) => ({ loc: a.canonical, lastmod: a.updated }))
      ]
    : [];
  const sm = site.buildSitemap(root, cfg.siteUrl, blogEntries);
  safeWrite(path.join(root, 'sitemap.xml'), sm.xml);
  warnings.push(...sm.warnings);

  log(`Blog build OK: ${articles.length} published, ${drafts} draft(s) skipped, ${sm.count} URLs in sitemap.xml`);
  warnings.forEach((w) => log(`  warning: ${w}`));
  return { articles, drafts, warnings, sitemapCount: sm.count };
}

module.exports = { build };

if (require.main === module) {
  build().catch((e) => {
    console.error(e.message);
    process.exit(1);
  });
}
