# TinaCMS Cloud Setup Guide

## What this is
TinaCMS replaces Decap as your CMS. It's still git-backed (edits commit to GitHub), but with a much better visual editor, media library, and real-time preview. Marketing team logs in via tina.io.

## What's already done (in this commit)
- `tina/config.ts` — schemas for all 17 content collections
- `package.json` — Tina dependencies + build script wired
- `.gitignore` — Tina generated files excluded

## What you need to do (5 minutes)

### Step 1 — Sign up at tinacms.io
1. Go to https://app.tina.io
2. Sign in with GitHub
3. Create a new project: "VDS Website"
4. Pick the GitHub repo: `VDS21208/vds-website`
5. Pick branch: `main`
6. You'll get:
   - **Client ID** (public)
   - **Read-Only Token** (secret)

### Step 2 — Add env vars to Vercel
Project → Settings → Environment Variables → add for "Production":
- `NEXT_PUBLIC_TINA_CLIENT_ID` = (your Client ID from Tina)
- `TINA_TOKEN` = (your Token from Tina)

### Step 3 — Push
```powershell
cd "C:\Users\joe\OneDrive\Documents\Claude\Projects\VDS Website 2.0\vds-website-astro"
git add -A
git commit -m "Add TinaCMS Cloud — visual CMS for marketing team"
git push
```

Vercel will redeploy. After it finishes:
- `https://vds-website-omega.vercel.app/admin/index.html` → still works (Decap, keep as backup)
- `https://vds-website-omega.vercel.app/studio/index.html` → new TinaCMS admin
- Or log in directly at `https://app.tina.io` and use the cloud studio

### Step 4 — Try it
Open the Tina studio, pick "📝 Blog Posts", click any post, see the visual editor. Make a small edit and click "Save" — it commits to GitHub and Vercel redeploys.

## Once TinaCMS is working, deprecate Decap
After 2–3 weeks of using Tina without issues:
1. Delete `public/admin/` (Decap admin UI)
2. Delete `api/auth.js` and `api/callback.js` (Decap OAuth)
3. Remove `OAUTH_GITHUB_*` env vars on Vercel
4. Remove `decap-cms-app` references (if any in package.json)

## Marketing team training
Once it's live I'll write a Loom + PDF: "How to edit a page", "How to add a blog post", "How to swap a hero image".
