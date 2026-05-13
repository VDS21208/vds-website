#!/usr/bin/env python3
"""Extract VDS-Website-Copy-Master.xlsx into JSON files Astro can import."""

import json, os, sys, re
from pathlib import Path
try:
    import openpyxl
except ImportError:
    print("Installing openpyxl...", file=sys.stderr)
    os.system("pip install openpyxl --break-system-packages -q")
    import openpyxl

# Resolve paths
script_dir = Path(__file__).parent
project_root = script_dir.parent
data_dir = project_root / "src" / "data"
data_dir.mkdir(parents=True, exist_ok=True)

# Find the XLSX file — try multiple known locations
xlsx_candidates = [
    project_root / "VDS-Website-Copy-Master.xlsx",
    project_root.parent / "VDS-Website-Copy-Master.xlsx",
]
xlsx_path = None
for c in xlsx_candidates:
    if c.exists():
        xlsx_path = c
        break
if not xlsx_path:
    print(f"ERROR: VDS-Website-Copy-Master.xlsx not found. Tried: {xlsx_candidates}", file=sys.stderr)
    sys.exit(1)

print(f"Reading {xlsx_path}")
wb = openpyxl.load_workbook(xlsx_path, data_only=True)

# --- Extract Site Copy tab ---
ws = wb["VDS Site Copy"]
columns = [ws.cell(row=1, column=c).value for c in range(1, ws.max_column + 1)]
pages = []
for r in range(2, ws.max_row + 1):
    row = {}
    for c in range(1, ws.max_column + 1):
        col_name = columns[c - 1]
        if not col_name: continue
        val = ws.cell(row=r, column=c).value
        row[col_name] = val if val is not None else ""
    if row.get("URL"):
        pages.append(row)
print(f"  Site Copy: {len(pages)} pages")

# --- Extract Mega-Menu Nav tab ---
ws = wb["Mega-Menu Nav"]
nav_items = []
for r in range(1, ws.max_row + 1):
    top = ws.cell(row=r, column=1).value
    col = ws.cell(row=r, column=2).value
    order = ws.cell(row=r, column=3).value
    label = ws.cell(row=r, column=4).value
    url = ws.cell(row=r, column=5).value
    typ = ws.cell(row=r, column=6).value
    notes = ws.cell(row=r, column=7).value
    if not top or not isinstance(label, str) or not isinstance(url, str):
        continue
    # Skip section header rows (orange-filled merged cells)
    if str(top).startswith(" ") or "—" in str(top):
        continue
    if top in ("Top-Level Nav", "Section", "Utility (right of nav)", "Announcement bar (top of every page)"):
        continue
    nav_items.append({
        "topLevel": top, "column": col, "order": order,
        "label": label, "url": url, "type": typ, "notes": notes or ""
    })
print(f"  Mega-Menu Nav: {len(nav_items)} items")

# --- Extract Redirects ---
ws = wb["Redirects (Current → New)"]
redirects = []
for r in range(2, ws.max_row + 1):
    current = ws.cell(row=r, column=2).value
    new = ws.cell(row=r, column=3).value
    typ = ws.cell(row=r, column=4).value
    if current and new and "/" in str(current):
        redirects.append({"from": str(current).strip(), "to": str(new).strip(), "type": str(typ or "301")})
print(f"  Redirects: {len(redirects)} rules")

# --- Build helpers ---
def parse_faq(faq_text):
    if not faq_text or not isinstance(faq_text, str):
        return []
    pairs = []
    chunks = faq_text.split("---")
    for chunk in chunks:
        chunk = chunk.strip()
        q_match = re.search(r"^Q:\s*(.+?)(?=\n*A:|\Z)", chunk, re.DOTALL | re.MULTILINE)
        a_match = re.search(r"A:\s*(.+?)$", chunk, re.DOTALL | re.MULTILINE)
        if q_match and a_match:
            pairs.append({"q": q_match.group(1).strip(), "a": a_match.group(1).strip()})
    return pairs

