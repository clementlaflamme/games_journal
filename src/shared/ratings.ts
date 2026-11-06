import type { RatedGame } from './types';

/** Les `count` jeux les mieux notés ; à note égale, le plus récent d'abord. */
export function topRated(games: readonly RatedGame[], count: number) {
  return [...games]
    .sort(
      (a, b) =>
        b.rating - a.rating ||
        Date.parse(b.updatedAt) - Date.parse(a.updatedAt),
    )
    .slice(0, count);
}

/** Les `count` dernières évaluations, de la plus récente à la plus ancienne. */
export function latestRated(games: readonly RatedGame[], count: number) {
  return [...games]
    .sort((a, b) => Date.parse(b.updatedAt) - Date.parse(a.updatedAt))
    .slice(0, count);
}

/** URL de la pochette IGDB (null si le jeu n'en a pas). */
export function coverUrl(
  coverImageId: string | null,
  size: 'cover_big' | '720p' = 'cover_big',
) {
  return coverImageId
    ? `https://images.igdb.com/igdb/image/upload/t_${size}/${coverImageId}.jpg`
    : null;
}
