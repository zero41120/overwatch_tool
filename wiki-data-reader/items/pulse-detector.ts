import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "PULSE DETECTOR",
    attributes: [
      {
        type: "WP",
        value: "10%"
      },
      {
        type: "MA",
        value: "10%"
      },
      {
        type: "description",
        value: "The last enemy hit by [Pulse Pistols] is Revealed for 1s."
      }
    ],
    cost: 5500,
    tab: "weapon",
    rarity: "rare",
    iconUrl: "https://static.wikia.nocookie.net/overwatch_gamepedia/images/c/cf/Pulse_Detector.png",
    character: "Tracer",
    id: undefined
  }
};

export default record;
