import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "FAWKES' FUNNY FUEL™<!-- ALT+0153-->",
    attributes: [
      {
        type: "AP",
        value: "15%"
      },
      {
        type: "ALS",
        value: "15%"
      },
      {
        type: "Concussion Mine Explosion Radius",
        value: "15%"
      },
      {
        type: "description",
        value: "If Concussion Mine is 5m above the ground when detonated, increase its explosion radius by 25%."
      }
    ],
    cost: 10000,
    tab: "ability",
    rarity: "epic",
    iconUrl: "https://static.wikia.nocookie.net/overwatch_gamepedia/images/f/fe/Fawkes%27_Funny_Fuel%E2%84%A2.png",
    character: "Junkrat",
    id: undefined
  }
};

export default record;
