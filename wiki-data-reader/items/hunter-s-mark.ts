import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "HUNTER'S MARK",
    attributes: [
      {
        type: "Health",
        value: "25"
      },
      {
        type: "WP",
        value: "5%"
      },
      {
        type: "description",
        value: "Enemies with a Bounty of <b>750</b> or more are revealed to you within <b>40m</b>.\n<br/>\n Eliminating them grants <b>350</b> additional <b>Stadium Cash</b>."
      }
    ],
    cost: 4000,
    character: "Freja",
    tab: "survival",
    rarity: "rare"
  }
};

export default record;
