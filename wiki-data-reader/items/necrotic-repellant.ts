import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "NECROTIC REPELLANT",
    attributes: [
      {
        type: "Shields",
        value: "50"
      },
      {
        type: "AP",
        value: "15%"
      },
      {
        type: "description",
        value: "On Use: Knockback and slow all enemies within 8m and apply 30% Healing Reduction for 5s. <b>Cooldown:</b> 15 seconds"
      }
    ],
    cost: 10000,
    tab: "survival",
    rarity: "epic",
    id: undefined
  }
};

export default record;
