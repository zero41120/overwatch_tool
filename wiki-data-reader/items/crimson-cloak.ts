import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "CRIMSON CLOAK",
    attributes: [
      {
        type: "Health",
        value: "25"
      },
      {
        type: "AP",
        value: "10%"
      },
      {
        type: "description",
        value: "When [Death Blossom] starts, gain Overhealth equal to 5% of your max Life for each enemy within its range."
      }
    ],
    cost: 9500,
    tab: "survival",
    rarity: "epic",
    character: "Reaper",
    id: undefined
  }
};

export default record;
