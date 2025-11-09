import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "FIELD SUPPORT",
    attributes: [
      {
        type: "Armor",
        value: "25"
      },
      {
        type: "WP",
        value: "5%"
      },
      {
        type: "description",
        value: "On Use: Place a Biotic Field at your location that restores 50 Life every 1s for 5s. <b>Cooldown:</b> 15 seconds"
      }
    ],
    cost: 4000,
    tab: "survival",
    rarity: "rare",
    iconUrl: "https://static.wikia.nocookie.net/overwatch_gamepedia/images/e/ed/Field_Support.png",
    id: undefined
  }
};

export default record;
