import { ref } from 'vue';
import type { RatedGame } from '../../shared/types';

/**
 * Données fictives, en attendant la route GET /ratings de l'API.
 * Remplacer par `[]` pour voir les états vides de l'accueil.
 */
const MOCK_RATINGS: RatedGame[] = [
  {
    id: 121,
    name: 'Minecraft',
    coverImageId: 'co49x5',
    rating: 4.75,
    updatedAt: '2026-10-02T18:00:00Z',
  },
  {
    id: 1942,
    name: 'The Witcher 3: Wild Hunt',
    coverImageId: 'co1wyy',
    rating: 4.25,
    updatedAt: '2026-11-03T20:15:00Z',
  },
  {
    id: 113112,
    name: 'Hades',
    coverImageId: 'co39vc',
    rating: 4.5,
    updatedAt: '2026-09-14T12:00:00Z',
  },
  {
    id: 26226,
    name: 'Celeste',
    coverImageId: 'co3byy',
    rating: 4.5,
    updatedAt: '2026-08-21T09:30:00Z',
  },
  {
    id: 11133,
    name: 'Outer Wilds',
    coverImageId: 'co65ac',
    rating: 5,
    updatedAt: '2026-07-01T16:45:00Z',
  },
  {
    id: 1020,
    name: 'Grand Theft Auto V',
    coverImageId: 'co2lbd',
    rating: 3.75,
    updatedAt: '2026-11-01T10:00:00Z',
  },
  {
    id: 103329,
    name: 'Control',
    coverImageId: 'co2evj',
    rating: 4,
    updatedAt: '2026-11-05T22:10:00Z',
  },
];

/** Évaluations de l'utilisateur connecté. */
export function useRatings() {
  const ratings = ref<RatedGame[]>(MOCK_RATINGS);
  const loading = ref(false);
  return { ratings, loading };
}
