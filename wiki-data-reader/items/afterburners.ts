import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "AFTERBURNERS",
    attributes: [
      {
        type: "Health",
        value: "25"
      },
      {
        type: "CR",
        value: "5%"
      },
      {
        type: "Power Slide Jump Height",
        value: "25%"
      },
      {
        type: "description",
        value: "[Overload] grants additional Overhealth equal to 30% of Max Armor."
      }
    ],
    cost: 4500,
    tab: "survival",
    rarity: "rare",
    iconUrl: "https://static.wikia.nocookie.net/overwatch_gamepedia/images/4/4f/Afterburners.png",
    character: "Sojourn",
    id: undefined
  }
};

export default record;
