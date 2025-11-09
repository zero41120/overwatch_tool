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
        type: "Steel Trap Throw Distance",
        value: "50%"
      },
      {
        type: "description",
        value: "Enemies that trigger [Steel Trap] Burn for <b class=\"stat-ap\">75</b> damage over 3s."
      }
    ],
    cost: 10000,
    tab: "ability",
    rarity: "epic",
    iconUrl: "https://static.wikia.nocookie.net/overwatch_gamepedia/images/2/2e/Lithium_Alloy.png",
    character: "Junkrat",
    id: undefined
  }
};

export default record;
