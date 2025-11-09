import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "GRYPHON GLIDER",
    attributes: [
      {
        type: "Health",
        value: "25"
      },
      {
        type: "ALS",
        value: "10%"
      },
      {
        type: "description",
        value: "You can now fly during [Charge]."
      }
    ],
    cost: 10000,
    tab: "ability",
    rarity: "epic",
    iconUrl: "https://static.wikia.nocookie.net/overwatch_gamepedia/images/6/6e/Gryphon_Glider.png",
    character: "Reinhardt",
    id: "i_132"
  }
};

export default record;
