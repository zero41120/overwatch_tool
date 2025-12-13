import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "DUAL LAYER DAMPENER",
    attributes: [
      {
        type: "Armor",
        value: "25"
      },
      {
        type: "Increased Power Block Damage Reduction",
        value: "10%"
      },
      {
        type: "description",
        value: "[Power Block] now also reduces damage against Burn and other Damage Over Time effects."
      }
    ],
    cost: 4000,
    tab: "survival",
    rarity: "rare",
    iconUrl: "https://static.wikia.nocookie.net/overwatch_gamepedia/images/4/43/Dual_Layer_Dampener.png",
    character: "Doomfist"
  }
};

export default record;
