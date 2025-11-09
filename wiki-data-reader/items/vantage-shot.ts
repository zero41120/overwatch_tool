import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "VANTAGE SHOT",
    attributes: [
      {
        type: "WP",
        value: "5%"
      },
      {
        type: "description",
        value: "While airborne, [Mediblaster] deals 15% more damage."
      }
    ],
    cost: 4000,
    tab: "weapon",
    rarity: "rare",
    character: "Juno",
    id: "i_29"
  },
  override: {
    name: "VANTAGE SHOT",
    editor_overrides: [
      {
        applyTo: [
          "Juno"
        ],
        attributes: [
          {
            type: "WP",
            value: "20%"
          },
          {
            type: "Editor's Note",
            value: "Double jump also triggers the +15WP effect. So basically 20WP."
          }
        ]
      }
    ]
  }
};

export default record;
