import { CatFact, CatFactApiResponse } from "@/types";

import { get } from "./request";

export function getAllCatFacts({
  limit = 100,
  maxLength = 1000,
  page = 1,
}): Promise<CatFactApiResponse<CatFact[]>> {
  return get("https://catfact.ninja/facts", {
    max_length: maxLength,
    limit,
    page,
  });
}
