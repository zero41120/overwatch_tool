import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "SUPERCONDUCTOR",
    attributes: [
      {
        type: "Health",
        value: "25"
      },
      {
        type: "AP",
        value: "15%"
      },
      {
        type: "description",
        value: "After [Particle Barrier] is destroyed or expires, gain decaying Overhealth equal to 50% of damage mitigated during [Particle Barrier] for 3s."
      }
    ],
    cost: 10000,
    tab: "ability",
    rarity: "epic",
    character: "Zarya",
    id: "i_134"
  }
};

export default record;
