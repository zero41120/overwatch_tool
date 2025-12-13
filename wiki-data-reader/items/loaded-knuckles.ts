import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "LOADED KNUCKLES",
    attributes: [
      {
        type: "Armor",
        value: "25"
      },
      {
        type: "Melee Damage",
        value: "25%"
      },
      {
        type: "description",
        value: "[Quick Melee] hits restore 1 ammo. [Rocket Punch] hits restore 100% of your ammo."
      }
    ],
    cost: 10000,
    tab: "weapon",
    rarity: "epic",
    iconUrl: "https://static.wikia.nocookie.net/overwatch_gamepedia/images/4/44/Loaded_Knuckles.png",
    character: "Doomfist"
  }
};

export default record;
