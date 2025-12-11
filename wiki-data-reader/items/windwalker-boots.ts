import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "WINDWALKER BOOTS",
    attributes: [
      {
        type: "Health",
        value: "25"
      },
      {
        type: "AP",
        value: "5%"
      },
      {
        type: "description",
        value: "[Take Aim] bolt explosion damage reduces the cooldown of [Updraft] by 1s."
      }
    ],
    cost: 4000,
    tab: "ability",
    rarity: "rare",
    iconUrl: "https://static.wikia.nocookie.net/overwatch_gamepedia/images/f/f4/Windwalker_Boots.png",
    character: "Freja",
    id: undefined
  }
};

export default record;
