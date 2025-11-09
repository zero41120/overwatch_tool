import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "MED KIT",
    attributes: [
      {
        type: "Health",
        value: "25"
      },
      {
        type: "description",
        value: "On Use: Restore 20 Life every 1s for 10s. Taking damage removes this bonus. <b>Cooldown:</b> 20 seconds"
      }
    ],
    cost: 1500,
    tab: "survival",
    rarity: "common",
    id: undefined
  }
};

export default record;
