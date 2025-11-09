import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "VITALITY AMPLIFIER",
    attributes: [
      {
        type: "Shields",
        value: "25"
      },
      {
        type: "description",
        value: "While above 50% Life gain 10% Ability Power.<br>Otherwise, gain 15% Ability Lifesteal and abilities refresh 10% faster."
      }
    ],
    cost: 5000,
    tab: "ability",
    rarity: "rare",
    iconUrl: "https://static.wikia.nocookie.net/overwatch_gamepedia/images/7/72/Vitality_Amplifier.png",
    id: undefined
  }
};

export default record;
