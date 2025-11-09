import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "ELECTROLYTES",
    attributes: [
      {
        type: "Health",
        value: "10"
      },
      {
        type: "description",
        value: "At the start of the round and every time you respawn, gain 100 unrecoverable Overhealth."
      }
    ],
    cost: 1000,
    tab: "survival",
    rarity: "common",
    iconUrl: "https://static.wikia.nocookie.net/overwatch_gamepedia/images/e/ec/Electrolytes.png",
    id: "i_167"
  }
};

export default record;
