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
        value: "<b>[The Viper]</b>, <b>[Coach Gun]</b>, and <b>[Dynamite]</b> deal <b>10%</b> more damage to enemies that are below you."
      }
    ],
    cost: 4000,
    character: "Ashe",
    id: "i_20",
    tab: "weapon",
    rarity: "rare"
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
