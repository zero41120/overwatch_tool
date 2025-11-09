import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "CHARGED CHASSIS",
    attributes: [
      {
        type: "Health",
        value: "25"
      },
      {
        type: "description",
        value: "Fortify grants additional Overhealth equal to 10% of your max Life."
      }
    ],
    cost: 4000,
    tab: "survival",
    rarity: "rare",
    iconUrl: "https://static.wikia.nocookie.net/overwatch_gamepedia/images/c/c7/Charged_Chassis.png",
    character: "Orisa",
    id: "i_188"
  }
};

export default record;
