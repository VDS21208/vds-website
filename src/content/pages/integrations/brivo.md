---
url: /integrations/brivo
collection: integrations
pageType: Integration Detail
parent: /integrations
status: Expansion
seoTitle: VDS + Brivo Access Integration | Cloud Access Control
metaDescription: VDS perimeter events trigger Brivo door lockdowns; Brivo unlock events appear in the AI VisionStream timeline for chain-of-custody. Sub-second latency.
announcementBar: ''
h1: VDS + Brivo Access
heroEyebrow: INTEGRATION · BRIVO
heroSubhead: AI VisionStream perimeter detections fire Brivo lockdown commands within 400 ms. Brivo unlock and access-denied events appear on the VDS incident timeline for unified investigation.
heroCTAPrimary:
  label: Talk to an integration engineer
  url: /request-a-quote
heroCTASecondary:
  label: Read API + SDK docs
  url: /request-a-quote
heroStats:
- Brivo API v1 · OAuth 2.0 · 400 ms event latency · Bidirectional
heroImage: ''
faq:
- q: Does this work with Brivo Access (new platform) and Brivo OnAir (legacy)?
  a: Brivo Access via the current API. OnAir is supported via the legacy API path; some event types are not available on OnAir.
- q: Can a VDS event unlock a door, not just lock one?
  a: Yes — for example, a verified-visitor flow can fire a temporary unlock. Most customers configure lock-only for security events and gate unlock decisions to a human in the VDS or Brivo app.
- q: What about Brivo Smart Home / multi-family residential?
  a: Supported. The same API is used. Multi-family deployments typically pair VDS solar trailers covering parking and common areas with Brivo amenity-door access.
- q: Where does the audit record live?
  a: Both sides retain their own. The VDS immutable 12-month log includes the Brivo events VDS received via webhook, so a single VDS export contains the full correlated timeline.
finalCTAHeading: Stop firing lockdowns on false alarms.
finalCTABody: A 30-minute call covers your Brivo site map, which doors should respond to which zones, and how your tenants want lockdowns communicated.
finalCTAButtons:
- label: Book Brivo integration call
  url: /contact-us/
schemaType: Article
internalLinks: /integrations, /platform/platform, /platform/api-sdk-access, /verticals/commercial-real-estate, /verticals/multi-family
canonical: https://visiondetectionsystems.com/integrations/brivo
ogTitle: VDS + Brivo Access
ogDescription: VDS perimeter events trigger Brivo door lockdowns; Brivo unlock events appear in the AI VisionStream timeline for chain-of-custody. Sub-second latency.
ogImage: https://visiondetectionsystems.com/assets/og-default.jpg
ogType: website
robots: index, follow
speakable: .hero-h1, .integration-summary, h2
author: Vision Detection Systems
tags: security integrations, API, Brivo integration
notes: Important — confirm with VDS engineering before publishing each integration page that the technical claims match real product capability. Some integrations may be roadmapped rather than shipped today.
---

Brivo is the de facto cloud access control standard in commercial real estate, multi-family residential, and multi-site retail. The integration with VDS works the way both products are built — cloud to cloud, REST over HTTPS, no on-prem bridge required.

## How it works

VDS events POST to the Brivo API using OAuth 2.0 client credentials. Each AI VisionStream alert maps to an action on Brivo: lock a specific door, lock all doors on a site, switch a schedule, or fire a Brivo event that downstream automations subscribe to.

Brivo events stream back to VDS via Brivo's webhook subscription model. Door unlocks, access-denied attempts, propped-door alarms, and schedule changes appear on the AI VisionStream incident timeline correlated to the camera covering that door.

## What you get

- Cloud-to-cloud architecture — no panel programming, no on-prem appliance
- Verified-event lockdown that does not fire on a raccoon walking past a motion sensor
- Brivo door history on the VDS timeline for chain-of-custody investigation
- Site-level and door-level granularity on which VDS zones drive which Brivo actions

## Setup time

For a customer with an active Brivo account: 2 to 4 business days. Required on customer side: a Brivo API key (admin-level for door control), the list of doors and zones, and a webhook destination on the VDS side (provided). VDS engineering configures the connector and runs joint validation.

## A sample workflow

01:33 — VDS detects a person climbing a loading dock fence at a multi-tenant industrial property.
01:33 — SOC analyst verifies in 7 seconds.
01:33 — Webhook to Brivo fires. The four roll-up doors and the personnel door on that bay re-lock and switch to credentials-required schedule.
01:34 — VDS audio talk-down begins. Intruder leaves the dock.
01:35 — Tenant security manager opens the VDS app on iPhone. Sees the video, the talk-down audio log, and the Brivo door-state changes on one timeline.
01:38 — Manager unlocks the personnel door from Brivo to let arriving private security in. Unlock event lands on the VDS timeline automatically.

## 