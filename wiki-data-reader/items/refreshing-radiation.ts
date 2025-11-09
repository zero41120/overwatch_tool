import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "REFRESHING RADIATION",
    attributes: [
      {
        type: "CR",
        value: "10%"
      },
      {
        type: "[Concussion Mine] Health",
        value: "50%"
      },
      {
        type: "description",
        value: "For each target detonated by <b>[Concussion Mine]</b>, gain Overhealth equal to <b>5%</b> of Max Life for <b>3s</b>."
      }
    ],
    cost: 10000,
    character: "Junkrat",
    tab: "survival",
    rarity: "epic"
  }
};

export default record;
