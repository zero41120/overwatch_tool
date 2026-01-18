import type { Item } from "../../types";

export type MetricContext = {
  items: Item[];
  map: Map<string, number>;
  hero: string;
  heroPowers?: string[];
};
