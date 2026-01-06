import { useMemo } from "react";

import type { Item } from "../types";
import type { TorpedoItem } from "./junoBreakpoints";
import { buildTorpedoItem } from "./junoTorpedoDamage";

export const SITUATIONAL_PRIORITY = [
  "SKYLINE NANITES",
  "PULSTAR DESTROYERS",
  "MARK OF THE KITSUNE",
  "CYBERVENOM",
] as const;

function sortTorpedoItems(items: TorpedoItem[]) {
  const priority = new Map<string, number>();
  SITUATIONAL_PRIORITY.forEach((name, index) => priority.set(name, index));
  return items
    .slice()
    .sort((a, b) => {
      const aPriority = priority.has(a.name);
      const bPriority = priority.has(b.name);
      if (aPriority || bPriority) {
        const aRank = priority.get(a.name) ?? Number.POSITIVE_INFINITY;
        const bRank = priority.get(b.name) ?? Number.POSITIVE_INFINITY;
        if (aRank !== bRank) return aRank - bRank;
      }
      if (a.situational !== b.situational) return Number(b.situational) - Number(a.situational);
      if (b.ap !== a.ap) return b.ap - a.ap;
      if (b.baseAdd !== a.baseAdd) return b.baseAdd - a.baseAdd;
      return a.name.localeCompare(b.name);
    });
}

export function useJunoTorpedoItems(items: Item[]): TorpedoItem[] {
  return useMemo(() => {
    const mapped = items.map(buildTorpedoItem);
    const filtered = mapped.filter(
      (item) =>
        item.ap > 0 ||
        item.baseAdd > 0 ||
        item.situational ||
        item.hp > 0 ||
        item.wp > 0 ||
        item.lifesteal > 0 ||
        item.dr > 0 ||
        item.hps > 0,
    );

    return sortTorpedoItems([...filtered]);
  }, [items]);
}
