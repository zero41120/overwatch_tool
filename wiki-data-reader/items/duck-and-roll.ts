import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "DUCK AND ROLL",
    attributes: [
      {
        type: "Health",
        value: "25"
      },
      {
        type: "CR",
        value: "5%"
      },
      {
        type: "Combat Roll Distance",
        value: "50%"
      }
    ],
    cost: 4500,
    tab: "survival",
    rarity: "rare",
    iconUrl: "https://static.wikia.nocookie.net/overwatch_gamepedia/images/9/95/Duck_and_Roll.png",
    character: "Cassidy"
  }
};

export default record;
