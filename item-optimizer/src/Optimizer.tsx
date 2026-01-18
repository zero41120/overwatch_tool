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
import type { MetricOutputDescriptor } from "./metrics/core/metricRegistry";
import {
  getMetricOutputsForHero,
  getSelectedMetricOutputKeys,
  hasMetricOutputForMetric,
} from "./metrics/core/metricRegistry";
import { setRawStatMetricOutputs } from "./metrics/RawStatMetric";
import { JUNO_TORPEDO_METRIC_ID } from "./metrics/JunoTorpedoMetric";
import { collectAttributeTypesForHero, getRawAttributeLabel } from "./utils/attributeUtils";
import { itemAffectsTorpedoDamage } from "./utils/junoTorpedoDamage";
import { loadLocalOverrides } from "./utils/localOverrides";
import { resolveOverrideAttributes } from "./utils/overrideUtils";
import { findBestBuilds, findBestBuildsByBudget } from "./utils/optimizerSearch";
import type { OptimizerSearchOptions } from "./utils/optimizerSearch";
import { buildOptimizerProfileInputs } from "./utils/optimizerProfileInputs";
import { scoreBuild } from "./utils/scoreUtils";
import type { OptimizerProgress } from "./utils/optimizerParetoTypes";
import {
  collectRelevantAttributes,
  meetsMinGroups,
  rankBestCombos,
  uniqueByItems,
} from "./utils/utils";

type CalcMode = "cheapest" | "premium" | "incremental";

type OptimizerWorkerMessage =
  | {
      type: "progress";
      requestId: number;
      progress: OptimizerProgress;
    }
  | {
      type: "result";
      requestId: number;
      results: ResultCombo[];
    }
  | {
      type: "error";
      requestId: number;
      error: string;
    };

type OptimizerWorkerSearchOptions = Omit<
  OptimizerSearchOptions,
  "attrKeys" | "extraFields" | "onProgress" | "progressInterval"
>;

