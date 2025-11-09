import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "LIQUID NITROGEN",
    attributes: [
      {
        type: "Health",
        value: "25"
      },
      {
        type: "AP",
        value: "10%"
      },
      {
        type: "description",
        value: "Dealing Ability Damage slows the target's Move Speed by <b>20%</b> for <b>3s</b>."
      }
    ],
    cost: 11000,
    id: "i_121",
    tab: "ability",
    rarity: "epic"
  }
};

export default record;
