import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "BEAM SPLITTER",
    attributes: [
      {
        type: "Shields",
        value: "25"
      },
      {
        type: "CR",
        value: "5%"
      },
      {
        type: "description",
        value: "While <b>[Kinetic Grasp]</b> is active, reduce incoming Beam damage by <b>50%</b>."
      }
    ],
    cost: 4000,
    character: "Sigma",
    tab: "survival",
    rarity: "rare"
  }
};

export default record;
