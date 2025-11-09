import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "TRIPOD",
    attributes: [
      {
        type: "WP",
        value: "5%"
      },
      {
        type: "description",
        value: "[The Viper], [Coach Gun], and [Dynamite] deal 10% more damage to enemies that are below you."
      }
    ],
    cost: 4000,
    tab: "weapon",
    rarity: "rare",
    character: "Ashe",
    id: "i_20"
  },
  override: {
    name: "TRIPOD",
    editor_overrides: [
      {
        applyTo: [
          "Ashe"
        ],
        attributes: [
          {
            type: "WP",
            value: "13%"
          },
          {
            type: "Editor's Note",
            value: "You gain 10% weapon power when above. With the base 5%, estimate 8% gain, a total of 13% WP."
          }
        ]
      }
    ]
  }
};

export default record;
