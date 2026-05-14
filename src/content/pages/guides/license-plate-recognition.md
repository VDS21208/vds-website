---
url: /guides/license-plate-recognition
collection: guides
pageType: Guide Landing
parent: /guides
status: Expansion
seoTitle: License Plate Recognition Guide | LPR Accuracy & Privacy
metaDescription: How LPR works, accuracy under real conditions, privacy and state-law constraints, deployment scenarios. Free 32-page technical guide from VDS.
announcementBar: ''
h1: 'License Plate Recognition: A Technical Guide'
heroEyebrow: 32 Pages · Engineering Reference · Free PDF
heroSubhead: How modern LPR actually works, what 95%+ accuracy means under rain and at speed, the state-by-state privacy landscape, and the deployment scenarios that work — and the ones that do not.
heroCTAPrimary:
  label: Download the Guide (PDF)
  url: /request-a-quote
heroCTASecondary:
  label: See LPR in Action
  url: /request-a-quote
heroStats:
- 32 pages • State-by-state privacy table • Camera spec checklist • Free PDF
heroImage: ''
faq:
- q: What is the accuracy at night?
  a: With proper 940nm IR illumination and a sensor rated for low-light, accuracy stays in the 92-95% range at night. Without proper IR, accuracy can drop below 70%. The guide details the illumination requirements.
- q: Can you read plates at highway speeds?
  a: With a global-shutter sensor and a fast-aperture lens, yes, up to roughly 75 mph at appropriate capture geometry. Standard rolling-shutter cameras introduce motion blur at speed.
- q: Do you share LPR data with law enforcement?
  a: Only with customer authorization, on a per-request basis, through the same chain-of-custody workflow as video retrieval. No standing data feeds.
- q: How long do you retain LPR data?
  a: Customer-configurable, default 90 days, capped by the most restrictive state law applicable to the deployment. Some states cap at 30 days for non-LE operators.
- q: Is LPR included with AI VisionStream?
  a: Yes, on cameras provisioned for LPR. There is no per-plate or per-read fee at standard tier.
finalCTAHeading: Get the technical reference
finalCTABody: 32 pages, state-by-state privacy table, camera spec checklist. Engineering teams find this useful even when they are not buying yet.
finalCTAButtons:
- label: Download the Guide (PDF)
  url: /schedule-a-demo/
schemaType: Book
internalLinks: /platform/platform, /industries/warehouse-logistics-security, /industries/law-enforcement, /services/video-retrieval
canonical: https://visiondetectionsystems.com/guides/license-plate-recognition
ogTitle: 'License Plate Recognition: A Technical Guide'
ogDescription: How LPR works, accuracy under real conditions, privacy and state-law constraints, deployment scenarios. Free 32-page technical guide from VDS.
ogImage: https://visiondetectionsystems.com/assets/og-default.jpg
ogType: website
robots: index, follow
speakable: .hero-h1, .article-summary, h2
author: Vision Detection Systems
tags: LPR, license plate recognition, buyer's guide, VDS guide
notes: Strong SEO target. Privacy section is a differentiator — most LPR vendors avoid the topic. Keep that section honest.
---

LPR is one of those technologies that sounds simple — read a plate, store the plate — and is in practice loaded with traps. Sensor selection, lane geometry, lighting, speed envelope, retention policy, state law. The guide is the reference we use internally when scoping LPR for a new customer.

## What is inside

**Part 1: How LPR works** (pages 3-9)

- The pipeline: plate localization, character segmentation, OCR, post-processing, list match
- Why modern LPR uses deep learning end-to-end rather than the classical segment-then-OCR approach
- What "95%+ accuracy" actually measures — per-character vs. per-plate, day vs. night, fixed vs. mobile camera
- Why two vendors quoting 95% can have very different real-world hit rates
- The role of GPU inference at the edge vs. cloud

**Part 2: Camera selection** (pages 10-17)

- Sensor: minimum resolution per plate-width pixel target, global shutter requirement for moving plates
- Lens: focal length for lane width and stand-off distance, depth-of-field math
- Illumination: 940nm IR vs. 850nm vs. white light, IR retroreflection from standard US plate sheeting
- Mounting angle: pitch and yaw constraints, ideal capture geometry
- A reference camera spec table for the four most common scenarios: parking lot entry, drive-through lane, freeway shoulder, mobile trailer perimeter
- ONVIF compliance and the AI VisionStream-supported camera list

**Part 3: Deployment scenarios** (pages 18-23)

Where LPR earns its keep:

- **Logistics yards** — gate access, dwell tracking, unauthorized vehicle alerts
- **Multifamily and HOA** — resident vs. visitor identification, tow-list automation
- **Retail and QSR** — drive-through arrival timing, repeat-visitor analytics
- **Construction** — site access logging, subcontractor verification
- **Law enforcement** — wanted-vehicle watch lists, Amber/Silver alert integration
- **Mobile trailers** — temporary perimeter monitoring with portable LPR

Where LPR fails or is the wrong tool:

- Vehicles without plates (motorcycles in some states, dealer trade-in, paper temp tags)
- Plates obscured by mud, snow, trailer hitches
- Extreme oblique angles
- Capture at speeds above the sensor envelope without specialized lensing
- Use cases where vehicle type is the real signal and plate is incidental — use object classification instead

**Part 4: Privacy and the law** (pages 24-29)

A state-by-state table covering:

- States that classify LPR data as personally identifiable
- Retention limits imposed on private operators (California, Vermont, Maine, others)
- Notice requirements at the point of capture
- Sharing restrictions — with law enforcement, with insurance carriers, with property managers
- Litigation risk and the major case law to date

This is not legal advice. The guide flags where to bring a lawyer in and gives you the right questions to ask one.

**Part 5: List management and watchlists** (pages 30-32)

- Hot-list ingestion: manual, CSV, API, federal feeds where authorized
- False-match tolerance and the cost of a false positive on a watchlist
- Cooldown periods to avoid repeat-alert storms
- Watchlist hygiene — purge stale entries, audit reviewer access

## Why this guide

LPR is the most misunderstood AI feature in physical security right now. Vendors quote accuracy numbers from controlled tests under controlled lighting. Buyers deploy on a windy 35-degree night at a logistics yard with 940nm IR and oblique angles and wonder why the hit rate dropped. The guide is honest about the gap between brochure and reality.

## Free excerpts

- [The 8 most common LPR deployment mistakes](/guides/license-plate-recognition)
- [State-by-state LPR privacy table (2026)](/guides/license-plate-recognition)
- [LPR camera spec checklist (PDF)](/guides/license-plate-recognition)

## VDS LPR at a glance

- 95%+ per-plate accuracy under standard lighting at supported geometries
- Sub-3-second alert latency from capture to operator queue
- ONVIF/RTSP camera-agnostic 