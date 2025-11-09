import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "GENETICIST'S VIAL",
    attributes: [
      {
        type: "Health",
        value: "25"
      },
      {
        type: "description",
        value: "The first time you would die each round, revive instead with 250 Life after 3s."
      }
    ],
    cost: 9000,
    tab: "survival",
    rarity: "epic",
    iconUrl: "https://static.wikia.nocookie.net/overwatch_gamepedia/images/4/4d/Geneticist%27s_Vial.png",
    id: "i_217"
  }
};

export default record;
