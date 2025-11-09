import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "BOMB DIFFUSAL BOOTS",
    attributes: [
      {
        type: "Health",
        value: "25"
      },
      {
        type: "WP",
        value: "5%"
      },
      {
        type: "Reduced Helix Rocket Self-Damage",
        value: "90%"
      },
      {
        type: "description",
        value: "When you damage yourself with [Helix Rocket], it knocks you back 200% further."
      }
    ],
    cost: 4000,
    tab: "ability",
    rarity: "rare",
    iconUrl: "https://static.wikia.nocookie.net/overwatch_gamepedia/images/9/9b/Bomb_Diffusal_Boots.png",
    character: "Soldier: 76",
    id: "i_102"
  }
};

export default record;
