import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "DIVINE INTERVENTION",
    attributes: [
      {
        type: "Shields",
        value: "50"
      },
      {
        type: "description",
        value: "When you take more than 150 pre-mitigation damage at once, gain Overhealth equal to 20% of damage taken for 3s and start regenerating your Shields."
      }
    ],
    cost: 9500,
    tab: "survival",
    rarity: "epic",
    iconUrl: "https://static.wikia.nocookie.net/overwatch_gamepedia/images/2/28/Divine_Intervention.png",
    id: "i_219"
  }
};

export default record;
