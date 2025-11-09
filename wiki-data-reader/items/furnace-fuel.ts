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
        value: "Cleansed Burns grant 3% Ultimate Charge."
      }
    ],
    cost: 4000,
    tab: "ability",
    rarity: "rare",
    character: "Ashe",
    id: "i_95"
  }
};

export default record;
