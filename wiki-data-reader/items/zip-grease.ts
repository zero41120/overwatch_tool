import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "ZIP GREASE",
    attributes: [
      {
        type: "Health",
        value: "25"
      },
      {
        type: "WP",
        value: "5%"
      },
      {
        type: "description",
        value: "After detonating <b>[Concussion Mine]</b>, your next <b>2</b> <b>[Frag Launcher]</b> shots gain <b>200%</b> Projectile Speed and deal <b>10%</b> increased damage to airborne enemies."
      }
    ],
    cost: 10000,
    character: "Junkrat",
    tab: "weapon",
    rarity: "epic"
  }
};

export default record;
