---
url: /integrations/axon-fusus
collection: integrations
pageType: Integration Detail
parent: /integrations
status: Expansion
seoTitle: VDS + Axon-Fusus Integration | Opt-In Per-Incident LE
metaDescription: VDS customers share specific incident clips with local law enforcement running Axon-Fusus. Opt-in per incident — never standing access to your cameras.
announcementBar: ''
h1: VDS + Axon-Fusus
heroEyebrow: INTEGRATION · AXON-FUSUS
heroSubhead: Share the clip law enforcement needs — and nothing else. VDS customers can opt-in per incident to push a specific video segment to a local Axon-Fusus real-time crime center. There is no standing camera access, no always-on feed, no exception.
heroCTAPrimary:
  label: Talk to an integration engineer
  url: /request-a-quote
heroCTASecondary:
  label: Read the privacy model
  url: /request-a-quote
heroStats:
- Per-incident opt-in · No standing access · Customer-controlled · TLS 1.3
heroImage: ''
faq:
- q: Can law enforcement request standing access through this integration?
  a: No. The integration only supports per-incident, customer-initiated sharing. There is no standing-access mode and no plan to add one.
- q: What if LE has a subpoena or warrant?
  a: Subpoena and warrant responses go through your normal legal process. VDS supports lawful evidentiary requests with full chain-of-custody export — that is separate from the Axon-Fusus integration, which is for voluntary, expedited sharing of a specific clip.
- q: Who in our organization can initiate a share?
  a: Whoever you authorize. Most customers limit it to a named loss prevention or security lead and require a second approver for non-emergencies.
- q: Does the shared clip include metadata identifying our location, cameras, or people?
  a: The clip is shared as a video file with the case context your team enters. No camera ID, customer ID, or system metadata is exposed to the agency beyond what you choose to include in the case reference.
finalCTAHeading: Cooperate with law enforcement without giving away your camera tree.
finalCTABody: A 30-minute call covers your sharing policy, your authorized users, and the agencies you want to be able to send to. You leave with a written authorization document and a setup-time estimate.
finalCTAButtons:
- label: Book Axon-Fusus integration call
  url: /legal/privacy-policy/
schemaType: Article
internalLinks: /integrations, /platform/platform, /platform/api-sdk-access, /about-us/trust-center/privacy, /platform/soc
canonical: https://visiondetectionsystems.com/integrations/axon-fusus
ogTitle: VDS + Axon-Fusus
ogDescription: VDS customers share specific incident clips with local law enforcement running Axon-Fusus. Opt-in per incident — never standing access to your cameras.
ogImage: https://visiondetectionsystems.com/assets/og-default.jpg
ogType: website
robots: index, follow
speakable: .hero-h1, .integration-summary, h2
author: Vision Detection Systems
tags: security integrations, API, Axon Fusus, LE sharing
notes: Important — confirm with VDS engineering before publishing each integration page that the technical claims match real product capability. Some integrations may be roadmapped rather than shipped today.
---

Axon-Fusus (acquired by Axon in 2024) is the leading real-time crime center platform for US law enforcement agencies. It can ingest live and recorded video from private cameras the property owner has elected to share. VDS supports that elective sharing — and only that. The integration is built around an explicit privacy principle: per-incident, opt-in, narrowly scoped.

## How it works

When a VDS customer has a clip relevant to an active LE investigation — a break-in, a hit-and-run, a missing person — an authorized user on the customer side opens the VDS console, selects the relevant time window from the camera in question, and chooses **Share with LE (Axon-Fusus)**.

That action does three things:

1. Generates a signed, time-limited video clip URL scoped to that single segment from that single camera.
2. Posts the clip into the specified Axon-Fusus tenant for the specified agency, with the customer's case reference and contact information.
3. Logs the share event to the VDS immutable audit record — who shared, what was shared, when, with which agency.

There is no live feed published. No agency-managed access to your cameras. No "subscribe to this property" toggle on the LE side. Every share is a discrete event initiated by your team, recorded against your name.

## What you get

- A documented, auditable path for cooperating with active law enforcement investigations
- Bounded sharing — agencies see the clip you sent, not your camera tree
- Full audit record of every clip shared, retained for the standard VDS 12-month window
- A clear answer for tenants, employees, and the general public when they ask: "Do the police have access to your cameras?" The answer is no, with a documented mechanism that backs it up.

## Setup time

2 to 4 business days. Required on customer side: the Axon-Fusus tenant identifier(s) for the agencies you want to be able to send to, a written policy on who in your organization is authorized to initiate a share, and an internal approver if your policy requires two-person rule. VDS engineering provisions the integration and applies your authorization rules to the console.

## A sample workflow

14:22 — A vehicle strikes a pedestrian in the parking lot of a customer's retail location and leaves the scene.
14:30 — Local PD opens an investigation and contacts the customer's loss prevention lead.
14:34 — LP lead reviews VDS footage, locates the relevant 90-second segment showing the vehicle and plate.
14:35 — LP lead clicks **Share with LE (Axon-Fusus)**, selects the local PD's Fusus tenant, enters the police case number.
14:35 — Clip posts into the agency's Fusus environment. VDS audit log records: "Shared 14:33:10–14:34:40 of Camera Lot-7 with [Agency] case 26-04829 by [User]."
14:38 — Detective reviews the clip in Fusus alongside other case material. The customer's broader camera footprint remains private.

## Pricing

The Axon-Fusus integration is included with any AI VisionStream enterprise subscription. Axon-Fusus licensing on the agency side is separate and is not paid by the customer or by VDS.

## On the privacy principle

A lot of community-camera programs operate on a standing-access model: an agency, once authorized, can view a property's cameras at any time. VDS does not support that model on Axon-Fusus or anywhere else. Two reasons. First, it muddies legal questions about reasonable expectation of privacy for tenants, employees, customers, and visitors. Second, it makes the property owner's policy ambiguous in a way that produces avoidable complaints. Per-incident opt-in is clearer for ev