import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "ROCKET-POWERED JAVELIN",
    attributes: [
      {
        type: "Health",
        value: "25"
      },
      {
        type: "WP",
        value: "5%"
      },
      {
        type: "description",
        value: "Quick Melee hits during [Power Slide] knock enemies back and deal 30% increased damage."
      }
    ],
    cost: 5000,
    tab: "weapon",
    rarity: "rare",
    character: "Sojourn",
    id: undefined
  }
};

export default record;
