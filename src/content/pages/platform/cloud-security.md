---
url: /platform/cloud-security
collection: platform
pageType: Platform Detail
parent: /platform
status: Launch
seoTitle: Platform Security & Compliance | NDAA, AWS US-Only | VDS
metaDescription: NDAA Section 889 compliant. AWS US-only. TLS 1.3 in transit, AES-256 at rest. RBAC, MFA, and an immutable 12-month audit log.
announcementBar: ''
h1: Security posture, written down. Verifiable on audit day.
heroEyebrow: Platform security & privacy
heroSubhead: NDAA 889 compliant. AWS US-only data residency. TLS 1.3 in transit, AES-256 at rest. RBAC, MFA, and a 12-month immutable audit log. We publish it because we built it that way.
heroCTAPrimary:
  label: Request security packet
  url: /contact-us
heroCTASecondary:
  label: See compliance details
  url: /about-us/trust-center
heroStats:
- NDAA Section 889
- AWS Cloud Partner
- TLS 1.3 / AES-256
- 12-month audit log
heroImage: ''
faq:
- q: Are you ?
  a:  report available under NDA. Audit cycle is annual.
- q: Can I bring my own KMS key?
  a: Customer-managed keys (CMK) via AWS KMS are available on enterprise tiers.
- q: How long is the audit log retained?
  a: 12 months by default, with extended retention available on request. Exports can be archived indefinitely by the customer.
- q: Have you had a security incident?
  a: No customer-facing breach to date. We publish an annual transparency report at /about-us/trust-center.
- q: How does this compare to other VMS platforms?
  a: We publish our posture. Several large competitors have had public breaches in the last 5 years — see /compare for specifics.
finalCTAHeading: Get the 28-page security packet.
finalCTABody: We will send the full architecture diagram, encryption posture, RBAC model, and pen-test summary under NDA.
finalCTAButtons:
- label: Request packet
  url: /contact-us
schemaType: WebPage
internalLinks: /platform, /about-us/trust-center, /compare, /platform/integrations
canonical: https://visiondetectionsystems.com/platform/cloud-security
ogTitle: Security posture, written down. Verifiable on audit day.
ogDescription: NDAA Section 889 compliant. AWS US-only. TLS 1.3 in transit, AES-256 at rest. RBAC, MFA, and an immutable 12-month audit log.
ogImage: https://visiondetectionsystems.com/assets/og-default.jpg
ogType: website
robots: index, follow
speakable: .hero-h1, .hero-subhead, h2
author: Vision Detection Systems
tags: AI VisionStream, cloud VMS, video analytics
notes: This page does a lot of competitive work via the "what we will not do" list — Flock and Verkada incidents are the implicit contrast. Trust packet link must be live before launch.
---

## Data residency

100% of customer video, metadata, and platform data lives in AWS US regions (us-east and us-west). No replication outside the United States. No third-party CDN for video playback. No offshore support access to customer tenants.

## Encryption

- **In transit:** TLS 1.3 between camera, cloud, and client. RTSP streams are wrapped in TLS at the ingest gateway.
- **At rest:** AES-256 on all stored video and metadata, with AWS KMS-managed keys.
- **Key rotation:** automatic on a 90-day cycle.

## Identity and access

- **MFA** required on every account. TOTP and WebAuthn (hardware key) supported.
- **RBAC** at the user, site, and camera level. Pre-built roles plus custom role definition.
- **SSO** via SAML 2.0 and OIDC. Okta, Azure AD, and Google Workspace tested.
- **Session expiration** configurable per-tenant, default 8 hours.
- **Device registration** for mobile clients with revocation per device.

## Audit log

Every user action, every alert event, every camera state change, every rule edit, every clip share — logged in an immutable 12-month audit trail. Exportable to JSON, CSV, or your SIEM via webhook. Required for customers. Available on every tier.

## Network and supply chain

- **NDAA Section 889 compliant.** No Dahua, no Hikvision, no Lorex, no Huawei in our supply chain or in supported third-party cameras.
- **AWS Cloud Partner** — infrastructure benefits from AWS shared-responsibility controls.
- **Assembled in Pikesville, Maryland.**
- **Penetration tested annually** by an independent third party. Report available under NDA.

## What we will not do

- We will not publish your camera feeds to a public web page
- We will not leave a camera reachable from the open internet
- We will not sell or share customer footage
- We will not run a pattern-of-life database across customer plates
- We will not store data outside the United States

These are not aspirational. They are architectural. If you want the specifics, t