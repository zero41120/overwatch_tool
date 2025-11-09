import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "SMART-ARMOR",
    attributes: [
      {
        type: "Armor",
        value: "25"
      },
      {
        type: "description",
        value: "While below 50% Life, take 25% reduced damage from Shotguns, such as Reaper, Junker Queen, and D.Va’s Primary Fire."
      }
    ],
    cost: 4000,
    tab: "survival",
    rarity: "rare",
    character: "Winston",
    id: undefined
  }
};

export default record;
