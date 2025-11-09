import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "ONSLAUGHT ORDINANCE",
    attributes: [
      {
        type: "AP",
        value: "15%"
      },
      {
        type: "description",
        value: "The quantity and duration of <b>[Micro Missiles]</b> is increased by <b>20%</b>."
      }
    ],
    cost: 12000,
    character: "D.VA",
    id: "i_126",
    tab: "ability",
    rarity: "epic"
  },
  override: {
    name: "ONSLAUGHT ORDINANCE",
    editor_overrides: [
      {
        applyTo: [
          "D.VA"
        ],
        attributes: [
          {
            type: "AP",
            value: "53%"
          },
          {
            type: "Editor's Note",
            value: "Basically 53AP for missiles with legendary loadout, the damage increase from 166.5 to 255.3"
          },
          {
            type: "description",
            value: "The quantity and duration of <b>[Micro Missiles]</b> is increased by <b>20%</b>."
          }
        ]
      }
    ]
  }
};

export default record;
