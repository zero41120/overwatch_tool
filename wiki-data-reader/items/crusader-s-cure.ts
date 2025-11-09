import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "CRUSADER'S CURE",
    attributes: [
      {
        type: "Health",
        value: "25"
      },
      {
        type: "Knockback Resist",
        value: "50%"
      },
      {
        type: "description",
        value: "Using [Charge] cleanses all negative effects."
      }
    ],
    cost: 3750,
    tab: "survival",
    rarity: "rare",
    iconUrl: "https://static.wikia.nocookie.net/overwatch_gamepedia/images/9/9e/Crusader%27s_Cure.png",
    character: "Reinhardt",
    id: "i_191"
  }
};

export default record;
