import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "SOLO SPEC",
    attributes: [
      {
        type: "Health",
        value: "25"
      },
      {
        type: "description",
        value: "When you mitigate damage with <b>[Defense Matrix]</b>, gain Shields equal to <b>10%</b> of the damage mitigated, up to <b>100</b>. Resets when your <b>[Mech]</b> is destroyed."
      }
    ],
    cost: 4000,
    character: "D.VA",
    id: "i_184",
    tab: "survival",
    rarity: "rare"
  }
};

export default record;
