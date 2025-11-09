import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "IRON LUNG",
    attributes: [
      {
        type: "Health",
        value: "25"
      },
      {
        type: "description",
        value: "While using <b>[Sprint]</b>, gain <b>Overhealth</b> equal to <b>5%</b> of your max Life every <b><b>1s</b></b>, up to <b>25%</b>, for <b>5s</b>."
      }
    ],
    cost: 10000,
    character: "Soldier: 76",
    id: "i_247",
    tab: "survival",
    rarity: "epic"
  }
};

export default record;
