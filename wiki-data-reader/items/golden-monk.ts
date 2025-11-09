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
        value: "For every 50 Armor you have, gain 5% [Quick Melee] Damage."
      }
    ],
    cost: 10000,
    tab: "survival",
    rarity: "epic",
    character: "Zenyatta",
    id: undefined
  }
};

export default record;
