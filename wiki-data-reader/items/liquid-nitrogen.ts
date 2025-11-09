import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "LIQUID NITROGEN",
    attributes: [
      {
        type: "Health",
        value: "25"
      },
      {
        type: "AP",
        value: "10%"
      },
      {
        type: "description",
        value: "Dealing Ability Damage slows the target's Move Speed by 10% and their bonus Move Speed by 15% for 3s."
      }
    ],
    cost: 11000,
    tab: "ability",
    rarity: "epic",
    iconUrl: "https://static.wikia.nocookie.net/overwatch_gamepedia/images/1/14/Liquid_Nitrogen.png",
    id: "i_121"
  }
};

export default record;
