---
url: /integrations/lenel
collection: integrations
pageType: Integration Detail
parent: /integrations
status: Launch
seoTitle: VDS + LenelS2 OnGuard / NetBox Integration | Access Control
metaDescription: VDS perimeter detections trigger LenelS2 access decisions; OnGuard and NetBox door events feed back into the AI VisionStream timeline
announcementBar: ''
h1: VDS + LenelS2 OnGuard and NetBox
heroEyebrow: INTEGRATION · LENELS2
heroSubhead: A VDS perimeter intrusion fires a Lenel input point in under 400 ms — fast enough to drive automated lockdown before the threat reaches an interior door. OnGuard and NetBox events return to the VDS timeline for chain-of-custody.
heroCTAPrimary:
  label: Talk to an integration engineer
  url: /request-a-quote
heroCTASecondary:
  label: Read API + SDK docs
  url: /request-a-quote
heroStats:
- OnGuard 8.0+ · NetBox 5.5+ · 400 ms event latency · Bidirectional
heroImage: ''
faq:
- q: Does this work with OnGuard on-prem or cloud?
  a: Both. The OpenAccess API surface is identical. Cloud OnGuard requires the standard outbound webhook allow-list.
- q: What about older Lenel systems without OpenAccess?
  a: A dry-contact relay bridge is available for legacy panels. Slower (sub-2-second instead of sub-second) but functional. Talk to us for site-specific scoping.
- q: Can the integration drive credential-level decisions, not just inputs?
  a: Yes on OnGuard via OpenAccess CommandReader interfaces. NetBox supports input-driven macros that can lock or relock specific portals.
- q: Is this Lenel-certified?
  a: VDS uses LenelS2's published OpenAccess and NetBox REST surfaces. Certification status varies by program tier — confirm current status with VDS sales.
finalCTAHeading: Make your perimeter cameras drive your access panels.
finalCTABody: A 30-minute call covers your OnGuard or NetBox version, input-point inventory, and lockdown logic. You leave with a written integration plan.
finalCTAButtons:
- label: Book LenelS2 integration call
  url: Read API + SDK docs
schemaType: Article
internalLinks: /integrations, /platform/platform, /platform/api-sdk-access, /platform/soc, /verticals/healthcare, /verticals/federal
canonical: https://visiondetectionsystems.com/integrations/lenel
ogTitle: VDS + LenelS2 OnGuard and NetBox
ogDescription: VDS perimeter detections trigger LenelS2 access decisions; OnGuard and NetBox door events feed back into the AI VisionStream timeline
ogImage: https://visiondetectionsystems.com/assets/og-default.jpg
ogType: website
robots: index, follow
speakable: .hero-h1, .integration-summary, h2
author: Vision Detection Systems
tags: security integrations, API, Lenel integration
notes: Important — confirm with VDS engineering before publishing each integration page that the technical claims match real product capability. Some integrations may be roadmapped rather than shipped today.
---

LenelS2 is the access control system of record at thousands of federal sites, hospitals, universities, and Fortune 500 campuses. The integration with VDS is built around one premise: a verified person-in-zone detection at the perimeter should mean something to the doors 200 feet behind it.

## How it works

AI VisionStream pushes critical detections to LenelS2 via the OnGuard OpenAccess API (REST) for OnGuard 8.0 and later, or via the NetBox REST API for NetBox 5.5 and later. The VDS event maps to a virtual input point in the access control panel hierarchy. From there, standard Lenel programming — input-triggered macros, area lockdowns, credential-required overrides — runs exactly as it does for any wired alarm input.

In the reverse direction, Lenel door events (forced door, door held open, access denied, anti-passback violation) POST to VDS via webhook and appear as correlated entries on the AI VisionStream incident timeline. An analyst reviewing a perimeter event sees the door activity that followed it without leaving the VDS console.

## What you get

- Sub-second perimeter-to-door logic at sites where wired sensors are not practical (solar trailers, temporary deployments, large parking footprints)
- Lockdown, mantrap re-arm, and elevator recall driven by AI-verified events, not motion sensors
- Single forensic timeline that includes both video and door history
- NDAA Section 889 compliant camera-side hardware for federal sites

## Setup time

For a customer already running OnGuard 8.0+ or NetBox 5.5+ with OpenAccess licensed: 3 to 7 business days. Required on customer side: an OpenAccess service account, the integration certificate, and a list of input-point mappings (which VDS zones map to which Lenel inputs). VDS integration engineers handle the connector configuration and joint validation.

## A sample workflow

22:47 — VDS detects a person scaling the south fence of a pharmaceutical campus.
22:47 — SOC analyst confirms in 6 seconds.
22:47 — Webhook to OnGuard fires virtual input "Perimeter South — Verified Intrusion."
22:47 — OnGuard macro re-locks all exterior doors on Building 3, holds elevators on lobby, and pages the on-duty security supervisor.
22:48 — VDS audio talk-down begins. Intruder reverses course.
22:51 — Supervisor reviews on VDS console; sees the door re-lock events from OnGuard inline with the video. Decides not to dispatch.
22:53 — Event closed. Audit record retained in both systems.

## Pricing

The Lenel integration is included with any AI VisionStream enterprise subscription. OnGuard OpenAccess licensing and NetBox API access follow standard LenelS2 channel pricing.
