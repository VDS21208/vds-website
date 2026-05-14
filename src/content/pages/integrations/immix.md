---
url: /integrations/immix
collection: integrations
pageType: Integration Detail
parent: /integrations
status: Expansion
seoTitle: VDS + Immix CC Integration | Central Station Automation
metaDescription: VDS forwards verified alerts with video and metadata to your Immix-running central station. Operators dispatch from one console.
announcementBar: ''
h1: VDS + Immix CC
heroEyebrow: INTEGRATION · IMMIX CC
heroSubhead: For customers whose alerts are monitored by a central station running Immix CC, VDS forwards verified events with pre/post video clips and full metadata. The Immix operator dispatches from one console with everything attached.
heroCTAPrimary:
  label: Talk to an integration engineer
  url: /request-a-quote
heroCTASecondary:
  label: Read API + SDK docs
  url: /request-a-quote
heroStats:
- Immix CC integration · Video + metadata forwarding · HTTPS POST · HMAC signed
heroImage: ''
faq:
- q: Does our central station need to do work on their side?
  a: Yes — they configure VDS as a video receiver / signal source in their Immix tenant. Most stations have done this for other video providers and the setup is routine.
- q: Can the central station talk-down through VDS cameras?
  a: Yes, with the right account configuration. Talk-down audio is initiated from the VDS console; central station operators get console access scoped to the accounts they monitor.
- q: Is this UL listing-relevant?
  a: VDS forwards verified events as supplemental video to existing UL-listed central stations. Confirm UL-listing specifics with your monitoring partner.
- q: Can the same customer use VDS SOC AND a contracted CS?
  a: 'Yes. Common pattern: VDS SOC for video verification and talk-down, Immix-running CS for LE dispatch, billing, and after-hours customer contact.'
finalCTAHeading: Forward verified events with video attached.
finalCTABody: We will coordinate directly with your central station to configure the Immix integration. A 30-minute call covers your account structure and response plans.
finalCTAButtons:
- label: Book Immix integration call
  url: Read API + SDK docs
schemaType: Article
internalLinks: /integrations, /platform/platform, /platform/api-sdk-access, /platform/soc
canonical: https://visiondetectionsystems.com/integrations/immix
ogTitle: VDS + Immix CC
ogDescription: VDS forwards verified alerts with video and metadata to your Immix-running central station. Operators dispatch from one console.
ogImage: https://visiondetectionsystems.com/assets/og-default.jpg
ogType: website
robots: index, follow
speakable: .hero-h1, .integration-summary, h2
author: Vision Detection Systems
tags: security integrations, API, Immix integration
notes: Important — confirm with VDS engineering before publishing each integration page that the technical claims match real product capability. Some integrations may be roadmapped rather than shipped today.
---

A lot of enterprise customers do not staff their own monitoring center. They contract that work to a UL-listed central station whose operators run Immix CC across hundreds of accounts. VDS plugs into that model without forcing a workflow change on either side.

## How it works

When the VDS SOC verifies a critical event — or when a customer has elected to bypass the VDS SOC and route events directly to their central station — the event posts into Immix CC as a verified alarm signal with:

- A linked pre-event and post-event video clip (signed, time-limited URLs)
- Detection class, zone name, GPS coordinates of the camera or trailer
- Confidence score and SOC analyst verification ID (when VDS SOC handled the event)
- Site contact and dispatch instructions

The Immix operator sees the event in their normal queue. Standard Immix workflows — contact tree, dispatch decision, customer notification — proceed without modification.

## What you get

- Use your existing monitoring partner. No need to switch central stations.
- Video and metadata travel with the alarm — operators do not log into a second portal.
- Verified events only, which means the central station bills less time per account and your false-alarm fees stay down.
- Optional dual-path: VDS SOC handles first response, Immix-running CS handles escalation, or the reverse.

## Setup time

For a central station already running Immix CC: 3 to 5 business days. Required on customer side: written authorization to share account data with the CS, the CS's Immix tenant identifier and account-mapping document. VDS engineering coordinates directly with the central station to configure the integration.

## A sample workflow

23:51 — VDS detects loitering at the rear of a retail location after closing.
23:51 — VDS SOC analyst verifies in 11 seconds. The customer's account is configured to route to a contracted Immix-running central station.
23:51 — Event posts to Immix CC. The CS operator sees the signal with linked video.
23:52 — Operator reviews the 30-second pre-event clip, confirms the behavior matches a loitering pattern previously associated with break-in attempts at this chain.
23:53 — CS operator dispatches local LE per the customer's response plan and notifies the store manager via SMS using the Immix contact tree.
23:54 — LE en route. VDS continues audio talk-down. Both systems retain a synchronized audit record.

## Pricing

The Immix integration is included with any AI VisionStream enterprise subscription. The central station's Immix licensing and the custo