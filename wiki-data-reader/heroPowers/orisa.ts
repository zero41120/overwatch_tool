import type { HeroPower } from "../types";

const heroPowers: HeroPower[] = [
  {
    "hero": "Orisa",
    "name": "Scorched Earth",
    "description": "When you Overheat, apply Burning to enemies within 6m, dealing damage equal to 25% of your max Life over 5s.",
    "affectedAbility": "Augmented Fusion Driver",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/e/e8/Scorched_Earth_Orisa.png"
  },
  {
    "hero": "Orisa",
    "name": "Shield Divergence",
    "description": "When you Overheat, deploy a Barrier with <b class=\"stat-ap\">600</b> Health in front.|ability_details<ul><li>Barrier gains extra health from passive health gain.</li></ul>",
    "affectedAbility": "Augmented Fusion Driver",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/d/dc/Shield_Divergence.png"
  },
  {
    "hero": "Orisa",
    "name": "Advanced Throwbotics",
    "description": "When you use Javelin Spin, launch an Energy Javelin with 75% damage<ul><li>The javelin is shot after 0.5s and Javelin Spin must be ongoing to shoot. Canceling Javelin Spin will also cancel shooting the javelin.</li></ul>",
    "affectedAbility": "Javelin Spin",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/b/b6/Advanced_Throwbotics.png"
  },
  {
    "hero": "Orisa",
    "name": "Hot Rotate-O",
    "description": "Javelin Spin gains 35% Cooldown Reduction but now generates Heat.",
    "affectedAbility": "Javelin Spin",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/a/a3/Hot_Rotate-O.png"
  },
  {
    "hero": "Orisa",
    "name": "Spynstem Update",
    "description": "Javelin Spin now deflects projectiles and grants 20% of damage dealt as Ultimate Charge.",
    "affectedAbility": "Javelin Spin",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/7/7f/Spynstem_Update.png"
  },
  {
    "hero": "Orisa",
    "name": "Factory Reset",
    "description": "While Fortify is active, Javelin Spin and Energy Javelin gain 25% Cooldown Reduction.",
    "affectedAbility": "Fortify",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/e/e2/Factory_Reset.png"
  },
  {
    "hero": "Orisa",
    "name": "Hooves of Steel",
    "description": "After Fortify ends, gain Shields equal to 50% of the damage received during Fortify. Resets when you next use Fortify.",
    "affectedAbility": "Fortify",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/c/ca/Hooves_of_Steel.png"
  },
  {
    "hero": "Orisa",
    "name": "Restortify",
    "description": "While Fortify is active, heal for 5% of your maximum health every 1s.",
    "affectedAbility": "Fortify",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/3/30/Restortify.png"
  },
  {
    "hero": "Orisa",
    "name": "Ride with Me",
    "description": "While Fortify is active grant allies 30% Move Speed and Overhealth equal to 10% of your max Life.",
    "affectedAbility": "Fortify",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/8/8c/Ride_With_Me.png"
  },
  {
    "hero": "Orisa",
    "name": "Lassoed",
    "description": "On impact, Energy Javelin will pull enemies within 4m towards itself.<ul><li>If a javelin hits an enemy, nearby enemies are pulled to the enemy's position instead of where it was hit.</li><li>If a javelin hits the environment, it just pulls nearby enemies.</li><li>If a javelin hits a barrier, the pull will not activate.</li></ul>",
    "affectedAbility": "Energy Javelin",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/e/e6/Lassoed.png"
  },
  {
    "hero": "Orisa",
    "name": "Centripetal Charge",
    "description": "25% Ultimate Cost reduction. After using Terra Surge, reset your ability cooldowns.",
    "affectedAbility": "Terra Surge",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/8/81/Centripetal_Charge.png"
  },
  {
    "hero": "Orisa",
    "name": "Supercharger",
    "description": "When you use Terra Surge, drop a Supercharger that increases the damage of nearby allies by 25% for 15s.",
    "affectedAbility": "Terra Surge",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/3/31/Supercharger.png"
  }
];

export default heroPowers;
