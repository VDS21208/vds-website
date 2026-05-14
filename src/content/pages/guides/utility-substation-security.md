---
url: /guides/utility-substation-security
collection: guides
pageType: Guide Landing
parent: /guides
status: Expansion
seoTitle: Utility Substation Security Guide | NERC CIP-014 Ready | VDS
metaDescription: Substation physical security under NERC CIP-014 R5. Threat actor profiles, camera placement, and the post-Moore County deployment playbook for cooperatives
announcementBar: ''
h1: Utility Substation Security Guide
heroEyebrow: NERC CIP-014 R5 physical security
heroSubhead: Since the December 2022 Moore County attack, FERC and NERC have sharpened scrutiny on physical security for transmission substations. This guide covers the threat actor profiles, NERC CIP-014 R5 plan requirements, and a deployment design that has cleared cooperative and IOU audit cycles.
heroCTAPrimary:
  label: Download the full guide (PDF)
  url: /contact-us/
heroCTASecondary:
  label: Talk to a utility engineer
  url: /contact-us
heroStats:
- NERC CIP-014 R5 aligned
- NDAA Section 889 compliant
- Solar-autonomous (no substation power tap)
heroImage: ''
faq:
- q: Are VDS systems NERC CIP-014 compliant?
  a: CIP-014 is a utility obligation, not a vendor certification. VDS systems are designed to support a CIP-014 R5 compliant physical security plan — the guide includes sample plan language. Final compliance rests with the registered entity.
- q: Do you support cooperative purchasing for utility procurement?
  a: Yes. VDS is available through Sourcewell, which most cooperative utilities use as a pre-vetted contract vehicle. Cuts procurement timeline from months to weeks.
- q: How do you handle sites without cellular coverage?
  a: Cellular + satellite failover is available on Sky Guard MSU for remote substations. SOC monitoring continues uninterrupted across backhaul switchover.
- q: What about Section 889 compliance?
  a: Full Section 889 Part B compliance, end to end. See the [NDAA Compliance Guide](/guides/ndaa-compliance) for full procurement language.
- q: Can the system integrate with existing SCADA or access control?
  a: Yes — through standard protocols. We've integrated with major access control platforms and provide event feeds to SCADA/EMS where requested.
finalCTAHeading: Harden the substation without an outage window
finalCTABody: Download the 36-page guide with the CIP-014 R5 plan language and placement diagrams. Or book a 30-minute call with our utility engineering lead.
finalCTAButtons:
- label: Download the guide
  url: /contact-us/
schemaType: Article
internalLinks: /products/sky-guard-mobile-surveillance-trailer, /products/boundary-guard-pro, /guides/ndaa-compliance, /compliance, /contact-us
canonical: https://visiondetectionsystems.com/guides/utility-substation-security
ogTitle: Utility Substation Security Guide
ogDescription: Substation physical security under NERC CIP-014 R5. Threat actor profiles, camera placement, and the post-Moore County deployment playbook for cooperatives
ogImage: https://visiondetectionsystems.com/assets/og-default.jpg
ogType: website
robots: index, follow
speakable: .hero-h1, .article-summary, h2
author: Vision Detection Systems
tags: utility security, NERC CIP-014, substation, buyer's guide, VDS guide
notes: Utility buyer cycle is long. CIP-014 R5 language is the entry point. Sourcewell badge important here.
---

## What's in the full guide

36 pages covering:

- NERC CIP-014 R1 through R6 requirements, with R5 (physical security plan) annotated
- Threat actor taxonomy — vandals, copper thieves, ideological actors, foreign-state probing
- Substation perimeter design — fence-line analytics, gate detection, switchyard interior
- Communication redundancy (cellular + satellite failover) for sites without fiber
- Sample CIP-014 R5 plan language, audit-tested
- Cooperative purchasing routes (Sourcewell)

## Free excerpt: what changed after Moore County

The December 2022 Moore County, NC attack — two transmission substations disabled by gunfire — was not the first attack on US grid infrastructure, but it was the inflection point. FERC issued an order in 2023 directing NERC to evaluate whether CIP-014 needed expansion. Even before any rule change, utilities have voluntarily tightened physical security postures:

- More substations being assessed under CIP-014 R1 risk analysis
- Faster timelines on R5 physical security plan updates
- Increased scrutiny on third-party vendor compliance, including Section 889 covered equipment

Sites previously deemed "low risk" because they weren't classified as critical under R1 are now getting hardened anyway. Our deployments in rural cooperative service territories have tripled since 2023.

## Free excerpt: why solar-autonomous matters at substations

Substation security cameras traditionally tap station service power. That creates two problems:

1. **Loss-of-power blackout.** If the substation goes dark — whether from attack, weather, or equipment failure — the security system goes with it. The exact moment you need cameras most is the moment they fail.
2. **Engineering review and lockout/tagout.** Tapping station service requires utility engineering review, P&C coordination, and outage windows. A six-month process to install a camera.

Solar-autonomous mobile surveillance units sidestep both. The Sky Guard MSU runs on its own solar + battery, cellular + (optional) satellite backhaul, completely independent of station service. Deployment time: 1 day. Engineering review on station infrastructure: zero.

## Free excerpt: the three placement zones

**Zone 1 — Perimeter fence-line.** Detect approach before breach. Long-range thermal + visible cameras, fence-vibration integration where present. Boundary Guard Pro handles this profile.

**Zone 2 — Gate and access.** LPR for vehicle entry, audio talk-down for unauthorized presence, integration with existing card readers. Sky Guard MSU positioned for unobstructed approach.

**Zone 3 — Switchyard interior.** PTZ coverage for equipment monitoring, with audio detection (gunfire, glass break). This is the post-Moore County overlay.

## Who this is for

Utility security directors, NERC compliance officers, transmission planners, cooperative GMs, and contracting officers running the CIP-014 R5 update cycle.

## Related products

- **[Sky Guard MSU](/products/sky-guard-mobile-surveillance-trailer)** — $2,200/mo. Primary substation deployment unit.
- **[Boundary Guard Pro](/products/boundary-guard-pro)** — $1,800/mo. Fence-line and perimeter analytics.
- **[Swift Deploy](/products/swift-deploy-surveillance-t