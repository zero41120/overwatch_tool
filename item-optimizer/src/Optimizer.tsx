import { useEffect, useMemo, useRef, useState } from "react";
import BreakPointCalculator from "./components/BreakPointCalculator";
import InputSection from "./components/input_view/InputSection";
import ItemGallery from "./components/ItemGallery";
import ResultsSection from "./components/results_view/ResultsSection";
import Toolbar from "./components/Toolbar";
import readLocalData, { readOverrideData } from "./itemDataProvider";
import { useAppDispatch, useAppSelector } from "./hooks";
import { setError, setToBuy, setWeightType } from "./slices/inputSlice";
import type { HeroMetadata, HeroPower, Item, ItemOverride, ItemRarity, ItemTab, ResultCombo, RootData } from "./types";
import { ALL_HEROES, NO_HERO } from "./types";
import type { MetricOutputDescriptor } from "./metrics/metricRegistry";
import { getMetricOutputsForHero, getSelectedMetricOutputKeys } from "./metrics/metricRegistry";
import { collectAttributeCountsForHero, collectAttributeTypesForHero } from "./utils/attributeUtils";
import { itemAffectsTorpedoDamage, TORPEDO_DAMAGE_ATTR } from "./utils/junoTorpedoDamage";
import { loadLocalOverrides } from "./utils/localOverrides";
import { resolveOverrideAttributes } from "./utils/overrideUtils";
import { findBestBuild, findBestBuildsByBudget } from "./utils/optimizerSearch";
import { buildOptimizerProfileInputs } from "./utils/optimizerProfileInputs";
import { scoreBuild } from "./utils/scoreUtils";
import {
  collectRelevantAttributes,
  meetsMinGroups,
  uniqueByItems,
} from "./utils/utils";

