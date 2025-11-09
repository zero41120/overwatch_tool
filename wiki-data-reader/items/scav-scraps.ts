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
        value: "<b>[Carnage]</b> and <b>[Jagged Blade]</b> impact damage grants Overhealth equal to <b>40%</b> of damage dealt."
      }
    ],
    cost: 10000,
    character: "Junker Queen",
    id: "i_231",
    tab: "survival",
    rarity: "epic"
  }
};

export default record;
