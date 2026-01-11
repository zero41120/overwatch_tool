import type { Item } from "../types";

export type OptimizerExtraField = {
  id: string;
  combine: "sum" | "max";
  itemValue: (item: Item) => number;
};

export type OptimizerProfile = {
  cost: number;
  attrs: number[];
  extras: number[];
  indices: number[];
};

export type OptimizerParetoOptions = {
  maxItems: number;
  maxCash: number;
  costStep: number;
  maxFrontier?: number;
  attrKeys: string[];
  extraFields?: OptimizerExtraField[];
};
