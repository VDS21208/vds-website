---
url: /services/device-health-monitoring
collection: services
pageType: Service Detail
parent: /services
status: Expansion
seoTitle: Device Health Monitoring | Proactive Trailer Telemetry | VDS
metaDescription: 24/7 telemetry on battery, solar, cellular, camera uptime, and tamper. Failures predicted and dispatched before downtime
announcementBar: ''
h1: Device Health Monitoring Before Failure, Not After
heroEyebrow: Managed Service
heroSubhead: Battery state, solar input, cellular RSRP, camera frame rate, and tamper status streamed to the VDS NOC every 60 seconds. Issues open a ticket before a camera goes dark.
heroCTAPrimary:
  label: See a Sample Health Dashboard
  url: /request-a-quote
heroCTASecondary:
  label: Talk to an Engineer
  url: /request-a-quote
heroStats:
- 60-second telemetry • 99.6% uptime SLA • Predictive battery alerts • Included with every trailer
heroImage: ''
faq:
- q: Does this apply to my own cameras on a VDS network?
  a: Camera health monitoring applies to any ONVIF-compliant camera on AI VisionStream, including yours. Trailer-specific telemetry (battery, solar) applies to VDS-owned trailers.
- q: What is the historical retention for health data?
  a: 12 months at full resolution, 5 years at hourly aggregates.
- q: How are tamper alerts validated to avoid false positives from animals or weather?
  a: 'Tamper is a composite signal: tilt + door switch + camera analytics + SOC visual confirmation. Single-sensor triggers escalate to human review before dispatch.'
- q: Can I set custom alert thresholds?
  a: Yes. Tenant admins can override defaults per site or per device class.
- q: What is the cost?
  a: Included with every VDS trailer subscription. No separate line item.
finalCTAHeading: See your fleet's telemetry
finalCTABody: We will pull anonymized health data from a comparable deployment so you can see the dashboard, the alert flow, and the monthly report format.
finalCTAButtons:
- label: Schedule Walkthrough
  url: Download Service Brief
schemaType: Service
internalLinks: /services/24-7-soc, /services/network-connectivity, /platform/platform, /hardware/mobile-surveillance-trailers
canonical: https://visiondetectionsystems.com/services/device-health-monitoring
ogTitle: Device Health Monitoring Before Failure, Not After
ogDescription: 24/7 telemetry on battery, solar, cellular, camera uptime, and tamper. Failures predicted and dispatched before downtime
ogImage: https://visiondetectionsystems.com/assets/og-default.jpg
ogType: website
robots: index, follow
speakable: .hero-h1, .hero-subhead, h2
author: Vision Detection Systems
tags: 24/7 SOC, remote video monitoring
notes: Anchor the 99.6% uptime number. Link from hardware page and from MSU buyer's guide.
---

Every VDS trailer reports to our network operations center every 60 seconds. We monitor the things that actually fail on a remote outdoor unit — and we open the ticket before you find out about the outage from your facility manager.

## What we measure

**Power system**
- Battery voltage, current, and state-of-charge (SoC)
- Battery temperature (cold-soak risk in northern climates, thermal runaway risk in southern)
- Solar panel input voltage and current per string
- Charge controller mode (bulk, absorb, float, equalize)
- Daily kWh in vs. kWh out — predicts winter SoC drift before it becomes a brown-out

**Connectivity**
- Cellular RSRP, RSRQ, and SINR per modem
- Carrier and band attached (Verizon, AT&T, T-Mobile, FirstNet)
- Failover events between primary and secondary SIM
- Starlink uplink throughput and obstruction percentage (where deployed)

**Cameras**
- ONVIF heartbeat per camera, 30-second interval
- Frame rate, bitrate, packet loss
- Lens fault (focus drift, condensation, obstruction detected via image analytics)
- IR illuminator current draw — predicts night-vision degradation

**Physical**
- Tilt sensor (trailer leveling drift, attempted tipping)
- Door / panel switches (cabinet access, attempted entry)
- GPS position vs. expected geofence
- Mast extension limit switches

## Alert thresholds, not just dashboards

A dashboard is not a service. We define thresholds per metric and per deployment context. A construction site in Phoenix in July gets different thermal limits than a logistics yard in Fargo in January. Default thresholds for the most common alerts:

- Battery SoC below 35% on a clear-sky day → ticket opened, solar diagnostic dispatched
- Cellular RSRP worse than -110 dBm for 15 minutes → ticket, antenna inspection
- Camera frame rate below 80% of nominal for 5 minutes → ticket, stream restart attempted automatically
- Tamper sensor triggered → SOC notified immediately, audio talk-down armed, dispatch evaluated
- GPS position outside geofence → escalation, vehicle recovery procedure

## What happens when an alert fires

1. NOC engineer acknowledges within 5 minutes during business hours, 15 minutes overnight
2. Remote diagnostics — firmware status, recent log review, attempt remote fix
3. If unresolvable remotely, dispatch decision: customer-fixable, regional tech, or trailer redeploy
4. Customer notified by email, SMS, or webhook depending on tenant preference
5. Resolution logged to the immutable audit trail

A typical fix-without-truck-roll rate across our fleet runs 73%. The remaining 27% generate a same-day to 72-hour field response depending on site criticality.

## Predictive replacement

Battery banks have a service curve. We track depth-of-discharge cycles and Peukert-adjusted capacity per pack and flag replacement at roughly 80% of expected end-of-life — typically months ahead of failure. Same for fan-cooled cellular modems, IR illuminators, and dome-camera gaskets.

## What the customer sees

A live dashboard per trailer with the same metrics we monitor, downloadable monthly health PDFs, and webhook subscription if you want the data piped into your own ITSM (see the API page). Uptime SLA is reported per quarter against a 99.6% target.

## Included, not upsold

Device health monitoring is included with every VDS-deployed trailer at no extra cost. We are responsible for keeping the asset online; this is the instrumentation that lets us hold ourselves to that.
