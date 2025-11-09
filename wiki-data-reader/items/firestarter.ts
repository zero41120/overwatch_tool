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
        value: "Your Burning effects gain 35% Lifesteal"
      }
    ],
    cost: 10000,
    tab: "survival",
    rarity: "epic",
    iconUrl: "https://static.wikia.nocookie.net/overwatch_gamepedia/images/1/15/Firestarter_Item.png",
    character: "Ashe",
    id: "i_237"
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
