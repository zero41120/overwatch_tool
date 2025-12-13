import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "ZOOMFIST",
    attributes: [
      {
        type: "Armor",
        value: "50"
      },
      {
        type: "description",
        value: "Whenever you gain Overhealth from yourself, heal for 15% of Overhealth gained over 1s and gain 15% Move Speed for 3s."
      }
    ],
    cost: 9500,
    tab: "survival",
    rarity: "epic",
    iconUrl: "https://static.wikia.nocookie.net/overwatch_gamepedia/images/b/b2/Zoomfist.png",
    character: "Doomfist"
  }
};

export default record;
