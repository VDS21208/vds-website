---
url: /platform/cloud-video-surveillance
collection: platform
pageType: Platform Detail
parent: /platform
status: Launch
seoTitle: Cloud Video Surveillance | AI VisionStream VMS | VDS
metaDescription: Cloud video surveillance built on AWS. Camera-agnostic ONVIF/RTSP, 30/60/90-day retention, multi-site single pane, TLS 1.3, AES-256, US-only.
announcementBar: ''
h1: Cloud Video Surveillance Without an On-Site Recorder
heroEyebrow: AI VisionStream Platform
heroSubhead: AWS-backed VMS. Camera-agnostic over ONVIF and RTSP. Multi-site view in one browser tab. No DVR, no NVR, no Windows server in a closet.
heroCTAPrimary:
  label: Request a Live Demo
  url: /request-a-quote
heroCTASecondary:
  label: See Platform Specs
  url: /request-a-quote
heroStats:
- AWS Cloud Partner • TLS 1.3 / AES-256 • 30/60/90-day retention • Sub-3-second alerts
heroImage: ''
faq:
- q: Do I need to replace my existing cameras?
  a: No, if they speak ONVIF or RTSP. We onboard the existing fleet, validate stream quality, and add cameras only where coverage gaps exist.
- q: What happens if the cellular link drops?
  a: The edge unit buffers locally up to 72 hours depending on configuration. Footage syncs to cloud when the link restores. SOC is notified at the 5-minute mark.
- q: Can I export footage for law enforcement?
  a: Yes. Operators with export rights generate a time-bounded clip; the system writes a chain-of-custody record including the requesting user, timestamp, and SHA-256 hash of the export.
- q: Is data ever stored outside the US?
  a: No. All processing and storage occurs in US AWS regions. No offshore support access to recorded video.
- q: How is this different from a traditional VMS?
  a: No on-site server, no port forwarding, no annual license renewal cycle, no headend to fail. Updates ship from AWS, not a USB stick.
finalCTAHeading: See AI VisionStream on your cameras
finalCTABody: 30-minute live demo with your floor plan and camera count. We will show retention, AI events, audit log, and user permissions on actual deployments.
finalCTAButtons:
- label: Schedule Demo
  url: /contact-us/
schemaType: Product
internalLinks: /platform/platform, /platform/api-sdk-access, /services/24-7-soc, /guides/security-video-retention
canonical: https://visiondetectionsystems.com/platform/cloud-video-surveillance
ogTitle: Cloud Video Surveillance Without an On-Site Recorder
ogDescription: Cloud video surveillance built on AWS. Camera-agnostic ONVIF/RTSP, 30/60/90-day retention, multi-site single pane, TLS 1.3, AES-256, US-only.
ogImage: https://visiondetectionsystems.com/assets/og-default.jpg
ogType: website
robots: index, follow
speakable: .hero-h1, .hero-subhead, h2
author: Vision Detection Systems
tags: AI VisionStream, cloud VMS, video analytics
notes: Anchor page for "cloud video surveillance" keyword. Link from /platform and from MSU guide.
---

AI VisionStream is the video management system inside every VDS deployment. It runs on AWS in US-only regions, ingests ONVIF and RTSP streams from any compliant camera, and presents 500+ deployments across 30+ states through a single browser session.

## What "cloud-native" actually means here

There is no headend appliance on your site. No NVR to reimage, no Windows Server patch cycle, no SD card to fail at month nine. Cameras stream to the edge unit on the trailer or building, which buffers locally and forwards to AWS over encrypted cellular, 5G, or wired uplink. Recording, AI inference, user management, and storage all live in the cloud.

Practical consequences:

- Add a site by shipping hardware. No headend configuration on the customer LAN.
- A failed camera does not take down a site. The other cameras keep recording.
- Firmware and VMS updates ship from us. No truck roll required.
- Bandwidth-constrained sites use H.265 with adaptive bitrate; storage cost stays predictable.

## Camera-agnostic

AI VisionStream is ONVIF Profile S/T and RTSP compliant. If a camera speaks either protocol — and 95%+ of fixed IP cameras manufactured after 2018 do — it integrates. We have customers running Axis, Hanwha, Bosch, Hikvision, Dahua, Pelco, Avigilon, Ubiquiti, and a long tail of OEM rebrands on the same tenant. NDAA Section 889 compliance is tracked per camera; the platform itself is unrestricted.

## Multi-site single pane

One login, every site. Filter by region, site group, camera type, or status. Pre-built map view plots devices over satellite imagery. A regional loss-prevention manager covering 40 retail locations gets the same interface as a one-trailer construction project.

User permissions are role-based (RBAC) with optional MFA enforcement at the tenant level. Typical role hierarchy: Tenant Admin, Site Manager, Operator, Viewer, External Auditor. Every login, view, export, and share-link action writes to an immutable 12-month audit log.

## Retention tiers

Pick per camera, per site, or per tenant:

- **30 days** — operational review, day-to-day incident response, lowest cost
- **60 days** — most common default for retail, logistics, and construction
- **90 days** — healthcare, finance, government, and litigation-sensitive deployments

Need longer? 1-year and 7-year evidence holds are available as add-ons, billed by GB/month. Retention is enforced server-side; users cannot delete recordings before policy expiry.

## AI events, not just recording

The same stream that records is analyzed in real time:

- **License plate recognition** at 95%+ accuracy with sub-3-second alert delivery
- **Intrusion zones** with polygon geometry and time-of-day rules
- **Virtual tripwires** with directionality (in, out, both)
- **Loitering detection** with dwell-time thresholds
- **Crowd / occupancy counting** with min-max alerting

Events route to the VDS 24/7 SOC, to customer SMS/email/webhook, or to a third-party PSIM via our REST API.

## Security posture

- TLS 1.3 in transit, AES-256 at rest
- US-only AWS regions (us-east-1, us-west-2 primary)
- MFA available tenant-wide, enforceable by role
- SAML SSO supported (Okta, Azure AD, Google Workspace)
- 12-month immutable audit log, exportable for compliance review
- controls inherited from AWS; VDS report available under NDA

#