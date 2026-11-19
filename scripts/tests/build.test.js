'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('fs');
const os = require('os');
const path = require('path');
const sharp = require('sharp');
const { build } = require('../build-blog.js');
const { renderMarkdown } = require('../lib/markdown');

const REAL = path.resolve(__dirname, '..', '..');
const quiet = () => {};

async function makeSite(articles) {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'igblog-'));
  fs.mkdirSync(path.join(root, 'blogs'));
  fs.mkdirSync(path.join(root, 'media', 'blog'), { recursive: true });
  fs.writeFileSync(path.join(root, 'header.html'), '<html><body><header><a href="index.html">Home</a><a class="nav-link" href="blogs/">Blog</a><img src="/Images/x.webp"></header></body></html>');
  fs.writeFileSync(path.join(root, 'footer.html'), '<html><body><footer><a href="aboutus.html">About</a></footer><div>©</div></body></html>');
  fs.writeFileSync(path.join(root, 'index.html'), '<html><head><title>Home</title><link rel="canonical" href="https://www.indiangalleries.net/"></head></html>');
  fs.writeFileSync(path.join(root, 'tablelamps.html'), '<html><head><title>Table Lamps</title><meta name="description" content="Handcrafted table lamps."><link rel="canonical" href="https://www.indiangalleries.net/tablelamps.html"></head></html>');
  const cfg = JSON.parse(fs.readFileSync(path.join(REAL, 'blog.config.json'), 'utf8'));
  cfg.products = cfg.products.filter((p) => p.url === '/tablelamps.html');
  fs.writeFileSync(path.join(root, 'blog.config.json'), JSON.stringify(cfg));
  await sharp({ create: { width: 600, height: 900, channels: 3, background: '#335' } }).png().toFile(path.join(root, 'media', 'blog', 'a.png'));
  for (const [file, fm, body] of articles) {
    fs.writeFileSync(path.join(root, 'blogs', file), `---\n${fm}\n---\n${body}\n`);
  }
  return root;
}

const fm = (o = {}) =>
  Object.entries({
    title: '"Choosing Table Lamps"', slug: 'choosing-table-lamps', category: 'Lighting',
    excerpt: 'How to pick table lamps.', featured_image: '/media/blog/a.png', image_alt: 'A lamp',
    date: '2026-05-01', published: 'true', ...o
  }).map(([k, v]) => `${k}: ${v}`).join('\n');
const BODY = '# Choosing Table Lamps\n\nIntro about table lamps.\n\n## One\n\ntext\n\n### Sub\n\ntext\n\n## Two\n\ntext';
const read = (root, ...p) => fs.readFileSync(path.join(root, ...p), 'utf8');

test('only published articles are generated, listed and put in the sitemap', async () => {
  const root = await makeSite([
    ['live.md', fm(), BODY],
    ['draft.md', fm({ title: '"Hidden"', slug: 'hidden-draft', published: 'false' }), '# Hidden\n\nsecret'],
    ['nopub.md', fm({ title: '"No flag"', slug: 'no-flag', published: undefined }).replace(/published: undefined\n?/, ''), '# x\n\ny']
  ]);
  const r = await build({ root, log: quiet });
  assert.equal(r.articles.length, 1);
  assert.ok(fs.existsSync(path.join(root, 'blogs/choosing-table-lamps/index.html')));
  assert.ok(!fs.existsSync(path.join(root, 'blogs/hidden-draft')));
  assert.ok(!fs.existsSync(path.join(root, 'blogs/no-flag')));
  const listing = read(root, 'blogs/index.html');
  assert.ok(listing.includes('Choosing Table Lamps'));
  assert.ok(!/Hidden|secret/.test(listing));
  const sm = read(root, 'sitemap.xml');
  assert.ok(sm.includes('https://www.indiangalleries.net/blogs/choosing-table-lamps/'));
  assert.ok(sm.includes('<loc>https://www.indiangalleries.net/blogs/</loc>'));
  assert.ok(!sm.includes('hidden-draft'));
  assert.ok(sm.includes('<loc>https://www.indiangalleries.net/tablelamps.html</loc>'));
});

