import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "HASTE PASTE",
    attributes: [
      {
        type: "Health",
        value: "25"
      },
      {
        type: "AP",
        value: "5%"
      },
      {
        type: "description",
        value: "[Repair Pack] grants 10% Move Speed to target while active."
      }
    ],
    cost: 4000,
    tab: "ability",
    rarity: "rare",
    character: "Brigitte",
    id: undefined
  }
};

export default record;
