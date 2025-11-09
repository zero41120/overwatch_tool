import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "RÜSTUNG VON WILHELM",
    attributes: [
      {
        type: "Health, Armor, Shields",
        value: "15%"
      },
      {
        type: "description",
        value: "While below 30% Life, gain 10% Damage Reduction."
      }
    ],
    cost: 10000,
    tab: "survival",
    rarity: "epic",
    id: "i_223"
  }
};

export default record;
