---
url: /solutions/utility/substation-intrusion
collection: solutions
pageType: Solution Intersection
parent: /solutions
status: Launch
seoTitle: Substation Perimeter Intrusion Detection | NERC CIP-014
metaDescription: Detect substation intrusion before it becomes a CIP-014 incident. Thermal + radar + 24/7 US SOC. Audit-ready documentation pack for compliance.
announcementBar: ''
h1: Detect Substation Perimeter Intrusion Before It Becomes a NERC CIP-014 Incident
heroEyebrow: SOLUTION · UTILITY · SUBSTATION INTRUSION
heroSubhead: NERC CIP-014 requires documented physical security at high-impact substations. VDS deploys solar-autonomous Sky Guard MSUs with thermal LWIR, radar, and 4K visual, backed by a 24/7 US SOC and an audit-ready event log designed for FERC and your auditor.
heroCTAPrimary:
  label: Request CIP-014 Brief
  url: /request-a-quote
heroCTASecondary:
  label: See Setup
  url: /request-a-quote
heroStats:
- NERC CIP-014 documentation built-in · Thermal detection at 1,200ft · 97% false alarm reduction · NDAA Section 889 compliant
heroImage: ''
faq:
- q: Does VDS meet CIP-014 R5 documentation requirements?
  a: Yes. Every detection event is logged with timestamp, classification, operator response, and outcome. We provide a quarterly auditor-ready summary mapped to R4 and R5 requirements.
- q: Can VDS integrate with our existing SCADA or physical access control?
  a: Yes. AI VisionStream exposes REST and MQTT integrations. Common integrations include AccessIT, Lenel, and direct OSI-PI tagging.
- q: What about drone overflight detection?
  a: Sky Guard radar classifies small UAS at typical operational altitudes within line of sight. Counter-UAS effector integration available on request.
- q: Is the hardware NDAA Section 889 compliant?
  a: Yes. Critical for federal contracts, increasingly required by state PUCs. All VDS hardware ships NDAA-compliant.
- q: How does the SOC handle armed-attacker scenarios?
  a: 'SOC protocol on visible weapons: no audio engagement, immediate LE dispatch with live video, internal escalation to your security duty officer. We do not provoke armed subjects.'
finalCTAHeading: Move detection upstream of the incident.
finalCTABody: Schedule a CIP-014 site assessment. We map your detection gaps against R4/R5 requirements and quote a deployable solution.
finalCTAButtons:
- label: Request CIP-014 Assessment
  url: Talk to an Engineer
schemaType: Article
internalLinks: /products/sky-guard-mobile-surveillance-trailer, /products/boundary-guard-pro, /solutions/utility, /solutions/utility/copper-theft-prevention, /compliance/nerc-cip
canonical: https://visiondetectionsystems.com/solutions/utility/substation-intrusion
ogTitle: Detect Substation Perimeter Intrusion Before It Becomes a NERC CIP-014 Incident
ogDescription: Detect substation intrusion before it becomes a CIP-014 incident. Thermal + radar + 24/7 US SOC. Audit-ready documentation pack for compliance.
ogImage: https://visiondetectionsystems.com/assets/og-default.jpg
ogType: article
robots: index, follow
speakable: .hero-h1, .article-summary, h2
author: VDS Editorial
tags: substation security, NERC CIP-014, utility security
notes: Heavy compliance angle. Strong cross-link to copper-theft-prevention utility page.
---

## The utility substation intrusion problem in 2026

The 2022 Moore County, North Carolina attack on two Duke substations took 40,000 customers offline for days. The 2022-2023 Tacoma attacks. The ongoing rifle and vehicle-ramming incidents reported through E-ISAC quarterly bulletins. Substation physical attack frequency tracked by DOE OE-417 reports has not declined since the 2013 Metcalf incident that drove CIP-014 in the first place.

The threat profile splits cleanly:
- **Copper theft (highest frequency)** — ground grids, bus bars, transformer leads. $80,000-$300,000 per incident including outage and repair, often more.
- **Sabotage and vandalism (highest severity)** — rifle damage to bushings and radiators, vehicle ramming the control house, drone reconnaissance.
- **Trespass and reconnaissance** — pre-attack site visits, drone overflight, fence-line probing.

CIP-014 requires documented physical security controls at identified critical substations. Auditors want detection, response, and evidence. Standard chain-link fence and a periodic guard tour do not produce documentation.

## How VDS detects substation intrusion

Sky Guard MSU is purpose-built for this environment. No utility power required — the unit is solar-autonomous with battery backup. The detection chain:

1. **Thermal LWIR (1,200ft human detection)** classifies a human, vehicle, or large animal against thermal background, day or night, through fog and light smoke.
2. **Radar correlation** confirms a moving target on the same vector and provides range and bearing.
3. **4K visual + PTZ** provides court-admissible identification.
4. **AI VisionStream classification** rejects deer, raptors, weather, and vehicles on the public road behind the fence. 97% false alarm reduction.
5. **24/7 US SOC operator** verifies the event, initiates audio talk-down, and dispatches LE with live video while logging the event chain.

Every detection event — verified or rejected — is logged with timestamps, video, operator notes, and outcome. That log is the auditor's documentation.

## Recommended setup

| Site type | Configuration | Monthly |
|---|---|---|
| Single-bay distribution sub | 1× Sky Guard MSU + Boundary Guard Pro | $4,000 |
| Transmission sub (small) | 2× Sky Guard MSU + Boundary Guard Pro | $6,200 |
| CIP-014 high-impact sub | 2-3× Sky Guard MSU + Boundary Guard Pro + integration | $7,400-$9,600 |

Includes 24/7 US SOC, AI VisionStream, 365-day evidence retention, monthly compliance report, and quarterly tabletop review with your CIP team.

## What it looks like working

The detection-to-intervention sequence on a substation perimeter intrusion at 2:47am:
- 0:00 — Thermal detects human shape inside the fenced perimeter
- 0:06 — Radar confirms moving target, 4K PTZ acquires
- 0:14 — SOC operator verifies, intrusion classified
- 0:21 — Audio talk-down initiated, LE dispatched
- 0:38 — Subject leaves perimeter
- 0:47 — LE arrives, subject located 200ft from fence
- Event log auto-generated, exported to CIP physical security records

## Pricing

Standard CIP-014-grade deployment runs **$6,200-$9,600/month per substation**. Multi-site agreements available. No capex, no install separately billed, solar-autonomous so no construction tie-in.
