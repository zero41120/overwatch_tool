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
        value: "After <b>[Particle Barrier]</b> is destroyed or expires, gain decaying <b>Overhealth</b> equal to <b>50%</b> of damage mitigated during <b>[Particle Barrier]</b>."
      }
    ],
    cost: 10000,
    character: "Zarya",
    id: "i_134",
    tab: "ability",
    rarity: "epic"
  }
};

export default record;
