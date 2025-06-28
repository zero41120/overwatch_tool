import { useEffect, useState } from "react";
import BreakPointCalculator from "./components/BreakPointCalculator";
import InputSection from "./components/input_view/InputSection";
import ResultsSection from "./components/results_view/ResultsSection";
import Toolbar from "./components/Toolbar";
import rawData from "./data.json?raw";
import { useAppDispatch, useAppSelector } from "./hooks";
import overridesRaw from "./overrides.json?raw";
import { setError, setToBuy, setWeightType } from "./slices/inputSlice";
import type { Item, ItemOverride, ResultCombo, RootData } from "./types";
import { sortAttributes } from "./utils/attributeUtils";
import {
  aggregate,
  buildBreakdown,
  collectRelevantAttributes,
  meetsMinGroups,
  scoreFromMap,
} from "./utils/utils";

export default function Optimizer() {
  const [data, setData] = useState<Item[]>([]);
  const [heroes, setHeroes] = useState<string[]>([]);
  const [attrTypes, setAttrTypes] = useState<string[]>([]);

  const dispatch = useAppDispatch();
  const state = useAppSelector((s) => s.input.present);
  const {
    hero,
    cash,
    equipped,
    toBuy,
    avoid,
    avoidEnabled,
    weights,
    minValueEnabled,
    minAttrGroups,
    useOverrides,
  } = state;
  const [results, setResults] = useState<ResultCombo | null>(null);
  const [alternatives, setAlternatives] = useState<ResultCombo[]>([]);
  // Memoize expensive calculations
  const memoizedScores = useState(new Map<string, number>())[0];
  const memoizedAggregates = useState(
    new Map<string, Map<string, number>>(),
  )[0];
  const memoizedEquippedItems = useState(new Map<string, Item[]>())[0];

  const overrides: Record<string, ItemOverride> = overridesRaw
    ? JSON.parse(overridesRaw)
    : {};

  useEffect(() => {
    const root: RootData = JSON.parse(rawData);
    const items: Item[] = [];
    const add = (
      tab: string,
      rarity: "common" | "rare" | "epic",
      arr: Item[],
    ) => {
      arr.forEach((it) => {
        const override = useOverrides ? overrides[it.name] : undefined;
        const item = { ...it, tab, rarity };
        if (override) {
          const attrs = override[hero] || override.attributes;
          if (attrs) item.attributes = attrs;
        }
        items.push(item);
      });
    };
    (["weapon", "ability", "survival"] as const).forEach((tab) => {
      const rar = root.tabs[tab];
      add(tab, "common", rar.common);
      add(tab, "rare", rar.rare);
      add(tab, "epic", rar.epic);
    });
    setData(items);
    const heroesSet = new Set<string>();
    const seen = new Map<string, number>();
    const types = new Set<string>();
    items.forEach((it) => {
      if (it.character) heroesSet.add(it.character);
      it.attributes.forEach((a) => {
        const count = (seen.get(a.type) ?? 0) + 1;
        seen.set(a.type, count);
        if (count === 2) types.add(a.type); // Only add if seen more than once
      });
    });
    types.delete("description");
    types.delete("Editor's Note");
    const sortedTypes = Array.from(types).sort(sortAttributes);
    setHeroes(Array.from(heroesSet).sort());
    setAttrTypes(sortedTypes);
    dispatch(setWeightType({ index: 0, type: sortedTypes[0] }));
  }, [hero, useOverrides]);
  useEffect(() => {
    const count = equipped.filter((id) => id).length;
    if (toBuy + count > 6) dispatch(setToBuy(Math.max(0, 6 - count)));
  }, [dispatch, equipped, toBuy]);
  // Clear memoization when weights change
  useEffect(() => {
    memoizedScores.clear();
    memoizedAggregates.clear();
  }, [weights, memoizedScores, memoizedAggregates]);

  // Clear equipped items memoization when equipped items change
  useEffect(() => {
    memoizedEquippedItems.clear();
  }, [equipped, memoizedEquippedItems]);
  function equippedItems() {
    const key = equipped
      .filter((id) => id)
      .sort()
      .join(",");
    if (memoizedEquippedItems.has(key)) {
      return memoizedEquippedItems.get(key)!;
    }

    const items = equipped
      .map((id) => data.find((i) => i.id === id))
      .filter((i): i is Item => Boolean(i));

    memoizedEquippedItems.set(key, items);
    return items;
  }

  function validate() {
    if (!hero) return false;
    if (cash < 0) return false;
    const eqCost = equippedItems().reduce((s, it) => s + it.cost, 0);
    if (eqCost > cash) return false;
    if (toBuy + equippedItems().length > 6) return false;
    if (weights.length === 0) return false;
    if (minValueEnabled) {
      for (const g of minAttrGroups) {
        if (g.attrs.length === 0) return false;
        if (g.value < 0) return false;
      }
    }
    return true;
  }
  function calcScore(items: Item[]) {
    const key = items
      .map((i) => i.id || i.name)
      .sort()
      .join(",");
    if (memoizedScores.has(key)) {
      return memoizedScores.get(key)!;
    }

    let aggregateMap = memoizedAggregates.get(key);
    if (!aggregateMap) {
      aggregateMap = aggregate(items);
      memoizedAggregates.set(key, aggregateMap);
    }

    const score = scoreFromMap(aggregateMap, weights);
    memoizedScores.set(key, score);
    return score;
  }

  function meetsMinRequirements(items: Item[]) {
    return (
      !minValueEnabled ||
      meetsMinGroups([...items, ...equippedItems()], minAttrGroups)
    );
  }
  function onCalculate() {
    dispatch(setError(""));

    // Validate inputs before processing
    if (!validate()) {
      dispatch(
        setError(
          "Please check your inputs - ensure all required fields are filled",
        ),
      );
      return;
    }

    const eqItems = equippedItems();
    const eqCost = eqItems.reduce((s, it) => s + it.cost, 0);
    const remainingCash = cash - eqCost;

    if (remainingCash < 0) {
      dispatch(setError("Equipped items cost exceeds total cash"));
      return;
    }

    const selectedAttrs = collectRelevantAttributes(
      weights,
      minValueEnabled,
      minAttrGroups,
    );

    const candidate = data.filter(
      (it) =>
        (!it.character || it.character === hero) &&
        !equipped.includes(it.id ?? "") &&
        (!avoidEnabled || !avoid.includes(it.id ?? "")) &&
        it.attributes.some((a) => selectedAttrs.has(a.type)),
    );

    const needed = toBuy;

    if (needed === 0) {
      if (!meetsMinRequirements([])) {
        dispatch(setError("Minimum attribute values not met"));
        return;
      }
      const score = calcScore(eqItems);
      setResults({ items: [], cost: 0, score });
      setAlternatives([]);
      return;
    }

    if (candidate.length === 0) {
      dispatch(setError("No items available that match your criteria"));
      return;
    }
    const itemScores = candidate.map((it) => ({
      item: it,
      score: calcScore([it]),
    }));
    itemScores.sort((a, b) => b.score - a.score);

    // Pre-filter items that are too expensive
    const affordableItems = itemScores.filter(
      (info) => info.item.cost <= remainingCash,
    );
    if (affordableItems.length === 0) {
      dispatch(setError("No affordable items available"));
      return;
    }

    // Limit search space for performance - use only top items if there are too many
    const maxItems = 50; // Reasonable limit for DFS
    const searchItems = affordableItems.slice(0, maxItems);

    const prefix: number[] = [0];
    for (const i of searchItems)
      prefix.push(prefix[prefix.length - 1] + i.score);
    let bestScore = -Infinity;
    let bestCost = 0;
    let bestCombos: ResultCombo[] = [];
    const preferHighCost = eqItems.length + needed === 6;

    const n = searchItems.length;

    // Add memoization for performance
    const memo = new Map<string, boolean>();

    function dfs(start: number, selected: Item[], cost: number, score: number) {
      // Early termination for large search spaces
      if (n > 100 && selected.length === 0 && start > 50) {
        return; // Limit search scope for performance
      }

      if (meetsMinRequirements(selected)) {
        if (
          score > bestScore ||
          (score === bestScore &&
            (preferHighCost ? cost > bestCost : cost < bestCost))
        ) {
          bestScore = score;
          bestCost = cost;
          bestCombos = [{ items: [...selected], cost, score }];
        } else if (
          score === bestScore &&
          (preferHighCost ? cost <= bestCost : cost >= bestCost)
        ) {
          bestCombos.push({ items: [...selected], cost, score });
        }
      }

      if (selected.length === needed || start >= n) return;

      const remaining = needed - selected.length;
      const possible =
        score + (prefix[Math.min(n, start + remaining)] - prefix[start]);
      if (possible < bestScore) return;

      // Memoization key for pruning
      const key = `${start}-${selected.length}-${cost}-${Math.floor(score)}`;
      if (memo.has(key)) return;
      memo.set(key, true);
      for (let i = start; i < n; i++) {
        const info = searchItems[i];
        if (cost + info.item.cost > remainingCash) continue;
        selected.push(info.item);
        dfs(i + 1, selected, cost + info.item.cost, score + info.score);
        selected.pop();
      }
    }
    dfs(0, [], 0, 0);

    if (bestCombos.length === 0) {
      dispatch(setError("Insufficient cash for any purchase"));
      return;
    }
    const [best, ...others] = bestCombos.sort((a, b) =>
      preferHighCost ? b.cost - a.cost : a.cost - b.cost,
    );
    const alt = others
      .filter((c) => (preferHighCost ? c.cost < best.cost : c.cost > best.cost))
      .sort((a, b) => (preferHighCost ? b.cost - a.cost : a.cost - b.cost));
    const totalMap = aggregate([...best.items, ...eqItems]);
    const breakdown = buildBreakdown(
      totalMap,
      weights,
      minValueEnabled,
      minAttrGroups,
    );
    setResults({
      items: best.items,
      cost: best.cost,
      score: scoreFromMap(totalMap, weights),
      breakdown,
    });
    setAlternatives(
      alt.map((c) => ({ ...c, score: calcScore([...c.items, ...eqItems]) })),
    );
  }

  if (data.length === 0) return <div className="p-4">Loading...</div>;

  const filtered = data.filter(
    (it) => !hero || !it.character || it.character === hero,
  );
  const eqItems = equippedItems();
  const eqCost = eqItems.reduce((s, it) => s + it.cost, 0);

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-2">
      <Toolbar />
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-8">
        <InputSection
          heroes={heroes}
          attrTypes={attrTypes}
          filteredItems={filtered}
          onSubmit={onCalculate}
          validate={validate}
        />
        <ResultsSection
          eqItems={eqItems}
          eqCost={eqCost}
          cash={cash}
          results={results}
          alternatives={alternatives}
        />
        <BreakPointCalculator />
      </div>
    </div>
  );
}
