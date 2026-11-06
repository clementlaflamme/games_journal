export const MAX_RATING = 5;

/**
 * Remplissage de chaque étoile (de 0 à 1) pour une note sur 5.
 * Ex. : 4.25 → [1, 1, 1, 1, 0.25]
 */
export function starFills(rating: number, max = MAX_RATING): number[] {
  const clamped = Math.min(Math.max(rating, 0), max);
  return Array.from({ length: max }, (_, i) =>
    Math.min(Math.max(clamped - i, 0), 1),
  );
}

/** Note en texte. Ex. : 4.25 → « 4.25 / 5 », 4 → « 4 / 5 ». */
export function formatRating(rating: number, max = MAX_RATING): string {
  return `${Number(rating.toFixed(2))} / ${max}`;
}

/** Libellé accessible. Ex. : « Note : 4.25 sur 5 ». */
export function ratingLabel(rating: number, max = MAX_RATING): string {
  return `Note : ${Number(rating.toFixed(2))} sur ${max}`;
}
