import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "INFRARED LENSES",
    attributes: [
      {
        type: "AP",
        value: "15%"
      },
      {
        type: "description",
        value: "Deal <b>20%</b> increased damage to Burning enemies."
      }
    ],
    cost: 10000,
    character: "Ashe",
    id: "i_136",
    tab: "ability",
    rarity: "epic"
  },
  override: {
    name: "INFRARED LENSES",
    editor_overrides: [
      {
        applyTo: [
          "Ashe"
        ],
        attributes: [
          {
            type: "AP",
            value: "18%"
          },
          {
            type: "WP",
            value: "5%"
          },
          {
            type: "Editor's Note",
            value: "Item itself provides 15AP. Since dynamite and power-based effect also triggers burning, while themself don't trigger burning damage bonus, we estimate +10AP and +5WP that benefits from burning damage bonus."
          }
        ]
      }
    ]
  }
};

export default record;
