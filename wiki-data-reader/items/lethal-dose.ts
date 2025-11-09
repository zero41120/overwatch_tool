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
    character: "Ana",
    id: "i_150"
  }
};

export default record;
