# Vision Detection Systems — Master Design System

> Global Source of Truth. All pages start here. Per-page overrides live in `pages/{slug}.md`.
> Generated with UI UX Pro Max skill + VDS-locked brand identity.

## Brand identity (LOCKED — do not change)

**Industry:** B2B physical security / mobile surveillance / enterprise infrastructure
**Audience:** Construction GCs, utility ops, retail loss prevention, fleet managers, federal/state/county procurement, large enterprise security buyers
**Positioning:** US-engineered, NDAA-compliant, founder-operated, accountable in writing
**Voice:** Confident, direct, technical when it earns it, never gimmicky

## Pattern: Trust & Authority

Why: VDS targets enterprise procurement teams that fact-check claims, want certifications and case studies, and weigh long-term operational risk.

**Conversion structure (every page should follow some subset):**
1. Hero with eyebrow + headline + 1-line value prop + 2 CTAs (primary orange, secondary outline)
2. Trust strip — NDAA Section 889 · AWS US-only · TLS 1.3 · AES-256 · Made in Pikesville MD · 30+ states · Camera-agnostic
3. Problem / outcome split (the threats this industry sees → what VDS delivers)
4. AI analytics or feature grid (cards with images, brand-orange accents)
5. Stats band (navy bg, orange numbers) — the measured outcomes
6. Customer logos or named deployments (when you have permission)
7. FAQ accordion (Schema.org FAQPage markup baked in)
8. Final CTA strip (orange band) — Request quote + Schedule demo

## Colors (LOCKED)

```css
--orange:       #E8621A;   /* Primary CTA, brand accent, headlines pop */
--orange-dark:  #C44F0F;   /* Hover state, deeper accent */
--orange-tint:  #FFF6E0;   /* Subtle highlight backgrounds */
--navy:         #0B1120;   /* Hero, footer, dark sections, primary text on light */
--navy-light:   #1A2235;   /* Cards on dark sections */
--white:        #FFFFFF;
--offwhite:     #F8FAFC;   /* Soft contrast on alternating sections */
--slate-700:    #334155;   /* Body text on light backgrounds */
--slate-500:    #64748B;   /* Captions, meta */
--slate-200:    #E2E8F0;   /* Borders */
--success:      #059669;   /* Green checkmarks in compare matrices */
--alert:        #DC2626;   /* Red X's in compare matrices, never used for marketing */
```

**Anti-patterns:**
- ❌ NO cyberpunk neon / glitch / scanline effects
- ❌ NO AI purple/pink gradients
- ❌ NO security-blue (Verkada/Flock association)
- ❌ NO dark mode toggle (the navy hero is enough darkness)
- ❌ NO gradient text on more than 1 word per heading

## Typography (LOCKED)

```css
--font-display: 'Barlow Condensed', sans-serif;  /* All H1/H2/H3, hero stats, eyebrows */
--font-body:    'Barlow', system-ui, sans-serif; /* All paragraphs, lists, body copy */
```

**Type scale:**
- Hero H1: `clamp(2.5rem, 6vw, 4.5rem)` · letter-spacing: `-0.035em`
- H2: `clamp(2rem, 4vw, 3rem)` · letter-spacing: `-0.025em`
- H3: `clamp(1.5rem, 2.8vw, 2rem)`
- Body: `1.125rem` (18px) · line-height: 1.7
- Lede paragraph (first p after H2): `1.1875rem` (19px) · color: navy/85
- Eyebrow: `0.75rem` · uppercase · letter-spacing: `0.15em` · orange

## Spacing & layout

- Container max-width: `1440px` (`.container-wide`) or `1280px` (`.container-main`)
- Section vertical padding: `py-20 md:py-24` standard, `py-24 md:py-32` for hero
- Card padding: `p-6` standard, `p-8` for feature cards
- Border radius: `rounded-md` (6px) buttons, `rounded-xl` (12px) cards, `rounded-2xl` (16px) hero mockups

## Key effects (LOCKED)

- **Reveal on scroll:** `.reveal` class → `is-visible` added by IntersectionObserver in `MotionScript.astro`. MUST re-init on `astro:after-swap` + 2-second safety net force-reveal.
- **Card lift:** `transform: translateY(-4px)` + orange-tinted shadow on hover
- **Stat counters:** `data-target` attribute auto-animated on viewport entry
- **Gradient orbs:** `.gradient-orb` on hero/cinematic sections only — never on body content
- **3D tilt:** `data-tilt` cards on Compare cards only
- **Animation duration:** 150–300ms for micro, 600–800ms for reveals, 1200ms+ for orbs

## Components in library

Reusable section components (in `src/components/sections/`):
- `PlatformShowcase.astro` — dashboard mockup + 4-step flow + AI module bento + stats + integrations marquee
- `IndustryShowcase.astro` — threat grid + analytics + outcomes band per industry
- `CompareShowcase.astro` — vendor logo band + side-by-side matrix + win cards
- `UseCaseShowcase.astro` — before/after panels + impact stats
- `FeatureTiles.astro` — frontmatter-driven 2x3 capability card grid
- `FieldGallery.astro` — 6-tile field deployment image grid
- `FAQAccordion.astro` — collapsible Q&A with Schema.org markup
- `FinalCTAStrip.astro` — orange band with heading + 2 buttons
- `TrustStrip.astro` — horizontal trust signal row

## Pre-delivery checklist (MUST pass before merge)

- [ ] No 3dEYE / Sourcewell / SOC 2 / Steve Weingot references
- [ ] No emojis as primary icons (use Lucide via `Icon.astro`)
- [ ] cursor-pointer on all clickable elements
- [ ] Hover states with 150–300ms transitions
- [ ] WCAG AA contrast minimum, AAA on body text where possible
- [ ] Focus states visible for keyboard nav
- [ ] `prefers-reduced-motion` respected
- [ ] Responsive at 375px, 768px, 1024px, 1440px
- [ ] All `.reveal` content visible — observer fires on scroll AND on `astro:after-swap`
- [ ] Layout.astro renders `<Footer />` + `<MotionScript />` + `<StickyMobileCTA />` before `</body>`
- [ ] Build runs `tinacms build && npm run extract && astro build && node scripts/generate-sitemap.mjs`
- [ ] No truncated files (every `.astro` ends with proper closing tag)
- [ ] No null bytes in any file (`grep -P '\x00'` returns nothing)

## Forbidden patterns

These keep regressing — never re-introduce:
- ❌ `tina/__generated__/` in `.gitignore` (required for TinaCloud schema reads)
- ❌ `Sourcewell`, `SOC 2`, `3dEYE`, `Steve Weingot` in any content
- ❌ Defensive CSS like `.bg-white h1 { color: navy }` (breaks dark hero H1 inheritance)
- ❌ Aggressive whitespace regex (`r"  +"`, etc.) — destroys YAML indentation
- ❌ Body class without `text-navy` (loses default text color)

## Brand voice — short examples

✅ "Solar-autonomous trailer. NDAA-compliant. US-engineered. Live in 72 hours."
✅ "$340K of copper saved on one substation. Documented."
✅ "Camera-agnostic. Bring your Axis, Hanwha, Bosch — keep the cameras you own."

❌ "Revolutionize your security posture with AI-powered next-gen synergy"
❌ "Unlock the power of intelligent surveillance"
❌ "Game-changing innovation in physical security"

## Source

Generated using [UI UX Pro Max skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill)
- Base pattern: Trust & Authority (WCAG AAA, Performance: Excellent)
- All brand tokens locked to VDS-existing identity
