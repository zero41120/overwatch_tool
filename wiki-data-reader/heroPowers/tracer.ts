import type { HeroPower } from "../types";

const heroPowers: HeroPower[] = [
  {
    "hero": "Tracer",
    "name": "Flash Fist",
    "description": "For 1s after using [Blink], your next [Quick Melee] is affected by Ability Power, deals 10 extra damage, and knocks enemies back.",
    "affectedAbility": "Quick Melee",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/5/56/Flash_Fist.png"
  },
  {
    "hero": "Tracer",
    "name": "Get Stuffed!",
    "description": "[Quick Melee] hits grant 5% Ultimate Charge.",
    "affectedAbility": "Quick Melee",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/9/90/Get_Stuffed%21.png"
  },
  {
    "hero": "Tracer",
    "name": "Blink Of An Eye",
    "description": "Critical hits reduce the cooldown of [Blink] by 0.04s.",
    "affectedAbility": "Blink",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/e/ec/Blink_of_an_Eye.png"
  },
  {
    "hero": "Tracer",
    "name": "Quantum Clip",
    "description": "If you use [Blink] while reloading, gain 25% Max Ammo and 10% Weapon Lifesteal until you reload.",
    "affectedAbility": "Blink",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/4/42/Quantum_Clip.png"
  },
  {
    "hero": "Tracer",
    "name": "Alternate Ending",
    "description": "When you use [Recall], heal allies within 6m for 100% of the damage they have taken in the last 3s.",
    "affectedAbility": "Recall",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/e/e4/Alternate_Ending.png"
  },
  {
    "hero": "Tracer",
    "name": "Auto Recall",
    "description": "Once per round, if you would die, instead use [Recall] for free. Spending your ultimate charge reduces [Recall]'s cooldown by 50%.",
    "affectedAbility": "Recall",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/c/cd/Auto_Recall.png"
  },
  {
    "hero": "Tracer",
    "name": "Bullet Time",
    "description": "When you use [Recall], drop a temporal field that slows projectiles by 95% for 6s and you take 25% less damage from Hitscan for 3s.",
    "affectedAbility": "Recall",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/b/bd/Bullet_Time.png"
  },
  {
    "hero": "Tracer",
    "name": "T.Racer",
    "description": "[Blink] teleports you 3m farther and grants you 10% Move Speed for 1s.",
    "affectedAbility": "Recall",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/3/38/T.RACER.png"
  },
  {
    "hero": "Tracer",
    "name": "Temportal",
    "description": "[Recall] leaves behind a temporal portal. An ally can interact with it to travel back in time 3s.<ul><li>Lasts up to 8 seconds</li></ul>",
    "affectedAbility": "Recall",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/3/35/Temportal.png"
  },
  {
    "hero": "Tracer",
    "name": "Foresight",
    "description": "After using [Blink], your next <b>4</b> shots within 2s auto-aim to targets within 10m.",
    "affectedAbility": "Pulse Pistols",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/e/e5/Foresight.png"
  },
  {
    "hero": "Tracer",
    "name": "Timelapse",
    "description": "Hitting 2 consecutive shots on the same target without missing deals <b>1</b> extra damage over 2s.",
    "affectedAbility": "Pulse Pistols",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/b/b3/Timelapse.png"
  },
  {
    "hero": "Tracer",
    "name": "Impulsive",
    "description": "When you use [Recall], throw a [Pulse Bomb] that deals 60% less damage.<ul><li>Formerly called Pocket Bomb</li><li>The 60% damage reduction is implemented as a 0.4x damage multiplier that stacks multiplicatively with ability power</li><li>This means you need +150% ability power, and not +60%, to achieve the same damage as a regular Pulse Bomb with +0% ability power</li></ul>",
    "affectedAbility": "Pulse Bomb",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/f/fb/Pocket_Bomb.png"
  }
];

export default heroPowers;
