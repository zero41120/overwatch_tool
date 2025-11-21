import { describe, expect, it } from "vitest";
import {
  groupHeroPowerEntries,
  hasHeroPowerChanges,
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

describe("hasHeroPowerChanges", () => {
  const entry: HeroPowerEntry = {
    hero: "Juno",
    slug: "juno",
    powers: [{ hero: "Juno", name: "Blink Boosts", description: "desc" }],
  };
  const moduleSource = heroPowerModuleSource(entry);

  it("returns false when module files and aggregator are unchanged", () => {
    const existingFiles = new Map<string, string>([["juno.ts", moduleSource]]);
    const aggregator = heroPowersAggregatorSource([entry]);
    const changed = hasHeroPowerChanges([entry], existingFiles, aggregator, aggregator);
    expect(changed).toBe(false);
  });

  it("ignores line ending differences", () => {
    const existingFiles = new Map<string, string>([["juno.ts", moduleSource.replace(/\n/g, "\r\n")]]);
    const aggregator = heroPowersAggregatorSource([entry]);
    const changed = hasHeroPowerChanges([entry], existingFiles, aggregator, aggregator.replace(/\n/g, "\r\n"));
    expect(changed).toBe(false);
  });

  it("ignores formatting changes when data is equal", () => {
    const existingFiles = new Map<string, string>([["juno.ts", `${moduleSource}\n// comment`]]);
    const aggregator = heroPowersAggregatorSource([entry]);
    const changed = hasHeroPowerChanges(
      [entry],
      existingFiles,
      aggregator,
      `${aggregator}\n// comment`,
      { dataEqual: true },
    );
    expect(changed).toBe(false);
  });

  it("detects missing files even when data is equal", () => {
    const existingFiles = new Map<string, string>();
    const aggregator = heroPowersAggregatorSource([entry]);
    const changed = hasHeroPowerChanges([entry], existingFiles, aggregator, aggregator, { dataEqual: true });
    expect(changed).toBe(true);
  });

  it("detects stale files not present in generated entries", () => {
    const existingFiles = new Map<string, string>([
      ["juno.ts", moduleSource],
      ["old.ts", "// stale"],
    ]);
    const aggregator = heroPowersAggregatorSource([entry]);
    const changed = hasHeroPowerChanges([entry], existingFiles, aggregator, aggregator);
    expect(changed).toBe(true);
  });

  it("detects aggregator changes", () => {
    const existingFiles = new Map<string, string>([["juno.ts", moduleSource]]);
    const aggregator = heroPowersAggregatorSource([entry]);
    const changed = hasHeroPowerChanges([entry], existingFiles, aggregator, "// old");
    expect(changed).toBe(true);
  });
});
