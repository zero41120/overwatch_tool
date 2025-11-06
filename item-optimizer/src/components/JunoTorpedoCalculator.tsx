import { useEffect, useMemo, useState } from "react";

import type { Item } from "../types";
import {
  computeJunoTorpedoBreakpoints,
  type TorpedoBreakpoint,
} from "../utils/junoBreakpoints";
import { SITUATIONAL_PRIORITY, useJunoTorpedoItems } from "../utils/junoItems";

type Props = {
  items: Item[];
};

function formatStat(value: number) {
  return Number.isInteger(value) ? value.toString() : value.toFixed(1);
}

const numberFormatter = new Intl.NumberFormat();

export default function JunoTorpedoCalculator({ items }: Props) {
  const torpedoItems = useJunoTorpedoItems(items);
  const defaultSelection = useMemo(() => torpedoItems.slice(0, 6).map((item) => item.id), [torpedoItems]);

  const [enabledIds, setEnabledIds] = useState<string[]>(defaultSelection);
  const [allowBurn, setAllowBurn] = useState(true);
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

  const quickToggles = useMemo(
    () =>
      SITUATIONAL_PRIORITY.map((name) => torpedoItems.find((item) => item.name === name)).filter(
        (item): item is (typeof torpedoItems)[number] => Boolean(item),
      ),
    [torpedoItems],
  );

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
      allowBurn,
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
        Enumerate all enabled items to find torpedo damage breakpoints across budgets. Damage is prioritized, with survival stats
        breaking ties.
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
        <label className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
          <input type="checkbox" checked={allowBurn} onChange={(event) => setAllowBurn(event.target.checked)} />
          <span>Allow burn multiplier</span>
        </label>
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

      <div className="border border-gray-200 dark:border-gray-700 rounded-lg max-h-64 overflow-y-auto bg-white dark:bg-gray-900">
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {torpedoItems.map((item) => {
            const checked = enabledSet.has(item.id);
            return (
              <li key={item.id} className="flex items-center justify-between gap-3 px-3 py-2">
                <label className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-200">
                  <input type="checkbox" checked={checked} onChange={() => toggleItem(item.id)} />
                  <div>
                    <div className="font-medium">{item.name}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      Cost: {numberFormatter.format(item.cost)} • AP: {formatStat(item.ap)}%
                    </div>
                  </div>
                </label>
                <div className="text-xs text-right text-gray-500 dark:text-gray-400">
                  <div>Base +{formatStat(item.baseAdd)}</div>
                  <div>HP {formatStat(item.hp)}</div>
                  <div>Survival {formatStat(item.dr + item.hps + item.wp + item.lifesteal)}</div>
                </div>
              </li>
            );
          })}
          {torpedoItems.length === 0 && (
            <li className="px-3 py-4 text-sm text-gray-500 dark:text-gray-400">No compatible items available.</li>
          )}
        </ul>
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
          onClick={() => setEnabledIds([])}
          className="text-sm text-gray-600 dark:text-gray-300 underline"
        >
          Clear all
        </button>
      </div>

      {error && <p className="text-sm text-red-500 dark:text-red-400">{error}</p>}

      {rows.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
            <thead className="bg-gray-100 dark:bg-gray-800">
              <tr>
                <th className="px-3 py-2 border border-gray-200 dark:border-gray-700 text-left">Budget</th>
                <th className="px-3 py-2 border border-gray-200 dark:border-gray-700 text-left">Spend</th>
                <th className="px-3 py-2 border border-gray-200 dark:border-gray-700 text-left">Damage</th>
                <th className="px-3 py-2 border border-gray-200 dark:border-gray-700 text-left">AP</th>
                <th className="px-3 py-2 border border-gray-200 dark:border-gray-700 text-left">Base Add</th>
                <th className="px-3 py-2 border border-gray-200 dark:border-gray-700 text-left">Burn</th>
                <th className="px-3 py-2 border border-gray-200 dark:border-gray-700 text-left">Survival</th>
                <th className="px-3 py-2 border border-gray-200 dark:border-gray-700 text-left">Items</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={`${row.budget}-${row.cost}`} className="odd:bg-white even:bg-gray-50 dark:odd:bg-gray-900 dark:even:bg-gray-800">
                  <td className="px-3 py-2 border border-gray-200 dark:border-gray-700">
                    {numberFormatter.format(row.budget)}
                  </td>
                  <td className="px-3 py-2 border border-gray-200 dark:border-gray-700">
                    {numberFormatter.format(row.cost)}
                  </td>
                  <td className="px-3 py-2 border border-gray-200 dark:border-gray-700">
                    {row.damage.toFixed(1)}
                  </td>
                  <td className="px-3 py-2 border border-gray-200 dark:border-gray-700">
                    {formatStat(row.ap)}%
                  </td>
                  <td className="px-3 py-2 border border-gray-200 dark:border-gray-700">
                    {formatStat(row.baseAdd)}
                  </td>
                  <td className="px-3 py-2 border border-gray-200 dark:border-gray-700">
                    {row.burn ? "Yes" : "No"}
                  </td>
                  <td className="px-3 py-2 border border-gray-200 dark:border-gray-700">
                    {row.survival.toFixed(1)}
                  </td>
                  <td className="px-3 py-2 border border-gray-200 dark:border-gray-700">
                    {row.names.join(", ")}
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
