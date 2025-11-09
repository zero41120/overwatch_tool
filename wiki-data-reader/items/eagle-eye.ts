import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "EAGLE EYE",
    attributes: [
      {
        type: "Health",
        value: "50"
      },
      {
        type: "description",
        value: "Take 25% less damage from enemies farther than 12m."
      }
    ],
    cost: 12000,
    tab: "survival",
    rarity: "epic",
    iconUrl: "https://static.wikia.nocookie.net/overwatch_gamepedia/images/d/d5/Eagle_Eye.png",
    character: "Cassidy",
    id: "i_240"
  }
};

export default record;
