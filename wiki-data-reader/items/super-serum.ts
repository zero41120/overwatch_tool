import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "SUPER SERUM",
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
        type: "WPLS",
        value: "10%"
      },
      {
        type: "description",
        value: "On Use: Increase your total Attack Speed by 50% but deal 15% reduced Weapon Damage and Healing for 5s. Reload all your Ammo. <b>Cooldown:</b> 30 seconds"
      }
    ],
    cost: 10000,
    tab: "survival",
    rarity: "epic",
    id: undefined
  }
};

export default record;
