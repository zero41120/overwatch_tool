import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "CHIP-DAMAGE DIVERTER",
    attributes: [
      {
        type: "Health",
        value: "50"
      },
      {
        type: "description",
        value: "When you deal damage to Barriers while in your [Mech], gain Shields equal to 10% of damage dealt, up to 200. Resets when your [Mech] is destroyed."
      }
    ],
    cost: 10000,
    tab: "survival",
    rarity: "epic",
    iconUrl: "https://static.wikia.nocookie.net/overwatch_gamepedia/images/c/c9/Chip-Damage_Diverter.png",
    character: "D.Va",
    id: "i_228"
  }
};

export default record;
