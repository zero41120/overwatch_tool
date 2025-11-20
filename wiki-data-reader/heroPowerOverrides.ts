import type { HeroPowerOverrideEntry } from "./scripts/lib/heroPowerOverrideUtils";

const heroPowerOverrides: HeroPowerOverrideEntry[] = [
  {
    hero: "Juno",
    name: "MediMaster",
    synergyHeroes: ["Zarya", "Junker Queen"],
    counterHeroes: ["Zarya", "Mei", "Reaper", "Moira"],
  },
];

export default heroPowerOverrides;
