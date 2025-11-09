import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "KITSUNE CHARM",
    attributes: [
      {
        type: "Shields",
        value: "50"
      },
      {
        type: "Incoming Negative Effect Duration",
        value: "-40%"
      },
      {
        type: "description",
        value: "On Use: Cleanse yourself of most negative effects, restore 75 Life, and gain Invulnerability and 75% Move Speed for 0.65s. <b>Cooldown:</b> 35 seconds"
      }
    ],
    cost: 9000,
    tab: "survival",
    rarity: "epic",
    iconUrl: "https://static.wikia.nocookie.net/overwatch_gamepedia/images/3/3d/Kitsune_Charm.png",
    id: undefined
  }
};

export default record;
