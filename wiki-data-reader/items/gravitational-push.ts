import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "GRAVITATIONAL PUSH",
    attributes: [
      {
        type: "WP",
        value: "15%"
      },
      {
        type: "description",
        value: "During <b>[Glide Boost]</b>, gain <b>20%</b> Attack Speed and your <b>[Quick Melee]</b> knocks enemies back."
      }
    ],
    cost: 10000,
    character: "Juno",
    id: "i_66",
    tab: "weapon",
    rarity: "epic"
  },
  override: {
    name: "GRAVITATIONAL PUSH",
    editor_overrides: [
      {
        applyTo: [
          "Juno"
        ],
        attributes: [
          {
            type: "WP",
            value: "15%"
          },
          {
            type: "AS",
            value: "8%"
          },
          {
            type: "Editor's Note",
            value: "20% AS during booster, on average is 8% AS."
          }
        ]
      }
    ]
  }
};

export default record;
