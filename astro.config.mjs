// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://code4ups.github.io',
  base: '/cs-study-companion/',
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [mdx(), react()],
});
