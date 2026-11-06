import { describe, expect, it } from 'vitest';
import { coverUrl, latestRated, topRated } from './ratings';
import type { RatedGame } from './types';

const game = (id: number, rating: number, updatedAt: string): RatedGame => ({
  id,
  name: `Jeu ${id}`,
  coverImageId: null,
  rating,
  updatedAt,
});

const games = [
  game(1, 3, '2026-01-01'),
  game(2, 4.75, '2026-02-01'),
  game(3, 4.75, '2026-03-01'),
  game(4, 1.25, '2026-04-01'),
];

describe('topRated', () => {
  it('trie par note décroissante puis par date récente', () => {
    expect(topRated(games, 3).map((g) => g.id)).toEqual([3, 2, 1]);
  });

  it('ne modifie pas la liste reçue', () => {
    topRated(games, 2);
    expect(games.map((g) => g.id)).toEqual([1, 2, 3, 4]);
  });

  it('renvoie une liste vide si aucun jeu', () => {
    expect(topRated([], 10)).toEqual([]);
  });
});

describe('latestRated', () => {
  it('trie par date décroissante', () => {
    expect(latestRated(games, 3).map((g) => g.id)).toEqual([4, 3, 2]);
  });
});

describe('coverUrl', () => {
  it("construit l'URL IGDB", () => {
    expect(coverUrl('co1abc')).toBe(
      'https://images.igdb.com/igdb/image/upload/t_cover_big/co1abc.jpg',
    );
  });

  it('renvoie null sans pochette', () => {
    expect(coverUrl(null)).toBeNull();
  });
});
