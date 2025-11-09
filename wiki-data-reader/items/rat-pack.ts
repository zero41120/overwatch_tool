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
        type: "[Steel Trap] Health",
        value: "50%"
      },
      {
        type: "description",
        value: "<b>[Steel Trap]</b> refunds <b>33%</b> cooldown when destroyed."
      }
    ],
    cost: 4000,
    character: "Junkrat",
    tab: "ability",
    rarity: "rare"
  }
};

export default record;
