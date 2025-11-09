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
        value: "When the target is further than <b>10m</b>, scoped shot gains <b>1%</b> damage for each meter."
      }
    ],
    cost: 11000,
    character: "Ashe",
    id: "i_54",
    tab: "weapon",
    rarity: "epic"
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
