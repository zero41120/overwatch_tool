import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "SOLO SPEC",
    attributes: [
      {
        type: "Armor",
        value: "25"
      },
      {
        type: "description",
        value: "While [Defense Matrix] is active, gain Shields equal to 10% of the damage mitigated, up to 100. Resets when your [Mech] is destroyed."
      }
    ],
    cost: 4000,
    tab: "survival",
    rarity: "rare",
    iconUrl: "https://static.wikia.nocookie.net/overwatch_gamepedia/images/7/7a/Solo_Spec.png",
    character: "D.Va",
    id: "i_184"
  }
};

export default record;
