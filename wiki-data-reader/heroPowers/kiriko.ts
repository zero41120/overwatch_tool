import type { HeroPower } from "../types";

const heroPowers: HeroPower[] = [
  {
    "hero": "Kiriko",
    "name": "Foxy Fireworks",
    "description": "After reloading, your next 3 thrown [Kunai] explode on contact, dealing <b>20</b> damage to nearby enemies.<ul><li>Explosive Kunais have the same projectile speed as regular kunais.</li><li>The description is not accurate: The first 3 kunais of the magazine are replaced by explosive kunais. That means that refilling items and powers can replenish explosive kunais without having to reload whenever the current ammo count increases above this threshold.</li><li>As such, the player can theoretically have infinite explosive kunais if it deals a critical hit with an explosive kunai combined with <b>[Keen Kunai]</b> or other ammo restoration effects.</li><li>When paired with <b>[Triple Threat]</b> Power, the additional kunais on the sides will become explosive but will be affected by gravity.</li><li>The explosive kunais will not bounce off surfaces, when equipped with <b>[Asa's Armaments]</b> Item.</li></ul>",
    "affectedAbility": "Kunai",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/9/93/Foxy_Fireworks.png"
  },
  {
    "hero": "Kiriko",
    "name": "Keen Kunai",
    "description": "[Kunai] critical hits decrease active ability cooldowns by 15% and refund 3 ammo.",
    "affectedAbility": "Kunai",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/d/dd/Keen_Kunai.png"
  },
  {
    "hero": "Kiriko",
    "name": "Triple Threat",
    "description": "After using [Swift Step], for 4s, your secondary fire throws 2 additional [Kunai] in a spread that deal 50% less damage.<ul><li>Additional Kunai will consume ammo, however both additional Kunais will still be fire even if Kiriko has less than 3 ammo remaining.</li></ul>",
    "affectedAbility": "Kunai",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/5/59/Triple_Threat.png"
  },
  {
    "hero": "Kiriko",
    "name": "Leaf on the Wind",
    "description": "[Healing Ofuda] bounces to another ally up to 2 times, healing for 30% of the normal amount.",
    "affectedAbility": "Healing Ofuda",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/1/15/Leaf_On_The_Wind.png"
  },
  {
    "hero": "Kiriko",
    "name": "Self-Care",
    "description": "When you use [Healing Ofuda], each ofuda thrown heals you for 3% of your max Life.",
    "affectedAbility": "Healing Ofuda",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/e/e8/Self-Care.png"
  },
  {
    "hero": "Kiriko",
    "name": "Supported Shooting",
    "description": "When [Healing Ofuda] heals allies, grant them 20% increased Attack Speed for 3s.",
    "affectedAbility": "Healing Ofuda",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/4/49/Supported_Shooting.png"
  },
  {
    "hero": "Kiriko",
    "name": "Clone Conjuration",
    "description": "After using [Swift Step], create a clone of yourself that lasts for 4s. Clone has 65% less damage and healing<ul><li>The clone can use primary and secondary fire and quick melee, dealing 35% of Kiriko's damage and healing, but cannot use any of her abilities.</li><li>There is a short delay after spawning before the clone can attack or heal.</li><li>If possible, the clone will prioritize healing nearby allies instead of trying to deal damage.</li><li>Clone's healing and damage contribute to earning Stadium Cash but do not generate ultimate charge.</li><li>The clone doesn't benefit from any other Power the player already possesses.</li><li>The clone benefits from the passive Weapon Damage and Attack Speed stat bonuses from Items, but does not appear to benefit from their conditional effects.</li><li>The clone has ~40 health, increased by Ability Power.</li><li>The enemy team will see the name of the player who summoned the clone below its health bar, but to the ally team and in the kill feed it is labeled as \"Kiriko\".</li></ul>",
    "affectedAbility": "Swift Step",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/9/90/Clone_Conjuration.png"
  },
  {
    "hero": "Kiriko",
    "name": "Fleet Foot",
    "description": "[Swift Step] can be used directionally without a target. Cooldown is increased by 35% when used without a target.<ul><li>Has a minimum distance (~4-5m) required to activate the ability.</li><li>The teleport may occasionally fail, starting the cooldown without teleporting and triggering any associated effects.</li></ul>",
    "affectedAbility": "Swift Step",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/b/bc/Fleet_Foot.png"
  },
  {
    "hero": "Kiriko",
    "name": "Cleansing Charge",
    "description": "When you cleanse negative effects with [Protection Suzu], gain 5% Ultimate Charge for each hero cleansed.",
    "affectedAbility": "Protection Suzu",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/6/6f/Cleansing_Charge.png"
  },
  {
    "hero": "Kiriko",
    "name": "Two-Zu",
    "description": "[Protection Suzu] gains an additional charge.",
    "affectedAbility": "Protection Suzu",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/2/26/Two-Zu.png"
  },
  {
    "hero": "Kiriko",
    "name": "Crossing Guard",
    "description": "[Kitsune Rush] now also reduces enemies Move Speed by 50% for 2s.",
    "affectedAbility": "Kitsune Rush",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/a/a7/Crossing_Guard.png"
  },
  {
    "hero": "Kiriko",
    "name": "Spirit Veil",
    "description": "Using [Kitsune Rush] cleanses Kiriko of negative effects and makes her Invulnerable for 4s.",
    "affectedAbility": "Kitsune Rush",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/5/5f/Spirit_Veil.png"
  }
];

export default heroPowers;
