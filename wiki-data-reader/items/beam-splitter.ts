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
        value: "While [Kinetic Grasp] is active, reduce incoming Beam and Melee damage by 75%."
      }
    ],
    cost: 4000,
    tab: "survival",
    rarity: "rare",
    iconUrl: "https://static.wikia.nocookie.net/overwatch_gamepedia/images/2/2c/Beam_Splitter.png",
    character: "Sigma",
    id: undefined
  }
};

export default record;
