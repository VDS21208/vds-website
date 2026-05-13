---
url: /about-us/trust-center/cybersecurity
collection: about-us
pageType: Trust Sub-Page
parent: Trust Center
status: Launch
seoTitle: VDS Cybersecurity — TLS 1.3, AES-256, MFA, SAML SSO
metaDescription: 'Vision Detection Systems cybersecurity controls: TLS 1.3 in transit, AES-256 at rest, RBAC with MFA, SAML/OIDC SSO, IP allowlisting'
announcementBar: ''
h1: Cybersecurity Controls
heroEyebrow: Trust Center
heroSubhead: The technical controls that govern how VDS protects video, metadata, customer accounts, and SOC operations against unauthorized access and modification.
heroCTAPrimary:
  label: Request Security Documentation
  url: /request-a-quote
heroCTASecondary:
  label: Talk to Security Engineering
  url: /request-a-quote
heroStats:
- TLS 1.3
- AES-256
- SAML/OIDC SSO
- 12-month immutable audit log
- Annual pentest
heroImage: ''
faq:
- q: Is VDS SOC 2 certified?
  a: SOC 2 Type II audit is in progress with completion targeted for late 2026. Bridge letter and current control documentation available under NDA in the interim.
- q: Can my security team review your pentest report?
  a: Yes, under NDA, for enterprise customers and qualifying prospects. Request via the form on this page.
- q: Do you support hardware security keys for SOC operators?
  a: Yes. All SOC operator workstations are configured with hardware key authentication for both VDS internal systems and customer portal access.
- q: What happens if a trailer is stolen?
  a: Local storage is encrypted, and the unit cannot authenticate to the cloud without valid credentials we revoke immediately. We have not had a stolen trailer result in any data exposure across 500+ deployments.
- q: Are security questionnaires (SIG, CAIQ) available?
  a: Yes. Standard Information Gathering (SIG Lite and SIG Core) and CAIQ v4 responses are maintained and available under NDA.
finalCTAHeading: Need More Detail for Your Security Review?
finalCTABody: Enterprise security teams get the full control documentation package, pentest summary, and SIG/CAIQ responses under NDA. One form, one business day turnaround.
finalCTAButtons:
- label: Request Security Documentation
  url: Talk to Security Engineering
schemaType: WebPage (Trust Center sub-page, breadcrumbed under Organization)
internalLinks: /about-us/trust-center, /about-us/trust-center/data-privacy, /about-us/trust-center/sla-uptime, /soc, /contact
canonical: https://visiondetectionsystems.com/about-us/trust-center/cybersecurity
ogTitle: Cybersecurity Controls
ogDescription: 'Vision Detection Systems cybersecurity controls: TLS 1.3 in transit, AES-256 at rest, RBAC with MFA, SAML/OIDC SSO, IP allowlisting'
ogImage: https://visiondetectionsystems.com/assets/og-default.jpg
ogType: website
robots: index, follow
speakable: .hero-h1, .hero-subhead, h2
author: Vision Detection Systems
tags: cybersecurity trust, SOC 2
notes: This is the most-asked-for page by enterprise security review teams. Keep technical language precise — the audience is security engineers and CISOs, not marketing buyers. PGP key for security@ should be linked or fingerprint-displayed once the team confirms the current key.
---

## Encryption

### In transit
All traffic between deployed VDS hardware, the AI VisionStream cloud platform, the customer portal, and SOC operator workstations runs over TLS 1.3. We do not accept TLS 1.0 or 1.1 connections at any tier. Cipher suite selection follows current NIST and IETF guidance — forward secrecy is required, RC4 and 3DES are blocked, weak Diffie-Hellman groups are blocked.

Cellular uplink from trailer to AWS ingress uses dual-encryption: the carrier's LTE/5G link encryption plus our application-layer TLS 1.3 wrapper. We do not depend on carrier link encryption alone.

### At rest
All stored video, analytics output, audit log entries, and customer metadata are encrypted at rest with AES-256. Encryption keys are managed in AWS KMS under customer-isolated key hierarchies. Key rotation runs on a defined schedule and on-demand if a compromise is suspected. No customer data sits unencrypted on any VDS-controlled storage at any point.

## Authentication and access control

### Role-based access control (RBAC)
Every customer portal account is assigned a role: Account Owner, Site Manager, Operator, Read-Only, Auditor. Each role maps to a defined permission set covering camera access, alert acknowledgement, video export, user management, and audit log visibility. Roles are configured by the customer's Account Owner — VDS does not assign portal roles inside customer tenants.

### Multi-factor authentication (MFA)
MFA is required for all administrative roles and available for all roles. TOTP (Google Authenticator, Authy, 1Password) is supported standard. WebAuthn / FIDO2 hardware keys are supported and recommended for Account Owner accounts.

### Single sign-on
Enterprise customers can federate the VDS portal to their identity provider via SAML 2.0 or OpenID Connect. We have completed integrations with Okta, Microsoft Entra ID, Google Workspace, Ping Identity, and JumpCloud. Just-in-time provisioning and SCIM user lifecycle management are supported on enterprise plans.

### IP allowlisting
Customer portal access can be restricted to defined IP ranges or CIDR blocks at the tenant level. SOC operator access is always restricted to VDS-managed network egress; we do not allow SOC operations from arbitrary IPs.

## Audit log

Every authentication event, configuration change, video access event, alert acknowledgement, and administrative action is written to an immutable audit log retained for 12 months minimum. The log is append-only — there is no operator function that can edit or delete entries.

Customers can export the audit log to CSV or stream it via webhook to a SIEM. We have customers feeding the log into Splunk, Datadog, and Microsoft Sentinel.

## Penetration testing

VDS contracts an independent third-party penetration test annually, covering the AI VisionStream cloud platform, customer portal, mobile applications, and deployed trailer ingress. Test methodology follows OWASP ASVS Level 2 minimum and NIST SP 800-115 process guidelines. The most recent test was completed in Q4 2025; the next is scheduled for Q4 2026.

Findings are remediated on a severity-based schedule: critical findings within 7 days, high within 30, medium within 90. The summary report is available under NDA to enterprise customers' security teams.

## Vulnerability disclosure

VDS operates a responsible-disclosure program for security researchers. Reports route to security@visiondetectionsystems.com with PGP encryption supported. We acknowledge inbound reports within two business days, triage to a severity within five, and commit to coordinated disclosure on a timeline appropriate to the finding.

We do not currently operate a paid bug bounty. We do credit researchers on a Hall of Fame page when they request public acknowledgement and the report meets quality criteria.

## Hardware and field operations

Deployed trailers run a hardened Linux operating system. Remote SSH is disabled by default; out-of-band management runs through a dedicated, mutually-authenticated channel. Firmware updates are signed, verified, and applied during defined maintenance windows. We do not push unsigned firmware. Ever.

Trailers do not store customer video locally beyond a short rolling buffer; primary storage is cloud-side under AWS US-only regions.
