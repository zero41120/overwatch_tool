import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "MAXED MAG",
    attributes: [
      {
        type: "AS",
        value: "5%"
      },
      {
        type: "description",
        value: "Gain 3% Attack Speed for each remaining Ammo above 50% of your Max Ammo."
      }
    ],
    cost: 4000,
    tab: "weapon",
    rarity: "rare",
    iconUrl: "https://static.wikia.nocookie.net/overwatch_gamepedia/images/5/5a/Maxed_Mag.png",
    character: "Ashe",
    id: "i_19"
  }
};

export default record;
