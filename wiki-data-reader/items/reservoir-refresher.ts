import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "RESERVOIR REFRESHER",
    attributes: [
      {
        type: "Shields",
        value: "25"
      },
      {
        type: "AP",
        value: "10%"
      },
      {
        type: "description",
        value: "For each target hit by [Guardian Wave], gain 10% Healing Resource."
      }
    ],
    cost: 5000,
    tab: "survival",
    rarity: "rare",
    iconUrl: "https://static.wikia.nocookie.net/overwatch_gamepedia/images/8/83/Reservoir_Refresher.png",
    character: "Wuyang"
  }
};

export default record;
