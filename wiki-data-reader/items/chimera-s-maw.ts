import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "CHIMERA'S MAW",
    attributes: [
      {
        type: "Fire Strike Radius",
        value: "50%"
      },
      {
        type: "Fire Strike Projectile Speed",
        value: "25%"
      },
      {
        type: "description",
        value: "For each additional enemy [Fire Strike] damages beyond the initial target, reduce [Fire Strike] cooldown by 5%."
      }
    ],
    cost: 4000,
    tab: "ability",
    rarity: "epic",
    iconUrl: "https://static.wikia.nocookie.net/overwatch_gamepedia/images/8/8c/Chimera%27s_Maw.png",
    character: "Reinhardt",
    id: undefined
  }
};

export default record;
