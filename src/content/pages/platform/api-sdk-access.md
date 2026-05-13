---
url: /platform/api-sdk-access
collection: platform
pageType: Platform Detail
parent: /platform
status: Expansion
seoTitle: API & SDK Access | Developer Integration | AI VisionStream
metaDescription: REST API, webhooks, mobile SDK, and Postman collection for AI VisionStream. OAuth2 + API keys. Build ITSM, BIM, and PSIM integrations.
announcementBar: ''
h1: REST API, Webhooks, and SDK for AI VisionStream
heroEyebrow: Developer Platform
heroSubhead: Pull events, push clips, subscribe to webhooks, and embed live video in your own application. OAuth2 and API key authentication. Postman collection included.
heroCTAPrimary:
  label: Request API Access
  url: /request-a-quote
heroCTASecondary:
  label: Download Postman Collection
  url: /request-a-quote
heroStats:
- REST + Webhooks • OAuth2 / API keys • iOS + Android SDK • Rate-limited at 100 req/sec
heroImage: ''
faq:
- q: Is the API stable?
  a: v2 is the current stable version. v1 is deprecated and end-of-life 2026-12-31. Breaking changes are announced 180 days in advance.
- q: Can I get a sandbox tenant?
  a: Yes. Sandbox tenants include 4 simulated cameras with deterministic event streams for integration testing. No production data risk.
- q: Are webhooks delivered exactly once?
  a: At-least-once. Use the `event_id` field to deduplicate on your end.
- q: What happens to integrations when retention rolls over?
  a: Events older than your retention tier return 410 Gone with the event ID intact. Pull and persist events you need long-term.
- q: Is there a usage cost for the API?
  a: Not at standard tier. Enterprise tier (above 1,000 req/sec) is quoted per integration.
finalCTAHeading: Build on AI VisionStream
finalCTABody: Request API access and we will provision a sandbox tenant, ship you the Postman collection, and route you to a solutions engineer.
finalCTAButtons:
- label: Request API Access
  url: View Developer Docs
schemaType: TechArticle
internalLinks: /platform/platform, /platform/cloud-video-surveillance, /industries/construction-site-security, /platform/integrations
canonical: https://visiondetectionsystems.com/platform/api-sdk-access
ogTitle: REST API, Webhooks, and SDK for AI VisionStream
ogDescription: REST API, webhooks, mobile SDK, and Postman collection for AI VisionStream. OAuth2 + API keys. Build ITSM, BIM, and PSIM integrations.
ogImage: https://visiondetectionsystems.com/assets/og-default.jpg
ogType: website
robots: index, follow
speakable: .hero-h1, .hero-subhead, h2
author: Vision Detection Systems
tags: AI VisionStream, cloud VMS, video analytics
notes: Developer-facing; tone should stay technical without losing the brand voice. Link from /platform and from construction industry page (BIM angle).
---

AI VisionStream exposes a versioned REST API plus webhook subscriptions plus a native mobile SDK. If your team builds software — ITSM, PSIM, BIM/CDE, custom operations dashboards — you do not have to screen-scrape our UI.

## API surface

Current stable version: `v2`. Base URL: `https://api.visionstream.us/v2`.

Endpoint families:

- **Events** — list, filter, and stream AI events (LPR, intrusion, tripwire, loitering, crowd)
- **Cameras** — inventory, health, ONVIF capability discovery
- **Sites** — site metadata, group membership, geocoordinates
- **Clips** — generate time-bounded exports, retrieve signed URLs, fetch chain-of-custody records
- **Users** — RBAC management, MFA status, SSO mapping
- **Audit** — query the immutable 12-month log
- **Health** — device-level battery, solar input, cellular RSRP, uptime

Responses are JSON. Errors follow RFC 7807 (Problem Details). Pagination is cursor-based; do not assume offset.

## Webhooks

Subscribe a URL; receive POST callbacks within ~250ms of the underlying event. Payloads are signed with HMAC-SHA256 using a tenant-scoped secret — verify the `X-VisionStream-Signature` header before processing.

Subscribable event types:

- `event.lpr.matched` — plate matched a watch list
- `event.lpr.detected` — plate read, no list match
- `event.intrusion.entered` / `event.intrusion.exited`
- `event.tripwire.crossed`
- `event.loitering.threshold`
- `device.health.degraded` / `device.health.recovered`
- `device.tamper.detected`
- `clip.export.ready` — async clip generation completed

Retry policy: exponential backoff, 3 attempts over 5 minutes. Dead-letter inspection available in the developer console.

## Mobile SDK

Native iOS (Swift) and Android (Kotlin) SDKs ship as Swift Package Manager and Maven artifacts. Capabilities:

- Authenticate with OAuth2 or API key
- Embed live H.265 video views with hardware decode
- Subscribe to events over WebSocket
- Trigger audio talk-down on speaker-equipped cameras
- Generate and share clips with chain-of-custody preserved

Sample apps in both languages ship with the SDK. Minimum supported versions: iOS 15, Android 10.

## Authentication

Two methods, pick per integration:

- **OAuth2 (authorization code + PKCE)** — for end-user-facing apps. Standard scopes: `events:read`, `clips:write`, `cameras:read`, `audit:read`, `admin:*`.
- **API keys** — for server-to-server. Scoped per integration, rotatable without downtime, audit-logged on every call.

API keys are issued from the Developer Console. Each key has an environment label (production / staging), an owner email, and a last-used timestamp.

## Rate limits

Standard tier: 100 requests per second per tenant, 6,000 per minute, burst to 200 for 10 seconds. Webhook receive volume is unlimited.

429 responses include `Retry-After` and `X-RateLimit-Reset` headers. If you need higher limits — typical for video-wall or PSIM integrations polling 200+ cameras — contact us; enterprise tier raises the ceiling to 1,000/sec.

## Example use cases

- **ITSM integration (ServiceNow, Jira Service Management)** — open a ticket automatically when a `device.health.degraded` webhook fires. Auto-close on `device.health.recovered`.
- **Custom operations dashboard** — pull LPR events into a Grafana panel for a logistics yard, plot dwell time per truck.
- **BIM/CDE integration (Autodesk Construction Cloud, Procore)** — link camera coverage zones to BIM model elements; tag site safety incidents to specific building areas.
- **PSIM (Genetec, Milestone, Lenel)** — forward events into an existing command-and-control system without ripping out the upstream investment.
- **Insurance reporting** — pull a 90-day incident summary per site as part of a quarterly carrier package.

## Documentation and support

Full reference at `developers.visionstream.us`. Postman collection downloadable from the same URL. Developer support is included with any production tenant — direct Slack Connect channel for paid plans.
