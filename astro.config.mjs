import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://visiondetectionsystems.com',
  integrations: [tailwind()],
  build: { inlineStylesheets: 'auto' },
  trailingSlash: 'ignore',
  compressHTML: true,
});
