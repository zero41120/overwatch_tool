import type { HeroPower } from "./types";

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
  },
  {
    "hero": "Hazard",
    "name": "Barbed Shot",
    "description": "[Bonespur] shots also fire 2 [Spike Guard] spikes at hit targets for <b class=\"stat-ap\">10</b> damage.",
    "affectedAbility": "Bonespur",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/6/6e/Barbed_Shot.png"
  },
  {
    "hero": "Hazard",
    "name": "Bonerot",
    "description": "Ammo gained from [Spike Guard] deals <b>10</b> extra damage. [Spike Guard] ammo regeneration speed is increased by 25%.",
    "affectedAbility": "Bonespur",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/b/b4/Bonerot.png"
  },
  {
    "hero": "Hazard",
    "name": "Hit Me Again",
    "description": "Each fired [Spike Guard] spike hit reduces [Violent Leap]'s cooldown by 0.1s. [Spike Guard] Movement Speed penalty is reduced by 90%.",
    "affectedAbility": "Spike Guard",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/5/5b/Hit_Me_Again.png"
  },
  {
    "hero": "Hazard",
    "name": "Needle Storm",
    "description": "[Spike Guard] now fires at all enemies in front of Hazard",
    "affectedAbility": "Spike Guard",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/d/d5/Needle_Storm.png"
  },
  {
    "hero": "Hazard",
    "name": "Bunny Hop",
    "description": "Using [Violent Leap] without using Slash refunds 2s of cooldown for [Violent Leap] and [Jagged Wall].",
    "affectedAbility": "Violent Leap",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/7/7c/Bunny_Hop.png"
  },
  {
    "hero": "Hazard",
    "name": "Slasher",
    "description": "[Violent Leap]'s Slash shoots a piercing projectile that deals <b class=\"stat-ap\">80</b> damage, ignoring enemies within 10m. [Violent Leap] damage gives 25% more Ultimate Charge.",
    "affectedAbility": "Violent Leap",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/9/9a/Slasher.png"
  },
  {
    "hero": "Hazard",
    "name": "Twin Fang",
    "description": "After using [Violent Leap], your next shot of [Bonespur] fires a free second shot for 65% damage.",
    "affectedAbility": "Violent Leap",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/a/ad/Twin_Fang.png"
  },
  {
    "hero": "Hazard",
    "name": "Woof Woof!",
    "description": "Each hit from [Violent Leap] charges [Spike Guard] with 15% bonus energy. Gain 30% Extra [Spike Guard] Resource.",
    "affectedAbility": "Violent Leap",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/7/7b/Woof_Woof%21.png"
  },
  {
    "hero": "Hazard",
    "name": "Fortress",
    "description": "[Jagged Wall] becomes 35% larger. [Jagged Wall] knockback applies <b class=\"stat-ap\">40</b> additional damage.",
    "affectedAbility": "Jagged Wall",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/9/96/Fortress.png"
  },
  {
    "hero": "Hazard",
    "name": "Juiced",
    "description": "When [Jagged Wall] is spawned, heal all allies within 12m by <b class=\"stat-ap\">100</b> over 2s.",
    "affectedAbility": "Jagged Wall",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/a/a8/Juiced.png"
  },
  {
    "hero": "Hazard",
    "name": "Off The Wall",
    "description": "When [Jagged Wall is spawned], knock back enemies within 8m after 1.5s for <b class=\"stat-ap\">80</b> damage.",
    "affectedAbility": "Jagged Wall",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/c/c6/Off_The_Wall.png"
  },
  {
    "hero": "Hazard",
    "name": "Bringin' The Pain",
    "description": "[Downpour] costs 20% less Ultimate Charge. After using [Downpour], immediately reset all cooldowns and gain 25% Cooldown Reduction for 10s.",
    "affectedAbility": "Downpour",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/a/a8/Bringin%27_the_Pain.png"
  },
  {
    "hero": "Junker Queen",
    "name": "Thrill of Battle",
    "description": "[Adrenaline Rush] also heals allies within 12m for 100% of the amount it heals you.",
    "affectedAbility": "Adrenaline Rush",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/3/3f/Thrill_of_Battle.png"
  },
  {
    "hero": "Junker Queen",
    "name": "Royal Bullets",
    "description": "[Scattergun] critical hit applies [Wound] for <b>40</b> damage over 2s.",
    "affectedAbility": "Scattergun",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/3/33/Royal_Bullets.png"
  },
  {
    "hero": "Junker Queen",
    "name": "Twist the Knife",
    "description": "[Scattergun] critical hits extend the duration of all [Wounds] on the target by 2.0s.",
    "affectedAbility": "Scattergun",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/c/c8/Twist_The_Knife.png"
  },
  {
    "hero": "Junker Queen",
    "name": "Blade Parade",
    "description": "Holding [Jagged Blade] charges it, increasing its damage by up to 100% and causing it to knockback.",
    "affectedAbility": "Jagged Blade",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/8/81/Blade_Parade.png"
  },
  {
    "hero": "Junker Queen",
    "name": "Cut 'Em, Gracie!",
    "description": "Each enemy hit by [Jagged Blade] while it returns to you reduces its cooldown by 2s and is slowed by 35% for 1s.",
    "affectedAbility": "Jagged Blade",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/c/c7/Cut_%27Em%2C_Gracie%21.png"
  },
  {
    "hero": "Junker Queen",
    "name": "Let's Go Win",
    "description": "Eliminations reduce the cooldown of [Commanding Shout] by 50%.",
    "affectedAbility": "Commanding Shout",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/b/b4/Let%27s_Go_Win.png"
  },
  {
    "hero": "Junker Queen",
    "name": "Merciless Magnetism",
    "description": "Using [Commanding Shout] causes your Jagged Blade to home to a target.",
    "affectedAbility": "Commanding Shout",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/4/4f/Merciless_Magnetism.png"
  },
  {
    "hero": "Junker Queen",
    "name": "Reckoner's Roar",
    "description": "Using [Commanding Shout] [Wounds] enemies within 10m for <b class=\"stat-ap\">30</b> damage over 3s.",
    "affectedAbility": "Commanding Shout",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/2/26/Reckoner%27s_Roar.png"
  },
  {
    "hero": "Junker Queen",
    "name": "Chop Chop",
    "description": "[Carnage] gains an additional charge but its cooldown reduction per hit is reduced to 1s.",
    "affectedAbility": "Carnage",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/3/30/Chop_Chop.png"
  },
  {
    "hero": "Junker Queen",
    "name": "Soaring Stone",
    "description": "[Carnage] becomes a leaping strike if you jump during its cast time.",
    "affectedAbility": "Carnage",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/8/8f/Soaring_Stone.png"
  },
  {
    "hero": "Junker Queen",
    "name": "Bloodcrazed",
    "description": "[Rampage] and [Carnage] gives 15% of Max Life as Overhealth per hit.",
    "affectedAbility": "Rampage",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/4/47/Bloodcrazed.png"
  },
  {
    "hero": "Junker Queen",
    "name": "Bow Down",
    "description": "[Rampage] now also knocks down enemies hit for 1.5s.",
    "affectedAbility": "Rampage",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/2/28/Bow_Down.png"
  },
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
  },
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
  },
  {
    "hero": "Sigma",
    "name": "Zero Gravity",
    "description": "When you use an ability, gain the ability to fly for 4 seconds. While flying gain 10% damage reduction and increased Movement Speed.",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/d/da/Zero_Gravity.png"
  },
  {
    "hero": "Sigma",
    "name": "Hyperloop",
    "description": "[Hyperspheres] direct hits reduce the cooldown of [Accretion] by 0.8 seconds.",
    "affectedAbility": "Hyperspheres",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/3/34/Hyperloop_power.png"
  },
  {
    "hero": "Sigma",
    "name": "Trinisphere",
    "description": "Your primary fire launches a third [Hypersphere] that deals 50% reduced damage.",
    "affectedAbility": "Hyperspheres",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/c/c6/Trinisphere.png"
  },
  {
    "hero": "Sigma",
    "name": "Event Horizon",
    "description": "Damage absorbed by [Kinetic Grasp] also restores [Experimental Barrier]'s health. Excess is converted to Overhealth.",
    "affectedAbility": "Kinetic Grasp",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/8/81/Event_Horizon.png"
  },
  {
    "hero": "Sigma",
    "name": "Symphonic Syzygy",
    "description": "When [Kintic Grasp] ends, for every 100 damage absorbed gain 10% Attack Speed for 4s, stacking up to 4 times.",
    "affectedAbility": "Kinetic Grasp",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/8/84/Symphonic_Syzygy.png"
  },
  {
    "hero": "Sigma",
    "name": "Orbital Barrier",
    "description": "Get a mini [Experimental Barrier] that orbits around you. It has 50% reduced health.",
    "affectedAbility": "Experimental Barrier",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/d/db/Orbital_Barrier.png"
  },
  {
    "hero": "Sigma",
    "name": "Philharmonic Fortitude",
    "description": "Experimental Barrier has 25% increased Max Health. Barrier health regenerates constantly but 50% slower while deployed.",
    "affectedAbility": "Experimental Barrier",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/c/ce/Philharmonic_Fortitude.png"
  },
  {
    "hero": "Sigma",
    "name": "Mass Driver",
    "description": "[Accretion] projectiles that pass through [Experimental Barrier] gain 300% Projectile Speed and deal 20% increased damage.",
    "affectedAbility": "Accretion",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/d/db/Mass_Driver.png"
  },
  {
    "hero": "Sigma",
    "name": "Singularity",
    "description": "[Accertion] splash damage is increased by 75% and enemies are pulled towards its explosion.",
    "affectedAbility": "Accretion",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/d/d0/Singularity.png"
  },
  {
    "hero": "Sigma",
    "name": "Maestro",
    "description": "50% Ultimate Cost Reduction.<br>[Gravitic Flux] Radius is reduced by 35% and refunds 50% of Ultimate Charge if no enemies are affected.",
    "affectedAbility": "Gravitic Flux",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/f/f1/Maestro_power.png"
  },
  {
    "hero": "Sigma",
    "name": "Apogee Alignment",
    "description": "When you use an ability, create 2 [Hyperspheres] that orbit around you. They explode on contact but deal 50% reduced damage.",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/7/7d/Apogee_Alignment.png"
  },
  {
    "hero": "Sigma",
    "name": "Astrophysical",
    "description": "[Quick Melee] causes enemies hit to levitate into the air for 1s.<br>(10s Cooldown)",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/f/f3/Astrophysical.png"
  },
  {
    "hero": "Winston",
    "name": "Circuit Breaker",
    "description": "Electric damage is increased by 5%. Gain 15% of Electric damage as Overhealth, up to 100.",
    "affectedAbility": "Tesla Cannon",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/d/d0/Circuit_Breaker.png"
  },
  {
    "hero": "Winston",
    "name": "Electro Cluster",
    "description": "+25% [Tesla Cannon] Primary Fire Max Range.<br>[Tesla Cannon]'s Primary Fire deals 3% increased damage per enemy being hit.",
    "affectedAbility": "Tesla Cannon",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/3/33/Electro_Cluster.png"
  },
  {
    "hero": "Winston",
    "name": "Lightning Rod",
    "description": "Hits with [Tesla Cannon]'s fully charged secondary fire bounce to all other enemies within 6m for 50% reduced damage.",
    "affectedAbility": "Tesla Cannon Alt Fire",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/6/62/Lightning_Rod.png"
  },
  {
    "hero": "Winston",
    "name": "Volatile Volt",
    "description": "[Tesla Cannon]'s secondary fire can critically hit for 175% damage.",
    "affectedAbility": "Tesla Cannon Alt Fire",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/6/66/Volatile_Volt.png"
  },
  {
    "hero": "Winston",
    "name": "Lunar Leap",
    "description": "Gain 2% bonus Ultimate Charge per enemy damaged by [Jump Pack]'s landing. While using [Jump Pack], gain 5% of Max Life as Overhealth every 1s, up to <b class=\"stat-ap\">100</b>.",
    "affectedAbility": "Jump Pack",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/5/51/Lunar_Leap.png"
  },
  {
    "hero": "Winston",
    "name": "Moon Landing",
    "description": "Heal for 7% of Max Life per enemy damaged by [Jump Pack]'s landing.",
    "affectedAbility": "Jump Pack",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/a/a0/Moon_Landing.png"
  },
  {
    "hero": "Winston",
    "name": "Primal Punch",
    "description": "[Melee] or [Jump Pack] eliminations reset [Jump Pack] cooldown.<br>For every 25 Armor you have, gain 5% [Melee] Damage.",
    "affectedAbility": "Jump Pack",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/1/1f/Primal_Punch.png"
  },
  {
    "hero": "Winston",
    "name": "Pocket Projector",
    "description": "Activating a [Barrier Projector] attaches an additional, smaller [Barrier Projector] to Winston with 5% health.",
    "affectedAbility": "Barrier Projector",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/3/3e/Pocket_Projector.png"
  },
  {
    "hero": "Winston",
    "name": "Surge Protector",
    "description": "Allies within [Barrier Projector] gain <b class=\"stat-ap\">25</b> temporary Overhealth every 1s, up to <b class=\"stat-ap\">100</b>.",
    "affectedAbility": "Barrier Projector",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/9/93/Surge_Protector.png"
  },
  {
    "hero": "Winston",
    "name": "Tesla Field",
    "description": "Enemies within [Barrier Projector] take <b class=\"stat-ap\">40</b> Electric every 1s.",
    "affectedAbility": "Barrier Projector",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/5/5c/Tesla_Field.png"
  },
  {
    "hero": "Winston",
    "name": "Primal Slam",
    "description": "While using [Jump Pack], press jump to quickly slam towards your current facing direction. During [Primal Rage], slam speed is increased by 50%.",
    "affectedAbility": "Primal Rage",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/f/f0/Primal_Slam.png"
  },
  {
    "hero": "Winston",
    "name": "Thick Skin",
    "description": "When activating [Primal Rage], Winston gains additional Armor equal to 100% of Max Armor.",
    "affectedAbility": "Primal Rage",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/6/6a/Thick_Skin.png"
  },
  {
    "hero": "Zarya",
    "name": "No Limits",
    "description": "Maximum [Energy] increased to 125. [Energy] always decays above 100 [Energy] at a 150% faster rate.",
    "affectedAbility": "Particle Cannon",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/b/bd/No_Limits_power.png"
  },
  {
    "hero": "Zarya",
    "name": "Particle Accelerator",
    "description": "Gain 15% Attack Speed for [Particle Cannon]'s secondary fire. After using an ability, quadruple this bonus for 5 seconds.",
    "affectedAbility": "Particle Cannon",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/6/68/Particle_Accelerator.png"
  },
  {
    "hero": "Zarya",
    "name": "Piercing Beam",
    "description": "Above 80 [Energy], [Particle Cannon]'s Primary Fire will pierce enemies.",
    "affectedAbility": "Particle Cannon",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/d/dd/Piercing_Beam.png"
  },
  {
    "hero": "Zarya",
    "name": "Pre-workout",
    "description": "Gain Weapon Lifesteal and Ability Lifesteal equal to 15% of [Energy].",
    "affectedAbility": "Energy",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/2/2f/Pre-Workout.png"
  },
  {
    "hero": "Zarya",
    "name": "Barrier Benefits",
    "description": "When [Barriers] expire, grant Overhealth equal to 100% of remaining [Barrier] Health to the target for 2s.",
    "affectedAbility": "Particle Barrier",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/e/e0/Barrier_Benefits.png"
  },
  {
    "hero": "Zarya",
    "name": "Containment Shield",
    "description": "[Barrier] heals the target for 5% of your Max Life every 1s and grants 20% Move Speed while active.",
    "affectedAbility": "Particle Barrier",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/c/c0/Containment_Shield.png"
  },
  {
    "hero": "Zarya",
    "name": "Fission Field",
    "description": "[Projected Barrier] also applies to 1 additional ally within 10m, but has 25% reduced maximum [Energy] gain and 20% reduced duration.",
    "affectedAbility": "Particle Barrier",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/9/9b/Fission_Field.png"
  },
  {
    "hero": "Zarya",
    "name": "Here to Spot You",
    "description": "[Projected Barrier] pulls you to the targeted ally and heals you for 20% of Max Life over 3s.",
    "affectedAbility": "Particle Barrier",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/3/39/Here_To_Spot_You.png"
  },
  {
    "hero": "Zarya",
    "name": "Lifelift",
    "description": "+50% [Particle Barrier] Size.<br>Increase [Barrier] Health by 50% of Bonus Max Life from Items.<ul><li>Each Barrier can only grant up to 45 Energy regardless of Barrier Health.</li></ul>",
    "affectedAbility": "Particle Barrier",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/3/38/Lifelift.png"
  },
  {
    "hero": "Zarya",
    "name": "Major Flex",
    "description": "[Barrier] knocks back and deals <b class=\"stat-ap\">25</b> damage, increased by [Energy], to enemies within 5m every 1s.",
    "affectedAbility": "Particle Barrier",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/f/f9/Major_Flex.png"
  },
  {
    "hero": "Zarya",
    "name": "Volskaya Vortex",
    "description": "After a [Barrier] is cast, [Particle Cannon]'s next secondary fire spawns a slowing vortex that deals <b class=\"stat-ap\">80</b> damage over 2s.",
    "affectedAbility": "Particle Barrier",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/b/b0/Volskaya_Vortex.png"
  },
  {
    "hero": "Zarya",
    "name": "Graviton Anomaly",
    "description": "25% Ultimate Cost Reduction<br>[Graviton Surge] base damage is increased to 30 and increased by [Energy], but has 50% reduced duration.",
    "affectedAbility": "Graviton Surge",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/f/f3/Graviton_Anomaly.png"
  },
  {
    "hero": "Ashe",
    "name": "Head Honcho",
    "description": "Each unshoped shot you land increases the damage of the next scoped shot you land by 5%, up to 15%.",
    "affectedAbility": "The Viper",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/6/64/Head_Honcho.png"
  },
  {
    "hero": "Ashe",
    "name": "Incendiary Rounds",
    "description": "While scoped, hitting the same target without missing deals <b>30</b> extra damage.",
    "affectedAbility": "The Viper",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/b/be/Incendiary_Rounds.png"
  },
  {
    "hero": "Ashe",
    "name": "My Business, My Rules",
    "description": "When you deal damage to a Burning enemy with [The Viper], reduce the cooldown of your abilities by 10%.",
    "affectedAbility": "The Viper",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/0/06/My_Business%2C_My_Rules.png"
  },
  {
    "hero": "Ashe",
    "name": "Reload Therapy",
    "description": "When you reload a shot, restore 10% of your Life.<ul><li>This healing does not generate Stadium Cash.</li></ul>",
    "affectedAbility": "The Viper",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/4/4d/Reload_Therapy.png"
  },
  {
    "hero": "Ashe",
    "name": "Calamity",
    "description": "Using [Coach Gun] reloads 2 Ammo. [The Viper]'s next 2 hits deal <b class=\"stat-ap\">40</b> additional damage over 3s.",
    "affectedAbility": "Coach Gun",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/5/52/Calamity.png"
  },
  {
    "hero": "Ashe",
    "name": "Double Barreled",
    "description": "[Coach Gun] gains an additional charge.",
    "affectedAbility": "Coach Gun",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/1/1b/Double_Barreled.png"
  },
  {
    "hero": "Ashe",
    "name": "Incendiary Blast",
    "description": "[Coach Gun] applies Burning, dealing <b class=\"stat-ap\">100</b> damage over 5s. If the target was Burning, deal <b class=\"stat-ap\">75</b> additional damage instantly.",
    "affectedAbility": "Coach Gun",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/6/6a/Incendiary_Blast.png"
  },
  {
    "hero": "Ashe",
    "name": "Early Detonation",
    "description": "Shooting [Dynamite] reloads 5 Ammo and reduces the cooldown of [Dynamite] by 3s.<ul><li>Only heals amount of reloaded ammo when restoring health through <b>[Reload Therapy]</b>.</li></ul>",
    "affectedAbility": "Dynamite",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/4/46/Early_Detonation.png"
  },
  {
    "hero": "Ashe",
    "name": "Molten Munitions",
    "description": "When [Dynamite] explodes on the ground, it leaves lava that Burns enemies for <b class=\"stat-ap\">80</b> every 1s.",
    "affectedAbility": "Dynamite",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/9/9f/Molten_Munitions.png"
  },
  {
    "hero": "Ashe",
    "name": "Out With a Bang",
    "description": "When [Dynamite] explodes, it spawns 3 sticky explosives that deal 30% reduced damage.",
    "affectedAbility": "Dynamite",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/7/72/Out_with_a_Bang.png"
  },
  {
    "hero": "Ashe",
    "name": "B.O.B. Jr.",
    "description": "[B.O.B.] costs 50% less Ultimate Charge but has reduced Life, 20% reduced Attack Speed, and is significantly smaller.",
    "affectedAbility": "B.O.B.",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/2/2d/B.O.B._Jr..png"
  },
  {
    "hero": "Ashe",
    "name": "Partners in Crime",
    "description": "You are healed for 100% of [B.O.B.]'s damage dealt and [B.O.B.] is healed for 100% of your damage dealt.",
    "affectedAbility": "B.O.B.",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/0/08/Partners_in_Crime.png"
  },
  {
    "hero": "Cassidy",
    "name": "Bullseye",
    "description": "Critical hit reduces [Combat Roll]'s cooldown by 2s.",
    "affectedAbility": "Peacekeeper",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/7/72/Bullseye.png"
  },
  {
    "hero": "Cassidy",
    "name": "Dead Man Walking",
    "description": "Eliminating an enemy with a critical hit grants 1 Max Ammo for the round, up to 4.",
    "affectedAbility": "Peacekeeper",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/4/49/Dead_Man_Walking.png"
  },
  {
    "hero": "Cassidy",
    "name": "Full House",
    "description": "For each Ammo available, [Peacekeeper]'s primary fire gains 1% increased damage, up to 25%.",
    "affectedAbility": "Peacekeeper",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/f/f0/Full_House.png"
  },
  {
    "hero": "Cassidy",
    "name": "Quick Draw",
    "description": "After using [Combat Roll], [Peacekeeper]'s next primary fire can auto-aim within 15m while under cooldown.",
    "affectedAbility": "Peacekeeper",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/f/fb/Quick_Draw_Power.png"
  },
  {
    "hero": "Cassidy",
    "name": "Think Flasht",
    "description": "When you start a [Combat Roll], leave a [Flashbang] behind.<br>Flashbang's hinder duration is increased by 50%.",
    "affectedAbility": "Peacekeeper",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/f/f9/Think_Flasht.png"
  },
  {
    "hero": "Cassidy",
    "name": "Barrel Roll",
    "description": "[Combat Roll] takes you 50% further and deals <b class=\"stat-ap\">65</b> damage to enemies.",
    "affectedAbility": "Combat Roll",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/4/4b/Barrel_Roll.png"
  },
  {
    "hero": "Cassidy",
    "name": "Just Roll with It",
    "description": "[Combat Roll] gains additional 25% damage reduction and heals 30% of your Life over 3s.",
    "affectedAbility": "Combat Roll",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/6/67/Just_Roll_With_It.png"
  },
  {
    "hero": "Cassidy",
    "name": "Flash in the Pan",
    "description": "Eliminating an enemy recently damaged by [Flashbang] grants 20% Ultimate Charge.",
    "affectedAbility": "Flashbang",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/9/91/Flash_In_The_Pan.png"
  },
  {
    "hero": "Cassidy",
    "name": "Hot Potato",
    "description": "[Flashbang] adds 3 extra Ammo on hit until [Peacekeeper] is reloaded.",
    "affectedAbility": "Flashbang",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/3/34/Hot_Potato.png"
  },
  {
    "hero": "Cassidy",
    "name": "Easy Rider",
    "description": "While using [Deadeye], gain <b class=\"stat-ap\">100</b> Overhealth and 25% Move Speed.",
    "affectedAbility": "Deadeye",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/f/f0/Easy_Rider.png"
  },
  {
    "hero": "Cassidy",
    "name": "Sunrise",
    "description": "Using [Deadeye] slows all visible enemies by 35% for 2.5s.",
    "affectedAbility": "Deadeye",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/7/79/Sunrise.png"
  },
  {
    "hero": "Cassidy",
    "name": "Sunset",
    "description": "[Deadeye] eliminations grant 15% Ultimate Charge each.",
    "affectedAbility": "Deadeye",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/4/47/Sunset.png"
  },
  {
    "hero": "Freja",
    "name": "Cyclone",
    "description": "When you use [Updraft], fire a [Take Aim] bolt at your crosshair.",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/7/79/Cyclone.png"
  },
  {
    "hero": "Freja",
    "name": "Seekerpoint",
    "description": "When [Take Aim] bolt sticks an enemy, automatically fire 3 additional crossbow shots at them that deal 66% reduced damage.",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/9/90/Seekerpoint.png"
  },
  {
    "hero": "Freja",
    "name": "Seismic Shot",
    "description": "[Take Aim] explosion radius is increased by 50%. Double this if the bolt is stuck to a target.",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/d/dd/Seismic_Shot.png"
  },
  {
    "hero": "Freja",
    "name": "Thread the Needle",
    "description": "[Take Aim] bolts pierce enemies. Additional explosions deal 66% reduced damage.",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/6/68/Thread_The_Needle.png"
  },
  {
    "hero": "Freja",
    "name": "Deep Pockets",
    "description": "When you use an ability, restore 40% of your Max Ammo.",
    "affectedAbility": "Revdraw Crossbow",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/9/9c/Deep_Pockets.png"
  },
  {
    "hero": "Freja",
    "name": "Forager",
    "description": "For 2s after using [Quick Dash], [Revdraw Crossbow] hits heal you for 5% of your Max Life.",
    "affectedAbility": "Revdraw Crossbow",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/b/ba/Forager.png"
  },
  {
    "hero": "Freja",
    "name": "Peak Performance",
    "description": "While firing [Revdraw Crossbow], your fall speed is decreased by 80%.",
    "affectedAbility": "Revdraw Crossbow",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/9/98/Peak_Performance.png"
  },
  {
    "hero": "Freja",
    "name": "Redux",
    "description": "[Revdraw Crossbow] hits against targets stuck by a [Take Aim] bolt or [Bola Shot] reduce the cooldown of your abilities by 5% and refunds 1 ammo.",
    "affectedAbility": "Revdraw Crossbow",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/4/49/Redux.png"
  },
  {
    "hero": "Freja",
    "name": "Volley à Deux",
    "description": "Every fifth [Revdraw Crossbow] shot fires an additional 2 bolts in a spread that deal 50% reduced damage.",
    "affectedAbility": "Revdraw Crossbow",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/c/cb/Volley_%C3%A0_Deux.png"
  },
  {
    "hero": "Freja",
    "name": "Lille Fælde",
    "description": "After using [Updraft], your next [Take Aim] while airborne instead fires a mini [Bola Shot] that no longer pulls and has 30% reduced effectiveness.<ul><li>Bola from Lille Fælde slow is decreased by 60%.</li><li>Radius is reduced by 25%.</li></ul>",
    "affectedAbility": "Bola Shot",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/d/dd/Lille_F%C3%A6lde.png"
  },
  {
    "hero": "Freja",
    "name": "So Cooked",
    "description": "[Bola Shot]'s damaging zone deals 30% more damage and lingers for 3s. [Bola Shot] eliminations count towards [Bounty Hunting].",
    "affectedAbility": "Bola Shot",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/2/23/So_Cooked.png"
  },
  {
    "hero": "Freja",
    "name": "Mighty Gust",
    "description": "[Updraft] launches a wind blast towards your crosshair, knocking back enemies and dealing <b class=\"stat-ap\">40</b> damage.",
    "affectedAbility": "Updraft",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/b/bb/Mighty_Gust.png"
  },
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
  },
  {
    "hero": "Junkrat",
    "name": "Frags For Days",
    "description": "[Frag Launcher] has a 25% chance to shoot an additional projectile that deals 66% reduced damage.<ul><li>Formerly called 2 Frag 2 Frurious</li></ul>",
    "affectedAbility": "Frag Launcher",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/e/e2/2_Frag_2_Frurious.png"
  },
  {
    "hero": "Junkrat",
    "name": "Bango!",
    "description": "[Frag Launcher] Direct Hits without bouncing Burn for 20% additional damage over 2s.",
    "affectedAbility": "Frag Launcher",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/7/7e/Bango%21.png"
  },
  {
    "hero": "Junkrat",
    "name": "Big Bang",
    "description": "When a [Frag Launcher] shot bounces, increase its projectile size by 33%.",
    "affectedAbility": "Frag Launcher",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/0/0b/Big_Bang.png"
  },
  {
    "hero": "Junkrat",
    "name": "Bingo!",
    "description": "[Frag Launcher] Direct Hits without bouncing reduce cooldown of abilities by 25%.",
    "affectedAbility": "Frag Launcher",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/b/bf/Bingo%21.png"
  },
  {
    "hero": "Junkrat",
    "name": "Soot Shaker",
    "description": "After detonating [Concussion Mine], gain 15% increased Attack Speed for 1.50s and restore 20% Max Ammo.",
    "affectedAbility": "Frag Launcher",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/5/52/Soot_Shaker.png"
  },
  {
    "hero": "Junkrat",
    "name": "Double Trouble",
    "description": "Gain 1 additional charge of [Steel Trap].<ul><li>Formerly called It's A(nother) Trap!</li></ul>",
    "affectedAbility": "Steel Trap",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/6/66/It%27s_A%28nother%29_Trap%21.png"
  },
  {
    "hero": "Junkrat",
    "name": "Trap II, Esquire",
    "description": "After [Concussion Mine] has landed for 0.5s, detonating it will spawn a mini [Steel Trap] that slows instead of immobilizing.",
    "affectedAbility": "Steel Trap",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/c/cf/Trap_II%2C_Esquire.png"
  },
  {
    "hero": "Junkrat",
    "name": "Hop Boom",
    "description": "After launching yourself with [Concussion Mine], detonate a [Concussion Mine] whenever you land with 30% reduced effectiveness.",
    "affectedAbility": "Concussion Mine",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/b/bb/Hop_Boom.png"
  },
  {
    "hero": "Junkrat",
    "name": "Slapnel",
    "description": "[Quick Melee] hits explode for up to 100% [Quick Melee] damage, knocking you and targets back (6s Cooldown).",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/c/c5/Slapnel.png"
  },
  {
    "hero": "Junkrat",
    "name": "Gachabomb",
    "description": "+20% [Total Mayhem] Explosion Radius.<br>[Total Mayhem] creates a random number of additional bombs.",
    "affectedAbility": "Total Mayhem",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/9/99/Gachabomb.png"
  },
  {
    "hero": "Junkrat",
    "name": "Rainin' Lead",
    "description": "After launching yourself, drop 1 [Total Mayhem] bomb with 25% reduced damage every 0.3s while airborne.",
    "affectedAbility": "Total Mayhem",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/e/ea/Rainin%27_Lead.png"
  },
  {
    "hero": "Junkrat",
    "name": "Rip Roll",
    "description": "20% Ultimate Cost Reduction.<br>During your ultimate, enter your [Rip Tire]. Launch out when it's destroyed or triggered.",
    "affectedAbility": "RIP-Tire",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/5/51/Rip_Roll.png"
  },
  {
    "hero": "Mei",
    "name": "Extendothermics",
    "description": "[Endothermic Blaster]'s primary fire range is increased by 6m.",
    "affectedAbility": "Endothermic Blaster",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/b/b4/Extendothermics.png"
  },
  {
    "hero": "Mei",
    "name": "Frost Armor",
    "description": "Gain Armor equal to 5% of the primary fire damage you deal, up to 100, until the end of the round.",
    "affectedAbility": "Endothermic Blaster",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/4/4a/Frost_Armor.png"
  },
  {
    "hero": "Mei",
    "name": "Permafrost",
    "description": "Gain bonus health multiplier equal to 50% of your ability power. While above 30% ability power, grow 15% in size.",
    "affectedAbility": "Endothermic Blaster",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/3/33/Permafrost_Power.png"
  },
  {
    "hero": "Mei",
    "name": "Slowball",
    "description": "[Endothermic Blaster]'s secondary fire now shoots a snowball that applies 15% slow on hit or 30% on critical hit for 1s.",
    "affectedAbility": "Endothermic Blaster",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/1/1c/Slowball.png"
  },
  {
    "hero": "Mei",
    "name": "Iceberg",
    "description": "[Ice Wall] spawns a mini [Blizzard] that slows enemies.",
    "affectedAbility": "Ice Wall",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/2/2a/Iceberg.png"
  },
  {
    "hero": "Mei",
    "name": "Snowball Flight",
    "description": "Jumping while mid-air creates a large [Ice Wall] pillar under you.<br>(12s Cooldown).",
    "affectedAbility": "Ice Wall",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/4/47/Snowball_Flight.png"
  },
  {
    "hero": "Mei",
    "name": "Twice As Ice",
    "description": "When you use [Cryo-Freeze], reset the next cooldown of [Ice-Wall] and the next Snowball Flight.",
    "affectedAbility": "Ice Wall",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/b/b2/Twice_As_Ice.png"
  },
  {
    "hero": "Mei",
    "name": "Coulder",
    "description": "[Cryo-Freeze] now encases you in a rolling iceball that can knock back enemies and deal <b class=\"stat-ap\">20</b> damage.",
    "affectedAbility": "Cryo-Freeze",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/8/8d/Coulder.png"
  },
  {
    "hero": "Mei",
    "name": "Cryclone",
    "description": "[Cryo-Freeze] spawns a mini [Blizzard] that slows enemies.",
    "affectedAbility": "Cryo-Freeze",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/2/27/Cryclone.png"
  },
  {
    "hero": "Mei",
    "name": "Frost Nova",
    "description": "When [Cryo-Freeze] ends, knock back nearby enemies, dealing <b class=\"stat-ap\">60</b> damage.",
    "affectedAbility": "Cryo-Freeze",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/4/46/Frost_Nova.png"
  },
  {
    "hero": "Mei",
    "name": "Blizznado",
    "description": "While within [Blizzard], heal 15% of your life every 1s.",
    "affectedAbility": "Blizzard",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/6/64/Blizznado.png"
  },
  {
    "hero": "Mei",
    "name": "Cold Blaster",
    "description": "[Endothermic Blaster]'s primary fire does 20% increased damage to enemies within [Blizzard].",
    "affectedAbility": "Blizzard",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/3/3b/Cold_Blaster.png"
  },
  {
    "hero": "Mei",
    "name": "Avalanche",
    "description": "Visible enemies within 20m of Blizzard are slowed by 25%.",
    "affectedAbility": "Blizzard",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/e/ed/Avalanche.png"
  },
  {
    "hero": "Pharah",
    "name": "Evasive Maneuvers",
    "description": "After using [Jump Jet], [Concussive Blast] gains homing and hinders enemies for 1.50s on direct hit.",
    "affectedAbility": "Concussive Blast",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/7/70/Evasive_Maneuvers.png"
  },
  {
    "hero": "Pharah",
    "name": "Extra Charge",
    "description": "[Concussive Blast] gains 1 extra charge.",
    "affectedAbility": "Concussive Blast",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/4/4a/Extra_Charge.png"
  },
  {
    "hero": "Pharah",
    "name": "Launch Vector",
    "description": "Whenever you knockback an enemy with [Concussive Blast], fire 3 homing mini-rockets at them.",
    "affectedAbility": "Concussive Blast",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/e/e2/Launch_Vector.png"
  },
  {
    "hero": "Pharah",
    "name": "Blitz Barrage",
    "description": "Gain 40% Move Speed during [Barrage].<br>After using [Jet Dash], fire a [Barrage] with 60% fewer [Mini-Rockets].",
    "affectedAbility": "Barrage",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/b/b9/Blitz_Barrage.png"
  },
  {
    "hero": "Pharah",
    "name": "Carpet Bomb",
    "description": "Gain 40% Move Speed during [Barrage].<br>[Barrage] has 50% increased duration.",
    "affectedAbility": "Barrage",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/7/74/Carpet_Bomb.png"
  },
  {
    "hero": "Pharah",
    "name": "Recursion Battery",
    "description": "Mini rockets gain 50% Ability Lifesteal.",
    "affectedAbility": "Barrage",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/3/37/Recursion_Battery.png"
  },
  {
    "hero": "Pharah",
    "name": "Cyclic Salvo",
    "description": "[Rocket Launcher] direct hits grant 10 fuel and reduce your cooldowns by 1s.",
    "affectedAbility": "Rocket Launcher",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/b/b3/Cyclic_Salvo.png"
  },
  {
    "hero": "Pharah",
    "name": "Fuel Depot",
    "description": "[Rocket Launcher] direct hits permanently increase your maximum fuel by 2, stacking up to 25 times.",
    "affectedAbility": "Rocket Launcher",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/3/36/Fuel_Depot.png"
  },
  {
    "hero": "Pharah",
    "name": "Triple Volley",
    "description": "After using an ability, your next [Primary Fire] fires 3 rockets that each deal 40% damage.",
    "affectedAbility": "Rocket Launcher",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/5/54/Triple_Volley.png"
  },
  {
    "hero": "Pharah",
    "name": "Fuel Conversion",
    "description": "[Jet Dash] gains 50% cooldown reduction but now costs 65 fuel.",
    "affectedAbility": "Jet Dash",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/c/c0/Fuel_Conversion.png"
  },
  {
    "hero": "Pharah",
    "name": "Heat Seekers",
    "description": "After using [Jet Dash], your next [Primary Fire] locks onto enemies.",
    "affectedAbility": "Jet Dash",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/b/ba/Heat_Seekers.png"
  },
  {
    "hero": "Pharah",
    "name": "Speed Kills",
    "description": "Dealing weapon damage grants 5% Movement Speed and 3% Attack Speed for 3s, stacking up to 6 times. Direct hits grant double stacks.",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/8/80/Speed_Kills.png"
  },
  {
    "hero": "Reaper",
    "name": "Backstabber",
    "description": "After using an ability, your next shot deals 50% additional damage over 3s to enemies struck from behind.",
    "affectedAbility": "Hellfire Shotguns",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/9/92/Backstabber_Power.png"
  },
  {
    "hero": "Reaper",
    "name": "Harvest Fest",
    "description": "[Hellfire Shotgun] hits have a 10% change to spawn a [Soul Globe]. When picked up, restore 25% Life, 25% Ammo, and gain 25% Move Speed fpr 3s.",
    "affectedAbility": "Hellfire Shotguns",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/8/80/Harvest_Fest.png"
  },
  {
    "hero": "Reaper",
    "name": "Revolving Ruin",
    "description": "Close-range (7m) [Hellfire Shotgun] hits grant 4% Attack Speed for 1s, stacking up to 10 times.",
    "affectedAbility": "Hellfire Shotguns",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/a/a3/Revolving_Ruin.png"
  },
  {
    "hero": "Reaper",
    "name": "Shared Siphon",
    "description": "[The Reaping] also heals the nearest ally within 10m for 30% of Reaper's damage dealt.",
    "affectedAbility": "Hellfire Shotguns",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/6/65/Shared_Siphon.png"
  },
  {
    "hero": "Reaper",
    "name": "Shrouded Shrapnel",
    "description": "Using [Wraith Form] increases the number of pellets per shot in your next magazine by 25% and its spread by 50%.",
    "affectedAbility": "Hellfire Shotguns",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/e/e8/Shrouded_Shrapnel.png"
  },
  {
    "hero": "Reaper",
    "name": "Spirited to Slay",
    "description": "Eliminations reduce your cooldown of [Wraith Form] by 50% and [Shadow Step] by 100%",
    "affectedAbility": "Hellfire Shotguns",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/6/6b/Spirited_To_Slay.png"
  },
  {
    "hero": "Reaper",
    "name": "Vampiric Touch",
    "description": "Hits with [Quick Melee] mark enemies for 5s. Allies gain 20% Lifesteal against marked enemies.",
    "affectedAbility": "Hellfire Shotguns",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/f/ff/Vampiric_Touch.png"
  },
  {
    "hero": "Reaper",
    "name": "Death Step",
    "description": "After using [Shadow Step], cast [Death Blossom] for 1.5s with 50% reduced damage.",
    "affectedAbility": "Shadow Step",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/8/89/Death_Step.png"
  },
  {
    "hero": "Reaper",
    "name": "Silent as the Grave",
    "description": "Your footsteps and [Shadow Step] are significantly quieter.",
    "affectedAbility": "Shadow Step",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/2/28/Silent_As_The_Grave.png"
  },
  {
    "hero": "Reaper",
    "name": "Strangle Step",
    "description": "+15% [Shadow Step] Cast Speed.<br>After using [Shadow Step], double your Lifesteal for 3s.",
    "affectedAbility": "Shadow Step",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/d/da/Strangle_Step.png"
  },
  {
    "hero": "Reaper",
    "name": "Ghosted",
    "description": "While in [Wraith Form], passing through enemies slows their Move speed and Attack Speed by 30% for 3s.",
    "affectedAbility": "Wraith Form",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/e/ef/Ghosted.png"
  },
  {
    "hero": "Reaper",
    "name": "Wraith Renewal",
    "description": "While in [Wraith Form], restore 7% of your Life every 1s. Double this while below 50% Life.",
    "affectedAbility": "Wraith Form",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/4/47/Wraith_Renewal.png"
  },
  {
    "hero": "Sojourn",
    "name": "Fine-Tuned Thrusters",
    "description": "Gain 25% Damage Reduction during [Power Slide]. [Power Slide] has 100% increased Duration.",
    "affectedAbility": "Power Slide",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/9/9f/Fine-Tuned_Thrusters.png"
  },
  {
    "hero": "Sojourn",
    "name": "Lock and Load",
    "description": "During [Power Slide], [Railgun] restores 100% of your Max Ammo every 1s.",
    "affectedAbility": "Power Slide",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/b/b3/Lock_and_Load.png"
  },
  {
    "hero": "Sojourn",
    "name": "Unconventional Tactics",
    "description": "[Power Slide] spawns a mini [Disruptor Shot] when you start sliding and when you jump.",
    "affectedAbility": "Power Slide",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/6/64/Unconventional_Tactics.png"
  },
  {
    "hero": "Sojourn",
    "name": "Zoom Zoom Zoom",
    "description": "During [Power Slide], gain 25% Attack Speed and 50% Weapon Lifesteal.",
    "affectedAbility": "Power Slide",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/a/a7/Zoom_Zoom_Zoom.png"
  },
  {
    "hero": "Sojourn",
    "name": "Commotion Cycle",
    "description": "Dealing damage with [Charged Shot] refunds up to 35% of [Disruptor Shot]'s cooldown, based on the Charge spent.",
    "affectedAbility": "Disruptor Shot",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/9/95/Commotion_Cycle.png"
  },
  {
    "hero": "Sojourn",
    "name": "Experimental Tech",
    "description": "[Disruptor Shot] slows enemies within its area for 15% and grants 33% of its damage dealt as [Railgun] Charge.",
    "affectedAbility": "Disruptor Shot",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/c/c4/Experimental_Tech.png"
  },
  {
    "hero": "Sojourn",
    "name": "Hard Stuck",
    "description": "[Disruptor Shot] can stick to enemies. Stuck [Disruptor Shots] deal 50% less damage.",
    "affectedAbility": "Disruptor Shot",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/d/da/Hard_Stuck.png"
  },
  {
    "hero": "Sojourn",
    "name": "Conductor Chase",
    "description": "Generate 25% more [Railgun] Charge. [Railgun] Charge decays 75% slower.",
    "affectedAbility": "Railgun",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/a/a5/Conductor_Chase.png"
  },
  {
    "hero": "Sojourn",
    "name": "Overcharge",
    "description": "Maximum [Railgun] Charge increased to 150. Fully-charged attacks and abilities still only consume up to 100% Charge.",
    "affectedAbility": "Railgun",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/3/3d/Overcharge.png"
  },
  {
    "hero": "Sojourn",
    "name": "Reverberation Rounds",
    "description": "After firing a fully-charged [Charged Shot], gain 25% increased [Charged Shot] projectile size for 5s (stacking up to 3 times).",
    "affectedAbility": "Railgun",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/9/9d/Reverberation_Rounds.png"
  },
  {
    "hero": "Sojourn",
    "name": "Enhanced Targeting System",
    "description": "During [Overclock], [Railgun] Primary Fire automatically targets enemies.",
    "affectedAbility": "Overclock",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/b/b1/Enhanced_Targeting_System.png"
  },
  {
    "hero": "Sojourn",
    "name": "Aftershock (Sojourn)",
    "description": "Charged Shot final blows trigger an explosion equal to 75% of the shot's damage.",
    "affectedAbility": "Railgun Alt Fire",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/5/53/Aftershock_Power.png"
  },
  {
    "hero": "Soldier: 76",
    "name": "Peripheral Pulse",
    "description": "During [Tactical Visor], [Pulse Rifle] shoots at 1 additional enemy, dealing 50% damage.",
    "affectedAbility": "Tactical Visor",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/d/db/Peripheral_Pulse.png"
  },
  {
    "hero": "Soldier: 76",
    "name": "Super Visor",
    "description": "After using [Helix Rocket], activate [Tactical Visor] for 0.50s.",
    "affectedAbility": "Tactical Visor",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/8/88/Super_Visor.png"
  },
  {
    "hero": "Soldier: 76",
    "name": "Chaingun",
    "description": "While continuously shooting [Pulse Rifle], each shot grants 0.4% Weapon Power, stacking up to 100 times.",
    "affectedAbility": "Heavy Pulse Rifle",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/5/52/Chaingun.png"
  },
  {
    "hero": "Soldier: 76",
    "name": "Man on the Run",
    "description": "During [Sprint], restore 10% of your Ammo every 1s and increase your Max Ammo by 10% until you reload, stacking up to 10 times.",
    "affectedAbility": "Heavy Pulse Rifle",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/5/5d/Man_On_The_Run.png"
  },
  {
    "hero": "Soldier: 76",
    "name": "Cratered",
    "description": "Increase [Helix Rocket] explosion radius by 40% and explosion damage by 15%.",
    "affectedAbility": "Helix Rockets",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/d/d1/Cratered.png"
  },
  {
    "hero": "Soldier: 76",
    "name": "Double Helix",
    "description": "[Helix Rocket] fires a second homing [Helix Rocket] that deals 70% reduced damage.",
    "affectedAbility": "Helix Rockets",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/1/1d/Double_Helix.png"
  },
  {
    "hero": "Soldier: 76",
    "name": "Hunker Down",
    "description": "When [Helix Rocket] deals damage, create a [Biotic Field] with a 50% reduced duration at your position.",
    "affectedAbility": "Helix Rockets",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/2/2c/Hunker_Down.png"
  },
  {
    "hero": "Soldier: 76",
    "name": "Back Off",
    "description": "Enemies within your [Biotic Field] take damage equal to 100% of its healing output.",
    "affectedAbility": "Biotic Field",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/6/6f/Back_Off.png"
  },
  {
    "hero": "Soldier: 76",
    "name": "Biotic Bullseye",
    "description": "While in [Biotic Field], critical hits restore 10% Max Ammo and extend the duration of Biotic Field by 0.5s, up to 5s.",
    "affectedAbility": "Biotic Field",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/b/b5/Biotic_Bullseye.png"
  },
  {
    "hero": "Soldier: 76",
    "name": "Frontliners",
    "description": "Allies in range of your [Biotic Field] when it spawns gain Overhealth equal to 25% of your max Life for 3s.",
    "affectedAbility": "Biotic Field",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/0/05/Frontliners.png"
  },
  {
    "hero": "Soldier: 76",
    "name": "On Me!",
    "description": "[Biotic Field] moves with you and grants you 20% increased max Health while active.<ul><li>Overhealth stacks when multiple Biotic Fields are active at once.</li></ul>",
    "affectedAbility": "Biotic Field",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/7/71/On_Me%21.png"
  },
  {
    "hero": "Soldier: 76",
    "name": "Track and Field",
    "description": "During [Sprint], [Biotic Field] cooldown refreshes 150% faster.",
    "affectedAbility": "Biotic Field",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/5/54/Track_and_Field.png"
  },
  {
    "hero": "Torbjörn",
    "name": "All Grown Up",
    "description": "While [Overload] is active, [Turrets] are upgraded 1 Level, to a maximum of Level 3.",
    "affectedAbility": "Deploy Turret",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/7/7f/All_Grown_Up.png"
  },
  {
    "hero": "Torbjörn",
    "name": "Positive Reinforcement",
    "description": "When a [Turret] is placed, it gains <b class=\"stat-ap\">200</b> Overhealth for 5s. [Forge Hammer] hits on [Turrets] grant you <b class=\"stat-ap\">10</b> Overhealth for 3s, up to <b class=\"stat-ap\">50</b>.",
    "affectedAbility": "Deploy Turret",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/e/e3/Positive_Reinforcement.png"
  },
  {
    "hero": "Torbjörn",
    "name": "Turriplets",
    "description": "You can have 3 [Turrets] active. They start at Level 1, have 50% Health and 66% Attack Speed, and can be upgraded temporarily with [Forge Hammer] hits for up to 15s.",
    "affectedAbility": "Deploy Turret",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/8/87/Turriplets.png"
  },
  {
    "hero": "Torbjörn",
    "name": "Magmini",
    "description": "When you use [Overload], gain 2 Ammo of Molten Core with 66% reduced damage and duration.",
    "affectedAbility": "Molten Core",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/f/f6/Magmini.png"
  },
  {
    "hero": "Torbjörn",
    "name": "Swedish Sauna",
    "description": "[Molten Core] heals allied heroes within it for 50% of [Molten Core] Damage every 1s.",
    "affectedAbility": "Molten Core",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/7/70/Swedish_Sauna.png"
  },
  {
    "hero": "Torbjörn",
    "name": "Come Get Yer Armor",
    "description": "When you use [Overload], throw 2 Armor Packs that grant Armor equal to 20% of your Max Life. Armor Packs do not stack.",
    "affectedAbility": "Overload",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/7/7b/Come_Get_Yer_Armor.png"
  },
  {
    "hero": "Torbjörn",
    "name": "Dwarlord",
    "description": "[Overload] grants all allies within 5m Overhealth equal to 50% of [Overload] Overhealth and 10% Attack Speed.",
    "affectedAbility": "Overload",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/1/17/Dwarlord.png"
  },
  {
    "hero": "Torbjörn",
    "name": "Let Off Some Steam",
    "description": "While [Overload] is not active, Weapon Damage and Weapon Healing reduces [Overload] Cooldown by 10%.",
    "affectedAbility": "Overload",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/9/90/Let_Off_Some_Steam.png"
  },
  {
    "hero": "Torbjörn",
    "name": "Blacksmith",
    "description": "Hitting an ally with [Forge Hammer] heals them for 66% of [Forge Hammer] damage.",
    "affectedAbility": "Forge Hammer",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/b/be/Blacksmith.png"
  },
  {
    "hero": "Torbjörn",
    "name": "Forged in Fire",
    "description": "While [Overload] is active, every Forge Hammer Swing explodes, dealing bonus damage equal to 10% of your Max Life in a 3m radius.",
    "affectedAbility": "Forge Hammer",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/a/a9/Forged_In_Fire.png"
  },
  {
    "hero": "Torbjörn",
    "name": "Clocked",
    "description": "[Turret] damage marks enemies for 8s. Gain 25% Weapon Lifesteal and 15% increased Weapon Damage against marked enemies.",
    "affectedAbility": "Rivet Gun",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/2/2d/Clocked.png"
  },
  {
    "hero": "Torbjörn",
    "name": "Riveting",
    "description": "Every 5th [Rivet Gun] shot shoots both your Primary and Secondary Fire. The bonus shot deals 10% reduced damage.",
    "affectedAbility": "Rivet Gun",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/5/54/Riveting.png"
  },
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
    "description": "When you use [Recall], throw a [Pulse Bomb] that deals 60% less damage.<ul><li>The 60% damage reduction is implemented as a 0.4x damage multiplier that stacks multiplicatively with ability power</li><li>This means you need +150% ability power, and not +60%, to achieve the same damage as a regular Pulse Bomb with +0% ability power</li></ul>",
    "affectedAbility": "Pulse Bomb",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/f/fb/Pocket_Bomb.png"
  },
  {
    "hero": "Ana",
    "name": "Artsy Dartsy",
    "description": "While scoped with [Biotic Rifle], Ana can shoot [Sleep Dart] through the [Biotic Rifle] with 150% increased projectile speed.",
    "affectedAbility": "Biotic Rifle",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/7/7b/Artsy_Dartsy.png"
  },
  {
    "hero": "Ana",
    "name": "No Scope Needed",
    "description": "Landing unscoped shots with [Biotic Rifle] grants 10% Attack Speed for 2s, stacking up to 3 times.",
    "affectedAbility": "Biotic Rifle",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/9/91/No_Scope_Needed.png"
  },
  {
    "hero": "Ana",
    "name": "Pinpoint Prescription",
    "description": "[Biotic Rifle] can now critically hit both allies and enemies.<ul><li>Critical damage multiplier = x2</li></ul>",
    "affectedAbility": "Biotic Rifle",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/f/fc/Pinpoint_Prescription.png"
  },
  {
    "hero": "Ana",
    "name": "Comfy Cloud",
    "description": "[Sleep Dart] explodes on contact, hitting targets within 3m, but Sleep has 50% reduced duration.",
    "affectedAbility": "Sleep Dart",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/e/ec/Comfy_Cloud.png"
  },
  {
    "hero": "Ana",
    "name": "Dreamy",
    "description": "[Sleep Dart] can hit allies, healing 80% of their max Life over 4s instead of putting them to sleep.",
    "affectedAbility": "Sleep Dart",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/4/4f/Dreamy.png"
  },
  {
    "hero": "Ana",
    "name": "Fountain of Soothe",
    "description": "[Sleep Dart] spawns a [Biotic Grenade] with 50% damage, healing and duration on impact.",
    "affectedAbility": "Sleep Dart",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/3/3d/Fountain_of_Soothe.png"
  },
  {
    "hero": "Ana",
    "name": "Home Remedy",
    "description": "[Biotic Grenade] grants Overhealth equal to 200% of its healing.",
    "affectedAbility": "Biotic Grenade",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/5/5d/Home_Remedy.png"
  },
  {
    "hero": "Ana",
    "name": "NanoNade",
    "description": "[Biotic Grenade] applies [Nano Boost] with 25% effectiveness to all allies for 1.5s.",
    "affectedAbility": "Biotic Grenade",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/8/8d/NanoNade.png"
  },
  {
    "hero": "Ana",
    "name": "Venomous",
    "description": "[Biotic Grenade] deals an additional <b class=\"stat-ap\">60</b> damage over 2s to enemies affected.",
    "affectedAbility": "Biotic Grenade",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/f/f1/Venomous.png"
  },
  {
    "hero": "Ana",
    "name": "Falconer",
    "description": "[Nano Boost] also gives 20% increased Attack Speed and 10% Ultimate Charge",
    "affectedAbility": "Nano Boost",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/6/65/Falconer.png"
  },
  {
    "hero": "Ana",
    "name": "My Turn",
    "description": "[Nano Boost] also applies to yourself for 100% of its duration.",
    "affectedAbility": "Nano Boost",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/a/a8/My_Turn.png"
  },
  {
    "hero": "Ana",
    "name": "Our Turn",
    "description": "[Nano Boost] also affects other allies in your line of sight, but it has 25% reduced duration on them.",
    "affectedAbility": "Nano Boost",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/6/65/Our_Turn.png"
  },
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
  },
  {
    "hero": "Juno",
    "name": "MediMaster",
    "description": "[Mediblaster] can now critically hit both allies and enemies.",
    "affectedAbility": "Mediblaster",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/b/b3/Medimaster.png"
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
  },
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
  },
  {
    "hero": "Lúcio",
    "name": "Fast Forward",
    "description": "While above 50% Move Speed, increase damage by 30%.",
    "affectedAbility": "Sonic Amplifier",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/f/f7/Fast_Forward.png"
  },
  {
    "hero": "Lúcio",
    "name": "Signature Shift",
    "description": "After using an ability, your next [Sonic Amplifier] shot shoots a volley of 6 ammo with 80% increased projectile size.",
    "affectedAbility": "Sonic Amplifier",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/f/f7/Signature_Shift.png"
  },
  {
    "hero": "Lúcio",
    "name": "Sonic Boom",
    "description": "[Sonic Amplifier] and [Quick Melee] Damage heals all allies affected by [Crossfade] equal to 30% of damage dealt.",
    "affectedAbility": "Sonic Amplifier",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/7/7c/Sonic_Boom.png"
  },
  {
    "hero": "Lúcio",
    "name": "Mixtape",
    "description": "When switching to [Healing Boost], [Crossfade] heals for 75% of [Crossfade] healing for every 1s [Speed Boost] was active.",
    "affectedAbility": "Crossfade",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/2/2c/Mixtape.png"
  },
  {
    "hero": "Lúcio",
    "name": "Megaphone",
    "description": "+15% [Amp It Up] Duration<br>While [Amp It Up] is active, [Crossfade] radius is increased by 150%.",
    "affectedAbility": "Amp It Up",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/6/62/Megaphone.png"
  },
  {
    "hero": "Lúcio",
    "name": "Radio Edit",
    "description": "After using [Amp It Up], trigger a [Sound Barrier] with 85% reduced Overhealth.",
    "affectedAbility": "Amp It Up",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/3/38/Radio_Edit.png"
  },
  {
    "hero": "Lúcio",
    "name": "Vivace",
    "description": "Every 1s you are [Wallriding], gain 3% Move Speed and 1.5% Attack Speed for 5s, stacking up to 10 times.",
    "affectedAbility": "Wall Ride",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/a/aa/Vivace.png"
  },
  {
    "hero": "Lúcio",
    "name": "Wallvibing",
    "description": "While Wallriding or airborne, gain temporary Overhealth equal to 4% of your life every 1s, up to 40%.",
    "affectedAbility": "Wall Ride",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/f/f9/Wallvibing.png"
  },
  {
    "hero": "Lúcio",
    "name": "Crowd Pleaser",
    "description": "After using Soundwave, heal all allies affected by [Crossfade] for 33% of [Soundwave]'s damage. This healing is doubled while [Amp It Up] is active.",
    "affectedAbility": "Soundwave",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/b/ba/Crowd_Pleaser.png"
  },
  {
    "hero": "Lúcio",
    "name": "Let's Bounce",
    "description": "[Soundwave] has 25% increased knockback and deals bonus damage equal to 50% of [Soundwave]'s damage if the target hits a wall.",
    "affectedAbility": "Soundwave",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/3/38/Let%27s_Bounce.png"
  },
  {
    "hero": "Lúcio",
    "name": "Reverb",
    "description": "After using [Soundwave,] for 2s you can use [Soundwave] again with 75% reduced effectiveness.",
    "affectedAbility": "Soundwave",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/c/c0/Reverb.png"
  },
  {
    "hero": "Lúcio",
    "name": "Beat Drop",
    "description": "20% Ultimate Cost Reduction.<br>Landing on an enemy with [Sound Barrier] deals up to <b class=\"stat-ap\">250</b> damage.",
    "affectedAbility": "Sound Barrier",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/d/da/Beat_Drop_Power.png"
  },
  {
    "hero": "Mercy",
    "name": "Distortion",
    "description": "Allies boosted by [Caduceus Staff] gain 20% Lifesteal.",
    "affectedAbility": "Caduceus Staff",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/2/22/Distortion.png"
  },
  {
    "hero": "Mercy",
    "name": "Protective Beam",
    "description": "[Caduceus Staff] targets above 80% Life gain 10% Damage Reduction.<br>[Caduceus Staff] stays tethered 1s longer to allies not in line of sight.",
    "affectedAbility": "Caduceus Staff",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/5/58/Protective_Beam.png"
  },
  {
    "hero": "Mercy",
    "name": "Serenity",
    "description": "[Sympathetic Recovery] heals for 10% more and heals you even while you are healing a full health ally.",
    "affectedAbility": "Caduceus Staff",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/8/8b/Serenity.png"
  },
  {
    "hero": "Mercy",
    "name": "Supply Surge",
    "description": "Reloading [Caduceus Staff] grants allies affected by it 20% Move Speed for 2s, restores 50% Ammo and reduces their cooldowns by 3s. (10s Cooldown)",
    "affectedAbility": "Caduceus Staff",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/6/6d/Supply_Surge.png"
  },
  {
    "hero": "Mercy",
    "name": "Threads of Fate",
    "description": "[Caduceus Staff] chains to your previous target for 3s, at 35% effectiveness.",
    "affectedAbility": "Caduceus Staff",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/b/b8/Threads_of_Fate.png"
  },
  {
    "hero": "Mercy",
    "name": "Battle Medic",
    "description": "Every 1s your Staff is attached, [Caduceus Blaster] gains 3% Attack Speed (stacks 10 times) until you reload or swap to your Staff.",
    "affectedAbility": "Caduceus Blaster",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/0/07/Battle_Medic.png"
  },
  {
    "hero": "Mercy",
    "name": "Tethered Tourniquet",
    "description": "After swapping to [Caduceus Blaster], [Caduceus Staff] automatically heals allies at 100% effectiveness for every 1s you spent tethered, up to 10s.",
    "affectedAbility": "Caduceus Blaster",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/f/f7/Tethered_Tourniquet.png"
  },
  {
    "hero": "Mercy",
    "name": "Equivalent Exchange",
    "description": "You have 3 charges of [Resurrect] with 33% reduced cast time, but their cooldowns only reset at the start of a round.",
    "affectedAbility": "Resurrect",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/a/a9/Equivalent_Exchange.png"
  },
  {
    "hero": "Mercy",
    "name": "First Responder",
    "description": "When you [Resurrect] an ally, you both gain <b class=\"stat-ap\">Ability Power</b> <span style=\"color: #9073fb;\">250</span> Overhealth for 6s.",
    "affectedAbility": "Resurrect",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/8/89/First_Responder.png"
  },
  {
    "hero": "Mercy",
    "name": "Renaissance",
    "description": "After successfully using [Resurrect] activate [Valkyrie] for 5s.",
    "affectedAbility": "Resurrect",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/7/73/Renaissance.png"
  },
  {
    "hero": "Mercy",
    "name": "The Whambulance",
    "description": "When Guardian Angel ends, heal your target for <b class=\"stat-ap\">Ability Power</b> <span style=\"color: #9073fb;\">4</span> Life for every 1m you traveled.",
    "affectedAbility": "Guardian Angel",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/c/ca/The_Whambulance.png"
  },
  {
    "hero": "Mercy",
    "name": "Triage Unit",
    "description": "When using [Guardian Angel] on allies below 50% Life, they receive 25% more healing from you for 3s.",
    "affectedAbility": "Guardian Angel",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/5/58/Triage_Unit.png"
  },
  {
    "hero": "Moira",
    "name": "Chain Grasp",
    "description": "After using [Biotic Orb], [Biotic Grasp]'s secondary fire chains to 2 additional targets within 10m for 3s.",
    "affectedAbility": "Biotic Grasp",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/8/84/Chain_Grasp.png"
  },
  {
    "hero": "Moira",
    "name": "Deconstruction",
    "description": "After you spend 50 [Biotic Energy], deal 20% increased damage for 6s.",
    "affectedAbility": "Biotic Grasp",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/c/c6/Deconstruction.png"
  },
  {
    "hero": "Moira",
    "name": "Empowering You",
    "description": "[Biotic Grasp]'s secondary fire can target allies, increasing their damage by 15%.",
    "affectedAbility": "Biotic Grasp",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/7/76/Empowering_You.png"
  },
  {
    "hero": "Moira",
    "name": "Ethereal Excision",
    "description": "While aiming at an enemy's head with [Biotic Grasp]'s secondary fire, gain 30% Move Speed, 30% Lifesteal, and restore 100% more Biotic Energy.",
    "affectedAbility": "Biotic Grasp",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/9/95/Ethereal_Excision.png"
  },
  {
    "hero": "Moira",
    "name": "Optimal Overflow",
    "description": "After you spend 50 [Biotic Energy], launch the last selected [Biotic Orb] with 75% reduced duration.",
    "affectedAbility": "Biotic Grasp",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/f/f7/Optimal_Overflow.png"
  },
  {
    "hero": "Moira",
    "name": "Precarious Potency",
    "description": "Allies healed by your [Biotic Grasp] are healed for an additional 25% of [Biotic Grasp]'s healing over 5s.",
    "affectedAbility": "Biotic Grasp",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/1/11/Precarious_Potency.png"
  },
  {
    "hero": "Moira",
    "name": "Cross-Orbal",
    "description": "[Biotic Orb] launches an additional [Biotic Orb] of the other type with 50% reduced capacity.",
    "affectedAbility": "Biotic Orb",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/d/d1/Cross-Orbal.png"
  },
  {
    "hero": "Moira",
    "name": "Multiball",
    "description": "[Biotic Orb] launches 2 additional orbs of the chosen type with 85% reduced effectiveness.",
    "affectedAbility": "Biotic Orb",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/b/b9/Multiball.png"
  },
  {
    "hero": "Moira",
    "name": "Phantasm",
    "description": "When you use [Fade], spawn a stationary copy of the last selected [Biotic Orb] with 50% reduced duration.",
    "affectedAbility": "Biotic Orb",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/a/a7/Phantasm.png"
  },
  {
    "hero": "Moira",
    "name": "Scientific Deathod",
    "description": "While using [Fade], passing through enemies grants 5% Ultimate Charge and Overhealth equal to 15% of your max Life.",
    "affectedAbility": "Fade",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/b/ba/Scientific_Deathod.png"
  },
  {
    "hero": "Moira",
    "name": "Voidhoppers",
    "description": "[Fade] also phases other allies within 8m for 0.25s and grants them Overhealth equal to 20% of your max Life.",
    "affectedAbility": "Fade",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/b/b6/Voidhoppers.png"
  },
  {
    "hero": "Moira",
    "name": "Destruction's Divide (Stadium)",
    "description": "[Coalescence] can be toggled between pure healing or pure damage, with 30% greater effect.",
    "affectedAbility": "Coalescence",
    "iconUrl": "https://static.wikia.nocookie.net/overwatch_gamepedia/images/0/0e/Destruction%27s_Divide_Power.png"
  },
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
