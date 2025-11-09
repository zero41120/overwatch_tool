import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "GLASS EXTRA FULL",
    attributes: [
      {
        type: "Health",
        value: "25"
      },
      {
        type: "AS",
        value: "5%"
      },
      {
        type: "description",
        value: "Healing from [Caduceus Staff] targeting full health allies is converted to Overhealth, up to 25."
      }
    ],
    cost: 4500,
    tab: "weapon",
    rarity: "rare",
    iconUrl: "https://static.wikia.nocookie.net/overwatch_gamepedia/images/2/2e/Glass_Extra_Full.png",
    character: "Mercy",
    id: undefined
  }
};

export default record;
