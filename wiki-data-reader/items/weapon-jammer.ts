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
        value: "Dealing Weapon Damage negates <b>10%</b> of the target's bonus Attack Speed and increase your Attack speed by <b>10%</b> for <b>2s</b>."
      }
    ],
    cost: 10000,
    id: "i_40",
    tab: "weapon",
    rarity: "epic"
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
