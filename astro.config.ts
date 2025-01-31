import image from '@astrojs/image';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import compress from 'astro-compress';
import { defineConfig } from 'astro/config';
import { visualizer } from 'rollup-plugin-visualizer';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), image(), compress(), react()],
  vite: {
    plugins: [visualizer()],
    resolve: {
      alias: {
        'date-fns/locale': 'date-fns/locale/index.js',
      },
    },
  },
});
