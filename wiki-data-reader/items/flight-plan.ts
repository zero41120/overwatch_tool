import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "FLIGHT PLAN",
    attributes: [
      {
        type: "Health",
        value: "25"
      },
      {
        type: "description",
        value: "After using [Jump Jet] or [Jet Dash], gain 25 Overhealth for 3s."
      }
    ],
    cost: 4500,
    tab: "survival",
    rarity: "rare",
    iconUrl: "https://static.wikia.nocookie.net/overwatch_gamepedia/images/f/ff/Flight_Plan.png",
    character: "Pharah",
    id: undefined
  }
};

export default record;
