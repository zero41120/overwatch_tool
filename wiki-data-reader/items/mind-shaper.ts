import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "MIND SHAPER",
    attributes: [
      {
        type: "AP",
        value: "15%"
      },
      {
        type: "Starting Ultimate Charge",
        value: "15%"
      },
      {
        type: "description",
        value: "Allies affected by [Transcendence] have their cooldowns refresh 15% faster."
      }
    ],
    cost: 12000,
    tab: "ability",
    rarity: "epic",
    character: "Zenyatta",
    id: undefined
  }
};

export default record;
