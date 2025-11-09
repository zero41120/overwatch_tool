import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "COLOSSUS CORE",
    attributes: [
      {
        type: "Health, Armor, Shields",
        value: "10%"
      },
      {
        type: "Knockback Resist",
        value: "40%"
      },
      {
        type: "Slow Resist",
        value: "40%"
      },
      {
        type: "description",
        value: "On Use: Gain Unstoppable, 25% Damage Reduction, 25% Max Life, and grow in size, but deal 25% reduced damage and healing for 3s. <b>Cooldown:</b> 35 seconds"
      }
    ],
    cost: 9500,
    tab: "survival",
    rarity: "epic",
    id: undefined
  }
};

export default record;
