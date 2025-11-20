import type { HeroPower } from "../types";

const heroPowers: HeroPower[] = [
  {
    "hero": "Sigma",
    "name": "Zero Gravity",
    "description": "When you use an ability, gain the ability to fly for 4 seconds. While flying gain 10% damage reduction and increased Movement Speed.",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/d/da/Zero_Gravity.png"
  },
  {
    "hero": "Sigma",
    "name": "Hyperloop",
    "description": "[Hyperspheres] direct hits reduce the cooldown of [Accretion] by 0.8 seconds.",
    "affectedAbility": "Hyperspheres",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/3/34/Hyperloop_power.png"
  },
  {
    "hero": "Sigma",
    "name": "Trinisphere",
    "description": "Your primary fire launches a third [Hypersphere] that deals 50% reduced damage.",
    "affectedAbility": "Hyperspheres",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/c/c6/Trinisphere.png"
  },
  {
    "hero": "Sigma",
    "name": "Event Horizon",
    "description": "Damage absorbed by [Kinetic Grasp] also restores [Experimental Barrier]'s health. Excess is converted to Overhealth.",
    "affectedAbility": "Kinetic Grasp",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/8/81/Event_Horizon.png"
  },
  {
    "hero": "Sigma",
    "name": "Symphonic Syzygy",
    "description": "When [Kintic Grasp] ends, for every 100 damage absorbed gain 10% Attack Speed for 4s, stacking up to 4 times.",
    "affectedAbility": "Kinetic Grasp",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/8/84/Symphonic_Syzygy.png"
  },
  {
    "hero": "Sigma",
    "name": "Orbital Barrier",
    "description": "Get a mini [Experimental Barrier] that orbits around you. It has 50% reduced health.",
    "affectedAbility": "Experimental Barrier",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/d/db/Orbital_Barrier.png"
  },
  {
    "hero": "Sigma",
    "name": "Philharmonic Fortitude",
    "description": "Experimental Barrier has 25% increased Max Health. Barrier health regenerates constantly but 50% slower while deployed.",
    "affectedAbility": "Experimental Barrier",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/c/ce/Philharmonic_Fortitude.png"
  },
  {
    "hero": "Sigma",
    "name": "Mass Driver",
    "description": "[Accretion] projectiles that pass through [Experimental Barrier] gain 300% Projectile Speed and deal 20% increased damage.",
    "affectedAbility": "Accretion",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/d/db/Mass_Driver.png"
  },
  {
    "hero": "Sigma",
    "name": "Singularity",
    "description": "[Accertion] splash damage is increased by 75% and enemies are pulled towards its explosion.",
    "affectedAbility": "Accretion",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/d/d0/Singularity.png"
  },
  {
    "hero": "Sigma",
    "name": "Maestro",
    "description": "50% Ultimate Cost Reduction.<br>[Gravitic Flux] Radius is reduced by 35% and refunds 50% of Ultimate Charge if no enemies are affected.",
    "affectedAbility": "Gravitic Flux",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/f/f1/Maestro_power.png"
  },
  {
    "hero": "Sigma",
    "name": "Apogee Alignment",
    "description": "When you use an ability, create 2 [Hyperspheres] that orbit around you. They explode on contact but deal 50% reduced damage.",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/7/7d/Apogee_Alignment.png"
  },
  {
    "hero": "Sigma",
    "name": "Astrophysical",
    "description": "[Quick Melee] causes enemies hit to levitate into the air for 1s.<br>(10s Cooldown)",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/f/f3/Astrophysical.png"
  }
];

export default heroPowers;
