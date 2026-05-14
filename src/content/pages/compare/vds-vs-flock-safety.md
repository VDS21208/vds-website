---
url: /compare/vds-vs-flock-safety
collection: compare
pageType: Compare Detail
parent: /compare
status: Launch
seoTitle: VDS vs. Flock Safety — Private Site Security vs
metaDescription: Flock had 67 cameras exposed without passwords in January 2026 and 30+ city contract cancellations since 2025. VDS is private-site, US-only AWS
announcementBar: ''
h1: VDS vs. Flock Safety
heroEyebrow: Private security infrastructure vs. community ALPR
heroSubhead: Flock built a city-scale ALPR network and is currently dealing with 30+ city cancellations, a January 2026 breach that exposed 67 cameras to the open internet without passwords, and an April 2026 California class action. VDS is private-site, hardware-isolated, and audit-logged. Different tools, different risk profiles.
heroCTAPrimary:
  label: Book a 20-minute architecture call
  url: /request-a-quote
heroCTASecondary:
  label: Download the matrix (PDF)
  url: /request-a-quote
heroStats:
- US-only AWS
- NDAA Section 889
- TLS 1.3 / AES-256
- Immutable 12-month audit log
heroImage: ''
faq:
- q: Is VDS hostile to law enforcement?
  a: No. We dispatch LE with live video on customer sites every week. The difference is consent and scope — our customer owns the site, owns the footage, and authorizes the dispatch. We don't run a regional plate-reader network shared across agencies.
- q: What happened with the 67 exposed Flock cameras?
  a: In January 2026, security researchers found 67 Flock Condor cameras accessible on the open internet without authentication. The reporting was published by 404 Media and picked up by Marketplace, 9News, and others. One camera was reportedly pointed at a residential swingset. Sen. Ron Wyden formally called for an FTC investigation.
- q: Has VDS ever had a comparable exposure?
  a: No public exposure incidents on record. Our network architecture (private LTE, no public IP, MFA-required operator access) makes the specific failure mode that hit Flock structurally hard to reproduce.
- q: Can VDS read license plates if we need that capability?
  a: Yes, ALPR is an available analytic on the platform. It's not our primary product line and we don't operate a multi-customer plate-sharing network. If ALPR is your primary need at scale, we'll tell you honestly whether we're the right fit.
- q: We're an HOA — is mobile surveillance even legal in our state?
  a: In every state we operate (30+), yes, when deployed on private property with appropriate signage. We supply a state-specific signage package and a model HOA notice for resident communications.
finalCTAHeading: Replace a Flock contract on one site this quarter
finalCTABody: Send the address and the council vote (or HOA minutes). We'll come back with a 90-day pilot proposal you can put on the next agenda.
finalCTAButtons:
- label: Book the architecture call
  url: /contact-us/
schemaType: Article
internalLinks: /compare, /platform, /platform/soc, /security/architecture, /verticals/municipal
canonical: https://visiondetectionsystems.com/compare/vds-vs-flock-safety
ogTitle: VDS vs. Flock Safety
ogDescription: Flock had 67 cameras exposed without passwords in January 2026 and 30+ city contract cancellations since 2025. VDS is private-site, US-only AWS
ogImage: https://visiondetectionsystems.com/assets/og-default.jpg
ogType: website
robots: index, follow
speakable: .hero-h1, .comparison-summary, .comparison-row
author: Vision Detection Systems
tags: comparison, vs
notes: Detail page. Use Flock's public incidents factually — every claim is sourced. Do not attack ALPR as a category; attack the specific architectural and governance failures.
---

## Why this comparison matters

Flock Safety and VDS are not the same product. Flock sells fixed ALPR cameras into cities, HOAs, and police networks. VDS sells mobile, solar-autonomous surveillance trailers into construction sites, logistics yards, and private commercial properties. The reason this comparison exists is that buyers — particularly municipalities and HOAs — increasingly ask whether the Flock model is appropriate at all, and what a private-site alternative looks like.

The short version: if you're a city council member, an HOA board, or a private property owner who has been pitched Flock and wants a non-Flock path, this page lays out the architectural and political differences clearly.

