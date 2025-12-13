import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "QUICKCHARGER",
    attributes: [
      {
        type: "AP",
        value: "15%"
      },
      {
        type: "description",
        value: "[Power Block] adds 10% progress for empowering [Rocket Punch]. [Power Block] no longer resets progress for empowering [Rocket Punch]."
      }
    ],
    cost: 12000,
    tab: "ability",
    rarity: "epic",
    iconUrl: "https://static.wikia.nocookie.net/overwatch_gamepedia/images/9/9d/Quickcharger.png",
    character: "Doomfist"
  }
};

export default record;
