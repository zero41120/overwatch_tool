import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "WING CLIPPER",
    attributes: [
      {
        type: "AP",
        value: "10%"
      },
      {
        type: "description",
        value: "[Meteor Strike] pulls airborne enemies to the ground."
      }
    ],
    cost: 4500,
    tab: "ability",
    rarity: "rare",
    iconUrl: "https://static.wikia.nocookie.net/overwatch_gamepedia/images/1/17/Wing_Clipper.png",
    character: "Doomfist"
  }
};

export default record;
