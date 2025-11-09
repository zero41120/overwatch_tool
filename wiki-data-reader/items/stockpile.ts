import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "STOCKPILE",
    attributes: [
      {
        type: "Health",
        value: "10"
      },
      {
        type: "AS",
        value: "5%"
      },
      {
        type: "MA",
        value: "25%"
      }
    ],
    cost: 4000,
    tab: "weapon",
    rarity: "rare",
    iconUrl: "https://static.wikia.nocookie.net/overwatch_gamepedia/images/0/06/Stockpile.png",
    id: "i_8"
  }
};

export default record;
