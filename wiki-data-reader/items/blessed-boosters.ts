import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "BLESSED BOOSTERS",
    attributes: [
      {
        type: "Health",
        value: "25"
      },
      {
        type: "AP",
        value: "10%"
      },
      {
        type: "description",
        value: "Your launch velocity is increased by 25% when canceling [Guardian Angel] with crouch or jump."
      }
    ],
    cost: 9000,
    tab: "ability",
    rarity: "epic",
    iconUrl: "https://static.wikia.nocookie.net/overwatch_gamepedia/images/d/da/Blessed_Boosters.png",
    character: "Mercy",
    id: "i_254"
  }
};

export default record;
