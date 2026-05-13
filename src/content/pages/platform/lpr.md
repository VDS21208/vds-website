---
url: /platform/lpr
collection: platform
pageType: Platform Detail
parent: /platform
status: Launch
seoTitle: License Plate Recognition | 95%+ Accuracy | VDS
metaDescription: ALPR with 95%+ read accuracy and sub-3-second hotlist alerts. US-only data, 12-month audit log, no public camera feeds.
announcementBar: ''
h1: Plate reads in under 3 seconds. Hotlist match to operator in under 60.
heroEyebrow: License plate recognition
heroSubhead: 95%+ read accuracy on US plates from any compatible camera. Hotlist alerts route directly to the SOC. No public camera feed. No pattern-of-life database.
heroCTAPrimary:
  label: Book a demo
  url: /schedule-a-demo
heroCTASecondary:
  label: Read our privacy posture
  url: /platform/cloud-security
heroStats:
- 95%+ accuracy
- Sub-3-second read
- 60-second hotlist escalation
- US-only storage
heroImage: ''
faq:
- q: What plate formats are supported?
  a: All 50 US states and Canadian provinces. Vanity plates, motorcycle plates, and dealer plates are read.
- q: How is hotlist matching different from a public ALPR network?
  a: Your hotlist is yours. It is not shared with other customers, law enforcement agencies, or third parties unless you explicitly authorize a dispatch on a specific match.
- q: Do you sell or share plate data?
  a: No. Plate data lives in your tenant, in US AWS regions, with 30/60/90-day retention you control.
- q: Can LPR run on a mobile trailer?
  a: Yes. Solar-autonomous trailers run the same LPR stack as fixed-site cameras. Same accuracy, same sub-3-second read time.
finalCTAHeading: Run a live plate read during the demo.
finalCTABody: We will point a test camera at a parking lot during the call and walk through hotlist setup end-to-end.
finalCTAButtons:
- label: Book a demo
  url: /schedule-a-demo
schemaType: SoftwareApplication
internalLinks: /platform, /platform/soc, /platform/cloud-security, /platform/alerts-reporting
canonical: https://visiondetectionsystems.com/platform/lpr
ogTitle: Plate reads in under 3 seconds. Hotlist match to operator in under 60.
ogDescription: ALPR with 95%+ read accuracy and sub-3-second hotlist alerts. US-only data, 12-month audit log, no public camera feeds.
ogImage: https://visiondetectionsystems.com/assets/og-default.jpg
ogType: website
robots: index, follow
speakable: .hero-h1, .hero-subhead, h2
author: Vision Detection Systems
tags: LPR, license plate recognition, AI VisionStream, cloud VMS, video analytics
notes: Strong privacy stance is the differentiator vs. Flock — never named, but the "we will not" list does the work. Include screenshot of hotlist editor and a sample incident report.
---

## What "95%+ accuracy" actually means

Measured on US plates, at angles up to 30 degrees, at speeds up to 35 mph, in mixed lighting. Reads include state inference. Numbers come from production deployments across 30+ states, not a single test lane.

## How the workflow runs

1. Camera captures the plate.
2. Model reads it in under 3 seconds.
3. Plate is matched against your hotlist (BOLO list, banned vehicles, watchlist).
4. On match, alert routes to the [SOC](/platform/soc) and to your mobile app simultaneously.
5. SOC operator verifies, escalates to LE if applicable, and files a full incident report.

## Hotlist management

- Upload by CSV, API, or manual entry
- Set per-list rules (alert only, alert and dispatch, alert and audio challenge)
- Tag plates with notes for SOC context
- Set expiration dates per plate
- Every edit logged in the 12-month audit trail

## What we will not do

- We will not expose your plate reads to other customers
- We will not aggregate plate reads into a national pattern-of-life database
- We will not publish your camera feed to the open internet
- We will not store plate data outside US AWS regions

If those sentences sound pointed, it is because several "public safety camera" platforms do the opposite. Read our [security and privacy posture](/platform/cloud-security).

## Works with the cameras you have

LPR runs on any compatible ONVIF/RTSP camera meeting basic resolution and shutter specs (most modern 4MP cameras qualify). No proprietary LPR camera required. We will spec the right lens and angle for your lane during pre-deployment.
