---
url: /integrations/milestone
collection: integrations
pageType: Integration Detail
parent: /integrations
status: Launch
seoTitle: VDS + Milestone XProtect Integration | AI VisionStream
metaDescription: VDS cameras and AI events ingest as Milestone XProtect drivers. LPR reads appear on the XProtect timeline. Bidirectional alerting via MIP SDK.
announcementBar: ''
h1: VDS + Milestone XProtect
heroEyebrow: INTEGRATION · MILESTONE
heroSubhead: VDS cameras and AI VisionStream events ingest as XProtect drivers. Trailer-generated metadata, LPR reads, and SOC verifications appear on the XProtect timeline. Operators investigate without learning a new tool.
heroCTAPrimary:
  label: Talk to an integration engineer
  url: /request-a-quote
heroCTASecondary:
  label: Read API + SDK docs
  url: /request-a-quote
heroStats:
- XProtect Corporate / Expert · MIP SDK · ONVIF Profile S/T · Bidirectional
heroImage: ''
faq:
- q: Which XProtect editions are supported?
  a: Corporate and Expert. Professional+ supports the ONVIF path but not the full MIP analytics-event integration. Essential+ is not supported.
- q: Does VDS pass through full-resolution video or just events?
  a: Both. ONVIF Profile S streams full video. The MIP path adds analytics metadata on top.
- q: Can XProtect be the system of record and VDS the AI overlay?
  a: Yes. Many customers run it that way. VDS still maintains its own immutable 12-month audit log for the events it generates.
- q: Does this work with XProtect hosted on Milestone Customer Dashboard / cloud?
  a: Yes, with standard outbound webhook and ONVIF reachability. Confirm specifics with VDS during scoping.
finalCTAHeading: Extend XProtect to the edge without extending your trenching budget.
finalCTABody: A 30-minute scoping call covers your XProtect version, the rules that should fire from VDS events, and the LPR fields you want exposed.
finalCTAButtons:
- label: Book Milestone integration call
  url: Read API + SDK docs
schemaType: Article
internalLinks: /integrations, /platform/ai-visionstream, /platform/api-sdk-access, /hardware/solar-trailers, /platform/lpr
canonical: https://visiondetectionsystems.com/integrations/milestone
ogTitle: VDS + Milestone XProtect
ogDescription: VDS cameras and AI events ingest as Milestone XProtect drivers. LPR reads appear on the XProtect timeline. Bidirectional alerting via MIP SDK.
ogImage: https://visiondetectionsystems.com/assets/og-default.jpg
ogType: website
robots: index, follow
speakable: .hero-h1, .integration-summary, h2
author: Vision Detection Systems
tags: security integrations, API, Milestone integration
notes: Important — confirm with VDS engineering before publishing each integration page that the technical claims match real product capability. Some integrations may be roadmapped rather than shipped today.
---

Milestone XProtect is open by design. The MIP SDK and the ONVIF driver model make it the easiest enterprise VMS to integrate against, which is exactly why customers running it tend to keep running it. VDS treats XProtect as a peer system, not a target to displace.

## How it works

VDS cameras stream into XProtect over ONVIF Profile S and Profile T (for edge metadata). On the analytics side, AI VisionStream events flow into XProtect via the MIP SDK as analytics events, with two outputs:

1. **Bookmarks** on the corresponding camera timeline, with a thumbnail and a deep-link back to the VDS console for full incident detail.
2. **Generic events / alarms** that can drive XProtect rules — for example, automatically pop the camera to an operator workstation, trigger a recording-quality boost on adjacent cameras, or fire an output to a connected access platform.

LPR reads from VDS LPR cameras populate XProtect as searchable plate-read metadata, queryable by plate, partial plate, time, and camera.

In reverse, XProtect rule outputs can POST back to VDS via webhook to escalate the event to the VDS SOC for human verification and dispatch.

## What you get

- AI-verified events native in the XProtect Smart Client
- LPR data unified with existing XProtect plate-read databases
- VDS-monitored solar trailers extending XProtect coverage to remote and temporary sites without trenching power or fiber
- Two-way bridge: customer operators on XProtect, VDS SOC on AI VisionStream, same events on both sides

## Setup time

XProtect Corporate or Expert 2020 R3 or later: 3 to 5 business days. Required on customer side: an XProtect service account with analytics-event permission and a reachable MIP endpoint. VDS engineering provides the MIP plug-in and the ONVIF camera configuration.

## A sample workflow

02:08 — VDS LPR camera at a logistics yard reads a plate on a vehicle entering after hours. Plate matches a watch-list.
02:08 — AI VisionStream classifies, SOC analyst confirms in 9 seconds.
02:08 — Analytics event fires into XProtect. The operator workstation on the customer side auto-pops to the camera with a bookmark, plate text overlaid.
02:09 — VDS SOC initiates audio talk-down requesting the driver leave. Vehicle remains.
02:11 — VDS dispatches LE. XProtect rule has already promoted adjacent cameras to high-bitrate recording.
02:24 — LE arrives, recovers the vehicle (reported stolen). Both timelines retain the synchronized record.

## Pricing

The Milestone integration is included with any AI VisionStream enterprise subscription. XProtect licensing (device licenses, Care, MIP) follows Milestone channel pricing.
