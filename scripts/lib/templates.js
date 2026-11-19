'use strict';
/** HTML templates for the blog listing and article pages. */

const esc = (s) =>
  String(s ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

const jsonLdScript = (obj) =>
  `<script type="application/ld+json">${JSON.stringify(obj).replace(/</g, '\\u003c')}</script>`;

function formatDate(iso) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString('en-GB', {
    day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC'
  });
}
const timeTag = (iso) => `<time datetime="${iso}">${formatDate(iso)}</time>`;
const truncate = (s, n) => (s.length <= n ? s : s.slice(0, n - 1).replace(/\s+\S*$/, '') + '…');

const FONTS =
  'https://fonts.googleapis.com/css2?family=Allura&family=Inter:wght@400;500;600&family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,400&display=swap';

function document({ cfg, fragments, title, description, canonical, robots, og, jsonld, main }) {
  const img = og.image;
  return `<!DOCTYPE html>
<html lang="en-IN">
<head>
<!-- generated:igb-blog -->
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
<meta name="robots" content="${robots}">
<meta name="author" content="${esc(og.author || cfg.siteName)}">
<meta name="theme-color" content="#003681">
<link rel="canonical" href="${canonical}">
<link rel="icon" type="image/png" href="/Images/favicon-light.webp">
<meta property="og:type" content="${og.type}">
<meta property="og:site_name" content="${esc(cfg.siteName)}">
<meta property="og:locale" content="en_IN">
<meta property="og:title" content="${esc(og.title || title)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:url" content="${canonical}">
<meta property="og:image" content="${img}">
${og.imageAlt ? `<meta property="og:image:alt" content="${esc(og.imageAlt)}">\n` : ''}${og.type === 'article' ? `<meta property="article:published_time" content="${og.published}">
<meta property="article:modified_time" content="${og.modified}">
<meta property="article:section" content="${esc(og.section)}">
${(og.tags || []).map((t) => `<meta property="article:tag" content="${esc(t)}">`).join('\n')}
` : ''}<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(og.title || title)}">
<meta name="twitter:description" content="${esc(description)}">
<meta name="twitter:image" content="${img}">
${og.imageAlt ? `<meta name="twitter:image:alt" content="${esc(og.imageAlt)}">\n` : ''}<meta name="format-detection" content="telephone=no">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="${FONTS}" rel="stylesheet">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css">
<link rel="stylesheet" href="/style.css">
<link rel="stylesheet" href="/css/blog/blog.css">
${jsonld.map(jsonLdScript).join('\n')}
</head>
<body>
<a class="igb-skip" href="#main">Skip to content</a>
<div id="header">${fragments.header}</div>
${main}
<div id="footer">${fragments.footer}</div>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" defer></script>
<script src="/js/blog/blog.js" defer></script>
</body>
</html>
`;
}

/* ---------- shared pieces ---------- */

function categoryLink(cfg, category) {
  return `<a class="igb-category" href="${cfg.blogPath}?category=${encodeURIComponent(category)}">${esc(category)}</a>`;
}

function card(cfg, a, { dup = false } = {}) {
  const search = [a.title, a.excerpt, a.category, ...a.tags].join(' ').toLowerCase();
  return `<article class="igb-card${dup ? ' igb-card--dup' : ''}" data-category="${esc(a.category)}" data-search="${esc(search)}"${dup ? ' data-igb-dup' : ''}>
  <div class="igb-card__media"><img src="${a.images.card.url}" width="${a.images.card.width}" height="${a.images.card.height}" alt="${esc(a.imageAlt)}" loading="lazy" decoding="async"></div>
  <div class="igb-card__body">
    <p class="igb-meta"><span class="igb-meta__cat">${esc(a.category)}</span><span aria-hidden="true">·</span>${timeTag(a.date)}</p>
    <h3 class="igb-card__title"><a href="${a.url}">${esc(a.title)}</a></h3>
    <p class="igb-card__excerpt">${esc(truncate(a.excerpt, 150))}</p>
    <span class="igb-card__more" aria-hidden="true">Read article <i class="fa-solid fa-arrow-right-long"></i></span>
  </div>
</article>`;
}

