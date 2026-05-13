---
url: /integrations/genetec
collection: integrations
pageType: Integration Detail
parent: /integrations
status: Launch
seoTitle: VDS + Genetec Security Center Integration | AI VisionStream
metaDescription: VDS cameras stream to Genetec Security Center via ONVIF. SOC alerts POST in as bookmarks and alarms. Native plugin, setup in days, not months.
announcementBar: ''
h1: VDS + Genetec Security Center
heroEyebrow: INTEGRATION · GENETEC
heroSubhead: AI VisionStream cameras stream to Genetec Security Center over ONVIF Profile S. Verified SOC alerts POST into Security Center as alarms and bookmarks within 400 ms of the event.
heroCTAPrimary:
  label: Talk to an integration engineer
  url: /request-a-quote
heroCTASecondary:
  label: Request the Genetec plugin
  url: /request-a-quote
heroStats:
- ONVIF Profile S · Native plugin · 400 ms event latency · TLS 1.3
heroImage: ''
faq:
- q: Which Security Center versions are supported?
  a: 5.10 and later. Earlier versions can be supported via a generic ONVIF-only path without the alarm-POST plugin.
- q: Does this work with Security Center Federation across multiple sites?
  a: Yes. VDS alerts route to whichever Federated server you specify per camera or per zone.
- q: Do we need to run Streamvault or other Genetec hardware?
  a: No. VDS does not require any Genetec appliance. Streaming is direct from camera to Security Center over IP.
- q: Can we keep VDS as the SOC and Genetec as the local view?
  a: That is the common deployment. VDS SOC handles 24/7 monitoring and dispatch; Genetec operators have full visibility and can take over on demand.
finalCTAHeading: Add solar-autonomous coverage to Security Center without adding a second console.
finalCTABody: A VDS integration engineer will scope your Security Center version, federation topology, and required event types in 30 minutes. You leave with a written deployment plan.
finalCTAButtons:
- label: Book Genetec integration call
  url: Read API + SDK docs
schemaType: Article
internalLinks: /integrations, /platform/platform, /platform/api-sdk-access, /platform/soc, /hardware/solar-trailers
canonical: https://visiondetectionsystems.com/integrations/genetec
ogTitle: VDS + Genetec Security Center
ogDescription: VDS cameras stream to Genetec Security Center via ONVIF. SOC alerts POST in as bookmarks and alarms. Native plugin, setup in days, not months.
ogImage: https://visiondetectionsystems.com/assets/og-default.jpg
ogType: website
robots: index, follow
speakable: .hero-h1, .integration-summary, h2
author: Vision Detection Systems
tags: security integrations, API, Genetec integration
notes: Important — confirm with VDS engineering before publishing each integration page that the technical claims match real product capability. Some integrations may be roadmapped rather than shipped today.
---

Genetec Security Center is the dominant unified-platform VMS at airports, transit authorities, ports, and large enterprise campuses. VDS does not compete with it. AI VisionStream feeds Security Center the two things it cannot generate on its own at a remote, off-grid perimeter: solar-autonomous camera feeds and human-verified SOC alerts.

## How it works

VDS solar trailers and fixed cameras stream H.264 / H.265 over ONVIF Profile S directly into Security Center as standard video units. Existing operators see them in the same camera tree, the same map, and the same investigation tools they already use.

In parallel, AI VisionStream runs detection in AWS. When the VDS SOC verifies a critical event — intrusion, loitering after hours, an LPR hit on a watch-listed plate — the event POSTs to Security Center as a Genetec alarm with:

- Pre-event and post-event video clip URLs (signed, time-limited)
- Detection class, confidence, zone name, and SOC analyst ID
- A bookmark on the corresponding Security Center camera timeline
- A correlation ID matching the immutable VDS 12-month audit log

The webhook payload is HMAC-SHA256 signed. TLS 1.3 end-to-end.

## What you get

- One pane of glass for SOC analysts already trained on Security Center
- Genetec-side alarm acknowledgement workflows trigger VDS SOC actions (talk-down, LE dispatch) via the reverse webhook
- LPR reads from VDS feed into Security Center AutoVu timelines
- VDS audit log remains the cryptographic record of truth for evidentiary use

## Setup time

For a customer already running Security Center 5.10 or later: 2 to 5 business days from kickoff to first verified alarm in the operator console. Required on customer side: a service account with bookmark and alarm-write permissions, plus a reachable webhook receiver. VDS handles plugin installation and field testing.

## A sample workflow

03:14 — A person crosses the east-fence detection zone at a remote substation. VDS edge classification fires.
03:14 — AI VisionStream confirms in cloud; SOC analyst opens the event.
03:14 — 8 seconds after first detection, the analyst verifies a real intrusion (not wildlife) and triggers audio talk-down.
03:14 — Webhook fires into Security Center. Alarm appears on the operator workstation with linked video.
03:15 — Talk-down does not deter; SOC dispatches local LE while Security Center operator coordinates with internal response.
03:27 — LE on-scene. Event closed in both systems. Audit log signed and sealed.

## Pricing

The Genetec integration is included with any AI VisionStream subscription tier. There is no per-camera connector fee on the VDS side. Genetec licensing (camera connections, AutoVu, Federation) follows standard Genetec channel pricing — VDS does not resell it.
