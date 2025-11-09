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
        value: "When your Shields are depleted, knock back nearby enemies, dealing <b class=\"stat-ap\">80</b> damage. Can only trigger every <b>6s</b> after Shields are fully restored."
      }
    ],
    cost: 10000,
    character: "Zenyatta",
    tab: "survival",
    rarity: "epic"
  }
};

export default record;
