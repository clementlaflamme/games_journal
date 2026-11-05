import { createApp } from 'vue';
import { clerkPlugin } from '@clerk/vue';
import App from './App.vue';
import './index.css';

const publishableKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!publishableKey) {
  throw new Error(
    'VITE_CLERK_PUBLISHABLE_KEY manquante : ajoute-la dans le fichier .env (voir .env.example).',
  );
}

createApp(App).use(clerkPlugin, { publishableKey }).mount('#app');
