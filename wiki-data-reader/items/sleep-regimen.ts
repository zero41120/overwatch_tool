import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "SLEEP REGIMEN",
    attributes: [
      {
        type: "Health",
        value: "25"
      },
      {
        type: "description",
        value: "When you apply Sleep to an enemy, gain 10 health, up to 50"
      }
    ],
    cost: 4500,
    tab: "ability",
    rarity: "rare",
    iconUrl: "https://static.wikia.nocookie.net/overwatch_gamepedia/images/d/df/Sleep_Regimen_Item.png",
    character: "Ana",
    id: undefined
  }
};

export default record;
