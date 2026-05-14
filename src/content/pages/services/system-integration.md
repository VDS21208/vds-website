---
url: /services/system-integration
collection: services
pageType: Service Detail
parent: /services
status: Launch
seoTitle: VMS, ACS, Alarm & ITSM Integration Services | VDS
metaDescription: Camera-agnostic VMS with ONVIF/RTSP support. Integrate with Genetec, Lenel, Avigilon, ServiceNow, SAP. Keep the cameras you have
announcementBar: Camera-agnostic VMS. Works with what you already have.
h1: Your cameras. Your access control. Your ERP. Our analytics and SOC on top.
heroEyebrow: System Integration
heroSubhead: VDS VMS speaks ONVIF, RTSP, and a published REST API. We connect to the access control, alarm panels, ITSM, and ERP systems you already run — without ripping out infrastructure that works.
heroCTAPrimary:
  label: Scope an integration
  url: /request-a-quote
heroCTASecondary:
  label: View API documentation
  url: /request-a-quote
heroStats:
- ONVIF Profile S/T
- RTSP/H.264/H.265
- REST API
- Genetec
- Lenel
- ServiceNow
- SAP
- AWS Cloud Partner
heroImage: ''
faq:
- q: Do you charge per integration?
  a: Standard integrations (Genetec, Lenel, ServiceNow, the major ACS platforms) are included in the VMS license. Custom integrations against a private API are quoted as professional services — typically 40–120 engineering hours.
- q: Can you integrate with our SIEM or SOAR?
  a: Yes. Event export to Splunk, Datadog, Sentinel, QRadar, and Chronicle via syslog or HTTPS webhook. SOAR playbook triggers via REST API.
- q: What about cameras that don't speak ONVIF?
  a: If they speak RTSP, we ingest them. If they speak neither — typically older proprietary systems — we recommend an NVR-side bridge or a camera replacement. We don't force replacement when the bridge works.
- q: Will adding the analytics layer break our existing VMS?
  a: No. We can run as the primary VMS, as a secondary cloud archive, or in parallel during a migration. Most retrofits start in parallel for 60 days.
- q: Where is customer data stored?
  a: AWS US-East and US-West by default. AWS GovCloud available for federal and CJIS workloads. Customer chooses region during onboarding. Data residency contracts available.
finalCTAHeading: Scope the integration in 30 minutes.
finalCTABody: Bring your systems list. We'll tell you what's a standard connector, what's a custom build, and what the timeline looks like.
finalCTAButtons:
- label: Scope an integration
  url: /contact-us/
schemaType: Service
internalLinks: /services/monitoring, /products/vms, /developers/api, /security/soc2
canonical: https://visiondetectionsystems.com/services/system-integration
ogTitle: Your cameras. Your access control. Your ERP. Our analytics and SOC on top.
ogDescription: Camera-agnostic VMS with ONVIF/RTSP support. Integrate with Genetec, Lenel, Avigilon, ServiceNow, SAP. Keep the cameras you have
ogImage: https://visiondetectionsystems.com/assets/og-default.jpg
ogType: website
robots: index, follow
speakable: .hero-h1, .hero-subhead, h2
author: Vision Detection Systems
tags: mobile surveillance, VDS
notes: Page references SOC 2 — verify status before publishing. API documentation link should point to developer portal once published.
---

If a security vendor tells you their system only works with their cameras, they're selling lock-in, not security. We're not in that business.

## Camera-agnostic VMS

Our VMS ingests any camera that speaks ONVIF Profile S (live video) or Profile T (metadata and events), plus standard RTSP streams in H.264 and H.265. That covers Axis, Hanwha, Bosch, Sony, Pelco, Hikvision-replacement brands, Verkada exports, Avigilon ONVIF mode, and most consumer-grade cameras with RTSP enabled.

What you get from the cameras you already own:
- Cloud VMS with 30/60/90-day retention tiers
- AI analytics layer (person, vehicle, loitering, line-cross, abandoned object)
- SOC monitoring at the same SLA as VDS hardware
- Mobile and web clients with role-based access
- Audit trail and export for legal hold

## Access control integration

Bi-directional integration with the major ACS platforms:

- **Genetec Security Center** — synchronized event timeline, badge-to-video, door-forced-open with video clip attachment
- **Lenel OnGuard** — event ingest, alarm correlation, video-on-card-read
- **AMAG Symmetry** — full event sync
- **Avigilon Access Control** — native event bridge
- **Brivo, Kisi, Verkada Access** — cloud-to-cloud REST integration
- **Open Supervised Device Protocol (OSDP)** readers — direct ingest on hardware integrations

We provide the SOC operator the badge holder photo and access log inline with the video event. Door propped open at 2 a.m. with the wrong badge ID? Operator sees the video, the badge holder photo, and the door history on one screen.

## Alarm panel integration

UL-listed central station receiver. We ingest from Bosch, DMP, Honeywell, Napco, and DSC panels over IP, dialer, or cellular. Alarm signals are correlated with video at the SOC — every signal gets visual verification before LE dispatch.

## ITSM and ticketing

- ServiceNow — incidents auto-created for camera offline events, with run-of-show fields populated
- Jira Service Management — same
- Freshservice, Zendesk — REST webhook into ticket creation

Closed-loop workflow: SOC opens a ticket on a camera health event, field tech updates it from mobile during service, customer sees status without a phone call.

## ERP and accounting

- SAP — purchase order and asset tag integration for capex hardware
- Oracle Fusion — same
- NetSuite — billing reconciliation for managed services

Where it matters: the camera asset tag on the trailer matches the line item on the SAP PO matches the lease entry on the GL. Audit-clean from day one.

## How an integration project runs

Week 1 — Scoping call with your IT, security, and operations leads. Inventory audit. API access provisioning.

Week 2 — Sandbox integration in a non-production environment. SSO setup (SAML 2.0, OIDC). Role mapping.

Week 3 — User acceptance testing. Operator training on the merged console.

Week 4 — Production cutover. Side-by-side parallel for 30 days before decommissioning legacy.

Most integrations close inside 30 days. Complex multi-system integrations run 60–90 days with milestones.

## Security of the integration itself

SAML 2.0 / OIDC SSO. SCIM provisioning. API tokens scoped per integration and rotated quarterly. All API traffic over TLS 1.3. Audit logs exportable to your SIEM (Splunk, Datadog, Sentinel). SOC 2 Type II report available under NDA.
