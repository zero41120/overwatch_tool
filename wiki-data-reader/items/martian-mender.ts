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
        value: "Restore 3% of your Life every 1s."
      }
    ],
    cost: 10000,
    tab: "survival",
    rarity: "epic",
    id: "i_221"
  }
};

export default record;
