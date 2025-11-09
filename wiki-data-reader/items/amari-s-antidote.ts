import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "AMARI'S ANTIDOTE",
    attributes: [
      {
        type: "Health",
        value: "25"
      },
      {
        type: "WP",
        value: "15%"
      },
      {
        type: "description",
        value: "While healing an ally below 50% Life with your weapon, deal 15% increased Weapon Healing."
      }
    ],
    cost: 11000,
    tab: "weapon",
    rarity: "epic",
    iconUrl: "https://static.wikia.nocookie.net/overwatch_gamepedia/images/3/37/Amari%27s_Antidote.png",
    id: "i_41"
  }
};

export default record;
