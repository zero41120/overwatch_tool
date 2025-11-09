import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "ADVANCED NANOBIOTICS",
    attributes: [
      {
        type: "WP",
        value: "5%"
      },
      {
        type: "description",
        value: "After healing an ally, gain 10% Attack Speed for 3s."
      }
    ],
    cost: 4000,
    tab: "weapon",
    rarity: "rare",
    iconUrl: "https://static.wikia.nocookie.net/overwatch_gamepedia/images/b/b6/Advanced_Nanobiotics.png",
    id: "i_6"
  },
  override: {
    name: "ADVANCED NANOBIOTICS",
    attributes: [
      {
        type: "WP",
        value: "5%"
      },
      {
        type: "AS",
        value: "10%"
      },
      {
        type: "Editor's Note",
        value: "Free item for supports. Expect Zenyatta and Lucio which does not heal with weapon."
      }
    ]
  }
};

export default record;
