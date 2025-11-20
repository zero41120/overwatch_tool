import type { HeroPower } from "../types";

const heroPowers: HeroPower[] = [
  {
    "hero": "Brigitte",
    "name": "Burst Aid",
    "description": "Ability: Use [Reload] to consume all [Repair Pack] charges. For each charge, heal 25% of Max Life and gain 10% Attack Speed for 3s. (10s Cooldown).",
    "affectedAbility": "Rocket Flail",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/4/4c/Burst_Aid.png"
  },
  {
    "hero": "Brigitte",
    "name": "Righteous Cleave",
    "description": "After using [Shield Bash] or [Whipshot], your next damaging [Rocket Flail] swing heals allies within 10m for 100% of damage dealt.",
    "affectedAbility": "Rocket Flail",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/a/ab/Righteous_Cleave.png"
  },
  {
    "hero": "Brigitte",
    "name": "Whirlwhip",
    "description": "After using [Shield Bash] or [Whipshot], your next [Rocket Flail] swing hits all enemies around you within 5m.",
    "affectedAbility": "Rocket Flail",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/2/25/Whirlwhip.png"
  },
  {
    "hero": "Brigitte",
    "name": "Optimizer",
    "description": "For each [Repair Pack] active, increase [Repair Pack] Healing by 10% and heal yourself for 5% of your Max Life every 1s.",
    "affectedAbility": "Repair Pack",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/f/f1/Optimizer.png"
  },
  {
    "hero": "Brigitte",
    "name": "Packstacker",
    "description": "[Repair Pack] duration is increased by 50%. Ability damage extends the duration of all active [Repair Pack] by 1s.",
    "affectedAbility": "Repair Pack",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/f/f8/Packstacker.png"
  },
  {
    "hero": "Brigitte",
    "name": "God Ray",
    "description": "Ability damage to targets over 10m away Burns them for 4% bonus damage for every 1m the ability travelled.",
    "affectedAbility": "Whip Shot",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/1/17/God_Ray.png"
  },
  {
    "hero": "Brigitte",
    "name": "Maces to Faces",
    "description": "[Whip Shot]'s size is increased by 1m and can hit multiple enemies. [Inspire] lasts 1s longer when triggered by [Whip Shot].",
    "affectedAbility": "Whip Shot",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/6/6d/Maces_to_Faces.png"
  },
  {
    "hero": "Brigitte",
    "name": "Mender Bender",
    "description": "After using [Shield Bash], heal 33% [Barrier Shield] Health and trigger [Inspire].",
    "affectedAbility": "Shield Bash",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/9/99/Mender_Bender.png"
  },
  {
    "hero": "Brigitte",
    "name": "Sköldkastning",
    "description": "After using [Shield Bash], your next [Rocket Flail] swing projects a Shield Boomerang that deals 40% [Shield Bash] damage.",
    "affectedAbility": "Shield Bash",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/8/86/Sk%C3%B6ldkastning.png"
  },
  {
    "hero": "Brigitte",
    "name": "Lindholm Wall",
    "description": "Increase [Barrier Shield] size by 60% and [Barrier Shield] Health by 100%. [Shield Bash] can hit multiple enemies.",
    "affectedAbility": "Barrier Shield",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/8/81/Lindholm_Wall.png"
  },
  {
    "hero": "Brigitte",
    "name": "Aura Farming",
    "description": "When [Inspire] is triggered by an ability, all heroes affected by it gain Overhealth equal to 5% of your Max Life for 5s.",
    "affectedAbility": "Inspire",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/e/e7/Aura_Farming.png"
  },
  {
    "hero": "Brigitte",
    "name": "Consecrated Ground",
    "description": "+25% Starting Ultimate Charge.<br>While [Rally] is active, trigger [Inspire] every 1.5s and ability cooldowns refresh 25% faster.",
    "affectedAbility": "Rally",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/a/aa/Consecrated_Ground.png"
  }
];

export default heroPowers;
