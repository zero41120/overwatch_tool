import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "ZERO-G SUIT",
    attributes: [
      {
        type: "CR",
        value: "5%"
      },
      {
        type: "MS",
        value: "5%"
      },
      {
        type: "description",
        value: "After activating [Jump Pack], increase Move Speed by 50% for 2 seconds when you next jump."
      }
    ],
    cost: 4000,
    tab: "ability",
    rarity: "rare",
    iconUrl: "https://static.wikia.nocookie.net/overwatch_gamepedia/images/6/6b/Zero-G_Suit.png",
    character: "Winston",
    id: undefined
  }
};

export default record;
