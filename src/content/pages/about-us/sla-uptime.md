---
url: /about-us/trust-center/sla-uptime
collection: about-us
pageType: Trust Sub-Page
parent: Trust Center
status: Launch
seoTitle: VDS SLA — 99.9% Platform Uptime, <60s SOC Response
metaDescription: 'Vision Detection Systems service-level commitments: 99.9% AI VisionStream platform uptime, sub-60-second SOC alert acknowledgement, hardware MTTR targets'
announcementBar: ''
h1: Service Level Agreement and Uptime
heroEyebrow: Trust Center
heroSubhead: The service commitments VDS makes operationally and contractually — platform uptime, SOC response, hardware response, and what happens when we miss.
heroCTAPrimary:
  label: View Status Page
  url: /request-a-quote
heroCTASecondary:
  label: Download SLA Document
  url: /request-a-quote
heroStats:
- 99.9% platform target
- <60s SOC ack
- Credit policy on miss
- Public status page
heroImage: ''
faq:
- q: Where is the public status page?
  a: status.visiondetectionsystems.com — link in this page footer. Subscribe by email or RSS for incident notifications.
- q: How is the 60-second SOC target measured?
  a: Time from alert arrival at the SOC queue to live operator acknowledgement, captured in the SOC tooling and audited monthly.
- q: Can I get a higher uptime commitment on enterprise plans?
  a: 99.95% is available on enterprise plans by contract amendment. The underlying architecture supports it; the elevated target reflects different credit math and is priced accordingly.
- q: What counts as an incident?
  a: Any unplanned event that degrades or interrupts platform availability or SOC operations affecting one or more customers. Posted to the status page within 15 minutes of detection.
finalCTAHeading: Need the Full SLA Document?
finalCTABody: Enterprise and prospect security teams get the contractual SLA document, historical uptime data, and the credit policy worked example.
finalCTAButtons:
- label: View Status Page
  url: /about-us/sla-uptime/
schemaType: WebPage (Trust Center sub-page)
internalLinks: /about-us/trust-center, /about-us/trust-center/cybersecurity, /about-us/trust-center/data-privacy, /platform/soc, /contact-us
canonical: https://visiondetectionsystems.com/about-us/trust-center/sla-uptime
ogTitle: Service Level Agreement and Uptime
ogDescription: 'Vision Detection Systems service-level commitments: 99.9% AI VisionStream platform uptime, sub-60-second SOC alert acknowledgement, hardware MTTR targets'
ogImage: https://visiondetectionsystems.com/assets/og-default.jpg
ogType: website
robots: index, follow
speakable: .hero-h1, .hero-subhead, h2
author: Vision Detection Systems
tags: SLA, uptime
notes: Status page URL (status.visiondetectionsystems.com) is a placeholder — confirm with platform team before launch. Historical uptime numbers cited (median 14s, p95 38s) should be confirmed from SOC ops dashboard before publish.
---

## Platform availability

### Target: 99.9% monthly uptime
AI VisionStream cloud platform — the camera-agnostic VMS, analytics processing, customer portal, and API — runs to a 99.9% monthly uptime target measured against the customer portal availability endpoint.

99.9% per calendar month allows a maximum of approximately 43 minutes of accumulated downtime. Scheduled maintenance windows announced 7+ days in advance are excluded from the calculation; emergency maintenance is included.

### Measurement
Uptime is measured by an external synthetic monitor running from three geographically separated AWS regions at one-minute intervals. The public status page shows real-time and historical uptime against the SLA target. Customers receive monthly uptime reports automatically on enterprise plans; available on request on standard plans.

## SOC response

### Target: <60 seconds alert acknowledgement
Every AI VisionStream alert routed to the SOC is acknowledged by a live US-based operator in under 60 seconds, measured from alert arrival at the SOC queue to operator acknowledgement. This is the SOC's single most-tracked operational metric.

2025 full-year median: 14 seconds. 95th percentile: 38 seconds. 99th percentile: 71 seconds. The handful of >60-second events are post-incident reviewed and root-caused.

### Escalation timing
After acknowledgement, the operator follows the customer's defined escalation tree: video verification, audio talk-down where authorized, on-site contact notification, and law enforcement dispatch when criteria are met. Escalation timing depends on the action — talk-down is typically inside two minutes of alert, LE dispatch is a function of how fast PSAP answers.

## Hardware response

### Mean-time-to-respond (MTTR) on field issues
For trailer hardware issues — sensor fault, cellular degradation, solar performance, physical damage — VDS targets:

- **Critical (unit offline):** Remote diagnosis inside 2 hours, field response inside 24 hours
- **Major (degraded operation):** Remote diagnosis inside 4 business hours, field response inside 72 hours
- **Minor (non-impacting fault):** Remote diagnosis next business day, field response inside 10 business days

MTTR is measured from customer ticket open to issue resolution in the customer portal. Reported monthly on enterprise plans.

## Credit policy

### Platform uptime miss
If AI VisionStream monthly uptime falls below the 99.9% target, customers receive a service credit calculated against the affected service month:

- 99.0% - 99.9% uptime: 10% credit
- 95.0% - 98.99% uptime: 25% credit
- Below 95.0% uptime: 50% credit

Credits are applied to the following month's invoice automatically — no claim form required on enterprise plans. Standard plan credits are filed via support ticket.

### SOC response SLA miss
If SOC median monthly response exceeds the 60-second target, affected customers receive a 10% credit of the SOC service component for that month. Per-incident credits for individual late responses are not standard; pattern misses trigger the credit.

### Hardware response SLA miss
Hardware response misses are credited per-incident under enterprise plans; standard plan hardware response is best-effort against published targets.

## What's excluded from SLA

Following industry standard:

- Force majeure events (natural disasters, regional carrier outages outside our control)
- Customer-caus