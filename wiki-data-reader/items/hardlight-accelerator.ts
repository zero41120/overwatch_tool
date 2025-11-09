import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "HARDLIGHT ACCELERATOR",
    attributes: [
      {
        type: "WP",
        value: "10%"
      },
      {
        type: "CR",
        value: "10%"
      },
      {
        type: "description",
        value: "When you use an ability or Gadget, gain 5% Weapon Power for 3s, stacking up to 3 times."
      }
    ],
    cost: 11000,
    tab: "weapon",
    rarity: "epic",
    id: "i_44"
  },
  override: {
    name: "HARDLIGHT ACCELERATOR",
    editor_overrides: [
      {
        applyTo: [
          "D.VA"
        ],
        attributes: [
          {
            type: "WP",
            value: "20%"
          },
          {
            type: "CR",
            value: "10%"
          },
          {
            type: "Editor's Note",
            value: "Instead of 10WP, your booster + missile gives you 20WP when you need it."
          },
          {
            type: "description",
            value: "When you use an ability, gain <b>5%</b> Weapon Power for <b>3s</b>, stacking up to <b>3</b> times."
          }
        ]
      }
    ]
  }
};

export default record;
