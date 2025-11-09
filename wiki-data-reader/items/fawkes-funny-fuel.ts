import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "FAWKES' FUNNY FUEL™",
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
        type: "[Concussion Mine] Explosion Radius",
        value: "15%"
      },
      {
        type: "description",
        value: "If <b>[Concussion Mine]</b> is <b>5m</b> above the ground when detonated, increase its explosion radius by <b>25%</b>."
      }
    ],
    cost: 10000,
    character: "Junkrat",
    tab: "ability",
    rarity: "epic"
  }
};

export default record;
