import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "TOURNIQUET",
    attributes: [
      {
        type: "Health",
        value: "25"
      },
      {
        type: "description",
        value: "After using <b>[Updraft]</b>, reset <b>[Quick Dash]</b> and gain <b>50 Overhealth</b> for <b>5s</b>."
      }
    ],
    cost: 4500,
    character: "Freja",
    tab: "survival",
    rarity: "rare"
  }
};

export default record;
