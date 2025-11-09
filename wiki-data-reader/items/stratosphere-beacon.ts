import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "STRATOSPHERE BEACON",
    attributes: [
      {
        type: "Health",
        value: "25"
      },
      {
        type: "description",
        value: "Damage to airborne targets above 3m deals 10 bonus damage and slows the enemy by 25% for 3s (15s Cooldown)"
      }
    ],
    cost: 1500,
    tab: "weapon",
    rarity: "common",
    id: undefined
  }
};

export default record;
