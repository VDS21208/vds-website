---
url: /about-us/trust-center/data-privacy
collection: about-us
pageType: Trust Sub-Page
parent: Trust Center
status: Launch
seoTitle: VDS Data Privacy — US-Only AWS, CCPA, BIPA-Friendly
metaDescription: How Vision Detection Systems handles customer data. AWS US-only residency, tenant isolation, no biometrics or facial recognition, CCPA-compliant
announcementBar: ''
h1: Data Privacy and Handling
heroEyebrow: Trust Center
heroSubhead: How VDS collects, stores, processes, retains, and deletes customer video and metadata. Where the data lives. What we will and will not do with it.
heroCTAPrimary:
  label: Request Privacy Documentation
  url: /request-a-quote
heroCTASecondary:
  label: Read Privacy Policy
  url: /request-a-quote
heroStats:
- AWS US-only
- No facial recognition
- No biometrics
- CCPA-compliant
- 12-month default retention
heroImage: ''
faq:
- q: Can I get a copy of all data you hold on my organization?
  a: Yes — export is built into the customer portal for video, analytics, and audit log. Account metadata export is a support request, fulfilled within 10 business days.
- q: What happens if law enforcement requests our video?
  a: We require valid legal process. We notify the customer unless a court order specifically prohibits notification. We do not provide voluntary access.
- q: Do you have sub-processors?
  a: Yes — AWS for hosting, plus a small set of operational tools. Full sub-processor list is in the DPA and updated when changes are made.
- q: Are signed BAAs available for HIPAA-adjacent customers?
  a: Yes. Enterprise customers with healthcare exposure can execute a BAA. Standard plan does not include BAA terms.
- q: Where can I read the full privacy policy?
  a: Linked from this page footer and at /privacy-policy. The DPA, sub-processor list, and data flow diagram are available under NDA.
finalCTAHeading: Privacy Review for Your Team
finalCTABody: Customer privacy, legal, and compliance teams get the DPA, sub-processor list, data flow diagram, and regional residency attestation. Form below, one business day turnaround.
finalCTAButtons:
- label: Request Privacy Documentation
  url: Read Privacy Policy
schemaType: WebPage (Trust Center sub-page)
internalLinks: /about-us/trust-center, /about-us/trust-center/cybersecurity, /about-us/trust-center/sla-uptime, /privacy-policy, /contact-us
canonical: https://visiondetectionsystems.com/about-us/trust-center/data-privacy
ogTitle: Data Privacy and Handling
ogDescription: How Vision Detection Systems handles customer data. AWS US-only residency, tenant isolation, no biometrics or facial recognition, CCPA-compliant
ogImage: https://visiondetectionsystems.com/assets/og-default.jpg
ogType: website
robots: index, follow
speakable: .hero-h1, .hero-subhead, h2
author: Vision Detection Systems
tags: data privacy
notes: BIPA / facial recognition section is a differentiator versus competitors who do offer facial recognition. Worth keeping prominent. Sub-processor list should be linked once the DPA team confirms the public version.
---

## Where customer data lives

All VDS customer data — video, analytics output, audit logs, account metadata — is stored exclusively in AWS US-East and US-West regions. We do not replicate, mirror, or back up customer data to any non-US AWS region or any non-AWS infrastructure.

This is a contractual commitment, not a default that can drift. The AWS account configuration enforces region restriction at the IAM and bucket policy level. A misconfigured deployment cannot accidentally land data outside the US footprint.

## Tenant isolation

Each customer operates in a logically isolated tenant. Customer A's video, analytics, and metadata are not accessible to Customer B's portal users, Customer B's SOC dashboards, or Customer B's API tokens — ever. Tenant boundaries are enforced at the application layer, the database layer (row-level security on shared tables, customer-specific keys on object storage), and the audit layer.

VDS internal personnel access to customer data is limited to SOC operators handling active alerts and the small set of platform engineering staff who maintain the underlying infrastructure. Every internal access event is logged to the customer's audit log if it touches their tenant.

## What VDS does not do with customer data

We do not share customer video, analytics output, or metadata with any third party without explicit customer authorization. This includes:

- We do not sell or license customer data for analytics, training, or any other secondary purpose
- We do not aggregate identifiable customer footage into training datasets for our AI VisionStream models — model training uses synthetic and licensed datasets
- We do not provide customer data to law enforcement absent a valid subpoena, court order, or customer authorization (and we notify the customer when we receive such a request unless legally prohibited)
- We do not use customer video for marketing, case studies, or promotional materials without an executed release

## Biometrics, facial recognition, and BIPA

VDS AI VisionStream performs object detection (person, vehicle), license plate recognition (LPR), behavior analytics (loitering, perimeter breach), and scene classification. It does not perform facial recognition, biometric identification, or biometric template generation.

This is a deliberate product position. It keeps VDS clear of Illinois BIPA exposure, Texas CUBI exposure, Washington WBPA exposure, and the patchwork of city-level facial recognition bans (Portland OR, San Francisco, Boston, others). It also reflects an operating principle: license plates and behavior patterns are tools we need, biometric identification is not.

If a customer requests facial recognition as a feature, the answer is no. We will not add it.

## CCPA, GDPR, and regulatory posture

### California (CCPA / CPRA)
VDS treats CCPA as a baseline for all US customers regardless of state. We honor verifiable consumer requests for access, deletion, and correction. We do not sell personal information as defined under CCPA. Service provider agreements are in place with all sub-processors.

### Other state privacy laws
VDS complies with comparable state privacy regimes including VCDPA (Virginia), CPA (Colorado), CTDPA (Connecticut), UCPA (Utah), and others as they come into force. We track the state-by-state landscape and update our practices ahead of effective dates.

### GDPR-adjacent practices
VDS does not currently offer services to EU-resident customers, but we follow GDPR-adjacent principles — purpose limitation, data minimization, lawful basis documentation, breach notification timelines — as a baseline. If you are a US-based enterprise with EU operations and need GDPR-equivalent documentation for a global program, talk to us.

## Retention and deletion

### Default retention
Video and analytics data: 30, 60, or 90 days based on customer plan. Audit logs: 12 months minimum, longer on enterprise plans or by contract. Account metadata: retained for the duration of the customer relationship plus the regulatory hold period.

### Customer-initiated deletion
Customers can request deletion of specific video segments, full site data, or full account data at any time. Deletion executes within 30 days, with cryptographic destruction of the underlying encryption keys to render any residual storage unrecoverable.

### Contract termination
On termination, customer data is exportable for 60 days. After 60 days, all customer data is purged from primary and backup storage within 30 add