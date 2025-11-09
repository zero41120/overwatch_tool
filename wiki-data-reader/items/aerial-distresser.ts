import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "AERIAL DISTRESSER",
    attributes: [
      {
        type: "Shields",
        value: "25"
      },
      {
        type: "AS",
        value: "10%"
      },
      {
        type: "description",
        value: "Weapon damage to airborne enemies deal 25% bonus damage over 3s."
      }
    ],
    cost: 9000,
    tab: "weapon",
    rarity: "epic",
    id: undefined
  },
  override: {
    name: "AERIAL DISTRESSER",
    attributes: [
      {
        type: "Shield",
        value: "25"
      },
      {
        type: "AS",
        value: "10%"
      },
      {
        type: "WP",
        value: "25%"
      },
      {
        type: "Editor's Note",
        value: "Best value item for Juno/Mercy. Use avoid item if not applicable. (Weapon dealing damage to airborne enemies deal <b>25%</b> bonus damage over <b>3s</b>.)"
      }
    ]
  }
};

export default record;