/* ---------- listing ---------- */

function listingMain(cfg, articles) {
  const featured = articles[0];
  const counts = Object.fromEntries(cfg.categories.map((c) => [c, 0]));
  for (const a of articles) counts[a.category] = (counts[a.category] || 0) + 1;

  const hero = `<section class="igb-hero" aria-labelledby="igb-title">
  <div class="container">
    <p class="igb-kicker">The Journal</p>
    <h1 id="igb-title" class="igb-hero__title">${esc(cfg.listing.heading)}</h1>
    <p class="igb-hero__lead">${esc(cfg.listing.intro)}</p>
  </div>
</section>`;

  if (!articles.length) {
    return `<main class="igb igb-list" id="main" data-igb-page="list">
${hero}
<section class="igb-section">
  <div class="container">
    <div class="igb-empty igb-empty--static">
      <h2 class="igb-empty__title">Our first articles are on the way</h2>
      <p>We are preparing guides on lighting, lampshades and home styling. In the meantime, explore our <a href="/Lamps_and_Lightings.html">handcrafted lamps and lighting</a>.</p>
    </div>
  </div>
</section>
</main>`;
  }

  const chips = [
    `<button type="button" class="igb-chip is-active" data-category="all" aria-pressed="true">All</button>`,
    ...cfg.categories.map((c) =>
      counts[c]
        ? `<button type="button" class="igb-chip" data-category="${esc(c)}" aria-pressed="false">${esc(c)} <span class="igb-chip__n">${counts[c]}</span></button>`
        : `<button type="button" class="igb-chip" data-category="${esc(c)}" disabled title="No articles in this category yet">${esc(c)}</button>`
    )
  ].join('\n');

  return `<main class="igb igb-list" id="main" data-igb-page="list" data-page-size="${cfg.pageSize}">
${hero}
<section class="igb-featured" data-igb-featured aria-labelledby="igb-featured-title">
  <div class="container">
    <article class="igb-featured__inner">
      <a class="igb-featured__media" href="${featured.url}" tabindex="-1" aria-hidden="true"><img src="${featured.images.wide.url}" width="${featured.images.wide.width}" height="${featured.images.wide.height}" alt="" fetchpriority="high" decoding="async"></a>
      <div class="igb-featured__body">
        <p class="igb-meta"><span class="igb-meta__label">Featured</span><span aria-hidden="true">·</span><span class="igb-meta__cat">${esc(featured.category)}</span><span aria-hidden="true">·</span>${timeTag(featured.date)}</p>
        <h2 id="igb-featured-title" class="igb-featured__title"><a href="${featured.url}">${esc(featured.title)}</a></h2>
        <p class="igb-featured__excerpt">${esc(featured.excerpt)}</p>
        <a class="igb-btn" href="${featured.url}" aria-label="Read article: ${esc(featured.title)}">Read Article <i class="fa-solid fa-arrow-right-long"></i></a>
      </div>
    </article>
  </div>
</section>
<section class="igb-section igb-browse" aria-labelledby="igb-browse-title">
  <div class="container">
    <div class="igb-toolbar">
      <h2 id="igb-browse-title" class="igb-section-title" data-igb-browse-title>All articles</h2>
      <form class="igb-search" role="search" onsubmit="return false">
        <label class="visually-hidden" for="igb-q">Search articles</label>
        <i class="fa-solid fa-magnifying-glass igb-search__icon" aria-hidden="true"></i>
        <input id="igb-q" class="igb-search__input" type="search" placeholder="Search articles" autocomplete="off">
        <button type="button" class="igb-search__clear" aria-label="Clear search" hidden><i class="fa-solid fa-xmark"></i></button>
      </form>
    </div>
    <div class="igb-chips" role="group" aria-label="Filter by category">
${chips}
    </div>
    <p class="igb-status" role="status" aria-live="polite" data-igb-status></p>
    <div class="igb-grid" data-igb-grid>
${articles.map((a, i) => card(cfg, a, { dup: i === 0 })).join('\n')}
    </div>
    <div class="igb-empty" data-igb-empty hidden>
      <h3 class="igb-empty__title">No articles found</h3>
      <p>Try a different search term or choose another category.</p>
      <button type="button" class="igb-btn igb-btn--ghost" data-igb-reset>Clear search and filters</button>
    </div>
    <div class="igb-more" data-igb-more hidden><button type="button" class="igb-btn igb-btn--ghost">Show more articles</button></div>
  </div>
</section>
</main>`;
}

