import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "BLOODHOUND MASK",
    attributes: [
      {
        type: "WP",
        value: "15%"
      },
      {
        type: "description",
        value: "Gain <b>5%</b> Weapon Power for each enemy with a <b>[Wound]</b> within <b>12m</b>."
      }
    ],
    cost: 12000,
    character: "Junker Queen",
    id: "i_49",
    tab: "weapon",
    rarity: "epic"
  },
  override: {
    name: "BLOODHOUND MASK",
    editor_overrides: [
      {
        applyTo: [
          "Junker Queen"
        ],
        attributes: [
          {
            type: "WP",
            value: "20%"
          },
          {
            type: "description",
            value: "Gain <b>5%</b> Weapon Power for each enemy with a <b>[Wound]</b> within <b>12m</b>."
          },
          {
            type: "Editor's Note",
            value: "Instead of 15WP, You almost always have 5% more WP from this item."
          }
        ]
      }
    ]
  }
};

export default record;
