import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "MED KIT",
    attributes: [
      {
        type: "Health",
        value: "25"
      },
      {
        type: "description",
        value: "On Use: Restore 20 Life every 1s for 10s. Taking damage removes this bonus. <b>Cooldown:</b> 15 seconds"
      }
    ],
    cost: 1500,
    tab: "survival",
    rarity: "common",
    iconUrl: "https://static.wikia.nocookie.net/overwatch_gamepedia/images/1/14/Med_Kit.png",
    id: undefined
  }
};

export default record;