function listingJsonLd(cfg, articles) {
  const url = cfg.siteUrl + cfg.blogPath;
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: cfg.listing.heading,
      description: cfg.listing.description,
      url,
      isPartOf: { '@type': 'WebSite', name: cfg.siteName, url: cfg.siteUrl + '/' },
      hasPart: articles.map((a) => ({ '@type': 'BlogPosting', headline: a.title, url: a.canonical }))
    },
    breadcrumbLd(cfg, [{ name: 'Home', url: cfg.siteUrl + '/' }, { name: 'Blog', url }])
  ];
}

function breadcrumbLd(cfg, items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({ '@type': 'ListItem', position: i + 1, name: it.name, item: it.url }))
  };
}

/* ---------- article ---------- */

function articleJsonLd(cfg, a) {
  const isOrg = !a.author || a.author.toLowerCase() === cfg.siteName.toLowerCase();
  const publisher = {
    '@type': 'Organization',
    name: cfg.siteName,
    url: cfg.siteUrl + '/',
    logo: { '@type': 'ImageObject', url: cfg.siteUrl + cfg.logo }
  };
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      '@id': a.canonical + '#article',
      mainEntityOfPage: { '@type': 'WebPage', '@id': a.canonical },
      headline: truncate(a.title, 110),
      description: a.metaDescription,
      image: [a.ogImage],
      datePublished: a.date,
      dateModified: a.updated,
      author: isOrg ? { '@type': 'Organization', name: cfg.siteName, url: cfg.siteUrl + '/' } : { '@type': 'Person', name: a.author },
      publisher,
      articleSection: a.category,
      keywords: a.tags.join(', '),
      wordCount: a.words,
      inLanguage: 'en-IN'
    },
    breadcrumbLd(cfg, [
      { name: 'Home', url: cfg.siteUrl + '/' },
      { name: 'Blog', url: cfg.siteUrl + cfg.blogPath },
      { name: a.title, url: a.canonical }
    ])
  ];
}

