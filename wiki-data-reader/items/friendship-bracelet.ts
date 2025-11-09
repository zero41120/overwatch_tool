import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "FRIENDSHIP BRACELET",
    attributes: [
      {
        type: "AP",
        value: "10%"
      },
      {
        type: "description",
        value: "Increase your healing by up to <b>20%</b>, based on how close you are to your target."
      }
    ],
    cost: 11000,
    character: "Zenyatta",
    tab: "ability",
    rarity: "epic"
  }
};

export default record;
