import { useEffect, useMemo, useState } from "react";

import type { Item } from "../types";
import { computeJunoTorpedoBreakpoints } from "../utils/junoBreakpoints";
import { normalizeTorpedoItems } from "../utils/junoItems";
import JunoTorpedoControls from "./JunoTorpedoControls";
import JunoTorpedoTable from "./JunoTorpedoTable";

interface Props {
  items: Item[];
}

export default function JunoTorpedoBreakpoints({ items }: Props) {
  const torpedoItems = useMemo(() => normalizeTorpedoItems(items), [items]);
  const [enabledIds, setEnabledIds] = useState<string[]>(() => torpedoItems.map((it) => it.id));
  const [allowBurn, setAllowBurn] = useState(true);
  const [minCash, setMinCash] = useState(10000);
  const [maxCash, setMaxCash] = useState(70000);
  const [baseDamage, setBaseDamage] = useState(85);
  const [maxItems, setMaxItems] = useState(6);

  useEffect(() => {
    setEnabledIds((prev) => {
      const valid = new Set(torpedoItems.map((it) => it.id));
      const next = prev.filter((id) => valid.has(id));
      if (next.length === torpedoItems.length) return next;
      if (next.length === 0) return torpedoItems.map((it) => it.id);
      return next;
    });
  }, [torpedoItems]);

  const enabledSet = useMemo(() => new Set(enabledIds), [enabledIds]);
  const enabledItems = useMemo(
    () => torpedoItems.filter((it) => enabledSet.has(it.id)),
    [torpedoItems, enabledSet],
  );

  const budgetMin = Math.min(minCash, maxCash);
  const budgetMax = Math.max(minCash, maxCash);

  const breakpoints = useMemo(
    () =>
      computeJunoTorpedoBreakpoints(enabledItems, {
        baseDamage,
        minCash: budgetMin,
        maxCash: budgetMax,
        maxItems,
        allowBurn,
      }),
    [enabledItems, baseDamage, budgetMin, budgetMax, maxItems, allowBurn],
  );

  function onToggle(id: string) {
    setEnabledIds((prev) => (prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]));
  }

  function onSelectAll() {
    setEnabledIds(torpedoItems.map((it) => it.id));
  }

  return (
    <div className="glass-card space-y-6 rounded-xl p-4 shadow-lg sm:p-6 dark:border-gray-700">
      <header className="space-y-2">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 sm:text-3xl">
          Juno Pulsar Torpedo Breakpoints
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Toggle ability items to mirror Juno&apos;s torpedo breakpoints. Combinations are evaluated by
          damage first and survival stats as a tiebreaker.
        </p>
      </header>
      <div className="grid gap-6 lg:grid-cols-2">
        <JunoTorpedoControls
          baseDamage={baseDamage}
          setBaseDamage={setBaseDamage}
          maxItems={maxItems}
          setMaxItems={setMaxItems}
          minCash={minCash}
          setMinCash={setMinCash}
          maxCash={maxCash}
          setMaxCash={setMaxCash}
          allowBurn={allowBurn}
          setAllowBurn={setAllowBurn}
          items={torpedoItems}
          enabled={enabledSet}
          onToggle={onToggle}
        />
        <JunoTorpedoTable
          breakpoints={breakpoints}
          enabledCount={enabledItems.length}
          items={torpedoItems}
          onSelectAll={onSelectAll}
        />
      </div>
    </div>
  );
}
