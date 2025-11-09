import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "DRAGONS' INCINERATOR",
    attributes: [
      {
        type: "Armor",
        value: "25"
      },
      {
        type: "Rally Duration",
        value: "20%"
      },
      {
        type: "description",
        value: "Enemies within [Rally] are burned for 5% of their max Life every 1s, healing you by the same amount."
      }
    ],
    cost: 9000,
    tab: "survival",
    rarity: "epic",
    character: "Brigitte",
    id: undefined
  }
};

export default record;
