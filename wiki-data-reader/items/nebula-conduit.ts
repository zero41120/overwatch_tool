import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "NEBULA CONDUIT",
    attributes: [
      {
        type: "Health",
        value: "50"
      },
      {
        type: "WP",
        value: "5%"
      },
      {
        type: "description",
        value: "Prevent 15% of incoming damage and instead take that prevented damage over 3s."
      }
    ],
    cost: 11000,
    tab: "survival",
    rarity: "epic",
    iconUrl: "https://static.wikia.nocookie.net/overwatch_gamepedia/images/b/ba/Nebula_Conduit.png",
    id: "i_225"
  }
};

export default record;
