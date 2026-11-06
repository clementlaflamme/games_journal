/** Jeu évalué par l'utilisateur, tel que renvoyé par l'API Ratey. */
export interface RatedGame {
  /** ID IGDB */
  id: number;
  name: string;
  /** image_id de la pochette IGDB */
  coverImageId: string | null;
  /** Note sur 5, au quart de point (ex. 4.25) */
  rating: number;
  /** Date de la dernière modification de l'évaluation (ISO 8601) */
  updatedAt: string;
}
