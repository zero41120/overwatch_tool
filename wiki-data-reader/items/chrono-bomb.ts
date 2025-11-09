import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "CHRONO BOMB",
    attributes: [
      {
        type: "AP",
        value: "20%"
      },
      {
        type: "Pulse Bomb Explosion Radius",
        value: "50%"
      },
      {
        type: "description",
        value: "Enemies stuck or hit by [Pulse Bomb] are slowed by 30% and lose 30% bonus Attack Speed for 2s."
      }
    ],
    cost: 10500,
    tab: "ability",
    rarity: "epic",
    character: "Tracer",
    id: undefined
  }
};

export default record;
