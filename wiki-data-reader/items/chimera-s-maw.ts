import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "CHIMERA'S MAW",
    attributes: [
      {
        type: "[Fire Strike] Projectile Speed",
        value: "25%"
      },
      {
        type: "[Fire Strike] Radius",
        value: "50%"
      },
      {
        type: "description",
        value: "For each additional enemy <b>[Fire Strike]</b> damages beyond the initial target, reduce <b>[Fire Strike]</b> cooldown by <b>5%</b>"
      }
    ],
    cost: 10000,
    character: "Reinhardt",
    tab: "ability",
    rarity: "epic"
  }
};

export default record;
