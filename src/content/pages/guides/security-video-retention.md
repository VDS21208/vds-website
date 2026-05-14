---
url: /guides/security-video-retention
collection: guides
pageType: Guide Landing
parent: /guides
status: Expansion
seoTitle: Security Video Retention Guide | HIPAA, PCI, GLBA
metaDescription: How long to retain security video by industry — HIPAA, GLBA, PCI-DSS, state laws. Retention policy framework. Free 26-page reference from VDS.
announcementBar: ''
h1: 'Security Video Retention: A Regulatory Reference'
heroEyebrow: 26 Pages · Regulatory Reference · Free PDF
heroSubhead: How long to retain security video by industry and jurisdiction. HIPAA, GLBA, PCI-DSS, state-specific laws, litigation hold considerations. With a working retention policy template.
heroCTAPrimary:
  label: Download the Guide (PDF)
  url: /request-a-quote
heroCTASecondary:
  label: Talk to a Compliance Engineer
  url: /request-a-quote
heroStats:
- 26 pages • State-by-state table • Policy template included • Free PDF
heroImage: ''
faq:
- q: Is this legal advice?
  a: No. It is a research-quality reference written by people who deal with retention every day. Show it to your lawyer; the framework holds up under that conversation.
- q: How long does VDS retain by default?
  a: 60 days at the standard tier. Customers pick 30, 60, or 90 days at provisioning, with 1-year and 7-year evidence holds as add-ons.
- q: Can I extend retention on a specific camera for litigation?
  a: Yes. Tenant admins place a litigation hold that overrides retention until released. Holds are audit-logged.
- q: Does VDS sign BAAs?
  a: Yes, for HIPAA-covered customers using AI VisionStream. The BAA covers our role as a business associate handling PHI captured incidentally on video.
- q: What happens to footage outside my retention window?
  a: It is purged from primary storage. Purges are logged but the footage is unrecoverable. Plan retention with that finality in mind.
finalCTAHeading: Get the framework, then build the policy
finalCTABody: 26 pages, state-by-state table, working policy template. Bring it to your legal team — they will appreciate not having to start from scratch.
finalCTAButtons:
- label: Download the Guide (PDF)
  url: /contact-us/
schemaType: Book
internalLinks: /platform/cloud-video-surveillance, /services/video-retrieval, /industries/hospitality-healthcare-security, /industries/financial-services
canonical: https://visiondetectionsystems.com/guides/security-video-retention
ogTitle: 'Security Video Retention: A Regulatory Reference'
ogDescription: How long to retain security video by industry — HIPAA, GLBA, PCI-DSS, state laws. Retention policy framework. Free 26-page reference from VDS.
ogImage: https://visiondetectionsystems.com/assets/og-default.jpg
ogType: website
robots: index, follow
speakable: .hero-h1, .article-summary, h2
author: Vision Detection Systems
tags: buyer's guide, VDS guide
notes: Compliance-focused. Link prominently from healthcare, finance, and retail industry pages. BAA reference matters for healthcare buyers.
---

"How long should we keep our footage" is the most-asked question in our SOC after "how do I export this clip." The wrong answer creates legal exposure on one end (over-retention) and operational exposure on the other (under-retention when an incident surfaces months later). The guide gives a defensible framework.

## What is inside

**Part 1: The framework** (pages 3-7)

Three retention drivers, in order of priority:

1. **Regulatory mandate** — HIPAA, PCI-DSS, GLBA, state-specific surveillance laws, sector-specific rules (cannabis, gaming, transportation)
2. **Litigation and insurance posture** — typical statute-of-limitations exposure, insurance reporting windows, organizational risk tolerance
3. **Operational utility** — how often footage is actually pulled, by whom, for what

Most organizations get this stack inverted and set retention based on storage cost rather than legal exposure. The guide flips it.

**Part 2: HIPAA and healthcare** (pages 8-11)

- HIPAA does not specify a video retention period — but Conditions of Participation, state law, and accreditation standards do
- Joint Commission, CMS, and state-specific minimums
- Behavioral health, long-term care, and skilled nursing variations
- The 6-year HIPAA documentation retention standard and how it applies to video that captures protected health information
- Camera placement considerations for HIPAA-adjacent spaces (waiting rooms vs. exam rooms vs. medication areas)
- BAA implications for cloud video providers — and what AI VisionStream's BAA covers

**Part 3: Finance and GLBA** (pages 12-14)

- GLBA Safeguards Rule retention implications
- FFIEC examiner expectations for ATM and branch video
- BSA/AML overlap — currency transaction surveillance, suspicious activity
- The 5-year retention pattern at major banks and the reasoning behind it
- State banking regulator variations

**Part 4: Retail and PCI-DSS** (pages 15-17)

- PCI-DSS Requirement 9 and physical access video
- The 90-day baseline and where it comes from
- Card-not-present vs. card-present environments
- Loss prevention extended retention practices and the trade-off with discovery risk
- State retail-specific laws (notably California shoplifting laws and 12-month felony shoplifting windows)

**Part 5: State-specific retention laws** (pages 18-22)

A table covering:

- States with statutory minimum retention for specific industries (cannabis, gaming, transportation)
- States with statutory maximum retention for specific data types (LPR, facial recognition)
- Notice and signage requirements that affect retention practicality
- Notable case law on private surveillance retention

**Part 6: Litigation hold and discovery** (pages 23-25)

- When the duty to preserve attaches and how it overrides normal retention
- The mechanics of a litigation hold on cloud video — how AI VisionStream supports holds at the per-camera level
- Spoliation exposure for over-aggressive deletion policies
- Cooperation with subpoenas, warrants, and civil discovery — the chain-of-custody implications

**Part 7: A working policy template** (page 26)

A one-page retention policy template covering:

- Default retention by camera class
- Override events (incident, litigation hold, regulatory request)
- Approval matrix for retention extension or early deletion
- Audit cycle
- Sign-off lines

Drop your industry and jurisdiction into the template and you have a defensible written policy in 20 minutes.

## Why this guide

This is the document we wish every customer had before they specified storage tiers. Over-retention burns cloud spend and creates discovery exposure. Under-retention loses incidents that surface in month four. The guide gets the trade-off right.

## Free excerpts

- [The 5-step retention policy framework](/guides/security-video-retention/#framework)
- [State-by-state retention table (2026)](/guides/security-video-retention/#states)
- [The retention policy template (Word + PDF)](/guides/security-video-retention/#template)

## AI VisionStream retention features

- Per-camera retention policy enforcement, server-side
- 30/60/90-day standard tiers, 1-year and 7-year evidence holds
- Litigation hold at the per-cam