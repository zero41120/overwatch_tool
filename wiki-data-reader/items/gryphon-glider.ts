import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "GRYPHON GLIDER",
    attributes: [
      {
        type: "Health",
        value: "25"
      },
      {
        type: "ALS",
        value: "10%"
      },
      {
        type: "description",
        value: "You can now fly during [Charge]."
      }
    ],
    cost: 10000,
    tab: "ability",
    rarity: "epic",
    character: "Reinhardt",
    id: "i_132"
  }
};

export default record;
