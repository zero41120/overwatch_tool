import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "SHRED AND LEAD",
    attributes: [
      {
        type: "MA",
        value: "33%"
      },
      {
        type: "WPLS",
        value: "10%"
      },
      {
        type: "description",
        value: "When you [Wound] an enemy gain 10% Attack Speed for 4s, stacking up to 3 times."
      }
    ],
    cost: 10000,
    tab: "weapon",
    rarity: "epic",
    iconUrl: "https://static.wikia.nocookie.net/overwatch_gamepedia/images/a/a2/Shred_and_Lead.png",
    character: "Junker Queen",
    id: "i_48"
  },
  override: {
    name: "SHRED AND LEAD",
    editor_overrides: [
      {
        applyTo: [
          "Junker Queen"
        ],
        attributes: [
          {
            type: "MA",
            value: "33%"
          },
          {
            type: "WPLS",
            value: "10%"
          },
          {
            type: "AS",
            value: "10%"
          },
          {
            type: "description",
            value: "When you <b>[Wound</b> an enemy, gain <b>10%</b> Attack Speed for <b>4s</b>, stacking up to <b>3 times</b>."
          },
          {
            type: "Editor's Note",
            value: "You almost always have 1 stacks of 10% AS from this item."
          }
        ]
      }
    ]
  }
};

export default record;
