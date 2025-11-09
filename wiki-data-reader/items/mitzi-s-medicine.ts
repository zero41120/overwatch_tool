import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "MITZI'S MEDICINE",
    attributes: [
      {
        type: "AP",
        value: "10%"
      },
      {
        type: "CR",
        value: "10%"
      },
      {
        type: "description",
        value: "[Repair Pack] healing can overheal allies up to 75 Overhealth while active."
      }
    ],
    cost: 10000,
    tab: "ability",
    rarity: "epic",
    character: "Brigitte",
    id: undefined
  }
};

export default record;
