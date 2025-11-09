import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "TACTICAL RIFLE",
    attributes: [
      {
        type: "WP",
        value: "10%"
      },
      {
        type: "description",
        value: "While scoped, [Biotic Rifle] will lock-on to allies for guaranteed hits and has less reduced movement speed"
      }
    ],
    cost: 5000,
    tab: "weapon",
    rarity: "rare",
    iconUrl: "https://static.wikia.nocookie.net/overwatch_gamepedia/images/a/a3/Tactical_Rifle_Item.png",
    character: "Ana",
    id: undefined
  }
};

export default record;
