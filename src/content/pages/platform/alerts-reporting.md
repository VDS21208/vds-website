---
url: /platform/alerts-reporting
collection: platform
pageType: Platform Detail
parent: /platform
status: Launch
seoTitle: Alerts Engine | Tiers, Escalation, Filtering | VDS
metaDescription: Three-tier alert engine with rule-based escalation, SOC verification, and 97% false-positive reduction. Sub-3-second detection, under-60-second response.
announcementBar: ''
h1: Three tiers. One workflow. 97% fewer false alarms.
heroEyebrow: Alerts engine
heroSubhead: Every alert flows through detection, verification, and escalation. Tiered routing sends informational events to dashboards, action events to your phone, and critical events to a SOC operator who is already watching.
heroCTAPrimary:
  label: Book a demo
  url: /schedule-a-demo
heroCTASecondary:
  label: See the SOC workflow
  url: /platform/soc
heroStats:
- 3 alert tiers
- Sub-3s detection
- 97% false-alarm cut
- Per-rule routing
heroImage: ''
faq:
- q: How do I tune false-positive rates on a noisy camera?
  a: Tier 1 logging plus rule-confidence sliders. We run a 7-day shake-out on every new rule and report the tuning recommendations.
- q: Can I bypass the SOC and route alerts directly to my own team?
  a: Yes — disable SOC routing per rule or per site. The alert engine is independent of the SOC tier.
- q: What is the maximum number of rules per camera?
  a: 32 per camera, 256 per site. We have not seen a deployment exceed half of that.
- q: Are alerts delivered if the camera's internet drops?
  a: On-trailer deployments buffer detection locally and forward when connectivity restores. Fixed-site deployments depend on the site's network design — we will spec a cellular failover during pre-deployment.
finalCTAHeading: See alert routing on your own rules.
finalCTABody: We will configure a Tier 3 rule and trigger it live during the demo.
finalCTAButtons:
- label: Book a demo
  url: /schedule-a-demo
schemaType: SoftwareApplication
internalLinks: /platform, /platform/ai-video-analytics, /platform/soc, /platform/integrations, /platform/mobile-app
canonical: https://visiondetectionsystems.com/platform/alerts-reporting
ogTitle: Three tiers. One workflow. 97% fewer false alarms.
ogDescription: Three-tier alert engine with rule-based escalation, SOC verification, and 97% false-positive reduction. Sub-3-second detection, under-60-second response.
ogImage: https://visiondetectionsystems.com/assets/og-default.jpg
ogType: website
robots: index, follow
speakable: .hero-h1, .hero-subhead, h2
author: Vision Detection Systems
tags: AI VisionStream, cloud VMS, video analytics
notes: Flow diagram of three tiers belongs above the fold. Tier 3 metrics tied back to the SOC SLA.
---

## The three tiers

### Tier 1 — Informational
Logged to the dashboard. No push, no operator. Used for after-hours camera health, low-confidence motion, and audit-only rule firings.

### Tier 2 — Action
Push notification to designated users via the mobile app and integrations (Slack, Teams, email, SMS). One-tap acknowledge. Optional escalation to Tier 3 if not acknowledged within a configurable window (default 5 minutes).

### Tier 3 — Critical
Routed simultaneously to:
- The SOC console for verified operator response
- The mobile app for designated on-call users
- The configured ACS or alarm central if linked
- Pre-authorized LE dispatch where applicable

Tier 3 is the SLA tier — under 60-second operator escalation, full incident report on close.

## What drives the 97% false-alarm reduction

1. **Model filtering** — sub-3-second classification rejects animals, debris, headlights, and shadow movement
2. **Rule context** — schedules and authorized-actor lists suppress legitimate activity
3. **SOC verification** — every Tier 3 alert is reviewed by a human before customer escalation

Raw model output to verified customer alert ratio runs around 33:1 in active production deployments. The model fires often. The customer hears about it rarely. The right events get through every time.

## Per-rule routing

Every rule can route to a different tier, a different user group, a different integration. A loading dock intrusion at 3 a.m. wakes the SOC. A loitering event at the front entrance during business hours opens a Slack thread. Same camera, different rules, different paths.

## Acknowledgement and audit

Every alert has a state: open, acknowledged, escalated, resolved, dismissed. State transitions are logged with timestamp and actor. Resolution requires a disposition code from a configurable list. The 12-month audit log catches every move.

## Retention and replay

Alert clips are retained on the platform's standard cadence (30/60/90 days). Critical alerts can be tagged for extended retention up to 1 year. Replay is available from the alert detail view with frame-by-frame stepping and clip export.
