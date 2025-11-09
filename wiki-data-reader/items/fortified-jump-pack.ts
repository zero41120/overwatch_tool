import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "FORTIFIED JUMP PACK",
    attributes: [
      {
        type: "Armor",
        value: "50"
      },
      {
        type: "description",
        value: "Damage received during [Jump Pack] is reduced by 35%."
      }
    ],
    cost: 10000,
    tab: "survival",
    rarity: "epic",
    iconUrl: "https://static.wikia.nocookie.net/overwatch_gamepedia/images/9/99/Fortified_Jump_Pack.png",
    character: "Winston",
    id: undefined
  }
};

export default record;
