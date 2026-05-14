---
url: /integrations
collection: singletons
pageType: Integrations Hub
parent: —
status: Launch
seoTitle: Integrations | VDS AI VisionStream + Your Security Stack
metaDescription: AI VisionStream connects to Genetec, Milestone, Lenel, Brivo, Immix, Bold, Stages, ServiceNow, and Axon-Fusus via ONVIF, REST API, and webhooks.
announcementBar: ''
h1: AI VisionStream works with the systems you already trust.
heroEyebrow: INTEGRATIONS · OVERVIEW
heroSubhead: VDS is camera-agnostic and platform-agnostic. ONVIF/RTSP on the device side, REST API and webhooks on the data side. If your team already runs a VMS, an access control head-end, a central station, or an ITSM queue, we plug into it — not around it.
heroCTAPrimary:
  label: Talk to an integration engineer
  url: /request-a-quote
heroCTASecondary:
  label: View API + SDK docs
  url: /request-a-quote
heroStats:
- ONVIF Profile S/T · REST API · Webhooks (HTTPS POST) · NDAA Section 889 · TLS 1.3 / AES-256
heroImage: ''
faq:
- q: Are these integrations certified by the partner platforms?
  a: Genetec and Milestone have published plugin paths VDS follows. Lenel, Brivo, Immix, Bold, Stages, ServiceNow, and Axon-Fusus integrations use each platform's documented public API and webhook surface. Status varies by partner — talk to us for current certification details.
- q: Can I run VDS alongside my existing on-prem VMS?
  a: Yes. VDS is cloud-native on AWS, so it runs in parallel with on-prem VMS deployments. Cameras can stream to both, or VDS can forward events into the on-prem VMS via webhook.
- q: Where does video actually live?
  a: VDS video and metadata are stored in US-only AWS regions with a 12-month immutable audit log. Cross-platform events (such as a Lenel door open correlated with a VDS detection) are stored in both systems; the VDS copy is the cryptographically signed record.
- q: What if I need an integration that isn't listed?
  a: REST API, webhooks (HMAC-signed), and iOS/Android SDKs are public. VDS engineering will scope custom integration work as part of enterprise onboarding.
finalCTAHeading: Make VDS fit your stack, not the other way around.
finalCTABody: A 30-minute call with a VDS integration engineer covers your current VMS, access platform, central station, and ITSM tooling. You leave with a written integration plan and a setup-time estimate.
finalCTAButtons:
- label: Book integration scoping call
  url: /contact-us/
schemaType: Article
canonical: https://visiondetectionsystems.com/integrations
ogTitle: AI VisionStream works with the systems you already trust.
ogDescription: AI VisionStream connects to Genetec, Milestone, Lenel, Brivo, Immix, Bold, Stages, ServiceNow, and Axon-Fusus via ONVIF, REST API, and webhooks.
ogImage: https://visiondetectionsystems.com/assets/og-default.jpg
ogType: website
robots: index, follow
tags: security integrations, API
---

VDS does not ask customers to rip and replace. AI VisionStream sits in the middle of the stack: it pulls feeds off ONVIF/RTSP cameras (ours or yours), runs detection models on AWS in US-only regions, and pushes events out to whichever VMS, access platform, central station, or ITSM tool your operations team already uses.

Three categories cover most enterprise security architectures. Pick the one closest to your stack.

## Access Control

Tie perimeter intrusion detection to door and gate logic. When VDS classifies a person crossing a defined zone after hours, the event fires a webhook into your access control platform within 400 ms — fast enough to drive an automated lockdown, an elevator recall, or a credentials-required override before the intruder reaches an interior door.

- **[Lenel S2 / OnGuard + NetBox](/integrations/lenel)** — Carrier-owned access control standard at federal, healthcare, and higher-education sites. VDS events trigger Lenel input points; Lenel door events appear on the VDS timeline.
- **[Brivo Access](/integrations/brivo)** — cloud-native access control common in commercial real estate, multi-family, and retail. Bidirectional: VDS triggers Brivo lockdowns, Brivo unlock events log into the VDS chain-of-custody record.

## Unified VMS

If your security operations center already runs a unified VMS, VDS cameras and SOC-generated events show up alongside everything else — same timeline, same search, same export tools your analysts use today.

- **[Genetec Security Center](/integrations/genetec)** — VDS cameras stream via ONVIF; SOC alerts POST into Security Center as bookmarks and alarms. Native plugin available.
- **[Milestone XProtect](/integrations/milestone)** — VDS feeds and trailer-generated metadata ingest as Milestone drivers; VDS LPR reads display on the Milestone timeline. Bidirectional alerting.

## Central Station, ITSM, and Law Enforcement Sharing

For organizations whose alerts flow into a monitoring company, an IT ticketing queue, or a real-time crime center, VDS forwards signals out of the SOC with full video and metadata attached.

- **[Immix CC](/integrations/immix)** — central station automation. VDS forwards verified alerts with video to your Immix-running monitoring partner.
- **[Bold Group Manitou](/integrations/bold)** — central station automation, same pattern as Immix.
- **[Stages Software](/integrations/stages)** — alarm receiver and CS automation. VDS events flow as signals.
- **[ServiceNow ITSM](/integrations/servicenow)** — VDS critical alerts auto-open ServiceNow incidents so ITSM teams close them in their own queue with full SLA tracking.
- **[Axon-Fusus](/integrations/axon-fusus)** — opt-in, per-incident clip sharing with law enforcement real-time crime centers. Not standing access — your team decides which incident, which clip, which agency, every time.

## Don't see your system?

If you run something custom or something on this page is not listed, the same primitives are available to you directly: REST API, signed webhooks, and a documented event schema. Most one-off integrations take a sprint or less on the customer side. VDS engineering scopes integration work as part of enterpr