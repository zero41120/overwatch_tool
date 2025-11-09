import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "BOOMSLANG'S BLASTER",
    attributes: [
      {
        type: "AP",
        value: "10%"
      },
      {
        type: "ALS",
        value: "10%"
      },
      {
        type: "description",
        value: "Ability: Use [Quick Melee] during [Spike Guard] to immediately fire 5 spikes at targets (10s Cooldown)."
      }
    ],
    cost: 11000,
    tab: "ability",
    rarity: "epic",
    character: "Hazard",
    id: undefined
  }
};

export default record;
