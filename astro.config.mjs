import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

import react from "@astrojs/react";

export default defineConfig({
  vite: {
    resolve: {
      alias: {
        "src/*": "./src/*",
        "shared/*": "./src/shared/*",
      }
    }
  },
  integrations: [sitemap(), mdx(), react()],
});