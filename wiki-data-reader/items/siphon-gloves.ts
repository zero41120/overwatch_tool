import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "SIPHON GLOVES",
    attributes: [
      {
        type: "Health",
        value: "25"
      },
      {
        type: "description",
        value: "[Quick Melee] damage heals for 25 Life.<ul><li>Does <b>not</b> affect melee weapons that can be activated with the Quick Melee input, such as <b>[Rocket Hammer]</b> and <b>[Dragonblade]</b>.</li></ul>"
      }
    ],
    cost: 1500,
    tab: "survival",
    rarity: "common",
    iconUrl: "https://static.wikia.nocookie.net/overwatch_gamepedia/images/0/01/Siphon_Gloves.png",
    id: "i_173"
  }
};

export default record;
