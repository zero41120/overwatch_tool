import type { HeroPower } from "../types";

const heroPowers: HeroPower[] = [
  {
    "hero": "Juno",
    "name": "MediMaster",
    "description": "[Mediblaster] can now critically hit both allies and enemies.",
    "affectedAbility": "Mediblaster",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/b/b3/Medimaster.png",
    "synergyHeroes": [
      "Zarya",
      "Junker Queen"
    ],
    "counterHeroes": [
      "Zarya",
      "Mei",
      "Reaper",
      "Moira"
    ],
    "antiSynergyHeroes": [
      "D.Va"
    ]
  },
  {
    "hero": "Juno",
    "name": "Stinger",
    "description": "[Mediblaster] deals an additional <b class=\"stat-ap\">10</b> damage to enemies over 1s. (Does not stack).<ul><li><i>Does not stack</i> means that instead of applying new instances of DoT every shot, the duration of the first one is refreshed instead.</li></ul>",
    "affectedAbility": "Mediblaster",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/b/b6/Stinger.png"
  },
  {
    "hero": "Juno",
    "name": "Cosmic Coolant",
    "description": "[Pulsar Torpedoes] cooldown is reduced by 0.5s for each target it hits.",
    "affectedAbility": "Pulsar Torpedoes",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/1/14/Cosmic_Coolant.png"
  },
  {
    "hero": "Juno",
    "name": "Medicinal Missiles",
    "description": "[Pulsar Torpedoes] causes allies hit to receive 50% more healing for 3s.",
    "affectedAbility": "Pulsar Torpedoes",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/a/a6/Medicinal_Missiles.png"
  },
  {
    "hero": "Juno",
    "name": "Pulsar Plus",
    "description": "[Pulsar Torpedoes] gains 1 additional charge.",
    "affectedAbility": "Pulsar Torpedoes",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/1/11/Pulsar_Plus.png"
  },
  {
    "hero": "Juno",
    "name": "Blink Boosts",
    "description": "[Glide Boost] gains 2 additional charges and has a 40% reduced cooldown, but has 75% reduced duration.",
    "affectedAbility": "Glide Boost",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/e/e3/Blink_Boosts.png"
  },
  {
    "hero": "Juno",
    "name": "Torpedo Glide",
    "description": "During [Glide Boost], every 50 damage you deal reduces the cooldown of [Pulsar Torpedoes] by 1s.",
    "affectedAbility": "Glide Boost",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/a/af/Torpedo_Glide.png"
  },
  {
    "hero": "Juno",
    "name": "Black Hole",
    "description": "[Hyper Ring] slows the Move Speed of enemies who pass through it by 35% for 2s.",
    "affectedAbility": "Hyper Ring",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/e/e1/Black_Hole_Power.png"
  },
  {
    "hero": "Juno",
    "name": "Hyper Healer",
    "description": "Allies affected by [Hyper Ring] gain <b class=\"stat-ap\">85</b> Overhealth.",
    "affectedAbility": "Hyper Ring",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/f/f4/Hyper_Healer.png"
  },
  {
    "hero": "Juno",
    "name": "Rally Ring",
    "description": "Reduce [Hyper Ring]'s cooldown by 1.5s when an ally passes through it.",
    "affectedAbility": "Hyper Ring",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/5/56/Rally_Ring.png"
  },
  {
    "hero": "Juno",
    "name": "Orbital Alignment",
    "description": "Enemies inside of [Orbital Ray] lose 35% Move Speed and float upward. Allies inside of it gain 25% Move Speed.",
    "affectedAbility": "Orbital Ray",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/7/7d/Orbital_Alignment.png"
  },
  {
    "hero": "Juno",
    "name": "Stellar Focus",
    "description": "[Orbital Ray] now follows you and its duration is increased by 50%.",
    "affectedAbility": "Orbital Ray",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/c/ca/Stellar_Focus.png"
  }
];

export default heroPowers;
