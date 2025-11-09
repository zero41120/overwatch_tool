import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "VOLATILE GRAVEL",
    attributes: [
      {
        type: "AP",
        value: "10%"
      },
      {
        type: "description",
        value: "When you deal damage with <b>[Accretion]</b>, gain <b>5%</b> Ability Power, stacking up to 4 times. Resets on miss."
      }
    ],
    cost: 4000,
    character: "Sigma",
    tab: "ability",
    rarity: "rare"
  }
};

export default record;
