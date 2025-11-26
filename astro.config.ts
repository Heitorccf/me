import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import tailwind from '@astrojs/tailwind';

// Configuração para deploy no GitHub Pages
const REPO_NAME = 'me';
const GITHUB_USER = 'heitorccf';

export default defineConfig({
  site: `https://${GITHUB_USER}.github.io`,
  base: `/${REPO_NAME}`,
  
  integrations: [
    svelte(),
    tailwind({
      applyBaseStyles: false, // Desabilita estilos base do Tailwind
    }),
  ],
  
  build: {
    assets: '_assets', // Pasta customizada para assets buildados
  },
  
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp', // Processamento de imagens com Sharp
    },
  },
});