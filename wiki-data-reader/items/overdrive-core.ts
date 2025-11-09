import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "OVERDRIVE CORE",
    attributes: [
      {
        type: "Shields",
        value: "25"
      },
      {
        type: "WP",
        value: "10%"
      },
      {
        type: "description",
        value: "Once per life, if you take damage that would reduce you below <b>30%</b> Max Life, first gain <b>300 decaying Overhealth</b>."
      }
    ],
    cost: 10000,
    tab: "survival",
    rarity: "epic"
  }
};

export default record;
