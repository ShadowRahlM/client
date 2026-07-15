import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://snowdental.com',
  integrations: [
    tailwind(),
  ],
  trailingSlash: 'ignore',
  build: {
    inlineStylesheets: 'auto',
  },
});
