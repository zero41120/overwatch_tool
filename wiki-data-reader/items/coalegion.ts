import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "COALEGION",
    attributes: [
      {
        type: "Health",
        value: "25"
      },
      {
        type: "AP",
        value: "15%"
      },
      {
        type: "description",
        value: "Allies healed by [Coalascence] deal 15% increased damage."
      }
    ],
    cost: 10000,
    tab: "ability",
    rarity: "epic",
    iconUrl: "https://static.wikia.nocookie.net/overwatch_gamepedia/images/7/7a/Coalegion.png",
    character: "Moira",
    id: "i_164"
  }
};

export default record;
