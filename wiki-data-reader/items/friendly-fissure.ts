import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "FRIENDLY FISSURE",
    attributes: [
      {
        type: "Health",
        value: "25"
      },
      {
        type: "AP",
        value: "10%"
      },
      {
        type: "description",
        value: "[Meteor Strike] area of effect grants all other allies Overhealth equal to 20% of your Max Life for 5s."
      }
    ],
    cost: 9000,
    tab: "ability",
    rarity: "epic",
    iconUrl: "https://static.wikia.nocookie.net/overwatch_gamepedia/images/0/0b/Friendly_Fissure.png",
    character: "Doomfist"
  }
};

export default record;
