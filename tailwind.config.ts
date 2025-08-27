// tailwind.config.ts
import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';

const config: Config = {
    darkMode: 'class', // Πάντα με βάση το .dark class
    content: [
        './src/**/*.{astro,html,md,mdx,tsx,ts}',
    ],
    theme: {
        extend: {},
    },
    plugins: [typography],
};

export default config;
