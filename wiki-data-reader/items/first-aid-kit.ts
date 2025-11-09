import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "FIRST AID KIT",
    attributes: [
      {
        type: "Shields",
        value: "25"
      },
      {
        type: "description",
        value: "Reduce the time before your Life begins regenerating by 33%.<ul><li>Also reduces the regeneration delay of shields.</li></ul>"
      }
    ],
    cost: 1500,
    tab: "survival",
    rarity: "common",
    iconUrl: "https://static.wikia.nocookie.net/overwatch_gamepedia/images/5/50/First_Aid_Kit.png",
    id: "i_171"
  }
};

export default record;
