import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "EMERGENCY CHIP",
    attributes: [
      {
        type: "Shield",
        value: "25"
      },
      {
        type: "WP",
        value: "5%"
      },
      {
        type: "description",
        value: "While you are below <b>150</b> Life, gain <b>15%</b> Weapon Lifesteal."
      }
    ],
    cost: 4500,
    tab: "weapon",
    rarity: "rare"
  }
};

export default record;