def parse_cta_buttons(text):
    """Parse 'Label1|url1|Label2|url2' into [{label, url}, ...]"""
    if not text or not isinstance(text, str): return []
    parts = text.split("|")
    buttons = []
    for i in range(0, len(parts) - 1, 2):
        label = parts[i].strip()
        url = parts[i+1].strip()
        if label and url:
            buttons.append({"label": label, "url": url})
    return buttons

def parse_hero_cta(text):
    if not text or not isinstance(text, str): return None
    if "|" in text:
        parts = text.split("|", 1)
        return {"label": parts[0].strip(), "url": parts[1].strip()}
    return {"label": text.strip(), "url": "/request-a-quote"}

def parse_stats(text):
    """Parse pipe-separated stats."""
    if not text or not isinstance(text, str): return []
    return [s.strip() for s in text.split("|") if s.strip() and s.strip() != "—"]

# Process each page into a clean structured record
def slugify_part(s):
    return re.sub(r"[^a-z0-9-]", "", s.lower().replace(" ", "-"))

processed_pages = []
for p in pages:
    url = p.get("URL", "").strip()
    if not url: continue
    processed_pages.append({
        "url": url,
        "slug": url.strip("/").split("/")[-1] if url != "/" else "home",
        "parent": p.get("Parent", "").strip(),
        "pageType": p.get("Page Type", "").strip(),
        "status": p.get("Status", "").strip(),
        "seoTitle": p.get("SEO Title (≤60)", "").strip(),
        "metaDescription": p.get("Meta Description (≤155)", "").strip(),
        "announcementBar": p.get("Announcement Bar", "").strip() if p.get("Announcement Bar", "").strip() != "—" else "",
        "h1": p.get("H1", "").strip(),
        "heroEyebrow": p.get("Hero Eyebrow", "").strip(),
        "heroSubhead": p.get("Hero Subhead", "").strip(),
        "heroCTAPrimary": parse_hero_cta(p.get("Hero CTA — Primary", "")),
        "heroCTASecondary": parse_hero_cta(p.get("Hero CTA — Secondary", "")),
        "heroStats": parse_stats(p.get("Hero Stats / Badges", "")),
        "body": p.get("Body (Markdown)", "") if isinstance(p.get("Body (Markdown)"), str) else "",
        "faq": parse_faq(p.get("FAQ (Q&A)", "")),
        "finalCTAHeading": p.get("Final CTA — Heading", "").strip(),
        "finalCTABody": p.get("Final CTA — Body", "").strip(),
        "finalCTAButtons": parse_cta_buttons(p.get("Final CTA — Buttons", "")),
        "schemaType": p.get("Schema Type", "Article").strip(),
        "internalLinks": p.get("Internal Links", "").strip(),
        "notes": p.get("Notes", "").strip() if isinstance(p.get("Notes"), str) else "",
        "canonical": p.get("Canonical URL", "").strip() if isinstance(p.get("Canonical URL"), str) else "",
        "ogTitle": p.get("OG Title", "").strip() if isinstance(p.get("OG Title"), str) else "",
        "ogDescription": p.get("OG Description", "").strip() if isinstance(p.get("OG Description"), str) else "",
        "ogImage": p.get("OG Image", "").strip() if isinstance(p.get("OG Image"), str) else "",
        "ogType": p.get("OG Type", "website").strip() if isinstance(p.get("OG Type"), str) else "website",
        "robots": p.get("Robots Meta", "index, follow").strip() if isinstance(p.get("Robots Meta"), str) else "index, follow",
        "speakable": p.get("Speakable (AEO selectors)", "").strip() if isinstance(p.get("Speakable (AEO selectors)"), str) else "",
        "tags": p.get("Tags / Keywords", "").strip() if isinstance(p.get("Tags / Keywords"), str) else "",
        "author": p.get("Author", "Vision Detection Systems").strip() if isinstance(p.get("Author"), str) else "Vision Detection Systems",
    })

