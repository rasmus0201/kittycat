export interface CatFactApiResponse<T> {
  current_page: number;
  data: T;
  next_page_url: string;
  path: string;
  per_page: string;
  prev_page_url: string;
  from: number;
  to: number;
  total: number;
  last_page: number;
}

export interface CatFact {
  id: number;
  fact: string;
  length: number;
  favorite?: boolean;
}
