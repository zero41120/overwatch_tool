export type OptimizerProfile = {
  cost: number;
  attrs: number[];
  torpedoBaseAdd: number;
  hasSkyline: boolean;
  hasCodebreaker: boolean;
  indices: number[];
};

export type OptimizerParetoOptions = {
  maxItems: number;
  maxCash: number;
  costStep: number;
  maxFrontier?: number;
  attrKeys: string[];
  considerTorpedo: boolean;
  considerMediblaster: boolean;
};
