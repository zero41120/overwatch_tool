import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "FEATHERED SOLES",
    attributes: [
      {
        type: "Health",
        value: "25"
      },
      {
        type: "description",
        value: "On Use: Gain 25% Move Speed for 5s. Dealing damage removes this bonus. <b>Cooldown:</b> 20 seconds"
      }
    ],
    cost: 1500,
    tab: "survival",
    rarity: "common",
    iconUrl: "https://static.wikia.nocookie.net/overwatch_gamepedia/images/e/e8/Feathered_Soles.png",
    id: undefined
  }
};

export default record;
