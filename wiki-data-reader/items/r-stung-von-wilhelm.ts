import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "RÜSTUNG VON WILHELM",
    attributes: [
      {
        type: "Health",
        value: "15%"
      },
      {
        type: "Armor",
        value: "15%"
      },
      {
        type: "Shields",
        value: "15%"
      },
      {
        type: "description",
        value: "While below <b>30%</b> Life, gain <b>10%</b> <b>Damage Reduction</b>."
      }
    ],
    cost: 10000,
    id: "i_223",
    tab: "survival",
    rarity: "epic"
  }
};

export default record;
