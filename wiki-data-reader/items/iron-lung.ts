import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "IRON LUNG",
    attributes: [
      {
        type: "Health",
        value: "25"
      },
      {
        type: "description",
        value: "While using [Sprint], gain Overhealth equal to 5% of your max Life every 1s, up to 25%, for 5s."
      }
    ],
    cost: 10000,
    tab: "survival",
    rarity: "epic",
    iconUrl: "https://static.wikia.nocookie.net/overwatch_gamepedia/images/9/9f/Iron_Lung.png",
    character: "Soldier: 76",
    id: "i_247"
  }
};

export default record;
