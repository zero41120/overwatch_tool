import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "MEDITATION MAT",
    attributes: [
      {
        type: "Armor",
        value: "50"
      },
      {
        type: "description",
        value: "When your Shields are depleted, knock back nearby enemies, dealing <b class=\"stat-ap\">80</b> damage. Can only trigger every 6s after shields are fully restored."
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
