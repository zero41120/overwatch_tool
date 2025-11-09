import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "FEATHERED SOLES",
    attributes: [
      {
        type: "Health",
        value: "25"
      },
      {
        type: "description",
        value: "On Use: Gain 25% Move Speed for 5s. Dealing damage removes this bonus. <b>Cooldown:</b> 20 seconds"
      }
    ],
    cost: 1500,
    tab: "survival",
    rarity: "common",
    id: undefined
  }
};

export default record;
