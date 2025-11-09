import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "REFRESHING RADIATION",
    attributes: [
      {
        type: "CR",
        value: "10%"
      },
      {
        type: "Concussion Mine Health",
        value: "50%"
      },
      {
        type: "description",
        value: "For each target detonated by [Concussion Mine], gain Overhealth equal to 5% of Max Life for 3s."
      }
    ],
    cost: 10000,
    tab: "survival",
    rarity: "epic",
    iconUrl: "https://static.wikia.nocookie.net/overwatch_gamepedia/images/5/52/Refreshing_Radiation.png",
    character: "Junkrat",
    id: undefined
  }
};

export default record;
