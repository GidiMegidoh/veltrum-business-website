# Deploying the Veltrum Website

The site is fully static (HTML + CSS + vanilla JS, no build step). Deploy the
contents of this `veltrum-site/` directory as-is to any static host.

> **Note:** Update the canonical URL in each page's `<link rel="canonical">`
> (and the URLs in `sitemap.xml`) once the domain is live, if it differs from
> `https://veltrumhq.com`.

## Option 1 — GitHub Pages

1. Push this directory to a GitHub repository (either as the repo root, or
   enable Pages with this folder as the publish source).
2. In the repository: **Settings → Pages → Source**, choose the branch (and
   `/` root or the folder containing the site).
3. Add the custom domain `veltrumhq.com` under **Settings → Pages → Custom
   domain**. GitHub creates a `CNAME` file automatically.
4. At your DNS provider, point the domain to GitHub Pages:
   - `A` records for the apex (`veltrumhq.com`): `185.199.108.153`,
     `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `CNAME` record for `www` → `<your-github-username>.github.io`
5. Wait for DNS propagation, then enable **Enforce HTTPS**.

## Option 2 — Netlify

**Drag & drop:** open [app.netlify.com](https://app.netlify.com), choose
"Deploy manually", and drop the `veltrum-site/` folder. Done.

**Repo-connect:** "Add new site → Import an existing project", pick the
repository, set **Base directory** to `veltrum-site`, leave the build command
empty, and set **Publish directory** to `veltrum-site`. Then add the custom
domain `veltrumhq.com` under **Domain management** and follow Netlify's DNS
instructions (either Netlify DNS nameservers or a CNAME/ALIAS record).

## Option 3 — Vercel

1. "Add New → Project" and import the repository.
2. Framework preset: **Other**. Root directory: `veltrum-site`. No build
   command; output directory is the root.
3. Add `veltrumhq.com` under **Settings → Domains** and follow Vercel's DNS
   instructions (A record `76.76.21.21` for the apex, CNAME
   `cname.vercel-dns.com` for `www`).

## Local preview

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Post-deploy checklist

- [ ] Site loads over HTTPS from `https://veltrumhq.com`
- [ ] All six pages open and internal links work
- [ ] `wa.me` link opens WhatsApp with the business number (052-460-8284)
- [ ] Canonical URLs and `sitemap.xml` match the live domain
- [ ] Test on a real phone at least once (RTL layout, tap targets)
