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
        value: "During [Glide Boost], gain 35% Attack Speed and your [Quick Melee] knocks enemies back."
      }
    ],
    cost: 10000,
    tab: "weapon",
    rarity: "epic",
    character: "Juno",
    id: "i_66"
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
