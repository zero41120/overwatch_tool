import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "ENERGY LEECH",
    attributes: [
      {
        type: "AP",
        value: "10%"
      },
      {
        type: "description",
        value: "[Disruptor Shot] eliminations grant 10% Ultimate Charge."
      }
    ],
    cost: 5000,
    tab: "ability",
    rarity: "rare",
    iconUrl: "https://static.wikia.nocookie.net/overwatch_gamepedia/images/f/f4/Energy_Leech.png",
    character: "Sojourn",
    id: undefined
  }
};

export default record;
