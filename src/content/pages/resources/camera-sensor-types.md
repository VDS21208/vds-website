---
collection: resources
url: /resources/camera-sensor-types/
pageType: Guide
status: Launch
seoTitle: Camera Sensor Types Guide for Mobile Surveillance | VDS
metaDescription: A buyer's guide to camera sensor types used in mobile surveillance — CMOS, CCD, thermal, low-light, multispectral. Pick the right sensor for your site.
h1: Camera Sensor Types — A Buyer's Reference
heroEyebrow: Reference
heroSubhead: Every sensor type you'll see in mobile surveillance specs — explained in plain English, with the trade-offs that matter for site security.
heroCTAPrimary:
  label: Talk to an expert
  url: /contact-us/
heroCTASecondary:
  label: See VDS hardware
  url: /products/
heroStats:
  - "12 · Sensor types covered"
  - "97% · Detection accuracy w/ thermal+RGB fusion"
  - "<1 lux · True low-light threshold"
parent: /resources/
canonical: https://visiondetectionsystems.com/resources/camera-sensor-types/
ogTitle: Camera Sensor Types Guide — Mobile Surveillance | VDS
ogDescription: A buyer's guide to camera sensor types — CMOS, CCD, thermal, low-light, multispectral. Pick the right sensor for your site.
ogImage: https://visiondetectionsystems.com/assets/og-default.jpg
ogType: article
robots: index, follow
tags: camera sensors, CMOS, CCD, thermal imaging, multispectral, low-light, surveillance hardware
finalCTAHeading: Need a recommendation for your site?
finalCTABody: Tell us about your environment and we'll pick the right sensor combo.
finalCTAButtons:
  - label: Request a quote
    url: /request-a-quote/
  - label: Schedule a demo
    url: /schedule-a-demo/
