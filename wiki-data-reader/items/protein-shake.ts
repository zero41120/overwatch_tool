import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "PROTEIN SHAKE",
    attributes: [
      {
        type: "Health",
        value: "25"
      },
      {
        type: "Melee Damage",
        value: "15%"
      },
      {
        type: "description",
        value: "While [Particle Barrier] is active, become Unstoppable and [Quick Melee] knocks back enemies."
      }
    ],
    cost: 4000,
    tab: "survival",
    rarity: "rare",
    iconUrl: "https://static.wikia.nocookie.net/overwatch_gamepedia/images/6/6c/Protein_Shake.png",
    character: "Zarya",
    id: "i_196"
  }
};

export default record;
