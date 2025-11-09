import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "DASHING SKATES",
    attributes: [
      {
        type: "Health",
        value: "25"
      },
      {
        type: "MS",
        value: "5%"
      },
      {
        type: "description",
        value: "On Use: Dash a short distance. <b>Cooldown:</b> 15 seconds"
      }
    ],
    cost: 3750,
    tab: "survival",
    rarity: "rare",
    id: undefined
  }
};

export default record;
