import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "FRANKIE'S FIXER",
    attributes: [
      {
        type: "Health",
        value: "50"
      },
      {
        type: "description",
        value: "Heal <b class=\"stat-ap\">10</b> Life for each Ammo loaded using [Combat Roll]."
      }
    ],
    cost: 10000,
    tab: "survival",
    rarity: "epic",
    iconUrl: "https://static.wikia.nocookie.net/overwatch_gamepedia/images/2/2a/Frankie%27s_Fixer.png",
    character: "Cassidy",
    id: "i_239"
  }
};

export default record;
