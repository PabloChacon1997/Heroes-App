import { heroesApi } from "../api/heroes.api";
import type { Hero } from "../types/heroe.interface";


const BASE_URL = import.meta.env.VITE_API_URL;


export const getHero = async (idSlug: string) => {
  const { data } = await heroesApi.get<Hero>(`/${idSlug}`);
  return {
    ...data,
    image: `${BASE_URL}/images/${data.image}`,
  }
}
