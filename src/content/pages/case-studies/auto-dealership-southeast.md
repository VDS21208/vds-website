---
url: /resources/case-studies/auto-dealership-southeast
collection: case-studies
pageType: Case Study
parent: /resources/case-studies
status: Expansion
seoTitle: 'Case Study: Auto Dealership Group Catalytic Converter Theft'
metaDescription: A Southeast auto dealer group eliminated catalytic converter theft across 7 lots in 90 days with Swift Deploy and LPR integration
announcementBar: ''
h1: Seven lots, four catalytic converter thefts per month, zero in 90 days
heroEyebrow: Case Study — Auto & Dealership
heroSubhead: 'A Southeast dealer group deployed Swift Deploy with LPR integration across seven new and used lots. Pre-deployment baseline: an average of four catalytic converter thefts per month. Ninety days post-deployment: zero. Annual avoided loss: $128,000.'
heroCTAPrimary:
  label: Download PDF
  url: /request-a-quote
heroCTASecondary:
  label: Scope a dealer lot deployment
  url: /request-a-quote
heroStats:
- 4/mo to 0
- 90 days
- $128K avoided
- 7 lots
heroImage: ''
faq: []
finalCTAHeading: Scope a dealer lot deployment
finalCTABody: A 30-minute call covers your lot count, current loss baseline, and LPR integration requirements. We send back a written configuration inside 48 hours.
finalCTAButtons:
- label: Request an assessment
  url: Download the PDF
schemaType: Article
internalLinks: /products/swift-deploy-surveillance-trailer, /platform/lpr, /industries/auto-dealership, /platform/soc, /resources/case-studies/mid-atlantic-gc
canonical: https://visiondetectionsystems.com/resources/case-studies/auto-dealership-southeast
ogTitle: Seven lots, four catalytic converter thefts per month, zero in 90 days
ogDescription: A Southeast auto dealer group eliminated catalytic converter theft across 7 lots in 90 days with Swift Deploy and LPR integration
ogImage: https://visiondetectionsystems.com/assets/og-default.jpg
ogType: website
robots: index, follow
speakable: .hero-h1, .hero-subhead, h2
author: Vision Detection Systems
tags: auto dealership security, catalytic converter theft
notes: Customer anonymized. Outcome verified against customer's internal loss log and SOC event records.
---

## Customer profile

A privately held automotive dealer group operating seven retail lots across two Southeast metro markets. The group sells four franchised new-vehicle brands plus a centralized used-vehicle operation. Combined nightly inventory exposure: approximately 1,400 vehicles. The group requested anonymization for competitive reasons.

## The problem

For the 18 months prior to engagement, the dealer group averaged 4.1 catalytic converter thefts per month across the seven lots — concentrated heavily on hybrid and pickup inventory parked on outer-perimeter rows. Average per-incident cost: $2,600 (replacement converter, labor, paint touch-up where the underbody saw exposure, customer-loaner expense when a sold unit was found cut before delivery). Annualized exposure: approximately $128,000 in direct replacement cost, plus a harder-to-quantify reputational cost when buyers found out a unit on the lot had been cut.

The group's existing security posture consisted of standard fixed dome cameras recording to a local DVR, motion-activated floodlights, and an overnight alarm-monitored intrusion system that triggered on the showroom doors only. None of these systems had produced a single successful intervention against the converter theft pattern, because the cuts were happening 80+ feet from the showroom in 90 seconds or less.

The general manager evaluated three options: hire overnight security guards across the seven lots (estimated $610,000/year), install perimeter fencing and gated lots (estimated $340,000 capex, would conflict with the brand's franchise display standards), or deploy mobile surveillance with LPR and live monitoring.

## The configuration

VDS deployed Swift Deploy units configured for dealer lot use, with the following adaptations:

- **One Swift Deploy per lot at the highest-loss two lots; shared coverage at the remaining five lots via three units rotating on a two-week reposition cycle.**
- **LPR integration:** Every vehicle entering and leaving the lot during after-hours had its plate captured, timestamped, and logged to the Cloud VMS. The SOC was given a hot-list of known regional theft-crew plates supplied by local LE intelligence units.
- **Thermal-mode evening hours:** From 9pm to 5am, units ran in thermal-priority mode to identify human heat signatures crossing the perimeter regardless of light conditions.
- **Audio talk-down:** Enabled at every unit with a dealer-specific script tied to the group's preferred LE coordination protocol.

The VDS SOC monitored all units 24/7. The dealer group's IT team integrated the VMS event feed into the group's existing incident-tracking tool, and the GM received a weekly summary email.

## The first 30 days

Within the first week, the SOC issued nine audio talk-downs across the seven lots. Two of those involved subjects on hands and knees beside vehicles with reciprocating saws visible. Both subjects fled on first audio contact. LE was dispatched on both events and recovered tools and partial converter inventory from a vehicle the suspects abandoned a block away.

By week three, the LPR hot-list had flagged the same vehicle plate at two different lots on two different nights. That plate was supplied to LE, who linked it to a multi-county theft ring that was indicted four months later in a federal case unrelated to this customer's loss but informed in part by the LPR data the SOC had captured.

## The 90-day outcome

Across the 90-day measurement window:

- **Catalytic converter thefts:** Zero (down from an expected 12 across that window based on baseline rate).
- **Direct avoided loss:** $31,000 over the 90-day window; annualized: $128,000.
- **Audio talk-downs:** 41 across the seven lots.
- **LE dispatches:** 6. Three resulted in arrests directly tied to this customer's lots. One additional LPR record contributed to a regional theft-ring indictment.
- **False alarm rate:** Under 4% of SOC-reviewed events. Slightly higher than the platform average due to legitimate after-hours porter traffic until the SOC tuned the schedule whitelist.
- **Insurance carrier response:** The group's commercial auto inventory policy was reviewed at next renewal with no rate increase, and the carrier requested a copy of the deployment configuration as a reference for other dealer clients.

## What the customer said

The GM at the highest-loss lot summarized the deployment at the 90-day review: "We had spent two years buying alarms that called us after the fact. The Swift Deploy talks back before the saw comes out."

## Configuration notes for other dealer groups

Two adjustments we now recommend by default for dealer lot deployments. First, run units in thermal-priority mode after 9pm rather than relying solely on visible-light. Catalytic converter theft is almost always a ground-level activity in low-light conditions, and thermal is decisive. Second, integrate LPR with whatever local LE intelligence unit will accept a hot-list feed. The deterrent value of a known plate getting flagged is significant beyond the individual customer.
