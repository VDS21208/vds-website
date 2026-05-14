---
url: /resources/faq
collection: singletons
pageType: FAQ
parent: /resources
status: Launch
seoTitle: Frequently Asked Questions | VDS
metaDescription: Thirty questions across products, deployment, pricing, monitoring, platform, compliance, and support. Written for procurement, security directors
announcementBar: ''
h1: The 30 questions buyers ask most
heroEyebrow: Master FAQ
heroSubhead: Procurement, technical, and operational questions answered directly. If your question is not here, ask — we add new entries when buyers raise them in assessments.
heroCTAPrimary:
  label: Ask a question
  url: /request-a-quote
heroCTASecondary:
  label: Request an assessment
  url: /request-a-quote
heroStats:
- 30 questions
- 7 categories
- Updated quarterly
heroImage: ''
faq: []
finalCTAHeading: Still have a question?
finalCTABody: If your question is not here, ask. Our engineering and SOC teams reply directly — most responses inside 24 hours.
finalCTAButtons:
- label: Ask a question
  url: Request an assessment
schemaType: FAQPage
canonical: https://visiondetectionsystems.com/resources/faq
ogTitle: The 30 questions buyers ask most
ogDescription: Thirty questions across products, deployment, pricing, monitoring, platform, compliance, and support. Written for procurement, security directors
ogImage: https://visiondetectionsystems.com/assets/og-default.jpg
ogType: website
robots: index, follow
tags: mobile surveillance, VDS
---

## Products

**1. What is the difference between Sky Guard MSU, Swift Deploy, and Boundary Guard Pro?**
Sky Guard MSU ($2,200/mo) is the static deployment unit optimized for multi-month coverage at a single site — utility substations, long-cycle construction, fixed perimeter applications. Swift Deploy ($1,500/mo) is the redeployable mobile unit for project-based sites and rotating coverage; it ships with the lowest deployment time in the lineup. Boundary Guard Pro ($1,800/mo) is the line-of-detection unit for linear perimeters — fences, yard boundaries, rail spurs, pipeline right-of-way. All three feed into the same Cloud VMS and are monitored by the same SOC.

**2. Can the units run without grid power?**
Yes. All three units are solar-autonomous with battery storage sized for multi-day sustained operation in worst-case low-light conditions. Sky Guard has the largest battery and solar array; Swift Deploy is sized for typical mid-Atlantic and Southeast conditions. We size the unit to the site latitude and shading profile during the assessment.

**3. What cameras do the units carry?**
Each unit carries a dual-spectrum array: a daylight PTZ with optical zoom, a fixed wide-angle visible-light camera, and a thermal imager for low-light and obscured-condition detection. Boundary Guard Pro adds line-of-detection radar for long linear perimeters.

**4. Is the VMS proprietary or camera-agnostic?**
Camera-agnostic. The Cloud VMS supports our hardware, the customer's existing IP cameras, and most major manufacturers. We commonly deploy alongside existing fixed-camera systems rather than replacing them.

**5. What is the deployment time?**
Swift Deploy: roughly 27 minutes from trailer drop to first frame on a typical site. Sky Guard MSU: a single day per site including site survey, positioning, solar orientation, and SOC commissioning. Boundary Guard Pro: typically two days for a 1,500-foot linear run including calibration.

## Deployment

**6. Do I need to prepare the site?**
Minimal. We need vehicle access, a level positioning area, and unobstructed sky for solar. We handle everything else including positioning, anchoring where required, and network commissioning.

**7. What network does the unit use?**
Cellular by default on a redundant multi-carrier modem. If the site has Wi-Fi or wired uplink available we will use it as primary with cellular as failover. We do not require customer network access for the unit to operate.

**8. Can the unit be repositioned?**
Swift Deploy: yes, easily, by design. Sky Guard MSU: yes but typically as a planned move at month-end with SOC coordination. Boundary Guard Pro: yes but reconfiguration of the line-of-detection geometry adds a half-day per move.

**9. What is the typical deployment footprint?**
Swift Deploy occupies roughly a single parking space. Sky Guard MSU occupies approximately a 12x16 ft positioning area. Solar Camera Poles take a 4x4 ft anchor footprint.

