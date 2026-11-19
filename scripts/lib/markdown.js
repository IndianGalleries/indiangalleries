'use strict';
/**
 * Markdown -> semantic HTML for blog articles.
 * - drops a leading H1 (the page template renders the article title as the H1)
 * - demotes any other H1 to H2 so every page has exactly one H1
 * - adds unique ids to H2/H3 and returns a table of contents
 * - rewrites relative links to root-absolute, marks external links
 * - lazy-loads images and (optionally) swaps in optimised copies
 * - links the first mention of configured phrases to real product pages
 */
const MarkdownIt = require('markdown-it');

function slugify(text) {
  return (
    String(text)
      .toLowerCase()
      .normalize('NFKD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/&/g, ' and ')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '') || 'section'
  );
}

function inlineText(inline) {
  return (inline.children || [])
    .filter((t) => t.type === 'text' || t.type === 'code_inline')
    .map((t) => t.content)
    .join('')
    .trim();
}

function normaliseHref(href, siteHost) {
  if (!href) return { href, external: false };
  if (/^(mailto:|tel:|#)/i.test(href)) return { href, external: false };
  if (/^(https?:)?\/\//i.test(href)) {
    let host = '';
    try {
      host = new URL(href.startsWith('//') ? 'https:' + href : href).hostname;
    } catch (_) {}
    const internal = host === siteHost || host === siteHost.replace(/^www\./, '');
    return { href, external: !internal };
  }
  if (href.startsWith('/')) return { href, external: false };
  return { href: '/' + href.replace(/^\.?\//, ''), external: false };
}

function applyAutoLinks(inline, Token, rules, state) {
  const out = [];
  let depth = 0;
  for (const child of inline.children) {
    if (child.type === 'link_open') depth++;
    if (child.type === 'link_close') depth--;
    if (child.type !== 'text' || depth > 0 || state.count >= state.max) {
      out.push(child);
      continue;
    }
    let rest = child.content;
    for (;;) {
      if (state.count >= state.max) break;
      let best = null;
      for (const r of rules) {
        if (state.used.has(r.url)) continue;
        const m = r.re.exec(rest);
        if (m && (!best || m.index < best.m.index)) best = { r, m };
      }
      if (!best) break;
      const { r, m } = best;
      if (m.index > 0) {
        const pre = new Token('text', '', 0);
        pre.content = rest.slice(0, m.index);
        out.push(pre);
      }
      const open = new Token('link_open', 'a', 1);
      open.attrs = [['href', r.url]];
      const label = new Token('text', '', 0);
      label.content = m[0];
      const close = new Token('link_close', 'a', -1);
      out.push(open, label, close);
      state.used.add(r.url);
      state.count++;
      rest = rest.slice(m.index + m[0].length);
    }
    if (rest) {
      const tail = new Token('text', '', 0);
      tail.content = rest;
      out.push(tail);
    }
  }
  inline.children = out;
}

/**
 * @param {string} source markdown body
 * @param {{siteHost:string, autoLinks?:Array, maxAutoLinks?:number, imageResolver?:Function}} opts
 */
async function renderMarkdown(source, opts) {
  const md = new MarkdownIt({ html: true, linkify: true, typographer: false });
  md.renderer.rules.table_open = () => '<div class="igb-table-wrap"><table>\n';
  md.renderer.rules.table_close = () => '</table></div>\n';

  const Token = md.Token || require('markdown-it/lib/token.mjs').default;
  const tokens = md.parse(source || '', {});

  // 1. Headings: remove leading H1, demote other H1s, assign ids, build TOC.
  if (tokens[0] && tokens[0].type === 'heading_open' && tokens[0].tag === 'h1') {
    tokens.splice(0, 3);
  }
  const toc = [];
  const seen = new Map();
  for (let i = 0; i < tokens.length; i++) {
    const t = tokens[i];
    if (t.type !== 'heading_open') continue;
    if (t.tag === 'h1') {
      t.tag = 'h2';
      tokens[i + 2].tag = 'h2';
    }
    if (t.tag === 'h2' || t.tag === 'h3') {
      const text = inlineText(tokens[i + 1]);
      // "1. Choose a size" -> "choose-a-size": cleaner anchors, and ids may not start with a digit.
      let id = slugify(text.replace(/^\d+[.):\-\s]+/, ''));
      if (/^\d/.test(id)) id = `section-${id}`;
      const n = seen.get(id) || 0;
      seen.set(id, n + 1);
      if (n) id = `${id}-${n + 1}`;
      t.attrSet('id', id);
      toc.push({ level: Number(t.tag[1]), id, text });
    }
  }

  // 2. Links, images, auto-links.
  const autoRules = (opts.autoLinks || []).map((a) => ({
    url: a.url,
    re: new RegExp(`\\b(?:${a.pattern})\\b`, 'i')
  }));
  const autoState = { count: 0, max: opts.maxAutoLinks || 0, used: new Set() };
  const imageTokens = [];

  // Don't auto-link a page the author has already linked by hand.
  for (const t of tokens) {
    for (const c of t.children || []) {
      if (c.type === 'link_open') {
        const h = normaliseHref(c.attrGet('href'), opts.siteHost).href;
        if (h) autoState.used.add(h.replace(/^https?:\/\/[^/]+/i, ''));
      }
    }
  }

  for (let i = 0; i < tokens.length; i++) {
    const t = tokens[i];
    if (t.type !== 'inline' || !t.children) continue;
    const prev = tokens[i - 1];
    if (autoRules.length && prev && prev.type === 'paragraph_open') {
      applyAutoLinks(t, Token, autoRules, autoState);
    }
    for (const c of t.children) {
      if (c.type === 'link_open') {
        const { href, external } = normaliseHref(c.attrGet('href'), opts.siteHost);
        c.attrSet('href', href);
        if (external) {
          c.attrSet('target', '_blank');
          c.attrSet('rel', 'noopener noreferrer');
        }
      } else if (c.type === 'image') {
        c.attrSet('loading', 'lazy');
        c.attrSet('decoding', 'async');
        imageTokens.push(c);
      }
    }
  }

  if (opts.imageResolver) {
    for (const img of imageTokens) {
      const res = await opts.imageResolver(img.attrGet('src'));
      if (res) {
        img.attrSet('src', res.src);
        if (res.width) img.attrSet('width', String(res.width));
        if (res.height) img.attrSet('height', String(res.height));
      }
    }
  }

  const html = md.renderer.render(tokens, md.options, {});
  const text = html.replace(/<[^>]+>/g, ' ').replace(/&[a-z#0-9]+;/gi, ' ').replace(/\s+/g, ' ').trim();
  const words = text ? text.split(' ').length : 0;
  return { html, toc, text, words, readingMinutes: Math.max(1, Math.round(words / 210)) };
}

module.exports = { renderMarkdown, slugify, normaliseHref };
