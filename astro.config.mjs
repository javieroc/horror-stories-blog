// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://javieroc.github.io',
	base: 'the-bottle-of-klein',
  vite: {
    plugins: [tailwindcss()]
  }
});
