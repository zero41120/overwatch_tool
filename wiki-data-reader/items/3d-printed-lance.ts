import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "3D-PRINTED LANCE",
    attributes: [
      {
        type: "AP",
        value: "15%"
      },
      {
        type: "description",
        value: "Energy Javelin cooldown is reduced by 15%, but each use generates 25 Heat."
      }
    ],
    cost: 11000,
    tab: "ability",
    rarity: "epic",
    iconUrl: "https://static.wikia.nocookie.net/overwatch_gamepedia/images/d/d1/3D-Printed_Lance.png",
    character: "Orisa",
    id: "i_130"
  }
};

export default record;