**10. Can you deploy across multiple sites under one contract?**
Yes. Most customers with three or more sites operate under a master services agreement with site-specific schedules.

## Pricing

**11. What is included in the monthly price?**
Hardware, 24/7 SOC monitoring, Cloud VMS access, audio talk-down, LE dispatch coordination, software updates, and standard support. The published monthly figures are all-in for a standard configuration.

**12. Are there setup or deployment fees?**
A one-time deployment fee covers site survey, transport, and commissioning. The fee varies by site complexity and distance from the nearest VDS deployment hub. Standard sites in the Mid-Atlantic and Southeast typically fall in a $1,200 to $2,500 range per unit.

**13. What is the contract length?**
Standard term is 12 months. Multi-year contracts (24 or 36 months) carry a modest rate reduction. Month-to-month is available for short-term projects at a premium.

**14. Can I cancel mid-term?**
Yes, with 30 days notice and an early-termination payment that varies by remaining term. We do not hold customers to a deployment that is not working.

**15. Do you offer financing or capex purchase?**
The standard model is subscription. For customers with a hard capex preference, we offer a buyout structure on Sky Guard MSU. Swift Deploy is subscription-only because its value proposition is the redeployability.

## Monitoring

**16. Where is the SOC located?**
Pikesville, Maryland. All operators are US-based and US-based only. We do not offshore monitoring.

**17. How fast is escalation?**
SOC operator verification typically within 30 seconds of an AI-flagged event. Audio talk-down within 60 seconds for verified threats. LE dispatch initiated simultaneously with talk-down for verified perimeter intrusions.

**18. How does the SOC distinguish between a threat and a false alarm?**
A trained operator reviews the AI-flagged event before any escalation. The platform's 97% false alarm reduction figure reflects events that the AI flags but the operator de-prioritizes after human review. The customer is not notified for events the operator clears.

**19. Does the SOC dispatch LE automatically?**
No. LE dispatch is operator-decided based on the verified threat profile and the customer-specific protocol established at deployment. For some customers (utilities, high-value cargo) we dispatch on every verified breach. For others we dispatch only on specific threat patterns.

**20. What happens if my alarm goes off at 3am?**
The SOC operator verifies the event. If it is a threat, audio talk-down is issued, LE is dispatched if the protocol requires it, and the designated customer contact is notified per the on-file escalation tree. You wake up to a written incident report, not to a phone call about a false alarm.

## Platform and tech

**21. What is the data retention policy?**
Standard is 30 days of full video retention in the Cloud VMS. Longer retention (90 days, 365 days, indefinite) is available as a configuration option. Event metadata and incident reports are retained for the life of the customer relationship plus seven years.

**22. Is the platform AWS-hosted?**
Yes. VDS is an AWS Cloud Partner. The Cloud VMS runs in AWS US regions with multi-AZ redundancy.

**23. Can my IT team integrate with the VMS?**
Yes. The platform offers API access for event feeds, video clip retrieval, and configuration management. Common integrations: SIEM platforms, incident-management tools, custom dashboards. Documentation is available to active customers.

**24. What about user access controls?**
Role-based access with named user accounts. Standard roles: administrator, viewer, operator, auditor. Single sign-on supported for enterprise customers.

## Compliance

**25. Is the hardware NDAA Section 889 compliant?**
Yes. All VDS hardware is NDAA Section 889 compliant. Documentation including supply-chain attestation is available on request and is included in proposals to federal contractors and utilities by default.

**26. What about data sovereignty?**
All Cloud VMS data is stored in AWS US regions. We do not transit customer video data through non-US infrastructure.

**27. Are you SOC 2 compliant?**
SOC 2 Type II audit is in progress. Current status and any interim attestations are available to procurement teams on request.

## Support

**28. What hours is technical support available?**
24/7 for active SOC alerts and platform availability. Business-hour support (8am to 8pm ET, Monday through Saturday) for configuration changes, account management, and non-urgent technical questions.

**29. Who do I call if a unit goes down?**
The SOC sees the unit go offline before you do — the platform monitors itself. The customer success team will reach out proactively. For customer-initiated requests, every active customer has a named account director with a direct line.

**30. How do I escalate a complaint or a service issue?**
Named account director f