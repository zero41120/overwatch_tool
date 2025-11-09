import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "SMART ORBS",
    attributes: [
      {
        type: "AP",
        value: "5%"
      },
      {
        type: "description",
        value: "[Biotic Orb] moves 50% slower while it is healing or dealing damage."
      }
    ],
    cost: 4000,
    tab: "ability",
    rarity: "rare",
    iconUrl: "https://static.wikia.nocookie.net/overwatch_gamepedia/images/e/e1/Smart_Orbs.png",
    character: "Moira",
    id: "i_112"
  }
};

export default record;
