import type { HeroPower } from "../types";

const heroPowers: HeroPower[] = [
  {
    "hero": "Hazard",
    "name": "Barbed Shot",
    "description": "[Bonespur] shots also fire 2 [Spike Guard] spikes at hit targets for <b class=\"stat-ap\">10</b> damage.",
    "affectedAbility": "Bonespur",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/6/6e/Barbed_Shot.png"
  },
  {
    "hero": "Hazard",
    "name": "Bonerot",
    "description": "Ammo gained from [Spike Guard] deals <b>20</b> extra damage. [Spike Guard] ammo regeneration speed is increased by 25%.",
    "affectedAbility": "Bonespur",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/b/b4/Bonerot.png"
  },
  {
    "hero": "Hazard",
    "name": "Hit Me Again",
    "description": "Each fired [Spike Guard] spike hit reduces [Violent Leap]'s cooldown by 0.1s. [Spike Guard] Movement Speed penalty is reduced by 90%.",
    "affectedAbility": "Spike Guard",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/5/5b/Hit_Me_Again.png"
  },
  {
    "hero": "Hazard",
    "name": "Needle Storm",
    "description": "[Spike Guard] now fires at all enemies in front of Hazard",
    "affectedAbility": "Spike Guard",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/d/d5/Needle_Storm.png"
  },
  {
    "hero": "Hazard",
    "name": "Bunny Hop",
    "description": "Using [Violent Leap] without using Slash refunds 2s of cooldown for [Violent Leap] and [Jagged Wall].",
    "affectedAbility": "Violent Leap",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/7/7c/Bunny_Hop.png"
  },
  {
    "hero": "Hazard",
    "name": "Slasher",
    "description": "[Violent Leap]'s Slash shoots a piercing projectile that deals <b class=\"stat-ap\">80</b> damage, ignoring enemies within 10m. [Violent Leap] damage gives 25% more Ultimate Charge.",
    "affectedAbility": "Violent Leap",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/9/9a/Slasher.png"
  },
  {
    "hero": "Hazard",
    "name": "Twin Fang",
    "description": "After using [Violent Leap], your next shot of [Bonespur] fires a free second shot for 75% damage.",
    "affectedAbility": "Violent Leap",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/a/ad/Twin_Fang.png"
  },
  {
    "hero": "Hazard",
    "name": "Woof Woof!",
    "description": "Each hit from [Violent Leap] charges [Spike Guard] with 15% bonus energy. Gain 30% Extra [Spike Guard] Resource.",
    "affectedAbility": "Violent Leap",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/7/7b/Woof_Woof%21.png"
  },
  {
    "hero": "Hazard",
    "name": "Fortress",
    "description": "[Jagged Wall] becomes 35% larger. [Jagged Wall] knockback applies <b class=\"stat-ap\">25</b> additional damage.",
    "affectedAbility": "Jagged Wall",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/9/96/Fortress.png"
  },
  {
    "hero": "Hazard",
    "name": "Juiced",
    "description": "When [Jagged Wall] is spawned, heal all allies within 12m by <b class=\"stat-ap\">100</b> over 2s.",
    "affectedAbility": "Jagged Wall",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/a/a8/Juiced.png"
  },
  {
    "hero": "Hazard",
    "name": "Off The Wall",
    "description": "When [Jagged Wall is spawned], knock back enemies within 8m after 1.5s for <b class=\"stat-ap\">60</b> damage.",
    "affectedAbility": "Jagged Wall",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/c/c6/Off_The_Wall.png"
  },
  {
    "hero": "Hazard",
    "name": "Bringin' The Pain",
    "description": "[Downpour] costs 20% less Ultimate Charge. After using [Downpour], immediately reset all cooldowns and gain 25% Cooldown Reduction for 10s.",
    "affectedAbility": "Downpour",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/a/a8/Bringin%27_the_Pain.png"
  }
];

export default heroPowers;
