import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "B-SIDE BOP",
    attributes: [
      {
        type: "Health",
        value: "50"
      },
      {
        type: "Melee Damage",
        value: "25%"
      },
      {
        type: "description",
        value: "After using [Soundwave], your next [Quick Melee] grants decaying Overhealth equal to 200% of damage dealt."
      }
    ],
    cost: 10000,
    tab: "weapon",
    rarity: "epic",
    character: "Lúcio",
    id: "i_69"
  }
};

export default record;
