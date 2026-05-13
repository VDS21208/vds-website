---
url: /platform/ai-video-analytics
collection: platform
pageType: Platform Detail
parent: /platform
status: Launch
seoTitle: AI Analytics & Detection | AI VisionStream
metaDescription: Intrusion zones, virtual tripwires, loitering, crowd, and time-of-day rules running on 7 years of field-tuned models. Sub-3-second alerts.
announcementBar: ''
h1: Rules you draw. Alerts that fire in under 3 seconds.
heroEyebrow: Analytics & detection
heroSubhead: Draw a polygon. Set a schedule. Get a verified alert when a human, vehicle, or object crosses the line. Models trained on 7 years of field footage from 500+ active sites.
heroCTAPrimary:
  label: Book a demo
  url: /schedule-a-demo
heroCTASecondary:
  label: See the SOC workflow
  url: /platform/soc
heroStats:
- 5 rule types
- Sub-3-second alert
- 97% false-alarm reduction
- Per-camera schedules
heroImage: ''
faq:
- q: How fast does an alert reach a person?
  a: Detection to model output is sub-3-second. Detection to verified SOC operator is under 60 seconds on average.
- q: Can I run rules on cameras I already own?
  a: Yes — any ONVIF or RTSP camera not on the NDAA prohibited list. See [camera-agnostic ingest](/platform).
- q: What is the false-positive rate?
  a: Verified alerts to customers see a 97% reduction in false positives versus raw motion or unverified AI alerts. The SOC layer is the difference.
- q: Can I run rules differently on weekdays vs. weekends?
  a: Yes. Schedules are per-rule, per-camera, with full day-of-week and time-of-day granularity.
finalCTAHeading: Watch a rule fire on your own camera.
finalCTABody: Send us an RTSP URL. We will configure an intrusion zone live during the demo.
finalCTAButtons:
- label: Book a demo
  url: /schedule-a-demo
schemaType: SoftwareApplication
internalLinks: /platform, /platform/lpr, /platform/soc, /platform/alerts-reporting, /platform/cloud-security
canonical: https://visiondetectionsystems.com/platform/ai-video-analytics
ogTitle: Rules you draw. Alerts that fire in under 3 seconds.
ogDescription: Intrusion zones, virtual tripwires, loitering, crowd, and time-of-day rules running on 7 years of field-tuned models. Sub-3-second alerts.
ogImage: https://visiondetectionsystems.com/assets/og-default.jpg
ogType: website
robots: index, follow
speakable: .hero-h1, .hero-subhead, h2
author: Vision Detection Systems
tags: AI VisionStream, cloud VMS, video analytics
notes: Screenshot the rule editor with polygon draw. Show the schedule UI. Include a 3-frame "before/after" of false-positive filtering.
---

## Five rule types that cover 95% of real-world security events

Most "AI detection" pages list 40 features and ship 4. We ship 5 rule types because those 5 catch the events that actually drive incident reports.

### Intrusion zones
Draw a polygon on the camera view. Set who is allowed in it (no one, vehicles only, people only) and when. Alert fires when the rule is broken. Sensitivity is per-zone, not global.

### Virtual tripwires
A directional line across an entry point, fence gap, or loading bay. Alert fires only when crossed in the direction you specify. Bi-directional is also supported.

### Loitering
Tag a zone with a dwell threshold (e.g., person stationary for 90 seconds). Catches casing behavior at ATMs, parking structures, and dealership lots without firing on every customer who walks through.

### Crowd thresholds
Alert when more than N people enter a zone within a window. Used for retail flash-rob detection, protest perimeter awareness, and occupancy compliance.

### Time-of-day rules
Every rule above can be scheduled. A loading dock that is legitimate from 6 a.m. to 7 p.m. and an intrusion target from 7 p.m. to 6 a.m. is a single camera with two rule sets, not two configurations.

## Tuned on field data, not stock datasets

The classifier was trained on 7 years of footage from active VDS deployments — construction yards in the rain, dealership lots at 3 a.m., apartment garages, substations. Stock COCO models can't tell a tarp from a person at 80 feet. Ours can.

## False-alarm reduction: 97%

Every analytic alert is reviewed by a SOC operator before it escalates to the customer. Animals, blowing debris, headlights, and shadows are filtered out. The result: customers see verified events, not raw model output.

## Built for the platform, not bolted on

Analytics rules are configured in the same console as users, retention, and SOC routing. Changes apply in seconds. Every rule edit is logged in the [12-month audit trail](/platform/cloud-security).
