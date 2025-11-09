import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "SLICING SPREE",
    attributes: [
      {
        type: "MS",
        value: "5%"
      },
      {
        type: "description",
        value: "While within 12m of an enemy with a <b>[Wound]</b>, gain <b>5%</b> Move Speed and <b>10%</b> Attack Speed."
      }
    ],
    cost: 4000,
    character: "Junker Queen",
    id: "i_187",
    tab: "survival",
    rarity: "rare"
  },
  override: {
    name: "SLICING SPREE",
    editor_overrides: [
      {
        applyTo: [
          "Junker Queen"
        ],
        attributes: [
          {
            type: "MS",
            value: "10%"
          },
          {
            type: "AS",
            value: "10%"
          },
          {
            type: "description",
            value: "While within 12m of an enemy with a <b>[Wound]</b>, gain <b>5%</b> Move Speed and <b>10%</b> Attack Speed."
          },
          {
            type: "Editor's Note",
            value: "Instead of 5% MS, You almost always have 5% more MS and 10AS from this item."
          }
        ]
      }
    ]
  }
};

export default record;
