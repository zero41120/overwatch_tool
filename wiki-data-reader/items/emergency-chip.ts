import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "EMERGENCY CHIP",
    attributes: [
      {
        type: "Shields",
        value: "25"
      },
      {
        type: "WP",
        value: "5%"
      },
      {
        type: "description",
        value: "Once per life, when you are below 150 Life, gain 15% Weapon Lifesteal and 50 Overhealth for 5s"
      }
    ],
    cost: 4000,
    tab: "weapon",
    rarity: "rare",
    iconUrl: "https://static.wikia.nocookie.net/overwatch_gamepedia/images/3/30/Emergency_Chip.png",
    id: undefined
  }
};

export default record;
