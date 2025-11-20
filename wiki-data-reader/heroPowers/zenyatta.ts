import type { HeroPower } from "../types";

const heroPowers: HeroPower[] = [
  {
    "hero": "Zenyatta",
    "name": "Flying Kick",
    "description": "While airborne, [Quick Melee] becomes a dash kick that stuns if it knocks an enemy back into a wall. (5s Cooldown)",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/8/82/Flying_Kick.png"
  },
  {
    "hero": "Zenyatta",
    "name": "It's Orbin' Time",
    "description": "[Orb of Destruction]'s secondary fire can charge up to 3 additional orbs.",
    "affectedAbility": "Orb of Destruction",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/e/ed/It%27s_Orbin%27_Time.png"
  },
  {
    "hero": "Zenyatta",
    "name": "Seeking Salvation",
    "description": "[Orb of Destruction]'s secondary fire projectiles home when aimed at a target below 35% Life.",
    "affectedAbility": "Orb of Destruction",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/d/d2/Seeking_Salvation.png"
  },
  {
    "hero": "Zenyatta",
    "name": "Dual Harmony",
    "description": "Gain a 2nd [Harmony Orb], but they both heal 35% less.",
    "affectedAbility": "Orb of Harmony",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/1/13/Dual_Harmony_Power.png"
  },
  {
    "hero": "Zenyatta",
    "name": "Enlightenment",
    "description": "Allies affected by [Harmony Orb] are healed for 35% of the damage you deal.",
    "affectedAbility": "Orb of Harmony",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/f/fa/Enlightenment.png"
  },
  {
    "hero": "Zenyatta",
    "name": "Gotta Have Faith",
    "description": "[Harmony Orb] targets can be out of your line of sight for 10s longer before [Harmony Orb] returns to you.",
    "affectedAbility": "Orb of Harmony",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/9/98/Gotta_Have_Faith.png"
  },
  {
    "hero": "Zenyatta",
    "name": "Inner Peace",
    "description": "Gain a [Harmony Orb] that is always attached to you. It heals for 75% less.",
    "affectedAbility": "Orb of Harmony",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/d/d6/Inner_Peace.png"
  },
  {
    "hero": "Zenyatta",
    "name": "Discord Fever",
    "description": "When [Discord Orb] is applied to a target they take <b class=\"stat-ap\">50</b> damage over 5s.",
    "affectedAbility": "Orb of Discord",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/4/45/Discord_Fever.png"
  },
  {
    "hero": "Zenyatta",
    "name": "Discord Inferno",
    "description": "When you critically hit a target affected by your [Discord Orb], the [Orb of Destruction] explodes, dealing <b class=\"stat-ap\">50</b> damage.",
    "affectedAbility": "Orb of Discord",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/e/e1/Discord_Inferno.png"
  },
  {
    "hero": "Zenyatta",
    "name": "Instant Karma",
    "description": "When a target of your [Discord Orb] damages you, restore 50% of that damage over 2s.",
    "affectedAbility": "Orb of Discord",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/3/33/Instant_Karma.png"
  },
  {
    "hero": "Zenyatta",
    "name": "Circle of Strife",
    "description": "While using [Transcendence], apply [Discord Orb] to all enemies within range.",
    "affectedAbility": "Transcendence",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/e/e1/Circle_of_Strife.png"
  },
  {
    "hero": "Zenyatta",
    "name": "Soul Control",
    "description": "[Transcendence] can be cancelled early, saving up to 65% of your Ultimate Charge.",
    "affectedAbility": "Transcendence",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/f/f7/Soul_Control.png"
  }
];

export default heroPowers;
