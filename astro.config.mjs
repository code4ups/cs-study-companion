// astro.config.mjs
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://code4ups.github.io/cs-study-companion/',
  base: '/cs-study-companion/',
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [mdx(), react()],
  output: 'static',
});
