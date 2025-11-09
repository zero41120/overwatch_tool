import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "ZIP GREASE",
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
        type: "description",
        value: "After detonating [Concussion Mine] your next 2 [Frag Launcher] shots gain 200% Projectile Speed and 10% increased damage to airborne enemies."
      }
    ],
    cost: 10000,
    tab: "weapon",
    rarity: "epic",
    iconUrl: "https://static.wikia.nocookie.net/overwatch_gamepedia/images/c/c5/Zip_Grease.png",
    character: "Junkrat",
    id: undefined
  }
};

export default record;
