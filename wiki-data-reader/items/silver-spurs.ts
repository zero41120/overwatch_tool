import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "SILVER SPURS",
    attributes: [
      {
        type: "Health",
        value: "25"
      },
      {
        type: "description",
        value: "After using [Coach Gun], gain 20% Move Speed for 5s and reload 25% of max ammo."
      }
    ],
    cost: 4000,
    tab: "survival",
    rarity: "rare",
    iconUrl: "https://static.wikia.nocookie.net/overwatch_gamepedia/images/3/3f/Silver_Spurs.png",
    character: "Ashe",
    id: "i_197"
  }
};

export default record;
