import type { HeroPower } from "../types";

const heroPowers: HeroPower[] = [
  {
    "hero": "D.Va",
    "name": "Focused Fusion",
    "description": "[Fusion Cannon]'s spread is reduced by 50% and damage falloff range is 20m farther.",
    "affectedAbility": "Fusion Cannons",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/b/b9/Focused_Fusion.png"
  },
  {
    "hero": "D.Va",
    "name": "Legendary Loadout",
    "description": "[Micro Missiles] are replaced with 6 Heavy Rockets, which deal 325% more explosive damage and have 100% increased radius.<ul><li>Although the description says \"325% more explosive damage\", as of the 2025-09-04 patch, damage increase is actually implemented as a 3.25x multiplier to explosive damage, so it only deals 225% more explosive damage</li><li>The bonus is multiplicative with ability power</li><li>Because it increases the total base damage from the missiles from 8.5 to 20.875, less than a factor of 3, but reduces the missile count by a factor of 3, this power reduces the total damage of the ability on single targets</li></ul>",
    "affectedAbility": "Micro Missiles",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/4/41/Legendary_Loadout.png"
  },
  {
    "hero": "D.Va",
    "name": "Overstocked",
    "description": "Gain 1 extra charge of [Micro Missiles].",
    "affectedAbility": "Micro Missiles",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/e/e6/Overstocked.png"
  },
  {
    "hero": "D.Va",
    "name": "Countermeasures",
    "description": "When you mitigate 150 damage with [Defense Matrix], automatically fire 2 [Micro Missiles].",
    "affectedAbility": "Defense Matrix",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/1/18/Countermeasures.png"
  },
  {
    "hero": "D.Va",
    "name": "Facetanking",
    "description": "[Defense Matrix] heals you for 30% of the damage it blocks.",
    "affectedAbility": "Defense Matrix",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/d/d3/Facetanking.png"
  },
  {
    "hero": "D.Va",
    "name": "Ultrawide Matrix",
    "description": "Increase the size of [Defense Matrix] by 50% and its duration by 25%.",
    "affectedAbility": "Defense Matrix",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/4/40/Ultrawide_Matrix.png"
  },
  {
    "hero": "D.Va",
    "name": "Ignition Burst",
    "description": "[Boosters] leave a trail of lava that deals <b class=\"stat-ap\">80</b> damage every 1s.",
    "affectedAbility": "Boosters",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/c/c0/Ignition_Burst.png"
  },
  {
    "hero": "D.Va",
    "name": "MEKA Punch",
    "description": "While using [Boosters], [Quick Melee] has 50% more Attack Speed. MEKA Punch eliminations reset the cooldown of [Boosters].",
    "affectedAbility": "Boosters",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/f/f5/MEKA_Punch.png"
  },
  {
    "hero": "D.Va",
    "name": "Stat Boost",
    "description": "During the first 2s of [Boosters], [Defense Matrix] recovers 125% faster.",
    "affectedAbility": "Boosters",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/b/bf/Stat_Boost.png"
  },
  {
    "hero": "D.Va",
    "name": "Tokki Slam",
    "description": "During [Boosters], use crouch to slam the ground, dealing damage equal to 25% of your max Armor plus Shield and knocking up enemies hit.",
    "affectedAbility": "Boosters",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/d/d7/Tokki_Slam.png"
  },
  {
    "hero": "D.Va",
    "name": "Express Detonation",
    "description": "[Self-Destruct] explodes 15% faster.",
    "affectedAbility": "Self-Destruct",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/c/c3/Express_Detonation.png"
  },
  {
    "hero": "D.Va",
    "name": "Party Protector",
    "description": "When you use [Self-Destruct], allies within [Self-Destruct] radius gain <b class=\"stat-ap\">250</b> Overhealth for 8s.",
    "affectedAbility": "Self-Destruct",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/b/b4/Party_Protector.png"
  }
];

export default heroPowers;
