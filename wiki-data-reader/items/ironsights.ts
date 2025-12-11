import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "IRONSIGHTS",
    attributes: [
      {
        type: "AS",
        value: "10%"
      },
      {
        type: "description",
        value: "When the target is further than 10m, scoped shot gains 1% damage for each meter, up to 15%."
      }
    ],
    cost: 11000,
    tab: "weapon",
    rarity: "epic",
    iconUrl: "https://static.wikia.nocookie.net/overwatch_gamepedia/images/d/d6/Ironsights.png",
    character: "Ashe",
    id: "i_54"
  },
  override: {
    name: "IRONSIGHTS",
    editor_overrides: [
      {
        applyTo: [
          "Ashe"
        ],
        attributes: [
          {
            type: "AS",
            value: "10%"
          },
          {
            type: "WP",
            value: "17%"
          },
          {
            type: "Editor's Note",
            value: "On average, you are about 30m away from your taget, giving you somewhere between a 10-20% weapon power bonus. 17% is a fair estimate."
          }
        ]
      }
    ]
  }
};

export default record;
