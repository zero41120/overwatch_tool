import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "SPIKED GLOVES",
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
        value: "Deal <b>10%</b> increased damage and <b>25%</b> <b>[Quick Melee]</b> damage to enemies that are airborne."
      }
    ],
    cost: 4500,
    character: "Junkrat",
    tab: "weapon",
    rarity: "rare"
  }
};

export default record;
