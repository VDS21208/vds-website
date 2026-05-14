---
url: /integrations/bold
collection: integrations
pageType: Integration Detail
parent: /integrations
status: Expansion
seoTitle: VDS + Bold Group Manitou Integration | Central Station
metaDescription: VDS forwards verified video alerts to Bold Group Manitou central stations with pre/post clips, detection metadata, and SOC verification.
announcementBar: ''
h1: VDS + Bold Group Manitou
heroEyebrow: INTEGRATION · BOLD GROUP MANITOU
heroSubhead: For customers whose alerts run through a Bold Group Manitou central station, VDS forwards verified events with linked video and full incident metadata. Operators dispatch from one queue.
heroCTAPrimary:
  label: Talk to an integration engineer
  url: /request-a-quote
heroCTASecondary:
  label: Read API + SDK docs
  url: /request-a-quote
heroStats:
- Manitou CS · Video + metadata forwarding · HTTPS POST · HMAC signed
heroImage: ''
faq:
- q: Does this work with both Manitou Neo and earlier Manitou versions?
  a: The current integration targets Manitou Neo and recent Manitou versions with the modern receiver API. Older versions can sometimes be supported via a SIA-DC-09 fallback path with reduced metadata richness.
- q: Can VDS deliver video to Manitou without the VDS SOC being in the loop?
  a: Yes. Customers can configure direct AI-to-CS routing if they prefer their monitoring partner handle all human verification.
- q: What about SIA-DC-09 compatibility?
  a: VDS supports DC-09 as a fallback for stations that prefer that format, but the richer integration uses Bold Group's native receiver API.
- q: How do we change the contact tree?
  a: Contact trees live in Manitou. VDS just delivers the signal; the CS's action pattern owns the dispatch logic.
finalCTAHeading: Get verified video to your Manitou operators in under a second.
finalCTABody: VDS coordinates directly with your central station. A 30-minute call covers your account map, action patterns, and dispatch routing.
finalCTAButtons:
- label: Book Bold Group integration call
  url: /contact-us/
schemaType: Article
internalLinks: /integrations, /platform/platform, /platform/api-sdk-access, /platform/soc
canonical: https://visiondetectionsystems.com/integrations/bold
ogTitle: VDS + Bold Group Manitou
ogDescription: VDS forwards verified video alerts to Bold Group Manitou central stations with pre/post clips, detection metadata, and SOC verification.
ogImage: https://visiondetectionsystems.com/assets/og-default.jpg
ogType: website
robots: index, follow
speakable: .hero-h1, .integration-summary, h2
author: Vision Detection Systems
tags: security integrations, API, Bold Manitou integration
notes: Important — confirm with VDS engineering before publishing each integration page that the technical claims match real product capability. Some integrations may be roadmapped rather than shipped today.
---

Manitou is one of the two dominant central station automation platforms in North America. If your monitoring partner runs Manitou, the integration pattern with VDS is the same as with any modern receiver: signal in, video attached, operator dispatches.

## How it works

Verified VDS events post into Manitou via the Bold Group integration interface as signals carrying:

- Signed pre-event and post-event video clip URLs
- Detection class, zone, GPS coordinates
- VDS SOC verification ID and analyst notes (where applicable)
- Site contact tree and dispatch instructions

Manitou's standard signal-handling workflow — operator screen pop, action patterns, contact list cycle — runs unmodified. The video clip opens in the operator's browser when they click the linked alarm.

## What you get

- Your existing Bold Group monitoring partner stays the dispatch authority
- Verified video travels with every signal, cutting operator decision time
- Reduced false signal volume reduces operator cost and customer false-alarm fees
- Dual-path configuration available: VDS SOC + Manitou CS in sequence or in parallel

## Setup time

For a central station already running Manitou: 3 to 5 business days. Required on customer side: signed account-data sharing authorization, Bold Group tenant details from the CS, and account mapping. VDS engineering coordinates with the central station directly to provision the integration.

## A sample workflow

04:12 — VDS detects vehicle entry into a closed contractor yard.
04:12 — SOC analyst verifies in 8 seconds — not staff, not a known vehicle. Customer is monitored by a Manitou-running CS for dispatch.
04:12 — Event posts to Manitou. Operator screen pops with linked video.
04:13 — Operator clicks through the 30-second pre-event clip, reads the action pattern: dispatch LE, then call the site contact.
04:14 — LE dispatched. Site contact reached on the second contact-tree number.
04:21 — LE on-scene. Suspect on the property detained. Signal closed in Manitou; VDS audit record sealed.

## Pricing
