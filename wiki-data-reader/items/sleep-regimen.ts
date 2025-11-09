import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "SLEEP REGIMEN",
    attributes: [
      {
        type: "Health",
        value: "25"
      },
      {
        type: "description",
        value: "When you apply Sleep to an enemy, gain 10 health, up to 50"
      }
    ],
    cost: 4500,
    tab: "ability",
    rarity: "rare",
    character: "Ana",
    id: undefined
  }
};

export default record;
