import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "FORTIFIED JUMP PACK",
    attributes: [
      {
        type: "Armor",
        value: "50"
      },
      {
        type: "description",
        value: "Damage received during [Jump Pack] is reduced by 35%."
      }
    ],
    cost: 10000,
    tab: "survival",
    rarity: "epic",
    character: "Winston",
    id: undefined
  }
};

export default record;
