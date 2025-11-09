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
        type: "MD",
        value: "15%"
      },
      {
        type: "description",
        value: "<b>[Melee]</b> Damage grants <b>10%</b> Move Speed and restores <b>5%</b> of Max Life over <b>2s</b>."
      }
    ],
    cost: 10000,
    id: "i_220",
    tab: "survival",
    rarity: "epic"
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
