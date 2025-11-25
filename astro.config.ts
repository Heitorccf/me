import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import tailwind from '@astrojs/tailwind';

const REPO_NAME = 'me';
const GITHUB_USER = 'heitorccf';

export default defineConfig({
  site: `https://${GITHUB_USER}.github.io`,
  base: `/${REPO_NAME}`,
  integrations: [
    svelte(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  build: {
    assets: '_assets',
  },
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
    },
  },
});