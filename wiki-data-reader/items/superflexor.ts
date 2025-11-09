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
        value: "When you deal Weapon Damage or Healing, gain 5% Ability Power for 3s, stacking up to 5 times."
      }
    ],
    cost: 10000,
    tab: "ability",
    rarity: "epic",
    id: "i_118"
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
