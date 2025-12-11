import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "SPIKED GRIP",
    attributes: [
      {
        type: "MA",
        value: "30%"
      },
      {
        type: "AS",
        value: "10%"
      },
      {
        type: "description",
        value: "While climbing, restore 35% of your ammo every 1s."
      }
    ],
    cost: 4000,
    tab: "weapon",
    rarity: "rare",
    iconUrl: "https://static.wikia.nocookie.net/overwatch_gamepedia/images/4/45/Spiked_Grip.png",
    character: "Genji",
    id: "i_23"
  }
};

export default record;
