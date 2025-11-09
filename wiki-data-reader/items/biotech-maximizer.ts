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
        value: "When you use an ability that heals, reduce its cooldown by <b>5%</b> for each unique ally it heals."
      }
    ],
    cost: 10000,
    id: "i_115",
    tab: "ability",
    rarity: "epic"
  }
};

export default record;
