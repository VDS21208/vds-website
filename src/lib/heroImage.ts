// Generate a contextually relevant hero background image URL.
// Priority: 1) explicit page-set image 2) local Webflow imagery for known pages 3) Unsplash Source by tags

const LOCAL_HEROES: Record<string, string> = {
 // Homepage + top-level
 '/': '/assets/webflow/hero-security-1.avif',
 '/about-us': '/assets/webflow/hero-security-2.avif',
 '/about-us/our-plant': '/assets/webflow/frame-29.webp',
 '/about-us/mission': '/assets/webflow/hero-security-3.avif',
 '/about-us/why-vision-detection-systems': '/assets/webflow/hero-security-4.avif',
 '/about-us/trust-center': '/assets/webflow/frame-31.webp',
 '/about-us/ndaa-compliance': '/assets/webflow/frame-30.webp',
 '/about-us/leadership': '/assets/webflow/tab-1.webp',
 '/about-us/awards': '/assets/webflow/frame-28.webp',

 // Products (canonical lineup matching VDS catalog)
 '/products': '/assets/webflow/slider-1.webp',
 '/products/mobile-surveillance-unit': '/assets/products/mobile-surveillance-unit.png',
 '/products/wall-mount-system': '/assets/products/wall-mount-system.png',
 '/products/solar-powered-surveillance-kit': '/assets/products/solar-powered-surveillance-kit.png',
 '/products/guardian-sentry-tower': '/assets/products/guardian-sentry-tower.png',
 '/products/guardian-beacon-mlu': '/assets/products/guardian-beacon-mlu.png',
 '/products/solarvolt-worksite-illuminator': '/assets/products/solarvolt-worksite-illuminator.png',
 '/products/license-plate-recognition': '/assets/products/ai-analytics.png',
 '/products/guard-booths': '/assets/products/security-booth.png',
 '/products/medical-cooling-stations': '/assets/products/medical-cooling-booth.png',
 '/products/custom-solutions': '/assets/webflow/frame-28.webp',
 '/products/accessories': '/assets/webflow/product-5.avif',

 // Platform
 '/platform': '/assets/webflow/tab-2.webp',
 '/platform/ai-video-analytics': '/assets/webflow/tab-2.webp',
 '/platform/soc': '/assets/webflow/tab-3.webp',
 '/platform/lpr': '/assets/webflow/product-4.avif',
 '/platform/cloud-video-surveillance': '/assets/webflow/tab-4.webp',
 '/platform/cloud-security': '/assets/webflow/frame-30.webp',
 '/platform/integrations': '/assets/webflow/tab-5.webp',
 '/platform/api-sdk-access': '/assets/webflow/frame-31.webp',
 '/platform/alerts-reporting': '/assets/webflow/frame-28.webp',
 '/platform/mobile-app': '/assets/webflow/tab-1.webp',
 '/platform/pricing': '/assets/webflow/home-cta-1.avif',

 // Services
 '/services': '/assets/webflow/hero-security-2.avif',
 '/services/remote-video-monitoring': '/assets/webflow/tab-3.webp',
 '/services/rapid-deployment': '/assets/webflow/slider-1.webp',
 '/services/installation-maintenance': '/assets/webflow/slider-2.webp',
 '/services/system-integration': '/assets/webflow/tab-5.webp',
 '/services/managed-security': '/assets/webflow/hero-security-1.avif',
 '/services/consulting': '/assets/webflow/hero-security-2.avif',
 '/services/device-health-monitoring': '/assets/webflow/frame-28.webp',
 '/services/network-connectivity': '/assets/webflow/frame-29.webp',
 '/services/video-retrieval': '/assets/webflow/frame-30.webp',
 '/services/deployment-logistics': '/assets/webflow/slider-4.webp',

 // Industries hub + primary
 '/industries': '/assets/webflow/hero-security-3.avif',
 '/industries/construction-site-security': '/assets/webflow/hero-security-1.avif',
 '/industries/utility-substation-security': '/assets/webflow/hero-security-4.avif',
 '/industries/retail-shopping-center-security': '/assets/webflow/hero-security-3.avif',
 '/industries/automotive-dealership-security': '/assets/webflow/slider-2.webp',
 '/industries/parking-lot-garage-security': '/assets/webflow/slider-3.webp',
 '/industries/public-safety-law-enforcement-surveillance': '/assets/webflow/hero-security-2.avif',

 // Compare hub
 '/compare': '/assets/webflow/frame-28.webp',

 // Pricing
 '/pricing': '/assets/webflow/home-cta-1.avif',
 '/pricing/leasing-rentals': '/assets/webflow/home-cta-2.avif',
 '/pricing/purchase-options': '/assets/webflow/product-1.avif',
 '/pricing/subscription-plans': '/assets/webflow/tab-2.webp',
 '/pricing/dealers': '/assets/webflow/slider-5.webp',

 // Conversion
 '/request-a-quote': '/assets/webflow/home-cta-1.avif',
 '/contact-us': '/assets/webflow/home-cta-2.avif',

 // Resources hub
 '/resources': '/assets/webflow/frame-29.webp',
 '/resources/blog': '/assets/webflow/frame-30.webp',
 '/resources/case-studies': '/assets/webflow/slider-1.webp',

 // Other key
 '/answers': '/assets/webflow/frame-31.webp',
 '/glossary': '/assets/webflow/frame-28.webp',
 '/service-areas': '/assets/webflow/slider-5.webp',
};

