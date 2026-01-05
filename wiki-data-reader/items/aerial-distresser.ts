import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "AERIAL DISTRESSER",
    attributes: [
      {
        type: "Shields",
        value: "25",
      },
      {
        type: "AS",
        value: "10%",
      },
      {
        type: "description",
        value: "Weapon damage to airborne enemies deal 25% bonus damage over 3s.",
      },
    ],
    cost: 9000,
    tab: "weapon",
    rarity: "epic",
    iconUrl: "https://static.wikia.nocookie.net/overwatch_gamepedia/images/f/f2/Aerial_Distresser.png",
    id: undefined,
  },
  override: {
    name: "AERIAL DISTRESSER",
    attributes: [
      {
        type: "Shield",
        value: "25",
      },
      {
        type: "AS",
        value: "10%",
      },
      {
        type: "Weapon Multiplier",
        value: "25%",
      },
      {
        type: "Editor's Note",
        value: "Avoid if not applicable.",
      },
    ],
  },
};

export default record;
