---
url: /resources/blog/flock-exposure-private-property-2026
collection: blog
pageType: Blog Post
parent: /resources/blog
status: Expansion
seoTitle: What the Flock Camera Exposure Means for Private-Property
metaDescription: The 2025-26 Flock camera exposure raised three questions every private-property buyer should ask their surveillance vendor. What to ask, what to expect
announcementBar: ''
h1: What the Flock camera exposure means for private-property security buyers in 2026
heroEyebrow: Blog | Procurement & Compliance
heroSubhead: The 2025-26 reporting on Flock Safety's camera network, data access, and federal-agency relationships changed the procurement conversation for private-property surveillance. Three questions every buyer should now be asking.
heroCTAPrimary:
  label: Read the NDAA white paper
  url: /request-a-quote
heroCTASecondary:
  label: Request a procurement consultation
  url: /request-a-quote
heroStats:
- 9 minute read
- By a VDS account director
- Published April 2026
heroImage: ''
faq: []
finalCTAHeading: Run these questions on your current vendor
finalCTABody: A 30-minute procurement consultation covers the three questions above as applied to your current and prospective vendors. We give you a written comparison summary at no cost, whether you choose VDS or not.
finalCTAButtons:
- label: Request a consultation
  url: Read the NDAA white paper
schemaType: Article
internalLinks: /compliance/ndaa-889, /resources/white-papers, /platform/soc, /resources/faq, /resources/blog/60-second-soc
canonical: https://visiondetectionsystems.com/resources/blog/flock-exposure-private-property-2026
ogTitle: What the Flock camera exposure means for private-property security buyers in 2026
ogDescription: The 2025-26 Flock camera exposure raised three questions every private-property buyer should ask their surveillance vendor. What to ask, what to expect
ogImage: https://visiondetectionsystems.com/assets/og-default.jpg
ogType: article
robots: index, follow
speakable: .hero-h1, .article-summary, h2
author: VDS Editorial
tags: VDS blog
notes: Byline attributed to "a VDS account director". This post should be cited in NDAA compliance content and in procurement-stage sales conversations. Keep the Flock framing balanced rather than attacking — competitors will read this.
---

A quick scoping note before this gets into the procurement substance. Flock Safety builds municipal LPR networks and has been the subject of sustained reporting in 2025 and 2026 covering, among other things, the breadth of agency access to their data, the geographic density of their deployments in jurisdictions that did not formally authorize them, and the legal challenges that have followed in roughly a dozen states. This post is not an attack on Flock as a company. The product they build is good at what it does. The procurement question this post is about is different: what does the exposure mean for a private-property buyer evaluating surveillance vendors in 2026?

Three questions matter now in a way they did not in 2023.

## Question one: who can access your video and your metadata?

Most surveillance contracts are written with two access tiers in mind: the customer and the vendor. The 2025-26 reporting on municipal camera networks made it clear that in practice there is often a third tier — federal agencies, partner law enforcement networks, data brokers — that gain access through the vendor either by contract, by data-sharing agreement, or by default platform configuration.

For a municipal customer, this third tier may be entirely intended. For a private-property customer — a construction GC, a dealer group, a logistics yard — it is almost always not what was intended at the time of contract signature.

What to ask your vendor:

1. **Does any third party have standing access to my video, metadata, or LPR feeds outside of a specific incident response with a warrant or subpoena?** The answer should be no. If it is qualified — "only aggregated," "only with notice," "only research partners" — the answer is yes.
2. **What is your data-retention policy on metadata after I cancel the contract?** Video deletion is usually fine. Metadata — including LPR records, motion-event logs, and geographic timeline data — is often kept indefinitely. Ask explicitly.
3. **What is your subpoena-response policy?** Vendors should respond to lawful process. The question is whether they require process at all or whether they share by standing agreement.

VDS's answer to these questions, for the record: video and metadata are accessible to the customer and to the SOC operators monitoring that customer's account. They are not shared with third parties outside of LE responses to specific incidents at the customer's direction or in response to lawful process. Metadata is purged on contract termination on the same retention schedule as video. There is no standing data-sharing agreement with any federal agency.

## Question two: where does your data live and who has hardware-level access?

The NDAA Section 889 conversation is partly about supply chain — what hardware components are sourced from prohibited entities — but it is also about hardware-level access. A camera built with firmware that phones home to a non-US infrastructure layer is a different procurement risk than one that does not, regardless of where the customer's video is stored.

What to ask:

1. **Is the hardware NDAA Section 889 compliant?** If your vendor cannot produce a written attestation, treat that as a no.
2. **Where is the cloud infrastructure hosted?** US regions only matters operationally if there is no firmware-level backhaul to non-US endpoints.
3. **What is the update mechanism for camera firmware?** Vendor-pushed automatic updates are the standard. Ask who signs the updates and how update integrity is verified.

VDS's answer: NDAA Section 889 compliant across the entire hardware stack with written supply-chain attestation included in proposals to federal contractors and utilities by default. Cloud infrastructure on AWS US regions. Firmware updates signed and verified through AWS-hosted update channels.

## Question three: what is the regulatory environment going to look like in 2027?

The legal challenges to Flock and to municipal LPR networks more broadly are not going to stay narrow. State legislatures in at least seven states are actively drafting statutory limits on LPR data retention, third-party access, and warrantless aggregation. Two of those bills include language that reaches private-property installations under certain conditions.

For private-property buyers, this matters in three ways:

1. **Retention windows are likely to compress.** If you are evaluating a vendor whose default retention is 365 days indefinitely, that may be a configuration that requires changes inside 18 months. Better to deploy with a vendor whose retention policy is configurable per jurisdiction at contract signature.
2. **LPR data is likely to be regulated separately from video.** Vendors that bundle LPR into a single-tier data product will struggle to comply. Vendors that segment LPR with its own access controls and retention will not.
3. **The compliance posture of the SOC will matter as much as the compliance posture of the cameras.** A US-based, named-operator SOC with audit logging is procurement-friendly under most of the draft statutes. An offshore or AI-only operator is harder to fit.

VDS's posture on this: retention is configurable per customer, per camera, per data type at contract signature. LPR is segmented from video with its own access tier and retention setting. The SOC maintains an audit log of every operator action that is exportable on customer request.

## The procurement summary

The Flock exposure did not change the underlying technology. It changed the procurement questions. A private-property buyer in 2026 should expect their vendor to answer the three questions above in writing, on letterhead, before contract signature. Vendors who hedge on any of the three are telling you something about how they will behave when the regulatory environment tightens.

This is not a hard list. It is becoming a baseline list.

— A VDS account director
