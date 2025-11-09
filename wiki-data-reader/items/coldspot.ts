import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "COLDSPOT",
    attributes: [
      {
        type: "Health",
        value: "25"
      },
      {
        type: "description",
        value: "Primary fire and [Blizzard] can remove burn. Primary Fire applies 35% Slow for 1.50s to an airborne enemy."
      }
    ],
    cost: 4000,
    tab: "survival",
    rarity: "rare",
    iconUrl: "https://static.wikia.nocookie.net/overwatch_gamepedia/images/c/c2/Coldspot.png",
    character: "Mei",
    id: "i_202"
  }
};

export default record;
