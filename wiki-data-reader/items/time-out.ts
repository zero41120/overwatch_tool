import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "TIME OUT",
    attributes: [
      {
        type: "Health",
        value: "75"
      },
      {
        type: "description",
        value: "[Biotic Grenade] knocks back enemies, and Ana gains 20% Move Speed while affected by it."
      }
    ],
    cost: 9000,
    tab: "survival",
    rarity: "epic",
    iconUrl: "https://static.wikia.nocookie.net/overwatch_gamepedia/images/1/17/Time_Out_Item.png",
    character: "Ana",
    id: undefined
  }
};

export default record;
