import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "SHIELDBUSTER",
    attributes: [
      {
        type: "WP",
        value: "5%"
      },
      {
        type: "description",
        value: "After dealing damage to Shields or Armor, gain 15% Attack Speed for 1s."
      }
    ],
    cost: 4000,
    tab: "weapon",
    rarity: "rare",
    iconUrl: "https://static.wikia.nocookie.net/overwatch_gamepedia/images/3/39/Shieldbuster.png",
    id: "i_7"
  },
  override: {
    name: "SHIELDBUSTER",
    attributes: [
      {
        type: "WP",
        value: "5%"
      },
      {
        type: "AS",
        value: "15%"
      },
      {
        type: "Editor's Note",
        value: "If the enemy has shield or armor, the condition for 15% attack speed is always met."
      }
    ]
  }
};

export default record;
