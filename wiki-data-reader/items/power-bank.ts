import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "POWER BANK",
    attributes: [
      {
        type: "Health",
        value: "25"
      },
      {
        type: "AP",
        value: "5%"
      },
      {
        type: "description",
        value: "You can charge [Rocket Punch] indefinitely. After 2.5s of charging [Rocket Punch], become Unstoppable for the duration of that [Rocket Punch]."
      }
    ],
    cost: 4000,
    tab: "ability",
    rarity: "rare",
    iconUrl: "https://static.wikia.nocookie.net/overwatch_gamepedia/images/7/77/Power_Bank.png",
    character: "Doomfist"
  }
};

export default record;
