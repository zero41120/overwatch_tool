import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "WATER COLLEGE HAT",
    attributes: [
      {
        type: "Shields",
        value: "25"
      },
      {
        type: "Passive Restorative Stream Duration",
        value: "50%"
      },
      {
        type: "description",
        value: "Passive [Restorative Stream] also gives 10 Overhealth per second, up to <b class=\"stat-ap\">30</b>."
      }
    ],
    cost: 4000,
    tab: "ability",
    rarity: "rare",
    iconUrl: "https://static.wikia.nocookie.net/overwatch_gamepedia/images/c/c7/Water_College_Hat.png",
    character: "Wuyang"
  }
};

export default record;
