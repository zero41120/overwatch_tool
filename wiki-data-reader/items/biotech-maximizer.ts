import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "BIOTECH MAXIMIZER",
    attributes: [
      {
        type: "Health",
        value: "25"
      },
      {
        type: "AP",
        value: "10%"
      },
      {
        type: "description",
        value: "When you use an ability that heals, reduce its cooldown by 5% for each unique ally it heals."
      }
    ],
    cost: 10000,
    tab: "ability",
    rarity: "epic",
    id: "i_115"
  }
};

export default record;
