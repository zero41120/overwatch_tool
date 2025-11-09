import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "SHIELDBUSTER",
    attributes: [
      {
        type: "WP",
        value: "5%"
      },
      {
        type: "description",
        value: "After dealing damage to Shields or Armor, gain <b>15%</b> Attack Speed for <b>1s</b>."
      }
    ],
    cost: 4000,
    id: "i_7",
    tab: "weapon",
    rarity: "rare"
  },
  override: {
    name: "SHIELDBUSTER",
    attributes: [
      {
        type: "WP",
        value: "5%"
      },
      {
        type: "AS",
        value: "15%"
      },
      {
        type: "Editor's Note",
        value: "If the enemy has shield or armor, the condition for 15% attack speed is always met."
      }
    ]
  }
};

export default record;
