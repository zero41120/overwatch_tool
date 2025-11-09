import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "VITALITY AMPLIFIER",
    attributes: [
      {
        type: "Shields",
        value: "25"
      },
      {
        type: "ALS",
        value: "10%"
      },
      {
        type: "description",
        value: "While you are above <b>80%</b> Life, gain <b>10%</b> Ability Power."
      }
    ],
    cost: 4500,
    tab: "ability",
    rarity: "rare"
  }
};

export default record;
