import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "CHARGED CHOMPAS",
    attributes: [
      {
        type: "Health",
        value: "50"
      },
      {
        type: "AP",
        value: "10%"
      },
      {
        type: "description",
        value: "Whenever <b>[Total Mayhem]</b> deals damage, gain <b>3%</b> Ultimate Charge."
      }
    ],
    cost: 10000,
    character: "Junkrat",
    tab: "ability",
    rarity: "epic"
  }
};

export default record;
