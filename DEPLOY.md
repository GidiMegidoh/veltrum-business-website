# Deploying the Veltrum website

This is a fully static site — no build step, no dependencies. Any static host works: upload the repository contents as-is and serve `index.html` from the root.

## Local preview

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Option 1: GitHub Pages

1. Push this repository to GitHub (default branch, e.g. `main`).
2. In the repository: **Settings → Pages → Build and deployment** → Source: *Deploy from a branch* → Branch: `main`, folder `/ (root)`.
3. Custom domain: enter `veltrumhq.com` under **Settings → Pages → Custom domain**. GitHub creates a `CNAME` file in the repo.
4. At your DNS provider, point the domain at GitHub Pages:
   - Apex (`veltrumhq.com`): `A` records to `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153` (and matching `AAAA` records if supported).
   - `www.veltrumhq.com`: `CNAME` record to `<github-username>.github.io`.
5. Wait for DNS to propagate, then enable **Enforce HTTPS** in the Pages settings.

## Option 2: Netlify

- **Drag-and-drop:** at app.netlify.com, drag the project folder onto "Deploy manually". Done.
- **Repo-connect:** "Add new site → Import an existing project", pick the repository. Build command: none. Publish directory: `/` (root).
- Custom domain: **Site settings → Domain management → Add custom domain** → `veltrumhq.com`, then follow Netlify's DNS instructions (either move nameservers to Netlify DNS or add the `A`/`CNAME` records they show).

## Option 3: Vercel

- "Add New → Project", import the repository. Framework preset: **Other**. No build command; output directory: root.
- Custom domain: **Project → Settings → Domains** → add `veltrumhq.com` and follow the DNS instructions shown (an `A` record to Vercel's IP for the apex and a `CNAME` for `www`).

## After the domain is live

- The canonical URLs (`<link rel="canonical">` in each page's head), `sitemap.xml` and `robots.txt` already point to `https://veltrumhq.com`. If you ever serve the site from a different domain, update the canonical URL in each page's `<link rel="canonical">`, the `og:url` tags, `sitemap.xml`, and `robots.txt`.
- Verify from the live domain: open every page on a phone and a desktop browser, and test the WhatsApp, phone and email links.
- Optional future improvement: add a raster `og:image` (1200×630 PNG) for richer link previews when the site is shared; SVG logos are not picked up by social scrapers.
