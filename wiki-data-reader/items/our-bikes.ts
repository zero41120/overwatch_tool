import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "OUR BIKES",
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
        value: "Allies affected by [Kitsune Rush] are healed for <b class=\"stat-ap\">80</b> every 1s."
      }
    ],
    cost: 10000,
    tab: "ability",
    rarity: "epic",
    iconUrl: "https://static.wikia.nocookie.net/overwatch_gamepedia/images/f/fb/Our_Bikes.png",
    character: "Kiriko",
    id: "i_158"
  }
};

export default record;
