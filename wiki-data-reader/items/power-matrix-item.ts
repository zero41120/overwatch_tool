import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "POWER MATRIX (ITEM)",
    attributes: [
      {
        type: "Armor",
        value: "50"
      },
      {
        type: "description",
        value: "[Power Block] absorbs projectiles for the first 1s, gaining Overhealth equal to 1% of your max Life for each projectile absorbed."
      }
    ],
    cost: 11000,
    tab: "survival",
    rarity: "epic",
    iconUrl: "https://static.wikia.nocookie.net/overwatch_gamepedia/images/8/88/Power_Matrix_Item.png",
    character: "Doomfist"
  }
};

export default record;
