import { heroesApi } from "../api/heroes.api";
import type { Hero } from "../types/heroe.interface";


interface Options {
  name?: string
}

const BASE_URL = import.meta.env.VITE_API_URL;

export const searchHeroesAction = async ({ name }: Options) => {
  const { data } = await heroesApi.get<Hero[]>('/search', {
    params: {
      name,
    }
  });

  const heroes = data.map(hero => ({
    ...hero,
    image: `${BASE_URL}/images/${hero.image}`,
  }))

  return {
    ...data,
    heroes,
  };
}