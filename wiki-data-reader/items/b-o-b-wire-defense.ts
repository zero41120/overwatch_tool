import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "B.O.B. WIRE DEFENSE",
    attributes: [
      {
        type: "Health",
        value: "50"
      },
      {
        type: "Armor",
        value: "25"
      },
      {
        type: "description",
        value: "When [B.O.B.] finishes charging, [B.O.B.] gains 300 Armor."
      }
    ],
    cost: 10000,
    tab: "survival",
    rarity: "epic",
    character: "Ashe"
  }
};

export default record;
