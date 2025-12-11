import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "JAMISON'S JUMPERS",
    attributes: [
      {
        type: "Health",
        value: "25"
      },
      {
        type: "WP",
        value: "10%"
      },
      {
        type: "AP",
        value: "10%"
      },
      {
        type: "description",
        value: "Detonating [Concussion Mine] on yourself reduces [Concussion Mine] cooldown by 15%"
      }
    ],
    cost: 10000,
    tab: "survival",
    rarity: "epic",
    iconUrl: "https://static.wikia.nocookie.net/overwatch_gamepedia/images/7/75/Jamison%27s_Jumpers.png",
    character: "Junkrat",
    id: undefined
  }
};

export default record;