test('article page has full SEO metadata, one H1, valid JSON-LD and root-absolute header links', async () => {
  const root = await makeSite([['live.md', fm({ seo_title: '"Pick Table Lamps | Indian Galleries"', meta_description: '"A short unique description."' }), BODY]]);
  await build({ root, log: quiet });
  const html = read(root, 'blogs/choosing-table-lamps/index.html');
  assert.match(html, /<title>Pick Table Lamps \| Indian Galleries<\/title>/);
  assert.match(html, /<meta name="description" content="A short unique description\.">/);
  assert.match(html, /<link rel="canonical" href="https:\/\/www\.indiangalleries\.net\/blogs\/choosing-table-lamps\/">/);
  for (const m of ['og:title', 'og:description', 'og:image', 'og:url', 'twitter:card', 'twitter:image']) {
    assert.ok(html.includes(m), `missing ${m}`);
  }
  assert.equal((html.match(/<h1[ >]/g) || []).length, 1);
  assert.equal((html.match(/<meta name="description"/g) || []).length, 1);
  const ld = [...html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/g)].map((m) => JSON.parse(m[1]));
  assert.ok(ld.some((o) => o['@type'] === 'BlogPosting' && o.headline === 'Choosing Table Lamps'));
  assert.ok(ld.some((o) => o['@type'] === 'BreadcrumbList' && o.itemListElement.length === 3));
  assert.ok(html.includes('href="/index.html"') && !html.includes('href="index.html"'));
  assert.ok(html.includes('href="/aboutus.html"'));
  assert.ok(html.includes('class="nav-link active" aria-current="page" href="/blogs/"'));
  assert.ok(html.includes('href="#one"') && html.includes('id="one"'));
  assert.ok(html.includes('href="/tablelamps.html"'));
});

test('stale generated pages are removed when an article is unpublished', async () => {
  const root = await makeSite([['live.md', fm(), BODY]]);
  await build({ root, log: quiet });
  assert.ok(fs.existsSync(path.join(root, 'blogs/choosing-table-lamps/index.html')));
  fs.writeFileSync(path.join(root, 'blogs/live.md'), `---\n${fm({ published: 'false' })}\n---\n${BODY}\n`);
  await build({ root, log: quiet });
  assert.ok(!fs.existsSync(path.join(root, 'blogs/choosing-table-lamps')));
  assert.ok(!read(root, 'sitemap.xml').includes('choosing-table-lamps'));
  assert.deepEqual(fs.readdirSync(path.join(root, 'blogs/assets/img')), []);
  assert.match(read(root, 'blogs/index.html'), /noindex/);
  assert.ok(!read(root, 'sitemap.xml').includes('/blogs/</loc>'));
});

test('never overwrites a hand-written file', async () => {
  const root = await makeSite([['live.md', fm(), BODY]]);
  fs.writeFileSync(path.join(root, 'blogs/index.html'), '<h1>Hand made</h1>');
  await assert.rejects(build({ root, log: quiet }), /Refusing to overwrite/);
  assert.equal(read(root, 'blogs/index.html'), '<h1>Hand made</h1>');
});

test('invalid published articles fail the build with a clear message', async () => {
  const bad = await makeSite([['a.md', fm({ category: 'Nonsense' }), BODY]]);
  await assert.rejects(build({ root: bad, log: quiet }), /category must be one of/);
  const missing = await makeSite([['a.md', fm({ featured_image: '/media/blog/missing.png' }), BODY]]);
  await assert.rejects(build({ root: missing, log: quiet }), /Image not found/);
  const dup = await makeSite([['a.md', fm(), BODY], ['b.md', fm({ title: '"Other"' }), BODY]]);
  await assert.rejects(build({ root: dup, log: quiet }), /also used by/);
});

test('markdown: leading H1 dropped, other H1 demoted, ids unique, links normalised', async () => {
  const r = await renderMarkdown('# Title\n\n# Again\n\n## Same\n\n## Same\n\n[a](page.html) [b](https://x.org) [c](https://www.indiangalleries.net/y)', { siteHost: 'www.indiangalleries.net' });
  assert.ok(!/<h1/.test(r.html));
  assert.match(r.html, /<h2 id="again">Again<\/h2>/);
  assert.deepEqual(r.toc.map((t) => t.id), ['again', 'same', 'same-2']);
  const n = await renderMarkdown('## 1. Understand Shapes\n\n## 2024\n', { siteHost: 'x.org' });
  assert.deepEqual(n.toc.map((t) => t.id), ['understand-shapes', 'section-2024']);
  assert.match(r.html, /href="\/page\.html"/);
  assert.match(r.html, /href="https:\/\/x\.org" target="_blank" rel="noopener noreferrer"/);
  assert.doesNotMatch(r.html, /indiangalleries\.net\/y" target/);
});
