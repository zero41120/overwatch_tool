import { describe, expect, it } from "vitest";
import {
  groupHeroPowerEntries,
  heroPowerModuleSource,
  heroPowersAggregatorSource,
  type HeroPowerEntry,
} from "../lib/heroPowerOutput.ts";
import type { HeroPower } from "../../types";

describe("groupHeroPowerEntries", () => {
  it("groups powers by hero and sorts by slug", () => {
    const powers: HeroPower[] = [
      { hero: "Tracer", name: "Pulse Sync", description: "desc" },
      { hero: "Ana", name: "Nano Boost+", description: "desc" },
      { hero: "Tracer", name: "Blink Battery", description: "desc" },
    ];
    const entries = groupHeroPowerEntries(powers);
    expect(entries.map((entry) => entry.slug)).toEqual(["ana", "tracer"]);
    expect(entries[1].powers).toHaveLength(2);
  });
});

describe("heroPowersAggregatorSource", () => {
  it("generates import statements for each hero entry", () => {
    const entries: HeroPowerEntry[] = groupHeroPowerEntries([
      { hero: "Soldier: 76", name: "Heavy Pulse", description: "desc" },
      { hero: "Lúcio", name: "Tempo Master", description: "desc" },
    ]);
    const source = heroPowersAggregatorSource(entries);
    expect(source).toContain('import type { HeroPower } from "./types";');
    expect(source).toContain('import soldier76 from "./heroPowers/soldier-76";');
    expect(source).toContain('import lCio from "./heroPowers/l-cio";');
    expect(source).toContain("...soldier76");
    expect(source).toContain("...lCio");
  });
});

describe("heroPowerModuleSource", () => {
  it("serializes hero-specific powers into a module", () => {
    const entry: HeroPowerEntry = {
      hero: "Juno",
      slug: "juno",
      powers: [{ hero: "Juno", name: "Blink Boosts", description: "desc" }],
    };
    const source = heroPowerModuleSource(entry);
    expect(source).toContain('import type { HeroPower } from "../types";');
    expect(source).toContain('"Blink Boosts"');
    expect(source).toContain("export default heroPowers;");
  });
});
