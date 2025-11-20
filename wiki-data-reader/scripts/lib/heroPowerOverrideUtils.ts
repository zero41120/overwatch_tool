import type { HeroPower } from "../../types";

export type HeroPowerManualFields = Partial<
  Pick<HeroPower, "synergyHeroes" | "counterHeroes" | "antiSynergyHeroes">
>;

export type HeroPowerOverrideEntry = Pick<HeroPower, "hero" | "name"> & HeroPowerManualFields;

export function heroPowerKey(hero: string, name: string) {
  return `${hero}::${name}`;
}

export function applyHeroPowerManualFields(
  power: HeroPower,
  manual?: HeroPowerManualFields,
  options: { force?: boolean } = {},
) {
  if (!manual) return;
  const force = options.force ?? true;

  const applyField = <K extends keyof HeroPowerManualFields>(field: K) => {
    const nextValue = manual[field];
    if (nextValue === undefined) return;
    if (!force && power[field] !== undefined) return;
    power[field] = Array.isArray(nextValue) ? [...nextValue] : nextValue;
  };

  applyField("synergyHeroes");
  applyField("counterHeroes");
  applyField("antiSynergyHeroes");
}

export function buildHeroPowerOverrideMap(entries: HeroPowerOverrideEntry[]) {
  const map = new Map<string, HeroPowerManualFields>();
  for (const entry of entries) {
    map.set(heroPowerKey(entry.hero, entry.name), {
      synergyHeroes: entry.synergyHeroes,
      counterHeroes: entry.counterHeroes,
      antiSynergyHeroes: entry.antiSynergyHeroes,
    });
  }
  return map;
}