const KEYWORD_MAP: Record<string, string[]> = {
 'construction': ['construction-site', 'construction'],
 'utility': ['power-station', 'substation', 'industrial'],
 'utilities': ['power-station', 'substation'],
 'substation': ['substation', 'power-grid'],
 'retail': ['shopping-center', 'parking-lot', 'retail'],
 'shopping': ['shopping-center', 'parking-lot'],
 'parking': ['parking-lot', 'parking-garage'],
 'garage': ['parking-garage', 'parking-lot'],
 'automotive': ['car-dealership', 'parking-lot'],
 'dealership': ['car-dealership', 'parking-lot'],
 'auto': ['car-dealership', 'parking-lot'],
 'warehouse': ['warehouse', 'logistics'],
 'logistics': ['warehouse', 'logistics-truck'],
 'cargo': ['shipping-container', 'logistics'],
 'oil': ['oil-rig', 'oil-gas'],
 'gas': ['oil-rig', 'oil-gas'],
 'event': ['event', 'concert-venue'],
 'festival': ['festival-crowd', 'event'],
 'healthcare': ['hospital-exterior', 'healthcare'],
 'hospital': ['hospital-exterior', 'healthcare'],
 'hospitality': ['hotel-exterior', 'hospitality'],
 'hotel': ['hotel-exterior', 'hospitality'],
 'school': ['school-campus', 'campus'],
 'campus': ['school-campus', 'campus'],
 'education': ['school-campus', 'campus'],
 'government': ['government-building', 'public-safety'],
 'public': ['public-safety', 'police-car'],
 'police': ['police-car', 'public-safety'],
 'law-enforcement': ['public-safety', 'police-car'],
 'cannabis': ['cannabis-dispensary', 'storefront'],
 'data-center': ['data-center', 'server-room'],
 'transit': ['rail-yard', 'transportation'],
 'transportation': ['rail-yard', 'transportation'],
 'critical-infrastructure': ['power-grid', 'industrial'],
 'community': ['neighborhood', 'suburb'],
 'copper-theft': ['power-grid', 'substation'],
 'cargo-theft': ['shipping-container', 'logistics'],
 'catalytic-converter': ['car-dealership', 'parking-lot'],
 'vandalism': ['graffiti', 'urban'],
 'illegal-dumping': ['construction-site', 'industrial'],
 'after-hours': ['night-city', 'dark-warehouse'],
 'mobile-surveillance-unit': ['security-trailer', 'surveillance-camera'],
 'wall-mount-system': ['surveillance-camera', 'building'],
 'solar-powered-surveillance-kit': ['solar-camera', 'security'],
 'guardian-sentry-tower': ['light-tower', 'construction-night'],
 'guardian-beacon-mlu': ['light-tower', 'solar'],
 'solarvolt-worksite-illuminator': ['construction-lighting', 'industrial'],
 'security-booth': ['guard-booth', 'gate'],
 'medical-cooling-booth': ['safety-booth', 'first-aid'],
 'custom-solutions': ['engineering', 'control-room'],
 'mobile-surveillance': ['security-camera', 'cctv'],
 'trailer': ['security-trailer', 'surveillance'],
 'lpr': ['license-plate', 'traffic'],
 'license-plate': ['license-plate', 'traffic'],
 'platform': ['data-center', 'control-room'],
 'soc': ['control-room', 'security-operations'],
 'ai-video': ['data-center', 'monitor-wall'],
 'cloud': ['data-center', 'cloud-computing'],
 'baltimore': ['baltimore-skyline', 'harbor'],
 'new-york': ['new-york-skyline', 'manhattan'],
 'washington-dc': ['washington-monument', 'capitol'],
 'philadelphia': ['philadelphia-skyline'],
 'richmond': ['richmond-virginia'],
 'miami': ['miami-skyline', 'beach'],
 'dallas': ['dallas-skyline', 'texas'],
 'los-angeles': ['los-angeles-skyline'],
 'chicago': ['chicago-skyline'],
 'boston': ['boston-skyline'],
 'charlotte': ['charlotte-north-carolina'],
 'denver': ['denver-skyline'],
 'houston': ['houston-skyline'],
 'jacksonville': ['jacksonville-florida'],
 'nashville': ['nashville-skyline'],
 'phoenix': ['phoenix-arizona'],
 'seattle': ['seattle-skyline'],
 'las-vegas': ['las-vegas-strip'],
 'compare': ['business-meeting', 'security'],
 'pricing': ['business-numbers'],
 'about': ['team', 'office'],
 'trust': ['handshake', 'security-shield'],
 'compliance': ['document', 'audit'],
 'ndaa': ['american-flag', 'capitol'],
 'guide': ['document', 'reading'],
 'blog': ['writing', 'desk'],
};

function tagsToKeywords(input: { url?: string; tags?: string; pageType?: string }): string[] {
 const keys = new Set<string>();
 const haystack = `${input.url || ''} ${input.tags || ''} ${input.pageType || ''}`.toLowerCase();
 for (const [k, kws] of Object.entries(KEYWORD_MAP)) {
 if (haystack.includes(k)) {
 kws.forEach((kw) => keys.add(kw));
 if (keys.size >= 3) break;
 }
 }
 if (keys.size === 0) {
 keys.add('security-camera');
 keys.add('surveillance');
 }
 return Array.from(keys).slice(0, 3);
}

export function heroImageUrl(input: { url?: string; tags?: string; pageType?: string; heroImage?: string }) {
 // 1) Explicit page-set image wins
 if (input.heroImage && input.heroImage.trim()) return input.heroImage;
 // 2) Local Webflow imagery for known pages
 if (input.url && LOCAL_HEROES[input.url]) return LOCAL_HEROES[input.url];
 // 3) Unsplash fallback by keyword
 const kws = tagsToKeywords(input);
 const seed = (input.url || 'home').split('').reduce((a, c) => (a + c.charCodeAt(0)) | 0, 0) & 0xffff;
 return `https://source.unsplash.com/featured/1600x900/?${kws.join(',')}&sig=${seed}`;
}
