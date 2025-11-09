import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "BOOST RECYCLER",
    attributes: [
      {
        type: "AP",
        value: "10%"
      },
      {
        type: "description",
        value: "If [Charge] is interrupted by the enemy, refund 50% of [Charge] cooldown."
      }
    ],
    cost: 4000,
    tab: "ability",
    rarity: "rare",
    iconUrl: "https://static.wikia.nocookie.net/overwatch_gamepedia/images/0/04/Boost_Recycler.png",
    character: "Reinhardt",
    id: "i_92"
  }
};

export default record;
