import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "LONG RANGE BLASTER",
    attributes: [
      {
        type: "WP",
        value: "15%"
      },
      {
        type: "description",
        value: "<b>[Mediblaster]</b> deals <b>15%</b> increased damage and healing to targets farther than <b>12m</b> away."
      }
    ],
    cost: 12000,
    character: "Juno",
    id: "i_65",
    tab: "weapon",
    rarity: "epic"
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
