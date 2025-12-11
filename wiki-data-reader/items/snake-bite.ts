import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "SNAKE BITE",
    attributes: [
      {
        type: "Health",
        value: "25"
      },
      {
        type: "AP",
        value: "15%"
      },
      {
        type: "description",
        value: "Using [Deadeye] slows all visible enemies by 30% for 2.5s."
      }
    ],
    cost: 10000,
    tab: "ability",
    rarity: "epic",
    iconUrl: "https://static.wikia.nocookie.net/overwatch_gamepedia/images/a/a2/Snake_Bite.png",
    character: "Cassidy"
  }
};

export default record;
