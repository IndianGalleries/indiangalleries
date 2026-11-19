'use strict';
/**
 * Image optimisation for blog output. Originals in media/blog/ are never
 * modified; resized copies go to blogs/assets/img/ (generated, git-ignored).
 */
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const sharp = require('sharp');

function isRemote(ref) {
  return /^(https?:)?\/\//i.test(ref || '');
}

/** Resolve a CMS image reference (e.g. "/media/blog/x.png") to a file inside root. */
function resolveLocal(root, ref) {
  if (!ref || isRemote(ref)) return null;
  const clean = decodeURI(ref.split(/[?#]/)[0]).replace(/^\/+/, '');
  const abs = path.resolve(root, clean);
  if (abs !== root && !abs.startsWith(root + path.sep)) {
    throw new Error(`Image path escapes the project: ${ref}`);
  }
  if (!fs.existsSync(abs)) throw new Error(`Image not found: ${ref}`);
  return abs;
}

async function ensure(outFile, srcFile, make) {
  if (fs.existsSync(outFile) && fs.statSync(outFile).mtimeMs >= fs.statSync(srcFile).mtimeMs) {
    const m = await sharp(outFile).metadata();
    return { width: m.width, height: m.height };
  }
  const info = await make();
  return { width: info.width, height: info.height };
}

const cover = { fit: 'cover', position: sharp.strategy.attention };

/** Featured-image variants used by the listing, article hero and social cards. */
async function featuredVariants({ root, ref, slug, outDir, urlBase }) {
  const src = resolveLocal(root, ref);
  if (!src) return null; // remote image: caller uses the URL as-is
  fs.mkdirSync(outDir, { recursive: true });
  const spec = [
    ['card', 800, 600, 'webp'],
    ['wide', 1200, 800, 'webp'],
    ['hero', 960, 1200, 'webp'],
    ['hero-sm', 480, 600, 'webp'],
    ['og', 1200, 630, 'jpg']
  ];
  const out = {};
  for (const [name, w, h, ext] of spec) {
    const file = path.join(outDir, `${slug}-${name}.${ext}`);
    const dims = await ensure(file, src, () => {
      const img = sharp(src).rotate().resize(w, h, cover);
      return (ext === 'jpg' ? img.jpeg({ quality: 82, mozjpeg: true }) : img.webp({ quality: 78 })).toFile(file);
    });
    out[name] = { url: `${urlBase}/${slug}-${name}.${ext}`, ...dims };
  }
  return out;
}

/** Optimise an image referenced inside the article body. */
async function bodyImage({ root, ref, outDir, urlBase }) {
  if (!ref || isRemote(ref) || /\.(svg|gif)$/i.test(ref)) return null;
  const src = resolveLocal(root, ref);
  fs.mkdirSync(outDir, { recursive: true });
  const hash = crypto.createHash('md5').update(ref).digest('hex').slice(0, 8);
  const name = `body-${path.basename(src, path.extname(src)).toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${hash}.webp`;
  const file = path.join(outDir, name);
  const dims = await ensure(file, src, () =>
    sharp(src).rotate().resize({ width: 1200, withoutEnlargement: true }).webp({ quality: 80 }).toFile(file)
  );
  return { src: `${urlBase}/${name}`, ...dims };
}

module.exports = { featuredVariants, bodyImage, resolveLocal, isRemote };
