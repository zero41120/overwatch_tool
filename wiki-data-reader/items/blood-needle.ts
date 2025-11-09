import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "BLOOD NEEDLE",
    attributes: [
      {
        type: "Health",
        value: "50"
      },
      {
        type: "Spike Guard Max Resource",
        value: "50%"
      },
      {
        type: "description",
        value: "Each fired [Spike Guard] spike heals 0.3% Max Life per hit."
      }
    ],
    cost: 11000,
    tab: "survival",
    rarity: "epic",
    iconUrl: "https://static.wikia.nocookie.net/overwatch_gamepedia/images/f/f2/Blood_Needle.png",
    character: "Hazard",
    id: undefined
  }
};

export default record;
