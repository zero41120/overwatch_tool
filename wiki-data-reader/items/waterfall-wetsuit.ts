import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "WATERFALL WETSUIT",
    attributes: [
      {
        type: "Shields",
        value: "25"
      },
      {
        type: "CR",
        value: "10%"
      },
      {
        type: "description",
        value: "For each target hit by [Guardian Wave], Wuyang gains <b class=\"stat-ap\">20</b> Overhealth, up to <b class=\"stat-ap\">80</b>."
      }
    ],
    cost: 11000,
    tab: "survival",
    rarity: "epic",
    iconUrl: "https://static.wikia.nocookie.net/overwatch_gamepedia/images/4/4a/Waterfall_Wetsuit.png",
    character: "Wuyang"
  }
};

export default record;
