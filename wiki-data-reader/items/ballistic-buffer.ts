import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "BALLISTIC BUFFER",
    attributes: [
      {
        type: "Health",
        value: "10"
      },
      {
        type: "description",
        value: "After taking damage beyond 20m, gain 50 overhealth for 3s (15s cooldown)"
      }
    ],
    cost: 1000,
    tab: "survival",
    rarity: "common",
    id: undefined
  }
};

export default record;
