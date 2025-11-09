import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "LETHAL DOSE",
    attributes: [
      {
        type: "ALS",
        value: "10%"
      },
      {
        type: "description",
        value: "[Sleep Dart] direct hit deals <b class=\"stat-ap\">100</b> bonus damage and gives Ana <b class=\"stat-ap\">60</b> Overhealth."
      }
    ],
    cost: 10000,
    tab: "ability",
    rarity: "epic",
    iconUrl: "https://static.wikia.nocookie.net/overwatch_gamepedia/images/2/20/Lethal_Dose.png",
    character: "Ana",
    id: "i_150"
  }
};

export default record;
