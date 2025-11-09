import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "LITHIUM ALLOY",
    attributes: [
      {
        type: "Health",
        value: "25"
      },
      {
        type: "[Steel Trap] Throw Distance",
        value: "50%"
      },
      {
        type: "description",
        value: "Enemies that trigger <b>[Steel Trap]</b> Burn for <b class=\"stat-ap\">50</b> damage over <b>3s</b>."
      }
    ],
    cost: 10000,
    character: "Junkrat",
    tab: "ability",
    rarity: "epic"
  }
};

export default record;
