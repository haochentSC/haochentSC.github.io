// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// User/organization GitHub Pages site -> served from the domain root, so base stays "/".
// If a custom domain is added later, keep `site` in sync (and add public/CNAME).
export default defineConfig({
  site: 'https://haochentSC.github.io',
  vite: {
    plugins: [tailwindcss()],
  },
});
