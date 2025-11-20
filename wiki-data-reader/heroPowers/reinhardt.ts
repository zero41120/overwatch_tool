import type { HeroPower } from "../types";

const heroPowers: HeroPower[] = [
  {
    "hero": "Reinhardt",
    "name": "Amplification Barrier",
    "description": "Friendly projectiles that pass through your [Barrier Field] deal 15% more damage.",
    "affectedAbility": "Barrier Field",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/a/ab/Amplification_Barrier.png"
  },
  {
    "hero": "Reinhardt",
    "name": "Barrier Reconstruction",
    "description": "When you deal damage with [Rocket Hammer] or [Fire Strike], restore health to [Barrier Field] equal to 15% of [Barrier Field] Max Health.",
    "affectedAbility": "Barrier Field",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/2/2f/Barrier_Reconstruction.png"
  },
  {
    "hero": "Reinhardt",
    "name": "Infusion Generator",
    "description": "Increase [Barrier Field] Health by 250% of your Bonus Max Life.",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/1/10/Infusion_Generator.png"
  },
  {
    "hero": "Reinhardt",
    "name": "To Me, My Friends!",
    "description": "While [Barrier Field] is active, allies within 5m are healed equal to 5% of your Max Life every 1s.",
    "affectedAbility": "Barrier Field",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/2/26/To_Me%2C_My_Friends%21.png"
  },
  {
    "hero": "Reinhardt",
    "name": "Shield Stampede",
    "description": "+50% [Charge] Knockback Power.<br>During [Charge], automatically deploy [Barrier Field].",
    "affectedAbility": "Charge",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/6/65/Shield_Stampede.png"
  },
  {
    "hero": "Reinhardt",
    "name": "Vanguard",
    "description": "[Charge] grants nearby allies Overhealth equal to 10% of your max Life and 20% Move Speed for 3s.",
    "affectedAbility": "Charge",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/f/fd/Vanguard.png"
  },
  {
    "hero": "Reinhardt",
    "name": "Vroom Boom Boom",
    "description": "During [Charge], colliding with a wall triggers an explosion that deals 30% of [Charge]'s pin damage.",
    "affectedAbility": "Charge",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/4/4f/Vroom_Boom_Boom.png"
  },
  {
    "hero": "Reinhardt",
    "name": "Blazing Blitz",
    "description": "After using [Earthshatter], every [Rocket Hammer] swing launches a [Fire Strike] for 4s.",
    "affectedAbility": "Fire Strike",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/1/10/Blazing_Blitz.png"
  },
  {
    "hero": "Reinhardt",
    "name": "Impact Burst",
    "description": "[Fire Strike] triggers an explosion the first time it hits an enemy, dealing 30% [Fire Strike] damage to other enemies in a 3m radius.<ul><li>AoE damage does not affect the primary target.</li></ul>",
    "affectedAbility": "Fire Strike",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/2/2f/Impact_Burst.png"
  },
  {
    "hero": "Reinhardt",
    "name": "Magma Strike",
    "description": "Every second [Fire Strike] leaves a trail of lava that Burns enemies for 50% of [Fire Strike] damage.",
    "affectedAbility": "Fire Strike",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/e/e0/Magma_Strike.png"
  },
  {
    "hero": "Reinhardt",
    "name": "Feeling the Burn",
    "description": "Every 3rd [Rocket Hammer] swing applies Burn, dealing 30% [Rocket Hammer] damage over 2s.<ul><li>This damage does not trigger <b>[Smashing!]</b> or <b>[Dampener Grip]</b>.</li></ul>",
    "affectedAbility": "Rocket Hammer",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/8/80/Feeling_The_Burn.png"
  },
  {
    "hero": "Reinhardt",
    "name": "Smashing!",
    "description": "When you deal damage with [Rocket Hammer], gain 1% Move Speed and 3% Weapon Lifesteal for 2s, stacking up to 10 times.",
    "affectedAbility": "Rocket Hammer",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/b/b2/Smashing%21.png"
  }
];

export default heroPowers;
