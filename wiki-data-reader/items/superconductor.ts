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
    iconUrl: "https://static.wikia.nocookie.net/overwatch_gamepedia/images/a/a7/Superconductor.png",
    character: "Zarya",
    id: "i_134"
  }
};

export default record;
