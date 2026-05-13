// Generate a contextually relevant hero background image URL from page metadata.
// Uses Unsplash Source API (free, no auth) until real photography is available.
// URL pattern: https://source.unsplash.com/featured/1600x900/?{keyword1},{keyword2}

const KEYWORD_MAP: Record<string, string[]> = {
  // Industries
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
  'events': ['event', 'concert-venue'],
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
  // Threats
  'copper-theft': ['power-grid', 'substation'],
  'cargo-theft': ['shipping-container', 'logistics'],
  'catalytic-converter': ['car-dealership', 'parking-lot'],
  'vandalism': ['graffiti', 'urban'],
  'illegal-dumping': ['construction-site', 'industrial'],
  'after-hours': ['night-city', 'dark-warehouse'],
  // Products
  'sky-guard': ['surveillance-camera', 'security-trailer'],
  'swift-deploy': ['surveillance-camera', 'security'],
  'boundary-guard': ['fence', 'perimeter-security'],
  'mobile-surveillance': ['security-camera', 'cctv'],
  'trailer': ['security-trailer', 'surveillance'],
  'lpr': ['license-plate', 'traffic'],
  'license-plate': ['license-plate', 'traffic'],
  // Platform / Tech
  'platform': ['data-center', 'control-room'],
  'soc': ['control-room', 'security-operations'],
  'ai-video': ['data-center', 'monitor-wall'],
  'cloud': ['data-center', 'cloud-computing'],
  // Geography
  'baltimore': ['baltimore-skyline', 'harbor'],
  'new-york': ['new-york-skyline', 'manhattan'],
  'washington-dc': ['washington-monument', 'capitol'],
  'philadelphia': ['philadelphia-skyline', 'liberty-bell'],
  'richmond': ['richmond-virginia', 'james-river'],
  'miami': ['miami-skyline', 'beach'],
  'dallas': ['dallas-skyline', 'texas'],
  'los-angeles': ['los-angeles-skyline', 'palm-trees'],
  'chicago': ['chicago-skyline', 'river'],
  'boston': ['boston-skyline', 'massachusetts'],
  'charlotte': ['charlotte-north-carolina', 'skyline'],
  'denver': ['denver-skyline', 'colorado-mountains'],
  'houston': ['houston-skyline', 'texas'],
  'jacksonville': ['jacksonville-florida', 'beach'],
  'nashville': ['nashville-skyline', 'tennessee'],
  'phoenix': ['phoenix-arizona', 'desert'],
  'seattle': ['seattle-skyline', 'space-needle'],
  'las-vegas': ['las-vegas-strip', 'casino'],
  // Compare / Solutions / Defaults
  'compare': ['business-meeting', 'security'],
  'pricing': ['business-numbers', 'calculator'],
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
  // Default fallback for generic pages
  if (keys.size === 0) {
    keys.add('security-camera');
    keys.add('surveillance');
  }
  return Array.from(keys).slice(0, 3);
}

export function heroImageUrl(input: { url?: string; tags?: string; pageType?: string }) {
  // Use loremflickr — works even when source.unsplash.com is rate-limited
  // Format: https://loremflickr.com/1600/900/keyword1,keyword2/?lock=N
  const kws = tagsToKeywords(input);
  // Deterministic seed from URL so same page always gets same image
  const seed = (input.url || 'home').split('').reduce((a, c) => (a + c.charCodeAt(0)) | 0, 0) & 0xffff;
  // Try Unsplash Source first (still works for many users), fallback handled by browser via onerror in component
  return `https://source.unsplash.com/featured/1600x900/?${kws.join(',')}&sig=${seed}`;
}

export function heroImageFallback(input: { url?: string; tags?: string }) {
  const kws = tagsToKeywords(input);
  const seed = (input.url || 'home').split('').reduce((a, c) => (a + c.charCodeAt(0)) | 0, 0) & 0xffff;
  return `https://loremflickr.com/1600/900/${kws.join(',')}?lock=${seed}`;
}
