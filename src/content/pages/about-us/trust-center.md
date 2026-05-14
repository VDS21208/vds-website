---
url: /about-us/trust-center
collection: about-us
pageType: Trust
parent: /about-us
status: Launch
seoTitle: Trust Center | Compliance, Security, Data Residency | VDS
metaDescription: 'VDS Trust Center: NDAA Section 889, AWS Cloud Partner, TLS 1.3, AES-256, RBAC/MFA, US-only data residency, SOC 2 Type II in progress'
announcementBar: ''
h1: Trust is documented. Not asserted.
heroEyebrow: Trust Center
heroSubhead: Every compliance posture, encryption standard, data residency commitment, and audit timeline is published here with version dates and points of contact. If your procurement team needs evidence, this is where it lives.
heroCTAPrimary:
  label: Request security documentation 
  url: /request-a-quote
heroCTASecondary:
  label: Review NDAA compliance detail 
  url: /request-a-quote
heroStats:
- NDAA Section 889
- AWS Cloud Partner
- TLS 1.3 / AES-256
- RBAC + MFA
- US-only data
- SOC 2 Type II in progress
heroImage: ''
faq:
- q: Can I get a copy of your penetration test report?
  a: Yes, under NDA. Most recent report covers Q4 2025. Request via security@visiondetectionsystems.com.
- q: Do you support customer-managed encryption keys (CMEK)?
  a: On the enterprise tier, yes, with AWS KMS customer-managed key integration. Available at contract.
- q: What is your uptime track record on the VMS?
  a: 99.93% measured over the trailing 12 months ending March 2026. Status page is at status.visiondetectionsystems.com.
- q: How long until SOC 2 Type II is complete?
  a: Target Q4 2026. Interim Type I documentation is available now for enterprise customers under NDA.
- q: Is VDS HIPAA-eligible?
  a: VDS is not currently a Business Associate under HIPAA. We do not process protected health information. If your use case involves PHI, contact security@visiondetectionsystems.com to discuss scope.
finalCTAHeading: Procurement needs evidence. Send the questionnaire.
finalCTABody: Most security questionnaires close in 5 business days. Send yours to security@visiondetectionsystems.com or use the contact form below.
finalCTAButtons:
- label: Request security docs [/contact-us]
  url: /about-us/ndaa-compliance/
schemaType: AboutPage, WebPage
internalLinks: /about, /about-us/ndaa-compliance, /platform, /platform/soc, /privacy-policy, /terms-of-service, /contact-us
canonical: https://visiondetectionsystems.com/about-us/trust-center
ogTitle: Trust is documented. Not asserted.
ogDescription: 'VDS Trust Center: NDAA Section 889, AWS Cloud Partner, TLS 1.3, AES-256, RBAC/MFA, US-only data residency, SOC 2 Type II in progress'
ogImage: https://visiondetectionsystems.com/assets/og-default.jpg
ogType: website
robots: index, follow
speakable: .hero-h1, .hero-subhead, h2
author: Vision Detection Systems
tags: mobile surveillance, VDS
notes: Most important enterprise-buyer page on the site. Keep all numbers current. Update SOC 2 status quarterly. Update uptime number monthly.
---

This page is for the people on your team who ask hard questions before a contract gets signed — IT, security, legal, procurement, and compliance. Each section below is a commitment we will sign in writing.

## 1. Hardware compliance — NDAA Section 889

Every VDS mobile unit shipped since 2022 is fully compliant with the National Defense Authorization Act Section 889 Part A and Part B prohibitions on covered telecommunications equipment. We do not source camera modules, video encoding silicon, or wireless chipsets from any of the five prohibited entities or their subsidiaries.

Our bill-of-materials traceability is reviewed quarterly. We maintain supplier attestations on file for every component. Customers under federal contract or federally-funded grants can request the attestation package via the procurement contact below.

See the dedicated NDAA compliance page for full clause language, prohibited-entity tracking, and our written attestation template.

## 2. Cloud infrastructure — AWS Cloud Partner

The VDS VMS runs on Amazon Web Services in US East (Virginia) and US West (Oregon) regions, with no data replication outside US borders. VDS holds active AWS Cloud Partner status with verified architecture review.

Cloud-side controls in active enforcement:

- **Encryption in transit:** TLS 1.3 on all customer-facing endpoints, certificate-pinned VMS mobile apps, no fallback to TLS 1.1 or earlier.
- **Encryption at rest:** AES-256 on all stored video, metadata, audit logs, and database content, using AWS KMS-managed keys with annual rotation.
- **Network isolation:** Customer tenants are logically isolated. Inter-tenant access is impossible by design — there is no shared schema between customers.
- **Vulnerability management:** Continuous scanning via AWS Inspector and a quarterly third-party penetration test. Latest test report available under NDA.

## 3. Identity, access, and audit

- **Role-Based Access Control (RBAC):** Five role tiers from view-only to global admin. Permissions are inheritable but not transferable. Every role change writes to the audit log.
- **Multi-Factor Authentication (MFA):** TOTP and WebAuthn supported. MFA is enforced for all admin-tier accounts by default and configurable down to view-only by the customer's global admin.
- **SSO:** SAML 2.0 and OIDC supported for enterprise tenants. SCIM provisioning available on the enterprise tier.
- **Audit log:** Every user action, configuration change, video export, and SOC operator interaction is logged with timestamp, user ID, source IP, and result. Logs are immutable and retained for 13 months by default. Longer retention is available by contract.

## 4. Data residency and retention

All customer video, metadata, account data, and audit logs reside in US-based AWS regions. There is no replication to non-US infrastructure for any purpose, including disaster recovery, analytics, or third-party processing.

Default video retention is 30 days hot, 90 days cold-storage. Customer-configurable up to 365 days hot retention. Retention extension does not change data residency — all extended storage remains in US regions.

Customer data is never sold, never licensed, and never used to train external AI models. VDS internal model training uses synthetic and consented data only. This commitment is in every MSA.

## 5. SOC operations and personnel

The VDS Security Operations Center is 100% US-staffed, with operators based in the continental US. There are no offshore monitoring partners, no overnight handoffs to non-US central stations, and no third-party operators with access to customer video.

All SOC operators complete:
- 80-hour initial certification covering escalation protocol, talk-down procedure, and platform operation
- Background check and drug screening (clean current results required)
- Annual recertification with documented competency review
- Quarterly drill participation on simulated P1 events

Average operator tenure as of 2026 is 2.7 years. Operator-to-camera ratio is held below 80:1 during peak hours.

## 6. SOC 2 Type II — in progress

VDS is in active engagement with an independent auditor for SOC 2 Type II certification. Target completion is Q4 2026. The scope includes Security, Availability, and Confidentiality trust service criteria. Customers under enterprise agreement receive interim Type I documentation and direct auditor contact on request.

## 7. Privacy regulations

VDS operates in compliance with applicable US state privacy laws including CCPA (California), CPA (Colorado), VCDPA (Virginia), and successor frameworks as they take effect. We are not a GDPR-scoped controller as our service is US-only. We respond to verified data subject requests within statutory timelines. See the Privacy Policy for the formal mechanism.

## 8. Incident response and disclosure

Material security incidents are disclosed to affected customers within 72 hours of confirmation, in line with industry-standard breach notification practices and applicable state law. We have had zero customer-data security incidents requiring disclosure since founding. We will publish this status on this page if that changes.

## Document requests and security questionnaires

For SIG, CAIQ, custom security questionnaires, MSA security addenda, BAA discussions, or one-off documentation requests:

Procurement and security desk: **security@visio