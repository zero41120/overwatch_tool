export type TorpedoItem = {
  id: string;
  name: string;
  cost: number;
  ap: number;
  baseAdd: number;
  burn: boolean;
  hp: number;
  wp: number;
  lifesteal: number;
  dr: number;
  hps: number;
  situational: boolean;
};

export type TorpedoOptions = {
  baseDamage?: number;
  minCash?: number;
  maxCash?: number;
  maxItems?: number;
  allowBurn?: boolean;
};