# Group nav items by top level + column
from collections import defaultdict
nav_by_top = defaultdict(lambda: defaultdict(list))
for item in nav_items:
    nav_by_top[item["topLevel"]][item["column"]].append({
        "label": item["label"], "url": item["url"], "type": item["type"], "notes": item["notes"]
    })

# Convert to ordered structure
mega_menu = []
TOP_ORDER = ["Products", "Platform", "Industries", "Why VDS", "Resources", "Partners"]
for top in TOP_ORDER:
    if top in nav_by_top:
        cols = nav_by_top[top]
        mega_menu.append({
            "label": top,
            "url": "/" + slugify_part(top) if top != "Why VDS" else "/compare",
            "primary": cols.get("Primary", cols.get("Tools", cols.get("Dealer Program", []))),
            "supporting": cols.get("Supporting", cols.get("Library", cols.get("Channel & Integrations", []))),
            "featured": cols.get("Featured", []),
            "cta": cols.get("CTA", []),
        })

# Write JSON files
with open(data_dir / "pages.json", "w") as f:
    json.dump(processed_pages, f, indent=2)
with open(data_dir / "nav.json", "w") as f:
    json.dump(mega_menu, f, indent=2)
with open(data_dir / "redirects.json", "w") as f:
    json.dump(redirects, f, indent=2)

# Build URL → page index for fast lookup in Astro
url_index = {p["url"]: p for p in processed_pages}
with open(data_dir / "page-index.json", "w") as f:
    json.dump(url_index, f, indent=2)

# Build collections by page type for dynamic routes
collections = defaultdict(list)
for p in processed_pages:
    pt = (p["pageType"] or "").lower()
    url = p["url"]
    # Map URLs to collection types
    if url.startswith("/products/") and url != "/products":
        collections["products"].append(p)
    elif url.startswith("/industries/") and url != "/industries":
        collections["industries"].append(p)
    elif url.startswith("/compare/") and url != "/compare":
        collections["compare"].append(p)
    elif url.startswith("/platform/") and url != "/platform":
        collections["platform"].append(p)
    elif url.startswith("/services/") and url != "/services":
        collections["services"].append(p)
    elif url.startswith("/locations/mobile-surveillance-trailers/"):
        collections["city-locations"].append(p)
    elif url.startswith("/locations/") and url != "/locations":
        collections["state-locations"].append(p)
    elif url.startswith("/solutions/") and url != "/solutions":
        collections["solutions"].append(p)
    elif url.startswith("/guides/") and url != "/guides":
        collections["guides"].append(p)
    elif url.startswith("/use-cases/") and url != "/use-cases":
        collections["use-cases"].append(p)
    elif url.startswith("/resources/blog/"):
        collections["blog"].append(p)
    elif url.startswith("/resources/case-studies/"):
        collections["case-studies"].append(p)
    elif url.startswith("/integrations/") and url != "/integrations":
        collections["integrations"].append(p)
    elif url.startswith("/about-us/") and url != "/about-us":
        collections["about"].append(p)
    elif url.startswith("/partners/") and url != "/partners":
        collections["partners"].append(p)
    elif url.startswith("/pricing/") and url != "/pricing":
        collections["pricing"].append(p)

for col_name, items in collections.items():
    print(f"  Collection '{col_name}': {len(items)} pages")
    with open(data_dir / f"collection-{col_name}.json", "w") as f:
        json.dump(items, f, indent=2)

# Save a manifest of all collections
manifest = {name: len(items) for name, items in collections.items()}
manifest["total"] = len(processed_pages)
with open(data_dir / "manifest.json", "w") as f:
    json.dump(manifest, f, indent=2)

print(f"\nWrote data to {data_dir}")
print(f"Total pages indexed: {len(processed_pages)}")
