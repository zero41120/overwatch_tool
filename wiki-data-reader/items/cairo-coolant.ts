import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "CAIRO COOLANT",
    attributes: [
      {
        type: "Health",
        value: "25"
      },
      {
        type: "CR",
        value: "5%"
      },
      {
        type: "description",
        value: "When you knock yourself back with [Concussive Blast], gain 20% Movement Speed for 3s."
      }
    ],
    cost: 4000,
    tab: "ability",
    rarity: "rare",
    iconUrl: "https://static.wikia.nocookie.net/overwatch_gamepedia/images/9/96/Cairo_Coolant.png",
    character: "Pharah",
    id: undefined
  }
};

export default record;
