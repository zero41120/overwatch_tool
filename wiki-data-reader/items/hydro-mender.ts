import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "HYDRO MENDER",
    attributes: [
      {
        type: "Shields",
        value: "25"
      },
      {
        type: "description",
        value: "Restore 2% of your Shield every second.<br>While [Rushing Torrent] is active, restore an additional 10% every second."
      }
    ],
    cost: 9000,
    tab: "survival",
    rarity: "epic",
    iconUrl: "https://static.wikia.nocookie.net/overwatch_gamepedia/images/7/78/Hydro_Mender.png",
    character: "Wuyang"
  }
};

export default record;
