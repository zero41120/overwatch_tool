import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "DEVASTATION",
    attributes: [
      {
        type: "Health",
        value: "25"
      },
      {
        type: "description",
        value: "Each Death Blossom elimination increases your Health by 25 until the end of the round, up to 75 Health."
      }
    ],
    cost: 3750,
    tab: "survival",
    rarity: "rare",
    character: "Reaper",
    id: "i_204"
  }
};

export default record;
