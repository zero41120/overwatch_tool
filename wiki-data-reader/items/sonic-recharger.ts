import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "SONIC RECHARGER",
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
        value: "Passive Life Regeneration can overheal up to 75."
      }
    ],
    cost: 9000,
    tab: "ability",
    rarity: "epic",
    id: undefined
  }
};

export default record;
