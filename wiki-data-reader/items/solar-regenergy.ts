import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "SOLAR REGENERGY",
    attributes: [
      {
        type: "Health",
        value: "25"
      },
      {
        type: "description",
        value: "After using an ability, restore Armor equal to 3% of your max Life."
      }
    ],
    cost: 4000,
    tab: "survival",
    rarity: "rare",
    iconUrl: "https://static.wikia.nocookie.net/overwatch_gamepedia/images/8/86/Solar_Regenergy.png",
    character: "Orisa",
    id: "i_190"
  }
};

export default record;
