import { useEffect, useMemo, useState } from "react";

import type { Item } from "../types";
import {
  computeJunoTorpedoBreakpoints,
  type TorpedoBreakpoint,
} from "../utils/junoBreakpoints";
import { useJunoTorpedoItems } from "../utils/junoItems";
import ItemsOverviewTable from "./results_view/ItemsOverviewTable";

type Props = {
  items: Item[];
};

function formatStat(value: number) {
  return Number.isInteger(value) ? value.toString() : value.toFixed(1);
}

const numberFormatter = new Intl.NumberFormat();

export default function JunoTorpedoCalculator({ items }: Props) {
  const torpedoItems = useJunoTorpedoItems(items);
  const itemByName = useMemo(() => {
    const map = new Map<string, Item>();
    items.forEach((it) => map.set(it.name.toLowerCase(), it));
    return map;
  }, [items]);
  // Show items that affect torpedo damage: AP, Base Add, or known situational items (e.g., Skyline Nanites)
  const selectableItems = useMemo(
    () => torpedoItems.filter((item) => item.ap > 0 || item.baseAdd > 0 || item.situational),
    [torpedoItems],
  );
  const defaultSelection = useMemo(() => selectableItems.map((item) => item.id), [selectableItems]);

  const [enabledIds, setEnabledIds] = useState<string[]>(defaultSelection);
  const [baseDamage, setBaseDamage] = useState(85);
  const [minCash, setMinCash] = useState(10000);
  const [maxCash, setMaxCash] = useState(70000);
  const [maxItems, setMaxItems] = useState(6);
  const [rows, setRows] = useState<TorpedoBreakpoint[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [hasCalculated, setHasCalculated] = useState(false);

  useEffect(() => {
    setEnabledIds(defaultSelection);
  }, [defaultSelection]);

  const enabledSet = useMemo(() => new Set(enabledIds), [enabledIds]);
  // quick situational toggle pills removed; keep placeholder to satisfy JSX condition (empty)
  const quickToggles: any[] = [];

  const toggleItem = (id: string) => {
    setEnabledIds((prev) => (prev.includes(id) ? prev.filter((entry) => entry !== id) : [...prev, id]));
  };

  const handleCompute = () => {
    setError(null);
    setHasCalculated(true);

    if (minCash > maxCash) {
      setError("Minimum cash must be less than or equal to maximum cash.");
      setRows([]);
      return;
    }

    if (maxItems < 1 || maxItems > 6) {
      setError("Maximum items must be between 1 and 6.");
      setRows([]);
      return;
    }

    const selectedItems = torpedoItems.filter((item) => enabledSet.has(item.id));
    if (selectedItems.length === 0) {
      setError("Enable at least one item to evaluate.");
      setRows([]);
      return;
    }

    const result = computeJunoTorpedoBreakpoints(selectedItems, {
      baseDamage,
      maxCash,
      minCash,
      maxItems,
    });

    if (result.length === 0) {
      setError("No valid combinations found for the selected budgets.");
    }

    setRows(result);
  };

  return (
    <div className="space-y-5">
      <p className="text-sm text-gray-600 dark:text-gray-400">
        Toggle items to include and compute Juno torpedo damage breakpoints across budgets. Damage is prioritized; survival
        breaks ties.
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="space-y-1 text-sm">
          <span className="text-gray-700 dark:text-gray-300">Base Torpedo Damage</span>
          <input
            type="number"
            value={baseDamage}
            min={0}
            onChange={(event) => setBaseDamage(Number(event.target.value))}
            className="w-full border rounded p-1 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-700"
          />
        </label>
        <label className="space-y-1 text-sm">
          <span className="text-gray-700 dark:text-gray-300">Max Items</span>
          <input
            type="number"
            value={maxItems}
            min={1}
            max={6}
            onChange={(event) => setMaxItems(Number(event.target.value))}
            className="w-full border rounded p-1 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-700"
          />
        </label>
        <label className="space-y-1 text-sm">
          <span className="text-gray-700 dark:text-gray-300">Minimum Budget</span>
          <input
            type="number"
            value={minCash}
            min={0}
            step={500}
            onChange={(event) => setMinCash(Number(event.target.value))}
            className="w-full border rounded p-1 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-700"
          />
        </label>
        <label className="space-y-1 text-sm">
          <span className="text-gray-700 dark:text-gray-300">Maximum Budget</span>
          <input
            type="number"
            value={maxCash}
            min={0}
            step={500}
            onChange={(event) => setMaxCash(Number(event.target.value))}
            className="w-full border rounded p-1 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-700"
          />
        </label>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <span className="text-xs text-gray-500 dark:text-gray-400">
          {enabledIds.length} of {torpedoItems.length} items enabled
        </span>
      </div>

      {quickToggles.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {quickToggles.map((item) => {
            const checked = enabledSet.has(item.id);
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => toggleItem(item.id)}
                className={`px-3 py-1 text-sm rounded-full border transition-colors ${
                  checked
                    ? "bg-indigo-600 text-white border-indigo-600"
                    : "border-gray-300 text-gray-700 dark:text-gray-300 dark:border-gray-600"
                }`}
              >
                {checked ? "✓ " : ""}
                {item.name}
              </button>
            );
          })}
        </div>
      )}

      <div>
        <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Enabled items</h4>
        <div className="mt-2 grid gap-2 sm:grid-cols-2 lg:grid-cols-3 max-h-64 overflow-y-auto pr-2">
          {selectableItems.map((item) => {
            const checked = enabledSet.has(item.id);
            return (
              <label
                key={item.id}
                className={`flex items-start gap-2 rounded border p-2 text-sm ${
                  checked
                    ? "border-indigo-500 bg-indigo-50 dark:border-indigo-400 dark:bg-indigo-900/30"
                    : "border-gray-200 dark:border-gray-700"
                }`}
              >
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={() => toggleItem(item.id)}
                  className="mt-1"
                />
                <div>
                  <div className="font-medium text-gray-900 dark:text-gray-100">
                    {item.name}
                    {item.situational && (
                      <span className="ml-2 rounded bg-amber-200 px-1 py-0.5 text-xs font-semibold text-amber-900 dark:bg-amber-500/30 dark:text-amber-200">
                        situational
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">
                    Cost: {numberFormatter.format(item.cost)} · AP: {formatStat(item.ap)}% · Base +{formatStat(item.baseAdd)}
                  </div>
                </div>
              </label>
            );
          })}
          {selectableItems.length === 0 && (
            <p className="text-sm text-gray-600 dark:text-gray-400">No compatible items available.</p>
          )}
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={handleCompute}
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600"
        >
          Compute breakpoints
        </button>
        <button
          type="button"
          onClick={() => setEnabledIds(selectableItems.map((it) => it.id))}
          className="text-sm text-gray-600 dark:text-gray-300 underline"
        >
          Select all
        </button>
        <button
          type="button"
          onClick={() => setEnabledIds([])}
          className="text-sm text-gray-600 dark:text-gray-300 underline"
        >
          Clear all
        </button>
      </div>

      {error && <p className="text-sm text-red-500 dark:text-red-400">{error}</p>}

      {rows.length > 0 ? (
        <div className="overflow-x-auto mt-4 max-h-96 overflow-y-auto">
          <table className="min-w-max w-full text-sm border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
            <thead>
              <tr>
                <th className="border px-2 py-1 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200">$</th>
                <th className="border px-2 py-1 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200">DMG</th>
                <th className="border px-2 py-1 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200">AP</th>
                <th className="border px-2 py-1 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200">Base</th>
                <th className="border px-2 py-1 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200">Items</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={`${row.budget}-${row.cost}`}>
                  <td className="border px-2 py-1 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100">
                    {numberFormatter.format(row.cost)}
                  </td>
                  <td className="border px-2 py-1 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100">
                    {row.damage.toFixed(1)}
                  </td>
                  <td className="border px-2 py-1 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100">
                    {formatStat(row.ap)}%
                  </td>
                  <td className="border px-2 py-1 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100">
                    {formatStat(row.baseAdd)}
                  </td>
                  <td className="border px-2 py-1 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100 align-top">
                    {(() => {
                      const resultItems = row.names
                        .map((n) => itemByName.get(n.toLowerCase()))
                        .filter((it): it is Item => Boolean(it));
                      return (
                        <div className="max-w-[480px]">
                          <ItemsOverviewTable eqItems={[]} resultItems={resultItems} showHeader={false} />
                        </div>
                      );
                    })()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        hasCalculated && !error && (
          <p className="text-sm text-gray-600 dark:text-gray-300">No improvements found within the selected budgets.</p>
        )
      )}
    </div>
  );
}
