---
url: /platform/integrations
collection: platform
pageType: Platform Detail
parent: /platform
status: Launch
seoTitle: Integrations | ACS, Alarm, ITSM, Notifications | VDS
metaDescription: Native integrations with Lenel, Genetec, Brivo, Bold, Stages, ServiceNow, Jira, PagerDuty, Slack, and email/SMS gateways.
announcementBar: ''
h1: Wired into the stack you already run.
heroEyebrow: Integrations
heroSubhead: Native integrations with the access control, alarm monitoring, ITSM, and notification systems already deployed at your sites. No middleware. No CSV exports.
heroCTAPrimary:
  label: See full list
  url: /contact-us/
heroCTASecondary:
  label: Talk to an engineer
  url: /contact-us
heroStats:
- 4 ACS platforms
- 2 alarm centrals
- 2 ITSM tools
- 4 notification channels
heroImage: ''
faq:
- q: Is the API rate-limited?
  a: 100 requests/second per token, with burst headroom. Higher limits available for enterprise tiers.
- q: Do integrations cost extra?
  a: No. Every integration on this page is included on every commercial tier.
- q: How long does an ACS integration take to deploy?
  a: 1-3 days for supported platforms with documented credentials. We handle the wiring; you approve the rules.
- q: What about platforms not on this list?
  a: Most can be wired through webhooks and REST. We have shipped connectors for OpenPath, Avigilon, and Milestone on request.
finalCTAHeading: Tell us what is in your stack.
finalCTABody: We will pull up your ACS, alarm, and ITSM platform during the demo and show the wiring live.
finalCTAButtons:
- label: Book a demo
  url: /schedule-a-demo
schemaType: SoftwareApplication
internalLinks: /platform, /platform/soc, /platform/alerts-reporting, /platform/cloud-security
canonical: https://visiondetectionsystems.com/platform/integrations
ogTitle: Wired into the stack you already run.
ogDescription: Native integrations with Lenel, Genetec, Brivo, Bold, Stages, ServiceNow, Jira, PagerDuty, Slack, and email/SMS gateways.
ogImage: https://visiondetectionsystems.com/assets/og-default.jpg
ogType: website
robots: index, follow
speakable: .hero-h1, .hero-subhead, h2
author: Vision Detection Systems
tags: AI VisionStream, cloud VMS, video analytics
notes: Logo grid for each category — get logos cleared first. API doc link should point to actual docs site when live.
---

## Access control (ACS)

- **Lenel OnGuard** — badge events, door state, alarm pairing
- **Genetec Security Center** — video sync, federation, event push
- **Brivo** — cloud ACS, mobile credential events
- **Custom** — ONVIF Profile A and REST hooks for in-house ACS

When an unauthorized badge swipe fires at a door, the nearest camera pulls the 30-second pre-event clip and routes it to the SOC alongside the badge event.

## Alarm monitoring centrals

- **Bold Group (Manitou, Stages)** — direct event push with CAD-compatible payload
- **Stages** — bi-directional event acknowledgement

If your existing central station already monitors intrusion panels, we wire video verification into the same workflow they already run.

## ITSM and ticketing

- **ServiceNow** — incident creation, clip attachment, status sync
- **Jira Service Management** — same workflow, Atlassian-side
- **Custom webhooks** — JSON event payloads to any HTTPS endpoint

Every verified SOC event opens a ticket in your system with the incident report, video link, and operator notes attached.

## Notifications

- **PagerDuty** — on-call rotation, escalation policies
- **Slack** — channel routing per site or per rule
- **Email and SMS** — Twilio-backed, configurable per user and per rule
- **Microsoft Teams** — channel webhooks supported

## API and webhooks

REST API for camera management, rule configuration, alert retrieval, and user provisioning. Webhooks for every event class. OAuth 2.0 with scoped tokens. Rate limits documented per endpoint.

Full reference at [api.visiondetectionsystems.com](/resources).

## What we do not do

We do not sell connector seats. Every int