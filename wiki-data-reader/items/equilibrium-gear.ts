import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "EQUILIBRIUM GEAR",
    attributes: [
      {
        type: "Health",
        value: "25"
      },
      {
        type: "description",
        value: "While climbing, heal 5% of your Life every 1s."
      }
    ],
    cost: 4000,
    tab: "survival",
    rarity: "rare",
    iconUrl: "https://static.wikia.nocookie.net/overwatch_gamepedia/images/4/46/Equilibrium_Gear.png",
    character: "Genji",
    id: "i_200"
  }
};

export default record;
