import type { HeroPower } from "../types";

const heroPowers: HeroPower[] = [
  {
    "hero": "Zarya",
    "name": "No Limits",
    "description": "Maximum [Energy] increased to 125. [Energy] always decays above 100 [Energy] at a 150% faster rate.",
    "affectedAbility": "Particle Cannon",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/b/bd/No_Limits_power.png"
  },
  {
    "hero": "Zarya",
    "name": "Particle Accelerator",
    "description": "Gain 15% Attack Speed for [Particle Cannon]'s secondary fire. After using an ability, quadruple this bonus for 5 seconds.",
    "affectedAbility": "Particle Cannon",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/6/68/Particle_Accelerator.png"
  },
  {
    "hero": "Zarya",
    "name": "Piercing Beam",
    "description": "Above 80 [Energy], [Particle Cannon]'s Primary Fire will pierce enemies.",
    "affectedAbility": "Particle Cannon",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/d/dd/Piercing_Beam.png"
  },
  {
    "hero": "Zarya",
    "name": "Pre-workout",
    "description": "Gain Weapon Lifesteal and Ability Lifesteal equal to 15% of [Energy].",
    "affectedAbility": "Energy",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/2/2f/Pre-Workout.png"
  },
  {
    "hero": "Zarya",
    "name": "Barrier Benefits",
    "description": "When [Barriers] expire, grant Overhealth equal to 100% of remaining [Barrier] Health to the target for 2s.",
    "affectedAbility": "Particle Barrier",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/e/e0/Barrier_Benefits.png"
  },
  {
    "hero": "Zarya",
    "name": "Containment Shield",
    "description": "[Barrier] heals the target for 5% of your Max Life every 1s and grants 20% Move Speed while active.",
    "affectedAbility": "Particle Barrier",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/c/c0/Containment_Shield.png"
  },
  {
    "hero": "Zarya",
    "name": "Fission Field",
    "description": "[Projected Barrier] also applies to 1 additional ally within 10m, but has 25% reduced maximum [Energy] gain and 20% reduced duration.",
    "affectedAbility": "Particle Barrier",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/9/9b/Fission_Field.png"
  },
  {
    "hero": "Zarya",
    "name": "Here to Spot You",
    "description": "[Projected Barrier] pulls you to the targeted ally and heals you for 20% of Max Life over 3s.",
    "affectedAbility": "Particle Barrier",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/3/39/Here_To_Spot_You.png"
  },
  {
    "hero": "Zarya",
    "name": "Lifelift",
    "description": "+50% [Particle Barrier] Size.<br>Increase [Barrier] Health by 50% of Bonus Max Life from Items.<ul><li>Each Barrier can only grant up to 45 Energy regardless of Barrier Health.</li></ul>",
    "affectedAbility": "Particle Barrier",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/3/38/Lifelift.png"
  },
  {
    "hero": "Zarya",
    "name": "Major Flex",
    "description": "[Barrier] knocks back and deals <b class=\"stat-ap\">25</b> damage, increased by [Energy], to enemies within 5m every 1s.",
    "affectedAbility": "Particle Barrier",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/f/f9/Major_Flex.png"
  },
  {
    "hero": "Zarya",
    "name": "Volskaya Vortex",
    "description": "After a [Barrier] is cast, [Particle Cannon]'s next secondary fire spawns a slowing vortex that deals <b class=\"stat-ap\">80</b> damage over 2s.",
    "affectedAbility": "Particle Barrier",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/b/b0/Volskaya_Vortex.png"
  },
  {
    "hero": "Zarya",
    "name": "Graviton Anomaly",
    "description": "25% Ultimate Cost Reduction<br>[Graviton Surge] base damage is increased to 30 and increased by [Energy], but has 50% reduced duration.",
    "affectedAbility": "Graviton Surge",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/f/f3/Graviton_Anomaly.png"
  }
];

export default heroPowers;
