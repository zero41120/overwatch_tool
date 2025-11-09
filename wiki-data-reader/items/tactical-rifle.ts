import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "TACTICAL RIFLE",
    attributes: [
      {
        type: "WP",
        value: "10%"
      },
      {
        type: "description",
        value: "While scoped, [Biotic Rifle] will lock-on to allies for guaranteed hits and has less reduced movement speed"
      }
    ],
    cost: 5000,
    tab: "weapon",
    rarity: "rare",
    character: "Ana",
    id: undefined
  }
};

export default record;
