import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "SIPHONIC SPEAR",
    attributes: [
      {
        type: "Health",
        value: "25"
      },
      {
        type: "description",
        value: "When you deal damage with Energy Javelin, heal 10% of your max Life over 3s."
      }
    ],
    cost: 4000,
    tab: "survival",
    rarity: "rare",
    iconUrl: "https://static.wikia.nocookie.net/overwatch_gamepedia/images/5/5f/Siphonic_Spear.png",
    character: "Orisa",
    id: "i_189"
  }
};

export default record;
