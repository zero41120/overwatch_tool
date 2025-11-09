import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "IRON EYES",
    attributes: [
      {
        type: "Shields",
        value: "25"
      },
      {
        type: "MS",
        value: "5%"
      },
      {
        type: "description",
        value: "You take 20% reduced damage from Critical Hits."
      }
    ],
    cost: 3750,
    tab: "survival",
    rarity: "rare",
    iconUrl: "https://static.wikia.nocookie.net/overwatch_gamepedia/images/d/d5/Iron_Eyes.png",
    id: "i_180"
  }
};

export default record;
