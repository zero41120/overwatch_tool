import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "EAGLE EYE",
    attributes: [
      {
        type: "Health",
        value: "50"
      },
      {
        type: "description",
        value: "Take <b>25%</b> less damage from enemies farther than <b>12m</b>."
      }
    ],
    cost: 12000,
    character: "Cassidy",
    id: "i_240",
    tab: "survival",
    rarity: "epic"
  }
};

export default record;
