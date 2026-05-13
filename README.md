# VDS Website — Astro static build

234-page mobile surveillance website for Vision Detection Systems. Static-generated from a master content spreadsheet, deploys free to Netlify/Vercel/Cloudflare Pages.

## What's here

- **234 pages** built from `../VDS-Website-Copy-Master.xlsx`
- **Tailwind design system** matching VDS brand (navy `#0B1120`, orange `#E8621A`, Barlow typography)
- **22 page templates** wired to CMS-style JSON data
- **Schema.org JSON-LD** auto-rendered per page type (Organization, Product, Article, BlogPosting, LocalBusiness, FAQPage, BreadcrumbList)
- **Mega-menu nav** with 6 dropdowns + mobile drawer
- **Forms** wired to Salesforce Web-to-Lead (placeholder OID — replace pre-launch)
- **SEO/AEO complete**: canonical, OG, Twitter Card, robots, speakable selectors, llms.txt, robots.txt, sitemap.xml

## Quick start

```bash
# Make sure VDS-Website-Copy-Master.xlsx is in the parent folder
npm install
npm run dev          # local dev at http://localhost:4321
npm run build        # static build to dist/
npm run preview      # preview the built site
```

The `npm run extract` step (auto-run on dev/build) reads the XLSX and writes structured JSON to `src/data/`. Edit the XLSX → re-run dev → see changes.

## Project structure

```
vds-website-astro/
├── astro.config.mjs       Tailwind + build config
├── tailwind.config.mjs    Design tokens (colors, type, spacing)
├── src/
│   ├── layouts/
│   │   └── Layout.astro   Master layout, head tags, schema injection
│   ├── components/
│   │   ├── nav/           Nav, MegaMenu, MobileDrawer, AnnouncementBar
│   │   ├── hero/          Hero variants
│   │   ├── sections/      TrustStrip, FAQAccordion, FinalCTAStrip, Footer, PageBody
│   │   ├── ui/            Card, Markdown renderer
│   │   ├── forms/         QuoteForm (2-step), GuideForm (email gate)
│   │   └── seo/           Schema components (Organization, Article, Product, etc.)
│   ├── data/              Auto-generated from XLSX — DO NOT edit directly
│   │   ├── pages.json
│   │   ├── page-index.json
│   │   ├── nav.json
│   │   ├── redirects.json
│   │   └── collection-*.json (18 collection files)
│   ├── pages/             Astro routes — one [slug].astro per page-type collection
│   └── styles/
│       └── global.css     Tailwind directives + base styles + prose
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   ├── llms.txt
│   └── assets/            (placeholder images — replace pre-launch)
└── scripts/
    ├── extract-data.py    Parses XLSX → JSON
    └── generate-sitemap.mjs   Post-build sitemap.xml writer
```

## Editing content

**Marketing edits the XLSX, devs run the build.** The flow:

1. Open `VDS-Website-Copy-Master.xlsx` in Excel
2. Edit the `VDS Site Copy` tab — H1, copy, FAQs, SEO meta, etc.
3. Save the XLSX
4. Run `npm run build` (or push to Git and trigger CI)
5. Deploy

**If you want a visual CMS** later (so marketing edits in a browser, not Excel):

- **Decap CMS** (free, sits on top of Git) — add `public/admin/index.html` with Decap config
- **Sanity** ($99-499/mo Business plan) — point `extract-data.py` at Sanity GROQ instead of XLSX
- **Webflow CMS** as data source — possible but adds complexity

## Pre-launch checklist

Required before publishing to `visiondetectionsystems.com`:

1. **Replace Salesforce placeholder OID** in `src/components/forms/QuoteForm.astro` and `GuideForm.astro` (search for `PLACEHOLDER_SALESFORCE_OID`)
2. **Replace placeholder assets** in `public/assets/` — favicon, OG image, logo SVG
3. **Update environment variables** — set the real Salesforce Web-to-Lead endpoint if different
4. **Run the QA checklist** in the master XLSX `Pre-launch QA` tab (62 items)
5. **Set up redirects** from old URLs (see `src/data/redirects.json` — 76 rules) in your hosting provider's redirect config
6. **Submit sitemap.xml** to Google Search Console + Bing Webmaster Tools
7. **Confirm DNS** — point `visiondetectionsystems.com` to the host

## Deployment

### Netlify (recommended — free tier handles this scale)

1. Push this folder to a GitHub/GitLab repo
2. Connect the repo in Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`
5. (Optional) Add a `netlify.toml` for the 76 redirects from `src/data/redirects.json`

### Vercel

1. Push to GitHub
2. Import in Vercel
3. Framework preset: Astro (auto-detected)
4. Deploy

### Cloudflare Pages

1. Connect Git repo
2. Build command: `npm run build`
3. Build output directory: `dist`

## What still needs human work (this codebase doesn't handle)

- Real product photography for the 8 SKU detail pages
- Drone overflight + SOC b-roll video for the homepage hero
- 3-5 named-customer case study photography + permission
- David Weingot + Steve Weingot leadership bios + headshots
- Salesforce Web-to-Lead OID + Marketing Cloud Engagement journey setup
- Drift live chat install (add `<script>` snippet in `src/layouts/Layout.astro` before `</body>`)
- Final pricing-accuracy review with sales team
- Legal sign-off on `/privacy-policy` and `/terms-of-service`
- A11y QA pass against WCAG 2.1 AA (see `Pre-launch QA` tab)

## Architecture decisions

**Why Astro?** Content-heavy marketing site = perfect Astro fit. Static-generated for speed (sub-1s LCP), zero-JS by default (only ships JS for nav + forms), excellent SEO/AEO out of the box.

**Why no headless CMS at launch?** The master XLSX *is* the CMS for now. It's a single source of truth that marketing already controls. Adding Sanity or Decap can come later as a Phase 2 lift.

**Why Salesforce Web-to-Lead (not Salesforce Marketing Cloud forms)?** Cleanest path with no JS dependency on the client. Forms POST natively to SF. Marketing Cloud Engagement picks up the lead via journey trigger for nurture.

**Why Tailwind?** Design-token discipline plus fast iteration. The design tokens in `tailwind.config.mjs` mirror the master XLSX `Design Tokens` tab — change a token in one place, propagate everywhere.

## Source of truth

Everything is driven by `VDS-Website-Copy-Master.xlsx`. The XLSX has 17 tabs covering page copy, design tokens, schema templates, AEO optimization, SEO standards, forms spec, CMS collections, component library, page template specs, redirects, and a 62-item pre-launch QA checklist. Read the `Stats` tab first when onboarding to this codebase.

---

Built May 2026 from the VDS Website 2.0 strategy and copy package.
