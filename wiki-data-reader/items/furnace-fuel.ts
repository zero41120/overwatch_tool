import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "FURNACE FUEL",
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
        value: "Cleansed Burns grant <b>3%</b> Ultimate Charge."
      }
    ],
    cost: 4000,
    character: "Ashe",
    id: "i_95",
    tab: "ability",
    rarity: "rare"
  }
};

export default record;
