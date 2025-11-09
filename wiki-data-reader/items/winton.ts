import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "WINTON",
    attributes: [
      {
        type: "Health",
        value: "10"
      },
      {
        type: "description",
        value: "Winning a round awards Winston 2000 bonus cash."
      }
    ],
    cost: 3500,
    tab: "survival",
    rarity: "common",
    character: "Winston",
    id: undefined
  }
};

export default record;
