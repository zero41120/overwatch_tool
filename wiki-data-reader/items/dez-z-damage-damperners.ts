import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "DEZ'Z DAMAGE DAMPERNERS",
    attributes: [
      {
        type: "Health",
        value: "25"
      },
      {
        type: "Knockback Resist",
        value: "50%"
      },
      {
        type: "description",
        value: "When knocked back, gain 25% increased movement speed for 3s."
      }
    ],
    cost: 4000,
    tab: "survival",
    rarity: "rare",
    iconUrl: "https://static.wikia.nocookie.net/overwatch_gamepedia/images/d/df/Dez%27s_Damage_Dampeners.png",
    character: "Junker Queen",
    id: undefined
  }
};

export default record;
