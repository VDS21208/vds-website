import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const pageIndex = JSON.parse(fs.readFileSync(path.join(root, 'src', 'data', 'page-index.json'), 'utf-8'));
const SITE = 'https://visiondetectionsystems.com';
const today = new Date().toISOString().split('T')[0];

const urls = Object.values(pageIndex)
  .filter(p => {
    const robots = (p.robots || 'index, follow').toLowerCase();
    return !robots.includes('noindex');
  })
  .map(p => ({
    loc: `${SITE}${p.url === '/' ? '' : p.url}`,
    lastmod: today,
    priority: p.url === '/' ? '1.0' : (p.status?.toLowerCase().includes('launch') ? '0.8' : '0.6'),
  }));

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u => `  <url><loc>${u.loc}</loc><lastmod>${u.lastmod}</lastmod><priority>${u.priority}</priority></url>`).join('\n')}
</urlset>`;

fs.writeFileSync(path.join(root, 'dist', 'sitemap.xml'), xml);
console.log(`Wrote sitemap with ${urls.length} URLs`);
