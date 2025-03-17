import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

export default defineConfig({
  vite: {
    resolve: {
      alias: {
        "src/*": "./src/*",
        "shared/*": "./src/shared/*",
      }
    }
  },
  integrations: [
    sitemap(),
    mdx(),
  ],
});