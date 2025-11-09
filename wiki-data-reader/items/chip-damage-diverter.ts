import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "CHIP-DAMAGE DIVERTER",
    attributes: [
      {
        type: "Health",
        value: "50"
      },
      {
        type: "description",
        value: "When you deal damage to Barriers while in your <b>[Mech]</b>, gain Shields equal to <b>10%</b> of the damage dealt, up to <b>200</b>. Resets when your <b>[Mech]</b> is destroyed."
      }
    ],
    cost: 10000,
    character: "D.VA",
    id: "i_228",
    tab: "survival",
    rarity: "epic"
  }
};

export default record;
