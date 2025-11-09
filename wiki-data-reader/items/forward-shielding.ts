import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "FORWARD SHIELDING",
    attributes: [
      {
        type: "Health",
        value: "25"
      },
      {
        type: "AP",
        value: "10%"
      },
      {
        type: "description",
        value: "When you use [Barrage], gain 25% of your Max Life as Overhealth for 3s."
      }
    ],
    cost: 11000,
    tab: "survival",
    rarity: "epic",
    iconUrl: "https://static.wikia.nocookie.net/overwatch_gamepedia/images/4/4c/Forward_Shielding.png",
    character: "Pharah",
    id: undefined
  }
};

export default record;
