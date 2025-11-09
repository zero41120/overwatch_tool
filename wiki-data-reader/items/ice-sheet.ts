import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "ICE SHEET",
    attributes: [
      {
        type: "Health",
        value: "25"
      },
      {
        type: "description",
        value: "[Ice Wall] duration is increased by 1s and health is increased by 100%."
      }
    ],
    cost: 10000,
    tab: "survival",
    rarity: "epic",
    iconUrl: "https://static.wikia.nocookie.net/overwatch_gamepedia/images/d/d6/Ice_Sheet.png",
    character: "Mei",
    id: "i_243"
  }
};

export default record;
