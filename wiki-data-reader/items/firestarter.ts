import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "FIRESTARTER",
    attributes: [
      {
        type: "Health",
        value: "50"
      },
      {
        type: "description",
        value: "Your <b>Burning</b> effects gain <b>35%</b> Lifesteal."
      }
    ],
    cost: 10000,
    character: "Ashe",
    id: "i_237",
    tab: "survival",
    rarity: "epic"
  },
  override: {
    name: "FIRESTARTER",
    editor_overrides: [
      {
        applyTo: [
          "Ashe"
        ],
        attributes: [
          {
            type: "Health",
            value: "50"
          },
          {
            type: "ALS",
            value: "30%"
          },
          {
            type: "Editor's Note",
            value: "Only life steal from burning damage, so estimate 5% ALS is missing from Bob and coach gun"
          }
        ]
      }
    ]
  }
};

export default record;
