import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "INGRID'S INGENUITY",
    attributes: [
      {
        type: "Armor",
        value: "50"
      },
      {
        type: "AS",
        value: "10%"
      },
      {
        type: "description",
        value: "[Forge Hammer] damage or healing grants Overhealth equal to 2% of Max Life, up to 20%."
      }
    ],
    cost: 10000,
    tab: "weapon",
    rarity: "epic",
    iconUrl: "https://static.wikia.nocookie.net/overwatch_gamepedia/images/5/5c/Ingrid%27s_Ingenuity.png",
    character: "Torbjörn",
    id: undefined
  }
};

export default record;
