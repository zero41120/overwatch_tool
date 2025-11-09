import type { ItemRecord } from "../types";

const record: ItemRecord = {
  item: {
    name: "IRONCLAD EXHAUST PORTS",
    attributes: [
      {
        type: "Health",
        value: "10"
      },
      {
        type: "CR",
        value: "5%"
      },
      {
        type: "description",
        value: "When you use an ability or Gadget, gain 25 Overhealth for 3s.<ul><li>Overhealth does not stack. Subsequent uses refresh the amount and duration.</li><li>Also affects ultimate abilities.</li><li>Passive abilities do not grant overhealth even if they are accessed through a button press.</li><li>Abilities that have a multiple activation stages only grant overhealth on the initial activation. For example, <b>[Concussion Mine]</b> grants overhealth when it is thrown, but will not grant overhealth again when it is detonated.</li><li>Abilities that employ a confirmation input such as, <b>[Biotic Orb]</b> and <b>[Pulsar Torpedoes]</b>, grants overhealth when it is fired.</li><li>Overhealth is granted instantly when the button is pressed, except for <b>[Shadow Step]</b>, which grants the overhealth upon arrival.</li><li>The effect cannot be triggered by abilities that are toggleable or have no cooldown. This includes:</li><li>D,Va's <b>[Defense Matrix]</b></li><li>Reinhardt's <b>[Barrier Field]</b></li><li>Sigma's <b>[Experimental Barrier]</b></li><li>Soldier: 76's <b>[Sprint]</b></li><li>Lúcio's <b>[Crossfade]</b></li><li>Zenyatta's <b>[Orb of Harmony]</b> and <b>[Orb of Discord]</b></li><li>Following Power and Item based abilities can trigger the effect:</li><li>D.Va's <b>[Busan Blaster]</b></li><li>Sigma's <b>[Astrophysical]</b> (on-hit only)</li><li>Genji's <b>[Iaido Strike]</b> (while Dragonblade is not active)</li><li>Junkrat's <b>[Slapnel]</b></li><li>Mei's <b>[Snowball Flight]</b></li><li>Ana's <b>[Dash Boots]</b></li><li>Mercy's <b>[Renaissance]</b> (while Valkyrie is not active)</li><li>Zenyatta's <b>[Flying Kick]</b></li></ul>"
      }
    ],
    cost: 4000,
    tab: "survival",
    rarity: "rare",
    id: "i_176"
  }
};

export default record;
