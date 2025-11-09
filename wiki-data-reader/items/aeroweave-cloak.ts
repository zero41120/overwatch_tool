import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "AEROWEAVE CLOAK",
    attributes: [
      {
        type: "Health",
        value: "25"
      },
      {
        type: "[Take Aim] Slowed Momentum Duration",
        value: "100%"
      },
      {
        type: "description",
        value: "While momentum is slowed by <b>[Take Aim]</b>, restore <b>5%</b> Max Life every <b>1s</b>."
      }
    ],
    cost: 4000,
    character: "Freja",
    tab: "survival",
    rarity: "rare"
  }
};

export default record;
