#!/usr/bin/env python3
"""Convert collection JSON files → src/content/pages/[collection]/[slug].md"""

import json, os, re, yaml
from pathlib import Path

root = Path(__file__).parent.parent
data_dir = root / "src" / "data"
content_dir = root / "src" / "content" / "pages"

# Clean existing content
if content_dir.exists():
    import shutil
    shutil.rmtree(content_dir)
content_dir.mkdir(parents=True, exist_ok=True)

# Map collection names to subfolder names
COLLECTIONS = [
    ("products", "products"),
    ("industries", "industries"),
    ("compare", "compare"),
    ("platform", "platform"),
    ("services", "services"),
    ("solutions", "solutions"),
    ("guides", "guides"),
    ("use-cases", "use-cases"),
    ("about", "about-us"),
    ("integrations", "integrations"),
    ("partners", "partners"),
    ("pricing", "pricing"),
    ("blog", "blog"),
    ("case-studies", "case-studies"),
    ("state-locations", "locations-state"),
    ("city-locations", "locations-city"),
]

total = 0
for col_name, folder_name in COLLECTIONS:
    src = data_dir / f"collection-{col_name}.json"
    if not src.exists():
        print(f"  skip {col_name}: not found")
        continue
    with open(src) as f:
        pages = json.load(f)
    sub_dir = content_dir / folder_name
    sub_dir.mkdir(parents=True, exist_ok=True)
    for p in pages:
        url = p.get("url", "")
        if not url: continue
        slug = url.strip("/").split("/")[-1] or "index"
        # Build frontmatter
        fm = {
            "url": url,
            "collection": folder_name,
            "pageType": p.get("pageType", ""),
            "parent": p.get("parent", ""),
            "status": p.get("status", "Launch"),
            "seoTitle": p.get("seoTitle", ""),
            "metaDescription": p.get("metaDescription", ""),
            "announcementBar": p.get("announcementBar", ""),
            "h1": p.get("h1", ""),
            "heroEyebrow": p.get("heroEyebrow", ""),
            "heroSubhead": p.get("heroSubhead", ""),
            "heroCTAPrimary": p.get("heroCTAPrimary") or None,
            "heroCTASecondary": p.get("heroCTASecondary") or None,
            "heroStats": p.get("heroStats", []) or [],
            "heroImage": "",
            "faq": p.get("faq", []) or [],
            "finalCTAHeading": p.get("finalCTAHeading", ""),
            "finalCTABody": p.get("finalCTABody", ""),
            "finalCTAButtons": p.get("finalCTAButtons", []) or [],
            "schemaType": p.get("schemaType", "Article"),
            "internalLinks": p.get("internalLinks", ""),
            "canonical": p.get("canonical", ""),
            "ogTitle": p.get("ogTitle", ""),
            "ogDescription": p.get("ogDescription", ""),
            "ogImage": p.get("ogImage", ""),
            "ogType": p.get("ogType", "website"),
            "robots": p.get("robots", "index, follow"),
            "speakable": p.get("speakable", ""),
            "author": p.get("author", "Vision Detection Systems"),
            "tags": p.get("tags", ""),
            "notes": p.get("notes", ""),
        }
        # Render YAML frontmatter manually to control quoting
        yaml_str = yaml.dump(fm, default_flow_style=False, allow_unicode=True, sort_keys=False, width=1000)
        body = p.get("body", "") or ""
        out = f"---\n{yaml_str}---\n\n{body}\n"
        target = sub_dir / f"{slug}.md"
        with open(target, "w", encoding="utf-8") as f:
            f.write(out)
        total += 1
    print(f"  {col_name} → {folder_name}: {len(pages)} files")

# Also write the homepage as a standalone file in content/singletons/
pi = json.loads((data_dir / "page-index.json").read_text())
SINGLETON_URLS = ["/", "/answers", "/glossary", "/service-areas", "/contact-us", "/request-a-quote",
                  "/products", "/industries", "/compare", "/platform", "/services", "/solutions",
                  "/guides", "/use-cases", "/about-us", "/integrations", "/pricing", "/partners",
                  "/locations", "/resources", "/locations/mobile-surveillance-trailers",
                  "/resources/blog", "/resources/case-studies"]
singleton_dir = content_dir / "singletons"
singleton_dir.mkdir(parents=True, exist_ok=True)
single_count = 0
for url in SINGLETON_URLS:
    p = pi.get(url)
    if not p: continue
    slug = url.strip("/").replace("/", "-") or "home"
    fm = {
        "url": url, "collection": "singletons", "pageType": p.get("pageType", ""),
        "parent": p.get("parent", ""), "status": p.get("status", "Launch"),
        "seoTitle": p.get("seoTitle", ""), "metaDescription": p.get("metaDescription", ""),
        "announcementBar": p.get("announcementBar", ""), "h1": p.get("h1", ""),
        "heroEyebrow": p.get("heroEyebrow", ""), "heroSubhead": p.get("heroSubhead", ""),
        "heroCTAPrimary": p.get("heroCTAPrimary") or None,
        "heroCTASecondary": p.get("heroCTASecondary") or None,
        "heroStats": p.get("heroStats", []) or [],
        "heroImage": "",
        "faq": p.get("faq", []) or [],
        "finalCTAHeading": p.get("finalCTAHeading", ""), "finalCTABody": p.get("finalCTABody", ""),
        "finalCTAButtons": p.get("finalCTAButtons", []) or [],
        "schemaType": p.get("schemaType", "Article"), "canonical": p.get("canonical", ""),
        "ogTitle": p.get("ogTitle", ""), "ogDescription": p.get("ogDescription", ""),
        "ogImage": p.get("ogImage", ""), "ogType": p.get("ogType", "website"),
        "robots": p.get("robots", "index, follow"), "tags": p.get("tags", ""),
    }
    yaml_str = yaml.dump(fm, default_flow_style=False, allow_unicode=True, sort_keys=False, width=1000)
    body = p.get("body", "") or ""
    target = singleton_dir / f"{slug}.md"
    with open(target, "w", encoding="utf-8") as f:
        f.write(f"---\n{yaml_str}---\n\n{body}\n")
    single_count += 1
print(f"  singletons: {single_count} files")
print(f"\nTotal MD files: {total + single_count}")
