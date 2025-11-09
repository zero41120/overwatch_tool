import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "SUPERFLEXOR",
    attributes: [
      {
        type: "Health",
        value: "25"
      },
      {
        type: "WP",
        value: "10%"
      },
      {
        type: "description",
        value: "When you deal Weapon Damage or Healing, gain <b>5%</b> Ability Power for <b>3s</b>, stacking up to <b>5 times</b>."
      }
    ],
    cost: 10000,
    id: "i_118",
    tab: "ability",
    rarity: "epic"
  },
  override: {
    name: "SUPERFLEXOR",
    editor_overrides: [
      {
        applyTo: [
          "Ashe"
        ],
        attributes: [
          {
            type: "Health",
            value: "25"
          },
          {
            type: "WP",
            value: "10%"
          },
          {
            type: "AP",
            value: "15%"
          },
          {
            type: "Editor's Note",
            value: "AP can stack up to 25%, estimate having 15% AP up time."
          }
        ]
      },
      {
        applyTo: [
          "D.VA"
        ],
        attributes: [
          {
            type: "Health",
            value: "25"
          },
          {
            type: "WP",
            value: "10%"
          },
          {
            type: "AP",
            value: "25%"
          },
          {
            type: "Editor's Note",
            value: "For DVA this is always on"
          }
        ]
      }
    ]
  }
};

export default record;
