import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "RECLAIMER'S RIG",
    attributes: [
      {
        type: "Health",
        value: "25"
      },
      {
        type: "AP",
        value: "5%"
      },
      {
        type: "description",
        value: "When a [Turret] is destroyed, reduce [Deploy Turret] cooldown by 1s and gain 25 Overhealth for 3s."
      }
    ],
    cost: 4500,
    tab: "ability",
    rarity: "rare",
    iconUrl: "https://static.wikia.nocookie.net/overwatch_gamepedia/images/1/16/Reclaimer%27s_Rig.png",
    character: "Torbjörn",
    id: undefined
  }
};

export default record;
