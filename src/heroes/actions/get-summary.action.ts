import { heroesApi } from "../api/heroes.api"
import type { SummaryInformationResponse } from "../types/summary-information.response";

export const getSummaryAction = async () => {
  const { data } = await heroesApi.get<SummaryInformationResponse>('/summary');
  return data;
}