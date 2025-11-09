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
        value: "When <b>[Death Blossom]</b> starts, gain <b>Overhealth</b> equal to <b>5%</b> of your max Life for each enemy within its range."
      }
    ],
    cost: 9500,
    character: "Reaper",
    tab: "ability",
    rarity: "epic"
  }
};

export default record;
