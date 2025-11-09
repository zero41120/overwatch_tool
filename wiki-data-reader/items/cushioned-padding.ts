import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "CUSHIONED PADDING",
    attributes: [
      {
        type: "Shields",
        value: "25"
      },
      {
        type: "Negative Effect Duration",
        value: "-40%"
      },
      {
        type: "description",
        value: "When affected by Stun, Sleep, or Hinder, restore 10% of your max Life over 3s."
      }
    ],
    cost: 3750,
    tab: "survival",
    rarity: "rare",
    id: "i_175"
  }
};

export default record;
