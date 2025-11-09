import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "UNDYING LOYALTY",
    attributes: [
      {
        type: "Health",
        value: "50"
      },
      {
        type: "Commanding Shout Overhealth",
        value: "30%"
      },
      {
        type: "description",
        value: "Allies affected by [Commading Shout] are healed of 5% of Junker Queen's Life every second."
      }
    ],
    cost: 10000,
    tab: "survival",
    rarity: "epic",
    iconUrl: "https://static.wikia.nocookie.net/overwatch_gamepedia/images/9/9b/Undying_Loyalty.png",
    character: "Junker Queen",
    id: "i_233"
  }
};

export default record;
