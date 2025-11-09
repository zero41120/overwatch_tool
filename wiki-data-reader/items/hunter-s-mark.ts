import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "HUNTER'S MARK",
    attributes: [
      {
        type: "Health",
        value: "25"
      },
      {
        type: "description",
        value: "Enemies with a bounty of 750 or more are revealed to you within 40m. Eliminating them grants 250 additional Stadium Cash."
      }
    ],
    cost: 4000,
    tab: "survival",
    rarity: "rare",
    iconUrl: "https://static.wikia.nocookie.net/overwatch_gamepedia/images/b/bd/Hunter%27s_Mark.png",
    character: "Freja",
    id: undefined
  }
};

export default record;
