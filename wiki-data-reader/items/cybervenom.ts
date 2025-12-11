import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "CYBERVENOM",
    attributes: [
      {
        type: "AP",
        value: "10%",
      },
      {
        type: "CR",
        value: "5%",
      },
      {
        type: "description",
        value: "Dealing Ability damage applies 30% healing reduction for 2s.",
      },
    ],
    cost: 10500,
    tab: "ability",
    rarity: "epic",
    iconUrl: "https://static.wikia.nocookie.net/overwatch_gamepedia/images/6/66/Cybervenom.png",
    id: "i_119",
  },
  override: {
    name: "CYBERVENOM",
    counterHeroes: ["Junker Queen", "Mercy", "Moira"],
  },
};

export default record;
