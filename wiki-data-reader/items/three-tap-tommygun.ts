import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "THREE-TAP TOMMYGUN",
    attributes: [
      {
        type: "AP",
        value: "10%"
      },
      {
        type: "AS",
        value: "10%"
      },
      {
        type: "description",
        value: "After using an ability or Gadget, for 3 seconds Weapon Damage deals additional damage equal to 1% of the target's Life.<br>(0.25s Cooldown).<ul><li>Subject to the weapon's damage falloff.</li></ul>"
      }
    ],
    cost: 9500,
    tab: "ability",
    rarity: "epic",
    iconUrl: "https://static.wikia.nocookie.net/overwatch_gamepedia/images/9/99/Three-tap_Tommygun.png",
    id: "i_114"
  }
};

export default record;
