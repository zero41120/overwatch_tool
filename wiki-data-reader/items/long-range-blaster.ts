import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "LONG RANGE BLASTER",
    attributes: [
      {
        type: "WP",
        value: "20%"
      },
      {
        type: "description",
        value: "[Mediblaster] deals 15% increased damage and healing to targets farther than 12m away."
      }
    ],
    cost: 12000,
    tab: "weapon",
    rarity: "epic",
    character: "Juno",
    id: "i_65"
  },
  override: {
    name: "LONG RANGE BLASTER",
    editor_overrides: [
      {
        applyTo: [
          "Juno"
        ],
        attributes: [
          {
            type: "WP",
            value: "30%"
          },
          {
            type: "Editor's Note",
            value: "Assume that you can always have the 12m condition active. This is heavily based on enemy composition. Avoid this item if not achievable."
          }
        ]
      }
    ]
  }
};

export default record;
