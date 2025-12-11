import type { HeroPower } from "../types";

const heroPowers: HeroPower[] = [
  {
    "hero": "Juno",
    "name": "MediMaster",
    "description": "[Mediblaster] Critical Multipllier increased from 150% to 200%. Critical hits reduce [Hyper Ring] cooldown by 0.2s.",
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
      "D.Va",
      "Reinhardt"
    ]
  },
  {
    "hero": "Juno",
    "name": "Stinger",
    "description": "[Mediblaster] deals an additional <b class=\"stat-ap\">10</b> damage to enemies over 1s. (Does not stack).<ul><li><i>Does not stack</i> means that instead of applying new instances of DoT every shot, the duration of the first one is refreshed instead.</li></ul>",
    "affectedAbility": "Mediblaster",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/b/b6/Stinger.png",
    "synergyHeroes": [],
    "counterHeroes": [
      "Junker Queen",
      "Zarya",
      "Genji",
      "Tracer",
      "Ashe",
      "Pharah",
      "Juno",
      "Lucio",
      "Moira"
    ]
  },
  {
    "hero": "Juno",
    "name": "Cosmic Coolant",
    "description": "[Pulsar Torpedoes] cooldown is reduced by 0.5s for each target it hits.",
    "affectedAbility": "Pulsar Torpedoes",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/1/14/Cosmic_Coolant.png",
    "synergyHeroes": [
      "Kiriko",
      "Genji",
      "Tracer",
      "Mercy"
    ],
    "counterHeroes": [
      "Kiriko"
    ],
    "antiSynergyHeroes": [
      "Ana",
      "Ashe"
    ]
  },
  {
    "hero": "Juno",
    "name": "Medicinal Missiles",
    "description": "[Pulsar Torpedoes] heal for an extra <b class=\"stat-ap\">30</b> life and causes allies hit to receive 50% more healing for 3s.",
    "affectedAbility": "Pulsar Torpedoes",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/a/a6/Medicinal_Missiles.png",
    "synergyHeroes": [
      "Junker Queen",
      "Reinhardt",
      "Sigma",
      "Reaper",
      "Genji",
      "Tracer",
      "Mercy",
      "Moira"
    ],
    "counterHeroes": [
      "Ashe"
    ]
  },
  {
    "hero": "Juno",
    "name": "Pulsar Plus",
    "description": "[Pulsar Torpedoes] gains 1 additional charge.",
    "affectedAbility": "Pulsar Torpedoes",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/1/11/Pulsar_Plus.png",
    "synergyHeroes": [
      "Freja",
      "Soldier: 76",
      "Tracer",
      "Genji"
    ],
    "counterHeroes": [
      "Juno",
      "Mercy",
      "Freja",
      "Pharah",
      "Tracer",
      "Lucio"
    ],
    "beingCountered": [
      "Brigitte",
      "Sigma",
      "D.Va",
      "Moira",
      "Kiriko"
    ]
  },
  {
    "hero": "Juno",
    "name": "Blink Boosts",
    "description": "[Glide Boost] gains 2 additional charges and has a 40% reduced cooldown, but has 75% reduced duration.",
    "affectedAbility": "Glide Boost",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/e/e3/Blink_Boosts.png",
    "synergyHeroes": [
      "Winston",
      "Hazard",
      "Reinhardt",
      "Junker Queen",
      "Genji",
      "Tracer"
    ],
    "counterHeroes": [
      "Winston",
      "Hazard",
      "Junker Queen",
      "Genji",
      "Tracer"
    ]
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
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/e/e1/Black_Hole_Power.png",
    "synergyHeroes": [
      "Reinhardt",
      "Junker Queen",
      "Hazard"
    ],
    "counterHeroes": [
      "Reinhardt",
      "Junker Queen",
      "Hazard",
      "D.Va"
    ]
  },
  {
    "hero": "Juno",
    "name": "Hyper Healer",
    "description": "Allies affected by [Hyper Ring] gain <b class=\"stat-ap\">85</b> Overhealth.",
    "affectedAbility": "Hyper Ring",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/f/f4/Hyper_Healer.png",
    "synergyHeroes": [
      "Junker Queen",
      "Sigma",
      "Zarya",
      "Genji",
      "Tracer",
      "Reaper",
      "Zenyatta"
    ],
    "counterHeroes": [
      "Ashe",
      "Winston",
      "Junker Queen",
      "Ana"
    ]
  },
  {
    "hero": "Juno",
    "name": "Rally Ring",
    "description": "Reduce [Hyper Ring]'s cooldown by 1.5s when an ally passes through it.",
    "affectedAbility": "Hyper Ring",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/5/56/Rally_Ring.png",
    "synergyHeroes": [
      "Genji",
      "Mei",
      "Reaper",
      "Soldier: 76",
      "Torbjorn",
      "Brigitte",
      "Lucio"
    ],
    "antiSynergyHeroes": [
      "Ana",
      "Ashe",
      "Freja",
      "Pharah",
      "Zenyatta"
    ]
  },
  {
    "hero": "Juno",
    "name": "Orbital Alignment",
    "description": "Enemies inside of [Orbital Ray] lose 35% Move Speed and float upward. Allies inside of it gain 25% Move Speed.",
    "affectedAbility": "Orbital Ray",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/7/7d/Orbital_Alignment.png",
    "synergyHeroes": [
      "Ashe",
      "Cassidy",
      "Genji",
      "Tracer",
      "Sojourn",
      "Soldier: 76",
      "Ana",
      "Moira",
      "Zenyatta"
    ],
    "counterHeroes": [
      "Junker Queen",
      "Sigma",
      "Zarya",
      "D.Va"
    ],
    "antiSynergyHeroes": [
      "Reinhardt",
      "D.Va",
      "Junkrat",
      "Mei",
      "Reaper",
      "Torbjorn",
      "Brigitte"
    ],
    "beingCountered": [
      "Winston",
      "Hazard",
      "D.Va",
      "Orisa"
    ]
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
