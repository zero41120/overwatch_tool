import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "VOLATILE GRAVEL",
    attributes: [
      {
        type: "AP",
        value: "10%"
      },
      {
        type: "description",
        value: "When you deal damage with [Accretion], gain 5% Ability Power until the end of the round, stacking up to 4 times."
      }
    ],
    cost: 4000,
    tab: "ability",
    rarity: "rare",
    character: "Sigma",
    id: undefined
  }
};

export default record;
