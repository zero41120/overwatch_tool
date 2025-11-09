import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "BLOODBOUND",
    attributes: [
      {
        type: "Health",
        value: "25"
      },
      {
        type: "description",
        value: "The last enemy to deal a final blow to you is Revealed when nearby. Deal 10% more damage to them and take 10% reduced damage from them."
      }
    ],
    cost: 4000,
    tab: "survival",
    rarity: "rare",
    iconUrl: "https://static.wikia.nocookie.net/overwatch_gamepedia/images/1/1e/Bloodbound.png",
    id: "i_218"
  }
};

export default record;
