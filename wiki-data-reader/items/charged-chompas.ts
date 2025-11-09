import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "CHARGED CHOMPAS",
    attributes: [
      {
        type: "Health",
        value: "50"
      },
      {
        type: "AP",
        value: "10%"
      },
      {
        type: "description",
        value: "Whenever [Total Mayhem] deals damage, gain 3% Ultimate Charge."
      }
    ],
    cost: 10000,
    tab: "ability",
    rarity: "epic",
    iconUrl: "https://static.wikia.nocookie.net/overwatch_gamepedia/images/8/8f/Charged_Chompas.png",
    character: "Junkrat",
    id: undefined
  }
};

export default record;
