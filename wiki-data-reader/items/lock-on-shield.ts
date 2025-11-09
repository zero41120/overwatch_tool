import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "LOCK-ON SHIELD",
    attributes: [
      {
        type: "Health",
        value: "25"
      },
      {
        type: "description",
        value: "While aiming [Pulsar Torpedoes], gain Overhealth equal to 25% of your max Shields."
      }
    ],
    cost: 4000,
    tab: "ability",
    rarity: "rare",
    character: "Juno",
    id: "i_104"
  }
};

export default record;
