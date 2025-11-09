import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "DEZ'S DAMAGE DAMPENERS",
    attributes: [
      {
        type: "Health",
        value: "25"
      },
      {
        type: "Knockback Resist",
        value: "50%"
      },
      {
        type: "description",
        value: "When knocked back, gain <b>25%</b> increased Move Speed for <b>3s</b>."
      }
    ],
    cost: 4000,
    character: "Junker Queen",
    id: "i_185",
    tab: "survival",
    rarity: "rare"
  }
};

export default record;