## The feature matrix

| Capability | Flock Safety | VDS |
|---|---|---|
| Primary use case | License plate reads for police/HOA | Private-site perimeter security |
| Camera type | Fixed pole-mounted ALPR | Mobile solar trailer, multi-sensor |
| Data sharing model | Multi-agency, cross-jurisdiction network | Single-customer, private |
| Public-internet exposure (Jan 2026) | 67 cameras exposed without passwords | Zero exposure events on record |
| Network architecture | Internet-connected by design | Private LTE / VPN, no public IP |
| Audit log | Roles-based, retention varies | Immutable 12-month |
| Data residency | Not exclusively US AWS | US-only AWS |
| FTC investigation calls | Yes — Sen. Wyden, Jan 2026 | None |
| City contract cancellations (2025-26) | 30+ | None |
| ACLU / EFF public campaigns | Active | None |
| Class action pending | Yes — California, April 2026 | None |
| 24/7 in-house SOC | No | Yes |
| Audio talk-down | No | Yes |
| LE dispatch with live video | No (post-event ALPR data) | Yes |
| NDAA Section 889 compliant | Mixed reporting | Yes |
| Authorized for federal sites | Limited | NDAA-compliant deployments |

## Where Flock wins

**ALPR is a real capability.** If your specific need is reading license plates at scale and matching them against a hot list, Flock has the densest network in the country. We do not sell ALPR as a primary product. If you need 5,000 plate reads per hour at a city entry point, Flock does that and we don't.

**Speed of deployment in a friendly municipality.** Where city government is on board, Flock's pole installs are fast. Days, not weeks.

**Crime-tip workflow with local PD.** Flock's police-facing portal is mature. Detectives can search plates across a regional network in seconds. That workflow is real and useful when it isn't abused.

## Where VDS wins

**No public-internet exposure.** In January 2026, security researchers reported that 67 Flock Condor cameras were accessible on the open internet without passwords. The story was covered by 404 Media, Marketplace, and 9News. One of the exposed cameras was pointed at children on a swingset. Sen. Ron Wyden called for an FTC investigation. VDS trailers are not addressable from the public internet — operator access is over private LTE and authenticated VPN, with MFA required on every session.

**No cross-agency data sharing.** Footage from a VDS trailer belongs to the VDS customer who rented it. Nothing is shared across jurisdictions, nothing is sold to a data broker, nothing flows into a regional law-enforcement search portal unless the customer explicitly subpoena-responds. A class action filed in California in April 2026 alleges that Flock illegally shares ALPR data across state lines in violation of state privacy laws. VDS architecture makes that mode of failure structurally impossible.

**30+ Flock contract cancellations since January 2025.** Bend OR (January 2026), Eugene OR, Springfield OR, Talent OR, Flagstaff AZ, Olympia WA, Mountlake Terrace WA, Redmond WA, Lynwood WA, Cambridge MA — all on public record. The pattern is sustained civic backlash, not a one-off. If you're a municipality looking at private-site security for a specific facility (motor pool, public works yard, water treatment plant), VDS sidesteps the entire civic-debate cycle because the trailer is on private city-owned property, not in the public right-of-way.

**24/7 in-house SOC with sub-60-second escalation.** Flock is a data-and-camera company. VDS includes an active monitoring layer with audio talk-down and live-video LE dispatch. Different shape entirely.

## Cost and TCO

Flock contracts run roughly $2,500-$3,000 per camera per year, multi-year commit, paid upfront annually. A 20-camera city deployment is $50,000-$60,000/year before installation. VDS Sky Guard rents at $2,200/mo all-in, no upfront, month-to-month after the initial 90-day term. Different model, different commitment shape.

## Switching from Flock (or migrating away after a council vote)

1. **Scope the cancellation.** If your city or HOA has voted to end its Flock contract, identify the cancellation effective date and the data-deletion clause. Flock contracts vary on whether collected data is purged on termination.
2. **Identify the actual security need under the ALPR.** Most Flock buyers were solving a perimeter or property crime problem, not specifically a plate-reading problem. We re-spec the same outcome using mobile units.
3. **Deploy VDS to the highest-risk property.*