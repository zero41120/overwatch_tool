import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "RUNNING SHOES",
    attributes: [
      {
        type: "Health",
        value: "10"
      },
      {
        type: "description",
        value: "At the start of the round and when you respawn while not in Overtime, gain 30% Move Speed for 10s while out of combat."
      }
    ],
    cost: 1000,
    tab: "survival",
    rarity: "common",
    iconUrl: "https://static.wikia.nocookie.net/overwatch_gamepedia/images/9/91/Running_Shoes.png",
    id: "i_169"
  }
};

export default record;
