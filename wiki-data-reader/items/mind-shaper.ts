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
        value: "Allies affected by <b>[Transcendence]</b> have their cooldowns refresh <b>15%</b> faster."
      }
    ],
    cost: 12000,
    character: "Zenyatta",
    tab: "ability",
    rarity: "epic"
  }
};

export default record;
