import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "TOURNIQUET",
    attributes: [
      {
        type: "Health",
        value: "25"
      },
      {
        type: "description",
        value: "After using [Updraft], reset [Quick Dash] and gain 50 Overhealth for 5s."
      }
    ],
    cost: 4500,
    tab: "survival",
    rarity: "rare",
    iconUrl: "https://static.wikia.nocookie.net/overwatch_gamepedia/images/f/f4/Tourniquet.png",
    character: "Freja",
    id: undefined
  }
};

export default record;
