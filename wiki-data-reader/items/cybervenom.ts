import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "CYBERVENOM",
    attributes: [
      {
        type: "AP",
        value: "10%"
      },
      {
        type: "CR",
        value: "5%"
      },
      {
        type: "description",
        value: "Dealing Ability Damage applies <b>30%</b> <b>Healing Reduction</b> for <b>2s</b>."
      }
    ],
    cost: 10500,
    id: "i_119",
    tab: "ability",
    rarity: "epic"
  },
  override: {
    name: "CYBERVENOM",
    attributes: [
      {
        type: "AP",
        value: "30%"
      },
      {
        type: "CR",
        value: "5%"
      },
      {
        type: "Editor's Note",
        value: "Ability reduces healing by 30%. For calculation purposes, treat this as an additional 20% AP value."
      }
    ]
  }
};

export default record;
