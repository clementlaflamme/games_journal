import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import tailwindcss from '@tailwindcss/vite';
import path from 'node:path';

const projectRoot = import.meta.dirname;

// https://vitejs.dev/config
export default defineConfig({
  // index.html se trouve dans src/renderer
  root: path.join(projectRoot, 'src/renderer'),
  // Les fichiers .env restent à la racine du projet
  envDir: projectRoot,
  build: {
    // Garder la sortie à la racine du projet (.vite/renderer/main_window),
    // là où main.ts la charge en production.
    outDir: path.join(projectRoot, '.vite/renderer/main_window'),
    emptyOutDir: true,
  },
  plugins: [vue(), tailwindcss()],
});
