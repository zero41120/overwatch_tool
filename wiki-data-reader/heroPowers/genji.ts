import type { HeroPower } from "../types";

const heroPowers: HeroPower[] = [
  {
    "hero": "Genji",
    "name": "Cybernetic Speed",
    "description": "Dealing damage with [Shuriken] grants 2% Attack Speed for 3s, stacking up to 15 times.",
    "affectedAbility": "Shuriken",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/5/52/Cybernetic_Speed.png"
  },
  {
    "hero": "Genji",
    "name": "Hashimoto's Bane",
    "description": "After using an ability, your next secondary fire throws 2 extra [Shuriken] that seek enemies but deal 50% less damage.",
    "affectedAbility": "Shuriken",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/8/8c/Hashimoto%27s_Bane.png"
  },
  {
    "hero": "Genji",
    "name": "Sacred Shuriken",
    "description": "[Shuriken]'s primary fire throws 2 additional [Shuriken] that don't consume any ammo.",
    "affectedAbility": "Shuriken",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/2/23/Sacred_Shuriken.png"
  },
  {
    "hero": "Genji",
    "name": "Hanamura Healing",
    "description": "Critical hits and [Swift Strike] grant Overhealth equal to 25% of their damage dealt for 5s.",
    "affectedAbility": "Swift Strike",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/c/c3/Hanamura_Healing.png"
  },
  {
    "hero": "Genji",
    "name": "Hidden Blade",
    "description": "Gain 60% Melee Lifesteal and increase [Quick Melee] damage by 15.",
    "affectedAbility": "Swift Strike",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/f/f4/Hidden_Blade.png"
  },
  {
    "hero": "Genji",
    "name": "Laceration",
    "description": "[Swift Strike] deals 35% additional damage over 3s to enemies hit.",
    "affectedAbility": "Swift Strike",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/3/36/Laceration.png"
  },
  {
    "hero": "Genji",
    "name": "Wyrm's Maw",
    "description": "Targets hit by [Shuriken] take 10% more damage from [Swift Strike] for 4s, stacking up to 5 times.",
    "affectedAbility": "Swift Strike",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/e/e6/Wyrm%27s_Maw.png"
  },
  {
    "hero": "Genji",
    "name": "Deflect-o-bot",
    "description": "+50% Deflected Projectile Speed.<br>During the first 1.5s of [Deflect], automatically deflect projectiles towards enemies.",
    "affectedAbility": "Deflect",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/6/6a/Deflect-o-Bot.png"
  },
  {
    "hero": "Genji",
    "name": "Forged Under Fire",
    "description": "While [Deflect] is active, heal 60% of the damage it prevents.",
    "affectedAbility": "Deflect",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/f/f4/Forged_Under_Fire.png"
  },
  {
    "hero": "Genji",
    "name": "Iaido Strike",
    "description": "After [Deflect] ends, quickly swing your [Dragonblade] once.",
    "affectedAbility": "Deflect",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/9/93/Iaido_Strike.png"
  },
  {
    "hero": "Genji",
    "name": "Spirit of Sojiro",
    "description": "When [Deflect] stops incoming damage, reduce the cooldown of [Swift Strike] by 1s, up to 5s.",
    "affectedAbility": "Deflect",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/1/14/Spirit_of_Sojiro.png"
  },
  {
    "hero": "Genji",
    "name": "Dragon's Breath",
    "description": "[Dragonblade] swings launch a large piercing projectile that deals 50% of [Dragonblade]'s damage.",
    "affectedAbility": "Dragonblade",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/c/c6/Dragon%27s_Breath.png"
  }
];

export default heroPowers;
