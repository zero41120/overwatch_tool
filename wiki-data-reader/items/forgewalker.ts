import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "FORGEWALKER",
    attributes: [
      {
        type: "AP",
        value: "5%"
      },
      {
        type: "CR",
        value: "5%"
      },
      {
        type: "description",
        value: "Gain 20% Move Speed while standing in [Molten Core] lava."
      }
    ],
    cost: 4500,
    tab: "ability",
    rarity: "rare",
    iconUrl: "https://static.wikia.nocookie.net/overwatch_gamepedia/images/4/41/Forgewalker.png",
    character: "Torbjörn",
    id: undefined
  }
};

export default record;
