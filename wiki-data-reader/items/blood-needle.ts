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
    character: "Hazard",
    id: undefined
  }
};

export default record;
