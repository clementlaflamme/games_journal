import { createRouter, createWebHashHistory } from 'vue-router';
import HomePage from './pages/HomePage.vue';
import PlaceholderPage from './pages/PlaceholderPage.vue';

declare module 'vue-router' {
  interface RouteMeta {
    title: string;
  }
}

// Mode hash : compatible avec le chargement de fichiers locaux d'Electron.
export const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
      meta: { title: 'Accueil' },
    },
    {
      path: '/a-jouer',
      name: 'play-later',
      component: PlaceholderPage,
      meta: { title: 'À jouer plus tard' },
    },
    {
      path: '/favoris',
      name: 'favourites',
      component: PlaceholderPage,
      meta: { title: 'Mes favoris' },
    },
    {
      path: '/evaluations',
      name: 'ratings',
      component: PlaceholderPage,
      meta: { title: 'Mes évaluations' },
    },
    {
      path: '/parametres',
      name: 'settings',
      component: PlaceholderPage,
      meta: { title: 'Paramètres' },
    },
  ],
});
