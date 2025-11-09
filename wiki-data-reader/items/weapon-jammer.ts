import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "WEAPON JAMMER",
    attributes: [
      {
        type: "Armor",
        value: "25"
      },
      {
        type: "WP",
        value: "10%"
      },
      {
        type: "description",
        value: "Dealing Weapon Damage negates 10% of the target's bonus Attack Speed and increases your Attack Speed by 10% for 2s."
      }
    ],
    cost: 10000,
    tab: "weapon",
    rarity: "epic",
    id: "i_40"
  },
  override: {
    name: "WEAPON JAMMER",
    attributes: [
      {
        type: "Armor",
        value: "25"
      },
      {
        type: "WP",
        value: "10%"
      },
      {
        type: "AS",
        value: "10%"
      },
      {
        type: "Editor's Note",
        value: "Even if enemy has no bonus attack speed, you still gain the 10% attack speed from the item itself if you damage."
      }
    ]
  }
};

export default record;
