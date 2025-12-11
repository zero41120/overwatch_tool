import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "NECROTIC REPELLANT",
    attributes: [
      {
        type: "Armor",
        value: "50"
      },
      {
        type: "CR",
        value: "5%"
      },
      {
        type: "description",
        value: "On Use: Knockback, Hinder and slow all enemies within 4m for 1s. <b>Cooldown:</b> 25 seconds"
      }
    ],
    cost: 9000,
    tab: "survival",
    rarity: "epic",
    iconUrl: "https://static.wikia.nocookie.net/overwatch_gamepedia/images/3/3b/Necrotic_Repellant.png",
    id: undefined
  }
};

export default record;
