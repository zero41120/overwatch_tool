import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "SWIFT-LOADER",
    attributes: [
      {
        type: "AS",
        value: "10%"
      },
      {
        type: "MA",
        value: "30%"
      },
      {
        type: "description",
        value: "Damaging an enemy with [Swift Strike] restores 20% of your ammo."
      }
    ],
    cost: 10000,
    tab: "weapon",
    rarity: "epic",
    iconUrl: "https://static.wikia.nocookie.net/overwatch_gamepedia/images/3/3b/Swift-Loader.png",
    character: "Genji",
    id: "i_59"
  }
};

export default record;
