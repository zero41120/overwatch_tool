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
        value: "Deal 10% increased damage and 25% [Quick Melee] damage to enemies that are airborne."
      }
    ],
    cost: 4000,
    tab: "weapon",
    rarity: "rare",
    iconUrl: "https://static.wikia.nocookie.net/overwatch_gamepedia/images/c/c2/Spiked_Gloves.png",
    character: "Junkrat",
    id: undefined
  }
};

export default record;
