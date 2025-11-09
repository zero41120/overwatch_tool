import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "AIRWAVES",
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
        value: "[Sound Barrier] effectiveness is increased by 25% for every 1s [Sound Barrier] is channeled, up to 50%."
      }
    ],
    cost: 10000,
    tab: "ability",
    rarity: "epic",
    iconUrl: "https://static.wikia.nocookie.net/overwatch_gamepedia/images/f/f3/Airwaves.png",
    character: "Lúcio",
    id: "i_160"
  }
};

export default record;