export default function Optimizer() {
  type CalcMode = "cheapest" | "premium" | "incremental";
  const [data, setData] = useState<Item[]>([]);
  const [powersByHero, setPowersByHero] = useState<Record<string, HeroPower[]>>({});
  const [heroes, setHeroes] = useState<string[]>([]);
  const [heroMetadata, setHeroMetadata] = useState<HeroMetadata[]>([]);
  const [heroIcons, setHeroIcons] = useState<Record<string, string>>({});
  const [attrTypes, setAttrTypes] = useState<string[]>([]);
  const [attrCounts, setAttrCounts] = useState<Record<string, number>>({});
  const [metricOutputs, setMetricOutputs] = useState<MetricOutputDescriptor[]>([]);

  const dispatch = useAppDispatch();
  const state = useAppSelector((s) => s.input.present);
  const {
    hero,
    cash,
    equipped,
    equippedEnabled,
    toBuy,
    avoid,
    avoidEnabled,
    weights,
    minValueEnabled,
    minAttrGroups,
    useOverrides,
    enemyHasArmor,
    metricInputs,
  } = state;
  const selectedMetricOutputs = useMemo(() => getSelectedMetricOutputKeys(weights), [weights]);
  const [results, setResults] = useState<ResultCombo | null>(null);
  const [builds, setBuilds] = useState<ResultCombo[]>([]);
  const [buildIndex, setBuildIndex] = useState(0);
  const [lastMode, setLastMode] = useState<CalcMode | null>(null);
  const autoRecomputeSignature = useRef("");
  // Memoize equipped item lookups by id set.
  const memoizedEquippedItems = useState(new Map<string, Item[]>())[0];

  const baseOverrides: Record<string, ItemOverride> = readOverrideData();
  const overrideVersion = state.overrideVersion;

  useEffect(() => {
    const root: RootData = readLocalData();
    const items: Item[] = [];
    const localOverrides = loadLocalOverrides();
    const add = (tab: ItemTab, rarity: ItemRarity, arr: Item[]) => {
      arr.forEach((it) => {
        const baseOverride = baseOverrides[it.name];
        const localOverride = localOverrides[it.name];
        const override = useOverrides ? localOverride || baseOverride : undefined;
        if (override?.disabled) return;
        const item = { ...it, tab, rarity };
        if (override) {
          const attrs = resolveOverrideAttributes(override, hero);
          if (attrs) item.attributes = attrs;
        }
        const recommendationMeta = baseOverride;
        if (recommendationMeta?.synergyHeroes) item.synergyHeroes = recommendationMeta.synergyHeroes;
        if (recommendationMeta?.counterHeroes) item.counterHeroes = recommendationMeta.counterHeroes;
        if (recommendationMeta?.beingCountered) item.beingCountered = recommendationMeta.beingCountered;
        if (!item.id) item.id = it.name; // Ensure id is set if not present
        items.push(item);
      });
    };
    (["weapon", "ability", "survival"] as const).forEach((tab) => {
      const rar = root.tabs[tab];
      add(tab, "common", rar.common);
      add(tab, "rare", rar.rare);
      add(tab, "epic", rar.epic);
    });
    setPowersByHero(root.tabs.powers);
    const icons: Record<string, string> = {};
    const metadataMap = new Map<string, HeroMetadata>();
    (root.heroes || []).forEach((meta) => {
      if (meta.name) {
        metadataMap.set(meta.name, meta);
        if (meta.iconUrl) {
          icons[meta.name] = meta.iconUrl;
        }
      }
    });
    setData(items);
    const heroesSet = new Set<string>();
    items.forEach((it) => {
      if (it.character) heroesSet.add(it.character);
    });
    Object.entries(root.tabs.powers).forEach(([heroName, list]) => {
      if (list.length) heroesSet.add(heroName);
    });
    const sortedTypes = collectAttributeTypesForHero(items, hero);
    const counts = collectAttributeCountsForHero(items, hero);
    const nextMetricOutputs = getMetricOutputsForHero(hero);
    const heroList = [...Array.from(heroesSet).sort()];
    const filteredIcons: Record<string, string> = {};
    const filteredMetadata: HeroMetadata[] = [];
    heroList.forEach((heroName) => {
      if (icons[heroName]) filteredIcons[heroName] = icons[heroName];
      const meta = metadataMap.get(heroName);
      if (meta) filteredMetadata.push(meta);
    });
    setHeroes(heroList);
    setHeroIcons(filteredIcons);
    setHeroMetadata(filteredMetadata);
    setAttrTypes(sortedTypes);
    setAttrCounts(counts);
    setMetricOutputs(nextMetricOutputs);
    if (sortedTypes[0]) {
      dispatch(setWeightType({ index: 0, type: sortedTypes[0] }));
    }
  }, [hero, useOverrides, overrideVersion]);
  useEffect(() => {
    const count = equipped.filter((id) => id).length;
    if (toBuy + count > 6) dispatch(setToBuy(Math.max(0, 6 - count)));
  }, [dispatch, equipped, toBuy]);
  // Recompute scores and breakdowns when weights or minimums change.
  useEffect(() => {
    const eqItems = equippedItems();
    setBuilds((prev) => {
      if (prev.length === 0) return prev;
      return prev.map((build) => {
        const { score, metricValues, breakdown } = scoreBuild({
          items: [...build.items, ...eqItems],
          hero,
          weights,
          minValueEnabled,
          minAttrGroups,
          enemyHasArmor,
          metricOutputKeys: selectedMetricOutputs,
          metricInputValues: metricInputs,
        });
        return { ...build, score, metricValues, breakdown };
      });
    });
    setResults((prev) => {
      if (!prev) return prev;
      const { score, metricValues, breakdown } = scoreBuild({
        items: [...prev.items, ...eqItems],
        hero,
        weights,
        minValueEnabled,
        minAttrGroups,
        enemyHasArmor,
        metricOutputKeys: selectedMetricOutputs,
        metricInputValues: metricInputs,
      });
      return {
        ...prev,
        score,
        metricValues,
        breakdown,
      };
    });
  }, [weights, minValueEnabled, minAttrGroups, hero, enemyHasArmor, metricInputs, selectedMetricOutputs]);

  useEffect(() => {
    memoizedEquippedItems.clear();
  }, [equipped, memoizedEquippedItems]);
  useEffect(() => {
    memoizedEquippedItems.clear();
  }, [data, memoizedEquippedItems]);
  useEffect(() => {
    if (!lastMode) return;
    const signature = JSON.stringify({
      avoidEnabled,
      avoid: [...avoid].sort(),
      equippedEnabled,
      equipped,
    });
    if (signature === autoRecomputeSignature.current) return;
    autoRecomputeSignature.current = signature;
    onCalculate(lastMode);
  }, [avoid, avoidEnabled, equipped, equippedEnabled, lastMode]);
  function equippedItems() {
    const key = equipped
      .filter((id) => id)
      .sort()
      .join(",");
    if (memoizedEquippedItems.has(key)) {
      return memoizedEquippedItems.get(key)!;
    }

    const items = equipped.map((id) => data.find((i) => i.id === id)).filter((i): i is Item => Boolean(i));

    memoizedEquippedItems.set(key, items);
    return items;
  }

  function allowItem(it: Item) {
    if (hero === NO_HERO) return !it.character;
    if (hero === ALL_HEROES) return true;
    return !it.character || it.character === hero;
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
  function meetsMinRequirements(items: Item[]) {
    return (
      !minValueEnabled ||
      meetsMinGroups([...items, ...equippedItems()], minAttrGroups, hero, {
        enemyHasArmor,
        metricInputValues: metricInputs,
      })
    );
  }
  function onCalculate(mode: CalcMode) {
    dispatch(setError(""));
    setLastMode(mode);
    autoRecomputeSignature.current = JSON.stringify({
      avoidEnabled,
      avoid: [...avoid].sort(),
      equippedEnabled,
      equipped,
    });
    const preferHighCost = mode === "premium";

    // Validate inputs before processing
    if (!validate()) {
      dispatch(setError("Please check your inputs - ensure all required fields are filled"));
      return;
    }

    const eqItems = equippedItems();
    const eqCost = eqItems.reduce((s, it) => s + it.cost, 0);
    if (mode !== "incremental" && cash - eqCost < 0) {
      dispatch(setError("Equipped items cost exceeds total cash"));
      return;
    }

    const selectedAttrs = collectRelevantAttributes(weights, minValueEnabled, minAttrGroups);

    const includesTorpedoDamage = selectedAttrs.has(TORPEDO_DAMAGE_ATTR);
    const candidate = data.filter(
      (it) =>
        allowItem(it) &&
        !equipped.includes(it.id ?? "") &&
        (!avoidEnabled || !avoid.includes(it.id ?? "")) &&
        (it.attributes.some((a) => selectedAttrs.has(a.type)) ||
          (includesTorpedoDamage && itemAffectsTorpedoDamage(it))),
    );

    const needed = toBuy;

    if (needed === 0) {
      if (!meetsMinRequirements([])) {
        dispatch(setError("Minimum attribute values not met"));
        return;
      }
      const { score, metricValues, breakdown } = scoreBuild({
        items: eqItems,
        hero,
        weights,
        minValueEnabled,
        minAttrGroups,
        enemyHasArmor,
        metricOutputKeys: selectedMetricOutputs,
        metricInputValues: metricInputs,
      });
      setBuilds([{ items: [], cost: 0, score, metricValues, breakdown }]);
      setBuildIndex(0);
      setResults({ items: [], cost: 0, score, metricValues, breakdown });
      return;
    }

    if (candidate.length === 0) {
      dispatch(setError("No items available that match your criteria"));
      return;
    }

    const optimizerProfileInputs = buildOptimizerProfileInputs({
      items: candidate,
      weights,
      selectedMetricOutputs,
      minValueEnabled,
      minAttrGroups,
      hero,
      enemyHasArmor,
    });

    function withBreakdown(combo: ResultCombo): ResultCombo {
      const { score, metricValues, breakdown } = scoreBuild({
        items: [...combo.items, ...eqItems],
        hero,
        weights,
        minValueEnabled,
        minAttrGroups,
        enemyHasArmor,
        metricOutputKeys: selectedMetricOutputs,
        metricInputValues: metricInputs,
      });
      return { ...combo, score, metricValues, breakdown };
    }

    if (mode === "incremental") {
      const maxCost = candidate.reduce((m, it) => Math.max(m, it.cost), 0);
      let upper = maxCost > 0 ? maxCost * 6 : 90000;
      const budgets: number[] = [];
      for (let c = 10000; c <= upper; c += 1000) {
        const remaining = c - eqCost;
        if (remaining >= 0) budgets.push(remaining);
      }
      if (budgets.length === 0) {
        dispatch(setError("Equipped items cost exceeds total cash"));
        return;
      }
      const list = findBestBuildsByBudget({
        items: candidate,
        equippedItems: eqItems,
        weights,
        selectedMetricOutputs,
        minValueEnabled,
        minAttrGroups,
        hero,
        enemyHasArmor,
        metricInputValues: metricInputs,
        maxItems: needed,
        maxCash: Math.max(...budgets),
        preferHighCost: false,
        attrKeys: optimizerProfileInputs.attrKeys,
        extraFields: optimizerProfileInputs.extraFields,
        budgets,
      }).map(withBreakdown);
      const unique = uniqueByItems(list);
      if (unique.length === 0) {
        dispatch(setError("Insufficient cash for any purchase"));
        return;
      }
      setBuilds(unique);
      setBuildIndex(unique.length - 1);
      setResults(unique[unique.length - 1]);
      return;
    }

    const result = findBestBuild({
      items: candidate,
      equippedItems: eqItems,
      weights,
      selectedMetricOutputs,
      minValueEnabled,
      minAttrGroups,
      hero,
      enemyHasArmor,
      metricInputValues: metricInputs,
      maxItems: needed,
      maxCash: cash - eqCost,
      preferHighCost,
      attrKeys: optimizerProfileInputs.attrKeys,
      extraFields: optimizerProfileInputs.extraFields,
    });
    if (!result) {
      dispatch(setError("Insufficient cash for any purchase"));
      return;
    }
    const finalResult = withBreakdown(result);
    setBuilds([finalResult]);
    setBuildIndex(0);
    setResults(finalResult);
    // alternatives no longer separately stored
  }

  function onSelectBuild(idx: number) {
    const build = builds[idx];
    if (!build) return;
    setBuildIndex(idx);
    const eqItems = equippedItems();
    const { score, metricValues, breakdown } = scoreBuild({
      items: [...build.items, ...eqItems],
      hero,
      weights,
      minValueEnabled,
      minAttrGroups,
      enemyHasArmor,
      metricOutputKeys: selectedMetricOutputs,
      metricInputValues: metricInputs,
    });
    setResults({
      items: build.items,
      cost: build.cost,
      score,
      metricValues,
      breakdown,
    });
  }

  if (data.length === 0) return <div className="p-4">Loading...</div>;

  const filtered = data.filter(allowItem);
  const eqItems = equippedItems();
  const eqCost = eqItems.reduce((s, it) => s + it.cost, 0);

  return (
    <div className="p-0 sm:p-0 lg:p-8 space-y-2">
      <Toolbar />
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-8">
        <InputSection
          heroes={heroes}
          heroIcons={heroIcons}
          attrTypes={attrTypes}
          attrCounts={attrCounts}
          metricOutputs={metricOutputs}
          filteredItems={filtered}
          onSubmit={onCalculate}
          validate={validate}
        />
        <div className="relative z-10">
          <ResultsSection
            eqItems={eqItems}
            eqCost={eqCost}
            cash={cash}
            builds={builds}
            selected={buildIndex}
            results={results}
            onSelect={onSelectBuild}
            allItems={data}
            powersByHero={powersByHero}
            heroMetadata={heroMetadata}
          />
        </div>
        <BreakPointCalculator items={filtered} powersByHero={powersByHero} />
        <ItemGallery items={filtered} heroes={heroes} attrTypes={attrTypes} />
      </div>
    </div>
  );
}
