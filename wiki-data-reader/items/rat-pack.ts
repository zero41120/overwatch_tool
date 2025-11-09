import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "RAT PACK",
    attributes: [
      {
        type: "AP",
        value: "5%"
      },
      {
        type: "Steel Trap Health",
        value: "50%"
      },
      {
        type: "description",
        value: "[Steel Trap] refunds 33% cooldown when destroyed."
      }
    ],
    cost: 4000,
    tab: "ability",
    rarity: "rare",
    character: "Junkrat",
    id: undefined
  }
};

export default record;
