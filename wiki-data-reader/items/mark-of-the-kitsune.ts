import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "MARK OF THE KITSUNE",
    attributes: [
      {
        type: "AP",
        value: "10%"
      },
      {
        type: "description",
        value: "When you use an ability or Gadget, your next instance of Weapon Damage or Healing deals <b class=\"stat-ap\">25</b> bonus damage or healing.<ul><li>Subject to the weapon's damage falloff.</li></ul>"
      }
    ],
    cost: 11000,
    tab: "ability",
    rarity: "epic",
    iconUrl: "https://static.wikia.nocookie.net/overwatch_gamepedia/images/3/35/Mark_of_the_Kitsune.png",
    id: "i_122"
  }
};

export default record;
