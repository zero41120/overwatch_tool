import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "MARTIAN MENDER",
    attributes: [
      {
        type: "Health",
        value: "25"
      },
      {
        type: "CR",
        value: "10%"
      },
      {
        type: "description",
        value: "Restore <b>3%</b> of your Life every <b>1s</b>."
      }
    ],
    cost: 10000,
    id: "i_221",
    tab: "survival",
    rarity: "epic"
  }
};

export default record;
