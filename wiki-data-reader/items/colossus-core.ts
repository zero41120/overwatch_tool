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
        value: "On Use: Gain Unstoppable, 25% Damage Reduction, 25% Max Life, and grow in size, but deal 25% reduced damage and healing for 5s. <b>Cooldown:</b> 25 seconds"
      }
    ],
    cost: 9500,
    tab: "survival",
    rarity: "epic",
    iconUrl: "https://static.wikia.nocookie.net/overwatch_gamepedia/images/2/2b/Colossus_Core.png",
    id: undefined
  }
};

export default record;