faq:
  - q: What is the difference between CMOS and CCD camera sensors?
    a: CMOS sensors are now standard for surveillance — they're cheaper, more power-efficient, and capable of higher frame rates than CCD. CCD sensors historically offered better low-light performance and less rolling-shutter distortion, but modern backside-illuminated CMOS has closed that gap for security work.
  - q: When should I use a thermal camera versus a regular camera?
    a: Use thermal when you need detection regardless of lighting — fence-line, perimeter, copper theft prevention, and pitch-dark environments. Use RGB/CMOS when you need facial features, license plates, or color details. The best mobile surveillance trailers fuse both.
  - q: What is multispectral imaging?
    a: A camera that captures light across multiple wavelength bands beyond visible light — typically combining visible, near-infrared, and sometimes shortwave infrared. Useful for detecting concealment, vegetation health, and certain industrial inspection use cases.
  - q: Do mobile surveillance trailers use the same sensors as fixed CCTV?
    a: Mostly yes, but with key differences. Mobile trailers favor wide-dynamic-range CMOS sensors (because they're outdoors), thermal cores for night work, and rugged housings rated IP66/IP67. Power efficiency matters more because they're solar-autonomous.
---

When you're spec'ing a mobile surveillance system, the **sensor inside the camera** decides what you can and can't see — and how reliably you'll see it at 2am, in rain, in fog, or across a 300-foot fence line.

This is a plain-English reference covering every sensor type you'll encounter in a vendor spec sheet, what it's good for, and what to watch out for.

## Visible-light (RGB) sensors

These are the workhorses — the sensors in 95% of commercial surveillance cameras.

### CMOS (Complementary Metal-Oxide-Semiconductor)
The current standard. Cheaper to manufacture, lower power draw, faster readouts, and now the norm even in high-end security cameras. Modern back-side-illuminated (BSI) CMOS sensors capture nearly as much light as legacy CCDs.

**Good for:** General surveillance, parking lots, retail interiors, daytime fence-line monitoring, license plate recognition.
**Watch for:** Rolling-shutter distortion on fast-moving objects. Look for "global shutter" CMOS if you're capturing license plates at highway speed.

### CCD (Charge-Coupled Device)
Older technology that historically dominated security cameras. Better low-light sensitivity and less motion distortion, but more power hungry and slower. Mostly replaced by CMOS in commercial surveillance.

**Good for:** Niche legacy installations where existing infrastructure already supports CCD.
**Watch for:** Higher power draw — a deal-breaker for solar-autonomous deployments.

### Backside-illuminated (BSI) CMOS
A CMOS variant where the sensor's wiring sits behind the photodiode instead of in front. Result: dramatically better low-light performance, typically 1.5–2x more light captured. The default choice for modern surveillance flagships.

### Stacked CMOS
The most advanced commercial CMOS architecture — pixel layer, memory, and logic stacked vertically. Enables high frame rates (60–120 fps) and on-sensor AI processing for edge detection. Found in premium cameras and increasingly in mobile surveillance hardware.

## Thermal-imaging sensors

Thermal cameras don't capture light — they capture heat. Critical for any deployment that needs to detect intruders in pitch darkness, fog, smoke, or foliage.

### Uncooled microbolometer (Vanadium Oxide / amorphous silicon)
The standard thermal sensor for surveillance. Detects long-wave infrared (8–14μm) emitted by anything warmer than its surroundings. No cryogenic cooling needed, so it's compact and power-efficient.

**Good for:** Perimeter intrusion, copper theft prevention at substations, search-and-rescue, fence-line, pipeline monitoring.
**Watch for:** Resolution matters — 320×240 or higher is the floor for credible detection at typical perimeter ranges.

### Cooled photon detectors
Lab-grade thermal. Cooled to cryogenic temperatures for extreme sensitivity. Found in defense and scientific applications, not commercial surveillance.

## Specialized sensors

### Multispectral
Captures multiple discrete wavelength bands — visible, near-infrared (NIR), and sometimes shortwave infrared (SWIR). Used for agricultural monitoring, vegetation analysis, and concealed-object detection.

**Good for:** Solar farm vegetation management, agricultural perimeter security, advanced military applications.

### Hyperspectral
A more detailed cousin of multispectral — captures hundreds of contiguous wavelength bands. Lab and aerospace work, rare in security.

### Time-of-Flight (ToF) / LiDAR
Emits laser pulses and measures return time to build a 3D depth map. Used for distance measurement, volumetric detection, and depth-aware analytics.

**Good for:** People-counting, virtual tripwires immune to lighting changes, perimeter monitoring with precise distance.

### Radar (mmWave and FMCW)
Not a camera sensor per se, but typically packaged with cameras. Detects motion through fog, dust, foliage, and walls. VDS pairs radar with thermal for true all-weather detection.

**Good for:** Long-range perimeter, weather-impaired environments, fence-line.

### Low-light / Starlight sensors
A marketing term used by several manufacturers (Sony Starvis, Hikvision DarkFighter, Axis Lightfinder) for highly-sensitive BSI CMOS sensors that perform usable color imaging down to 0.001 lux. Often paired with f/1.4 or wider lenses.

**Good for:** Parking lots, low-budget night work where you don't want thermal expense.

## Pixel size, resolution, and sensitivity

Higher megapixels don't always mean better. Two sensors with the same pixel count can perform wildly differently based on:

- **Sensor format** (1/2.8", 1/1.8", 2/3", full-frame) — bigger = more light per pixel
- **Pixel pitch** — larger pixels collect more light, often better in low light
- **Dynamic range** — measured in stops or dB; critical for scenes with both bright lights and dark shadows
- **Quantum efficiency** — how many photons become electrical signal

For mobile surveillance trailers, prioritize **sensor sensitivity (low-light performance), dynamic range, and frame rate** over raw megapixel count.

## How VDS picks sensors

Our hardware combines:

- **4K BSI CMOS** for color detail (LPR, facial recognition where allowed, evidence)
- **320×240 or 640×480 thermal** for all-conditions detection
- **mmWave radar** for fog, smoke, and dust resilience
- **Edge AI** running on stacked-CMOS modules for sub-second detection

The result is an all-weather, low-light-immune, AI-pre-filtered detection system that fits inside a solar-powered trailer.

## Related references

- [Glossary of industry terms](/glossary/)
- [Compare VDS vs fixed cameras](/compare/vds-vs-fixed-cameras/)
- [Why thermal matters for copper theft](/use-cases/copper-theft-prevention/)
