import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "QUICKLOAD CHAMBER",
    attributes: [
      {
        type: "Reload Speed",
        value: "20%"
      },
      {
        type: "description",
        value: "Reloading within 6m of an enemy adds 20% of Max Ammo as extra ammo."
      }
    ],
    cost: 4000,
    tab: "weapon",
    rarity: "rare",
    character: "Cassidy",
    id: "i_22"
  }
};

export default record;
