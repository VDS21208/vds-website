---
url: /platform/mobile-app
collection: platform
pageType: Platform Detail
parent: /platform
status: Launch
seoTitle: VDS Mobile App | iOS + Android | Live View & Talk-Down
metaDescription: iOS and Android app with live multi-camera view, alert acknowledgement, two-way audio talk-down, and incident clip sharing.
announcementBar: ''
h1: Your site, your operators, your phone.
heroEyebrow: Mobile app
heroSubhead: Live multi-camera grid, push alerts with one-tap acknowledge, two-way audio talk-down, and incident clip sharing. iOS and Android. The same software stack as the SOC console.
heroCTAPrimary:
  label: Book a demo
  url: /demo
heroCTASecondary:
  label: See the alert engine
  url: /platform/alerts
heroStats:
- iOS + Android
- Multi-camera live
- Two-way audio
- Per-user RBAC
heroImage: ''
faq:
- q: How many users per account?
  a: Unlimited users on every tier. Seats are not capped — RBAC is.
- q: Does talk-down work over LTE?
  a: Yes. Two-way audio runs over LTE or Wi-Fi with adaptive bitrate. Tested down to 2 Mbps uplink.
- q: Can I share a clip with someone outside the company?
  a: Yes — signed URLs with configurable expiration (5 minutes to 7 days). Every share is logged.
- q: Is there an Android tablet build?
  a: The Android app runs on tablets. The grid scales to 16 cameras on a 10" device.
finalCTAHeading: See the app on real cameras.
finalCTABody: We will install a sandbox tenant on your phone during the demo with a live alert flow.
finalCTAButtons:
- label: Book a demo
  url: /demo
schemaType: MobileApplication
internalLinks: /platform, /platform/soc, /platform/alerts, /platform/security
canonical: https://visiondetectionsystems.com/platform/mobile-app
ogTitle: Your site, your operators, your phone.
ogDescription: iOS and Android app with live multi-camera view, alert acknowledgement, two-way audio talk-down, and incident clip sharing.
ogImage: https://visiondetectionsystems.com/assets/og-default.jpg
ogType: website
robots: index, follow
speakable: .hero-h1, .hero-subhead, h2
author: Vision Detection Systems
tags: AI VisionStream, cloud VMS, video analytics
notes: Screenshots of grid view, alert detail, talk-down UI, audit log entry. Include App Store and Google Play badges in the final design.
---

## What the app does

- **Live view** with up to 16 cameras per grid, per site
- **Push alerts** with thumbnail, rule context, and one-tap acknowledge
- **Two-way audio** talk-down through the trailer PA or compatible site speakers
- **Clip sharing** — send a 60-second clip to a teammate or LE with a signed URL
- **Incident timeline** — every event for the site, filterable by rule, camera, and time
- **User and site switching** for property managers with multiple deployments
- **Per-user RBAC** — what each phone can see is controlled by the same policies as the web console
- **Biometric login** with MFA on enrollment and on sensitive actions

## Built for the people who actually carry the phone

Site supervisors. Property managers. On-call security directors. The app is not a marketing screenshot — it ships with every account, runs on phones that are three years old, and works on LTE. We tested the alert tone on a construction site at 2 p.m. through ear protection. It is loud.

## Same security posture as the web console

MFA. RBAC. Session expiration. Device registration. Push notifications go through APNs and FCM; alert payloads are never sent in clear text. Every action taken in the app is logged to the [12-month audit trail](/platform/security).

## Works with or without the SOC

If you run a 24/7 SOC contract, the app is a window into what the operators are doing in real time. If you do not, the app is the primary alert channel for your own team. Either way the underlying engine is the same.
