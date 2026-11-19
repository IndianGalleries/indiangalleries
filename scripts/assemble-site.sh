#!/usr/bin/env bash
# Copies the complete website (existing pages + generated blog output) into a
# clean folder for GitHub Pages, leaving out only development files and the raw
# Markdown sources (so drafts in blogs/*.md are never served publicly).
# Fails loudly if anything essential is missing. Usage: scripts/assemble-site.sh [dest]
set -euo pipefail
cd "$(dirname "$0")/.."
DEST="${1:-_site}"

rm -rf "$DEST"; mkdir -p "$DEST"
tar --anchored \
  --exclude=./.git --exclude=./.github --exclude=./.vscode --exclude=./node_modules \
  --exclude=./scripts --exclude=./_site --exclude=./package.json --exclude=./package-lock.json \
  --exclude=./.gitignore --exclude='./blogs/*.md' \
  -cf - . | tar -C "$DEST" -xf -

fail() { echo "ASSEMBLE FAILED: $1" >&2; exit 1; }

# 1. Everything essential survived.
for f in CNAME index.html header.html footer.html style.css commonheaderfooter.js robots.txt sitemap.xml blogs/index.html; do
  [ -f "$DEST/$f" ] || fail "missing $f"
done
[ "$(cat "$DEST/CNAME")" = "www.indiangalleries.net" ] || fail "CNAME content changed"

# 2. Every existing top-level page and the image folders are present.
for f in *.html; do [ -f "$DEST/$f" ] || fail "existing page lost: $f"; done
for d in Images media css js; do [ -d "$DEST/$d" ] || fail "missing folder $d"; done

# 3. No Markdown sources / drafts are published.
if ls "$DEST"/blogs/*.md >/dev/null 2>&1; then fail "Markdown sources found in output"; fi

# 4. Validate blog pages only when blog URLs exist in the sitemap.
if grep -q '<loc>https://www.indiangalleries.net/blogs/' "$DEST/sitemap.xml"; then
  grep -o '<loc>https://www.indiangalleries.net/blogs/[^<]\+/</loc>' "$DEST/sitemap.xml" |
    sed -e 's#<loc>https://www.indiangalleries.net/##' -e 's#</loc>##' |
    while read -r p; do
      [ -f "$DEST/${p}index.html" ] || fail "sitemap lists $p but no page was generated"
    done
fi

echo "Site assembled in $DEST: $(find "$DEST" -type f | wc -l) files"