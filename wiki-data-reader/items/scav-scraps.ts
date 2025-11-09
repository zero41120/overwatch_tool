import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "SCAV SCRAPS",
    attributes: [
      {
        type: "Health",
        value: "50"
      },
      {
        type: "CR",
        value: "5%"
      },
      {
        type: "description",
        value: "[Carnage] and [Jagged Blade] impact damage grants Overhealth equal to 40% of damage dealt."
      }
    ],
    cost: 10000,
    tab: "survival",
    rarity: "epic",
    iconUrl: "https://static.wikia.nocookie.net/overwatch_gamepedia/images/b/b7/Scav_Scraps.png",
    character: "Junker Queen",
    id: "i_231"
  }
};

export default record;