function shareLinks(cfg, a) {
  const u = encodeURIComponent(a.canonical);
  const t = encodeURIComponent(a.title);
  const link = (href, icon, label) =>
    `<a href="${href}" target="_blank" rel="noopener noreferrer" aria-label="Share on ${label}"><i class="fa-brands ${icon}" aria-hidden="true"></i></a>`;
  return `<div class="igb-share" role="group" aria-label="Share this article">
  <span class="igb-share__label">Share</span>
  ${link(`https://www.facebook.com/sharer/sharer.php?u=${u}`, 'fa-facebook-f', 'Facebook')}
  ${link(`https://twitter.com/intent/tweet?url=${u}&text=${t}`, 'fa-twitter', 'X')}
  ${link(`https://www.linkedin.com/sharing/share-offsite/?url=${u}`, 'fa-linkedin-in', 'LinkedIn')}
  ${link(`https://wa.me/?text=${t}%20${u}`, 'fa-whatsapp', 'WhatsApp')}
  ${link(`https://pinterest.com/pin/create/button/?url=${u}&media=${encodeURIComponent(a.ogImage)}&description=${t}`, 'fa-pinterest-p', 'Pinterest')}
  <button type="button" class="igb-share__copy" data-igb-copy="${a.canonical}" aria-label="Copy link to this article"><i class="fa-solid fa-link" aria-hidden="true"></i><span>Copy link</span></button>
</div>`;
}

function tocHtml(toc) {
  if (toc.length < 3) return '';
  return `<nav class="igb-toc" aria-label="Table of contents">
  <details data-igb-toc>
    <summary class="igb-toc__title">In this article</summary>
    <ol class="igb-toc__list">
${toc.map((t) => `      <li class="igb-toc__item igb-toc__item--l${t.level}"><a href="#${t.id}">${esc(t.text)}</a></li>`).join('\n')}
    </ol>
  </details>
</nav>`;
}

function articleMain(cfg, a, related, products) {
  const hero = a.images.hero;
  const heroSm = a.images['hero-sm'];
  const heroImg = hero
    ? `<img src="${hero.url}" srcset="${heroSm.url} ${heroSm.width}w, ${hero.url} ${hero.width}w" sizes="(min-width: 992px) 40vw, 100vw" width="${hero.width}" height="${hero.height}" alt="${esc(a.imageAlt)}" fetchpriority="high" decoding="async">`
    : `<img src="${a.ogImage}" alt="${esc(a.imageAlt)}" fetchpriority="high" decoding="async">`;
  const updated = a.updated && a.updated !== a.date ? `<span class="igb-meta__sep" aria-hidden="true">·</span><span>Updated ${timeTag(a.updated)}</span>` : '';

  return `<main class="igb igb-article" id="main" data-igb-page="article">
<article>
  <header class="igb-ahero">
    <div class="container">
      <nav class="igb-breadcrumb" aria-label="Breadcrumb">
        <ol>
          <li><a href="/">Home</a></li>
          <li><a href="${cfg.blogPath}">Blog</a></li>
          <li aria-current="page">${esc(truncate(a.title, 60))}</li>
        </ol>
      </nav>
      <div class="igb-ahero__grid">
        <div class="igb-ahero__text">
          <p class="igb-kicker">${categoryLink(cfg, a.category)}</p>
          <h1 class="igb-ahero__title">${esc(a.title)}</h1>
          <p class="igb-ahero__standfirst">${esc(a.excerpt)}</p>
          <p class="igb-byline">
            <span>By <span>${esc(a.author || cfg.siteName)}</span></span><span class="igb-meta__sep" aria-hidden="true">·</span>
            <span>${timeTag(a.date)}</span>${updated}<span class="igb-meta__sep" aria-hidden="true">·</span>
            <span>${a.readingMinutes} min read</span>
          </p>
          ${shareLinks(cfg, a)}
        </div>
        <figure class="igb-ahero__media">${heroImg}</figure>
      </div>
    </div>
  </header>

  <div class="container igb-layout">
    ${tocHtml(a.toc)}
    <div class="igb-prose">
${a.html}
    </div>
  </div>
</article>
${
  products.length
    ? `<section class="igb-section igb-section--alt igb-products" aria-labelledby="igb-products-title">
  <div class="container">
    <h2 id="igb-products-title" class="igb-section-title">Explore the Indian Galleries collection</h2>
    <p class="igb-section-lead">Handcrafted pieces from our Moradabad workshops that pair well with the ideas in this article.</p>
    <div class="igb-product-grid">
${products
  .map(
    (p) => `      <a class="igb-product" href="${p.url}">
        <span class="igb-product__label">${esc(p.label)}</span>
        <span class="igb-product__desc">${esc(p.description)}</span>
        <span class="igb-product__cta">Explore ${esc(p.label)} <i class="fa-solid fa-arrow-right-long" aria-hidden="true"></i></span>
      </a>`
  )
  .join('\n')}
    </div>
  </div>
</section>`
    : ''
}
${
  related.length
    ? `<section class="igb-section igb-related" aria-labelledby="igb-related-title">
  <div class="container">
    <h2 id="igb-related-title" class="igb-section-title">Related articles</h2>
    <div class="igb-grid">
${related.map((r) => card(cfg, r)).join('\n')}
    </div>
  </div>
</section>`
    : ''
}
<div class="container igb-back"><a class="igb-btn igb-btn--ghost" href="${cfg.blogPath}"><i class="fa-solid fa-arrow-left-long" aria-hidden="true"></i> Back to Blogs</a></div>
</main>`;
}

module.exports = { document, listingMain, listingJsonLd, articleMain, articleJsonLd, esc, truncate };
