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
    character: "Junker Queen",
    id: "i_231"
  }
};

export default record;
