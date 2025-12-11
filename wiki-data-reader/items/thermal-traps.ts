import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "THERMAL TRAPS",
    attributes: [
      {
        type: "Health",
        value: "25"
      },
      {
        type: "description",
        value: "When [Steel Trap] triggers, reveal the target and gain 25% Move Speed and 10% Attack Speed for 3s."
      }
    ],
    cost: 3750,
    tab: "survival",
    rarity: "rare",
    iconUrl: "https://static.wikia.nocookie.net/overwatch_gamepedia/images/e/eb/Thermal_Traps.png",
    character: "Junkrat",
    id: undefined
  }
};

export default record;
