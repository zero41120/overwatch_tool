import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "SCAVENGED STEEL",
    attributes: [
      {
        type: "Armor",
        value: "50"
      },
      {
        type: "CR",
        value: "5%"
      },
      {
        type: "description",
        value: "Ability Damage grants 3% Ultimate Charge."
      }
    ],
    cost: 9500,
    tab: "ability",
    rarity: "epic",
    iconUrl: "https://static.wikia.nocookie.net/overwatch_gamepedia/images/e/e5/Scavenged_Steel.png",
    character: "Brigitte",
    id: undefined
  }
};

export default record;
