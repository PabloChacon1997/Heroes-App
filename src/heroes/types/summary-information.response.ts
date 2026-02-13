import type { Hero } from "./heroe.interface";

export interface SummaryInformationResponse {
  totalHeroes:   number;
  strongestHero: Hero;
  smartestHero:  Hero;
  heroCount:     number;
  villainCount:  number;
}

