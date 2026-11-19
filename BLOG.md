# Indian Galleries blog

Articles are Markdown files in `blogs/` (created through Pages CMS). On every push to `main`
the GitHub Action turns every article with **Published = on** into static HTML and deploys the
whole site. Articles with Published off are never generated, listed or added to the sitemap.

## Publishing an article (no code needed)
1. Pages CMS → Blog Articles → create/edit → fill every required field → switch **Published** on → Save.
2. Wait ~1–2 minutes for the *Build and deploy site* action. The article appears at
   `https://www.indiangalleries.net/blogs/<slug>/` and on `/blogs/`.

Build errors (missing image, bad category, duplicate slug…) fail the Action and nothing is deployed
until fixed – check the Actions tab.

## Writing tips
- The article title is the page H1 – start the body at `##` (a leading `# Title` is removed automatically).
- Use `##` and `###` headings; they build the table of contents.
- Link to site pages with plain names (`tablelamps.html`); they are made root-absolute automatically.
- The first mention of "table lamps", "floor lamps", "pendant lights", "chandeliers", "wall lamps" and
  "outdoor lamps" is linked to the matching product page automatically.
- A "collection" box of related product pages is chosen from the article category and wording.
  Edit the rules in `blog.config.json`.

## Local preview
```
npm install
npm run build        # writes blogs/index.html, blogs/<slug>/index.html, blogs/assets/img, sitemap.xml (all git-ignored)
python3 -m http.server 8000   # open http://localhost:8000/blogs/
npm test
```

## Files
| Path | Purpose |
|---|---|
| `scripts/build-blog.js`, `scripts/lib/*` | generator (markdown, images, templates, sitemap) |
| `scripts/assemble-site.sh` | builds the `_site` folder that is deployed, with safety checks |
| `blog.config.json` | categories, product links, auto-link phrases |
| `css/blog/blog.css`, `js/blog/blog.js` | blog-only styles/behaviour (`.igb-*` classes) |
| `.github/workflows/pages.yml` | build + deploy workflow |
| `robots.txt` | allows crawling, points to the sitemap |
