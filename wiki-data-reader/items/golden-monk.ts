import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "GOLDEN MONK",
    attributes: [
      {
        type: "Armor",
        value: "50"
      },
      {
        type: "description",
        value: "For every <b>50</b> Armor you have, gain <b>5%</b> <b>[Quick Melee]</b> Damage."
      }
    ],
    cost: 10000,
    character: "Zenyatta",
    tab: "survival",
    rarity: "epic"
  }
};

export default record;
