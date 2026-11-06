import { describe, expect, it } from 'vitest';
import { formatRating, ratingLabel, starFills } from './stars';

describe('starFills', () => {
  it('remplit partiellement la dernière étoile', () => {
    expect(starFills(4.25)).toEqual([1, 1, 1, 1, 0.25]);
    expect(starFills(4.75)).toEqual([1, 1, 1, 1, 0.75]);
    expect(starFills(2.5)).toEqual([1, 1, 0.5, 0, 0]);
  });

  it('gère les bornes', () => {
    expect(starFills(0)).toEqual([0, 0, 0, 0, 0]);
    expect(starFills(5)).toEqual([1, 1, 1, 1, 1]);
    expect(starFills(-1)).toEqual([0, 0, 0, 0, 0]);
    expect(starFills(7)).toEqual([1, 1, 1, 1, 1]);
  });
});

describe('formatRating', () => {
  it('affiche la note sans zéros inutiles', () => {
    expect(formatRating(4.25)).toBe('4.25 / 5');
    expect(formatRating(4)).toBe('4 / 5');
    expect(formatRating(3.5)).toBe('3.5 / 5');
  });
});

describe('ratingLabel', () => {
  it('donne un libellé lisible', () => {
    expect(ratingLabel(4.75)).toBe('Note : 4.75 sur 5');
  });
});
