import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "AEROWEAVE CLOAK",
    attributes: [
      {
        type: "Health",
        value: "25"
      },
      {
        type: "Take Aim Slowed Momentum Duration",
        value: "100%"
      },
      {
        type: "description",
        value: "While momentum is slowed by [Take Aim], restore 5% Max Life and 10% Max Ammo every 1s."
      }
    ],
    cost: 4000,
    tab: "survival",
    rarity: "rare",
    iconUrl: "https://static.wikia.nocookie.net/overwatch_gamepedia/images/6/60/Aeroweave_Cloak.png",
    character: "Freja",
    id: undefined
  }
};

export default record;
