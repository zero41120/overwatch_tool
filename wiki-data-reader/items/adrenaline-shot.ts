import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "ADRENALINE SHOT",
    attributes: [
      {
        type: "Health",
        value: "25"
      },
      {
        type: "description",
        value: "Health Packs grant 20% Move Speed for 5s and 50 Overhealth."
      }
    ],
    cost: 1500,
    tab: "survival",
    rarity: "common",
    iconUrl: "https://static.wikia.nocookie.net/overwatch_gamepedia/images/1/1b/Adrenaline_Shot.png",
    id: "i_166"
  }
};

export default record;
