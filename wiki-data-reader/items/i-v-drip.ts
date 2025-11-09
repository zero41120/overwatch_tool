import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "I.V. DRIP",
    attributes: [
      {
        type: "Health",
        value: "25"
      },
      {
        type: "description",
        value: "While affected by [Biotic Grenade], Ana gains <b class=\"stat-ap\">150</b> Overhealth."
      }
    ],
    cost: 4000,
    tab: "survival",
    rarity: "rare",
    iconUrl: "https://static.wikia.nocookie.net/overwatch_gamepedia/images/5/5e/I.V._Drip.png",
    character: "Ana",
    id: "i_210"
  }
};

export default record;
