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
        value: "After healing an ally, gain <b>10%</b> Attack Speed for <b>3s</b>."
      }
    ],
    cost: 4000,
    id: "i_6",
    tab: "weapon",
    rarity: "rare"
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