export default function Optimizer() {
  const [data, setData] = useState<Item[]>([]);
  const [powersByHero, setPowersByHero] = useState<Record<string, HeroPower[]>>({});
  const [heroes, setHeroes] = useState<string[]>([]);
  const [heroMetadata, setHeroMetadata] = useState<HeroMetadata[]>([]);
  const [heroIcons, setHeroIcons] = useState<Record<string, string>>({});
  const [attrTypes, setAttrTypes] = useState<string[]>([]);
  const [metricOutputs, setMetricOutputs] = useState<MetricOutputDescriptor[]>([]);
  const [isCalculating, setIsCalculating] = useState(false);
  const [progress, setProgress] = useState<OptimizerProgress | null>(null);
  const workerRef = useRef<Worker | null>(null);
  const requestIdRef = useRef(0);
  const pendingHandlerRef = useRef<((results: ResultCombo[]) => void) | null>(null);
  const supportsWorker = typeof Worker !== "undefined";

  const dispatch = useAppDispatch();
  const state = useAppSelector((s) => s.input.present);
  const {
    hero,
    heroPowers,
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
    setRawStatMetricOutputs(sortedTypes, getRawAttributeLabel);
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
    setMetricOutputs(nextMetricOutputs);
    if (nextMetricOutputs[0]) {
      const currentType = weights[0]?.type;
      const outputKeys = new Set(nextMetricOutputs.map((output) => output.outputKey));
      if (!currentType || !outputKeys.has(currentType)) {
        dispatch(setWeightType({ index: 0, type: nextMetricOutputs[0].outputKey }));
      }
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
          heroPowers,
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
        heroPowers,
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
  }, [weights, minValueEnabled, minAttrGroups, hero, heroPowers, metricInputs, selectedMetricOutputs]);

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

  useEffect(() => {
    return () => {
      workerRef.current?.terminate();
    };
  }, []);
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
        metricInputValues: metricInputs,
      })
    );
  }

  function startWorker(handler: (results: ResultCombo[]) => void) {
    if (!supportsWorker) return null;
    if (workerRef.current) workerRef.current.terminate();
    const worker = new Worker(new URL("./workers/optimizerWorker.ts", import.meta.url), {
      type: "module",
    });
    worker.onmessage = (event: MessageEvent<OptimizerWorkerMessage>) => {
      const message = event.data;
      if (message.requestId !== requestIdRef.current) return;
      if (message.type === "progress") {
        setProgress(message.progress);
        return;
      }
      setIsCalculating(false);
      setProgress(null);
      pendingHandlerRef.current = null;
      if (message.type === "result") {
        handler(message.results);
        return;
      }
      dispatch(setError(message.error || "Optimizer failed to run"));
    };
    workerRef.current = worker;
    pendingHandlerRef.current = handler;
    requestIdRef.current += 1;
    return { worker, requestId: requestIdRef.current };
  }

  function onCalculate(mode: CalcMode) {
    dispatch(setError(""));
    setLastMode(mode);
    if (workerRef.current) {
      workerRef.current.terminate();
      workerRef.current = null;
    }
    pendingHandlerRef.current = null;
    setIsCalculating(false);
    setProgress(null);
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

    const includesTorpedoMetric = hasMetricOutputForMetric(
      JUNO_TORPEDO_METRIC_ID,
      selectedMetricOutputs,
    );
    const candidate = data.filter(
      (it) =>
        allowItem(it) &&
        !equipped.includes(it.id ?? "") &&
        (!avoidEnabled || !avoid.includes(it.id ?? "")) &&
        (it.attributes.some((a) => selectedAttrs.has(a.type)) ||
          (includesTorpedoMetric && itemAffectsTorpedoDamage(it))),
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
        heroPowers,
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

    function withBreakdown(combo: ResultCombo): ResultCombo {
      const { score, metricValues, breakdown } = scoreBuild({
        items: [...combo.items, ...eqItems],
        hero,
        weights,
        minValueEnabled,
        minAttrGroups,
        heroPowers,
        metricOutputKeys: selectedMetricOutputs,
        metricInputValues: metricInputs,
      });
      return { ...combo, score, metricValues, breakdown };
    }
    const handleResults = (list: ResultCombo[]) => {
      if (mode === "incremental") {
        const unique = uniqueByItems(list.map(withBreakdown));
        if (unique.length === 0) {
          dispatch(setError("Insufficient cash for any purchase"));
          return;
        }
        setBuilds(unique);
        setBuildIndex(unique.length - 1);
        setResults(unique[unique.length - 1]);
        return;
      }

      if (list.length === 0) {
        dispatch(setError("Insufficient cash for any purchase"));
        return;
      }
      const scored = list.map(withBreakdown);
      const { best, alternatives } = rankBestCombos(scored, preferHighCost);
      const ordered = [best, ...alternatives];
      setBuilds(ordered);
      setBuildIndex(0);
      setResults(ordered[0]);
    };

    const searchOptions: OptimizerWorkerSearchOptions = {
      items: candidate,
      equippedItems: eqItems,
      weights,
      selectedMetricOutputs,
      minValueEnabled,
      minAttrGroups,
      hero,
      heroPowers,
      metricInputValues: metricInputs,
      maxItems: needed,
      maxCash: mode === "incremental" ? 0 : cash - eqCost,
    };

    if (mode === "incremental") {
      const maxCost = candidate.reduce((m, it) => Math.max(m, it.cost), 0);
      const upper = maxCost > 0 ? maxCost * 6 : 90000;
      const budgets: number[] = [];
      for (let c = 10000; c <= upper; c += 1000) {
        const remaining = c - eqCost;
        if (remaining >= 0) budgets.push(remaining);
      }
      if (budgets.length === 0) {
        dispatch(setError("Equipped items cost exceeds total cash"));
        return;
      }
      searchOptions.maxCash = Math.max(...budgets);
      const progressInterval = Math.max(1, Math.floor(candidate.length / 20));
      setIsCalculating(true);
      setProgress({ phase: "profiles", completed: 0, total: candidate.length });
      if (supportsWorker) {
        const workerInfo = startWorker(handleResults);
        if (!workerInfo) return;
        workerInfo.worker.postMessage({
          requestId: workerInfo.requestId,
          mode,
          options: searchOptions,
          budgets,
          progressInterval,
        });
        return;
      }

      const optimizerProfileInputs = buildOptimizerProfileInputs({
        items: candidate,
        weights,
        selectedMetricOutputs,
        metricInputValues: metricInputs,
        minValueEnabled,
        minAttrGroups,
        hero,
        heroPowers,
      });
      const list = findBestBuildsByBudget({
        ...searchOptions,
        attrKeys: optimizerProfileInputs.attrKeys,
        extraFields: optimizerProfileInputs.extraFields,
        budgets,
      });
      setIsCalculating(false);
      setProgress(null);
      handleResults(list);
      return;
    }

    const progressInterval = Math.max(1, Math.floor(candidate.length / 20));
    setIsCalculating(true);
    setProgress({ phase: "profiles", completed: 0, total: candidate.length });
    if (supportsWorker) {
      const workerInfo = startWorker(handleResults);
      if (!workerInfo) return;
      workerInfo.worker.postMessage({
        requestId: workerInfo.requestId,
        mode,
        options: searchOptions,
        progressInterval,
      });
      return;
    }

    const optimizerProfileInputs = buildOptimizerProfileInputs({
      items: candidate,
      weights,
      selectedMetricOutputs,
      metricInputValues: metricInputs,
      minValueEnabled,
      minAttrGroups,
      hero,
      heroPowers,
    });
    const results = findBestBuilds({
      ...searchOptions,
      attrKeys: optimizerProfileInputs.attrKeys,
      extraFields: optimizerProfileInputs.extraFields,
    });
    setIsCalculating(false);
    setProgress(null);
    handleResults(results);
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
      heroPowers,
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
  const progressPercent =
    progress && progress.total > 0
      ? Math.min(100, Math.round((progress.completed / progress.total) * 100))
      : null;
  const progressLabel =
    progress && progress.total > 0 ? `${progress.completed} / ${progress.total}` : null;

  return (
    <div className="p-0 sm:p-0 lg:p-8 space-y-2">
      <Toolbar />
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-8">
        <InputSection
          heroes={heroes}
          heroIcons={heroIcons}
          attrTypes={attrTypes}
          metricOutputs={metricOutputs}
          filteredItems={filtered}
          onSubmit={onCalculate}
          validate={validate}
          isCalculating={isCalculating}
          progressPercent={progressPercent}
          progressLabel={progressLabel}
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
