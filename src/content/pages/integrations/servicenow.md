---
url: /integrations/servicenow
collection: integrations
pageType: Integration Detail
parent: /integrations
status: Launch
seoTitle: VDS + ServiceNow ITSM Integration | Auto-Ticketing
metaDescription: VDS critical alerts auto-open ServiceNow incidents with video, detection metadata, and SOC analyst notes. ITSM teams track and close in their own queue.
announcementBar: ''
h1: VDS + ServiceNow ITSM
heroEyebrow: INTEGRATION · SERVICENOW
heroSubhead: AI VisionStream critical alerts auto-open ServiceNow incidents with linked video, detection metadata, and SOC verification notes. ITSM teams track, escalate, and close them inside their existing workflow.
heroCTAPrimary:
  label: Talk to an integration engineer
  url: /request-a-quote
heroCTASecondary:
  label: Read API + SDK docs
  url: /request-a-quote
heroStats:
- ServiceNow Table API · OAuth 2.0 · CMDB-mapped · TLS 1.3
heroImage: ''
faq:
- q: Which ServiceNow editions are supported?
  a: ITSM and ITOM. Most modern releases (Vancouver, Washington, Xanadu) are supported. The integration uses standard Table API surfaces.
- q: Can we route different VDS event types to different assignment groups?
  a: Yes. The mapping is configurable per site, per zone, and per detection class.
- q: Will this create ticket spam?
  a: No. Only verified critical events generate tickets by default. Routine VDS activity (system health, low-confidence detections) stays in the VDS console unless you opt to surface it.
- q: What about non-ITSM tools — Jira, PagerDuty?
  a: Same webhook pattern works for any system with an HTTPS endpoint. Jira and PagerDuty connectors are available on the same enterprise tier; talk to us for current status.
finalCTAHeading: Make physical security events tickets your team actually closes.
finalCTABody: A 30-minute call covers your ServiceNow instance topology, assignment groups, and CMDB mapping. You leave with a written integration plan and a field-mapping document.
finalCTAButtons:
- label: Book ServiceNow integration call
  url: /contact-us/
schemaType: Article
internalLinks: /integrations, /platform/platform, /platform/api-sdk-access, /platform/soc
canonical: https://visiondetectionsystems.com/integrations/servicenow
ogTitle: VDS + ServiceNow ITSM
ogDescription: VDS critical alerts auto-open ServiceNow incidents with video, detection metadata, and SOC analyst notes. ITSM teams track and close in their own queue.
ogImage: https://visiondetectionsystems.com/assets/og-default.jpg
ogType: website
robots: index, follow
speakable: .hero-h1, .integration-summary, h2
author: Vision Detection Systems
tags: security integrations, API, ServiceNow integration
notes: Important — confirm with VDS engineering before publishing each integration page that the technical claims match real product capability. Some integrations may be roadmapped rather than shipped today.
---

For organizations whose security operations team and IT operations team share a ticketing queue, VDS sends events where the work actually happens: ServiceNow. Every critical AI VisionStream alert becomes a properly classified, properly assigned, properly tracked incident.

## How it works

VDS uses the ServiceNow Table API (REST) with OAuth 2.0 to create Incident records when a critical event is verified. Each record includes:

- Short description and detailed description with SOC analyst notes
- Linked video clip URLs (signed, time-limited) attached or referenced
- Detection class, zone, GPS coordinates, and customer site code
- CMDB CI reference if the camera or trailer is registered as a configuration item
- Priority, assignment group, and category mapped per the customer's ITSM schema

The default mapping ships sensible — critical intrusion → P1, after-hours loitering → P3 — and is customizable per site or per zone. Updates flow both ways: a state change in ServiceNow (acknowledged, in progress, resolved) reflects on the VDS incident timeline via the ServiceNow Business Rule webhook back to VDS.

## What you get

- Security events tracked in the same system as IT incidents — one SLA, one auditor view
- CMDB-aware tickets so an asset team can see when a camera or trailer needs maintenance because of a tamper or offline event
- VDS critical alerts never get lost in email; they exist as tickets with owners
- Bidirectional state sync, so closing in ServiceNow closes in VDS

## Setup time

For a customer with an existing ServiceNow instance and an OAuth application registration capability: 3 to 7 business days. Required on customer side: a ServiceNow service account with itil and rest_service roles, an OAuth client, the target table (typically incident), and the field-mapping document. VDS engineering provides the integration configuration and joint testing.

## A sample workflow

20:18 — VDS detects perimeter intrusion at a regional data center.
20:18 — SOC analyst verifies in 7 seconds; talk-down initiated.
20:18 — ServiceNow Incident INC0042319 auto-created: P1, assigned to "Physical Security Operations" group, linked to CI dc-perimeter-cam-07, video clip attached, SOC analyst note in the work-notes field.
20:19 — On-call physical security engineer acknowledges in ServiceNow. State change webhooks back to VDS; VDS timeline shows "acknowledged by J. Patel."
20:24 — LE on-scene, intruder gone. Engineer resolves the ServiceNow incident with notes; resolution syncs back to VDS.
20:25 — Both systems hold the closed record with full SLA timing.

## Pri