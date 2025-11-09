import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "GLOOMGAUNTLET",
    attributes: [
      {
        type: "Armor",
        value: "50"
      },
      {
        type: "Melee Damage",
        value: "15%"
      },
      {
        type: "description",
        value: "[Melee] damage grants 10% Move Speed and restores 5% of Max Life over 2s."
      }
    ],
    cost: 10000,
    tab: "survival",
    rarity: "epic",
    iconUrl: "https://static.wikia.nocookie.net/overwatch_gamepedia/images/a/aa/Gloomgauntlet.png",
    id: "i_220"
  },
  override: {
    name: "GLOOMGAUNTLET",
    attributes: [
      {
        type: "Armor",
        value: "50"
      },
      {
        type: "MD",
        value: "15%"
      },
      {
        type: "MS",
        value: "10%"
      },
      {
        type: "description",
        value: "<b>[Melee]</b> Damage grants <b>10%</b> Move Speed and restores <b>5%</b> of Max Life over <b>2s</b>."
      }
    ]
  }
};

export default record;
