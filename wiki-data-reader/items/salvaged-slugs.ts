import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "SALVAGED SLUGS",
    attributes: [
      {
        type: "Health",
        value: "25"
      },
      {
        type: "AS",
        value: "10%"
      },
      {
        type: "Increased Damage to Barriers and Deployables",
        value: "30%"
      },
      {
        type: "description",
        value: "Dealing Weapon Damage to Barriers or Deployables has a 50% chance to restore 1 ammo."
      }
    ],
    cost: 9000,
    tab: "weapon",
    rarity: "epic",
    iconUrl: "https://static.wikia.nocookie.net/overwatch_gamepedia/images/b/bb/Salvaged_Slugs.png",
    id: "i_37"
  }
};

export default record;
