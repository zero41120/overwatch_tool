import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "ROCKET BOOTS",
    attributes: [
      {
        type: "Health",
        value: "25"
      },
      {
        type: "description",
        value: "Holding <b>crouch</b> increases the height of your next jump by up to <b>200%</b>."
      }
    ],
    cost: 4000,
    character: "Reinhardt",
    id: "i_193",
    tab: "survival",
    rarity: "rare"
  }
};

export default record;
