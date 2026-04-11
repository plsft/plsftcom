import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import alpinejs from '@astrojs/alpinejs';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  output: 'server',
  adapter: cloudflare({
    platformProxy: {
      enabled: true,
    },
  }),
  integrations: [alpinejs()],
  vite: {
    ssr: {
      external: ['node:buffer'],
    },
    plugins: [tailwindcss()],
  },
});
