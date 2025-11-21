import { describe, expect, it } from "vitest";
import type { HeroPower } from "../types";
import {
  applyHeroPowerManualFields,
  buildHeroPowerOverrideMap,
  heroPowerKey,
} from "../scripts/lib/heroPowerOverrideUtils";

describe("heroPower override utils", () => {
  it("overrides manual fields when force is true (default)", () => {
    const power: HeroPower = {
      hero: "Juno",
      name: "MediMaster",
      description: "desc",
    };

    applyHeroPowerManualFields(power, {
      synergyHeroes: ["Zarya"],
      counterHeroes: ["Reaper"],
      antiSynergyHeroes: [],
      beingCountered: ["Cassidy"],
    });

    expect(power.synergyHeroes).toEqual(["Zarya"]);
    expect(power.counterHeroes).toEqual(["Reaper"]);
    expect(power.antiSynergyHeroes).toEqual([]);
    expect(power.beingCountered).toEqual(["Cassidy"]);
  });

  it("fills only missing fields when force is false", () => {
    const power: HeroPower = {
      hero: "Juno",
      name: "MediMaster",
      description: "desc",
      synergyHeroes: ["Existing"],
    };

    applyHeroPowerManualFields(
      power,
      {
        synergyHeroes: ["Override"],
        counterHeroes: ["Moira"],
        beingCountered: ["Sombra"],
      },
      { force: false },
    );

    expect(power.synergyHeroes).toEqual(["Existing"]);
    expect(power.counterHeroes).toEqual(["Moira"]);
    expect(power.beingCountered).toEqual(["Sombra"]);
  });

  it("builds a lookup map keyed by hero and power name", () => {
    const map = buildHeroPowerOverrideMap([
      { hero: "Juno", name: "MediMaster", synergyHeroes: ["Zarya"], beingCountered: ["Cassidy"] },
      { hero: "Juno", name: "Stinger", counterHeroes: ["Moira"] },
    ]);

    expect(map.get(heroPowerKey("Juno", "MediMaster"))?.synergyHeroes).toEqual(["Zarya"]);
    expect(map.get(heroPowerKey("Juno", "MediMaster"))?.beingCountered).toEqual(["Cassidy"]);
    expect(map.get(heroPowerKey("Juno", "Stinger"))?.counterHeroes).toEqual(["Moira"]);
  });
});
