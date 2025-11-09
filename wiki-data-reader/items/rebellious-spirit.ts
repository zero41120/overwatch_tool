import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "REBELLIOUS SPIRIT",
    attributes: [
      {
        type: "Health",
        value: "25"
      },
      {
        type: "description",
        value: "When [Wound] gets removed instead of expiring, gain 10% of Max Life as Overhealth, up to 150."
      }
    ],
    cost: 4000,
    tab: "survival",
    rarity: "rare",
    iconUrl: "https://static.wikia.nocookie.net/overwatch_gamepedia/images/9/9a/Rebellious_Spirit.png",
    character: "Junker Queen",
    id: "i_186"
  }
};

export default record;
