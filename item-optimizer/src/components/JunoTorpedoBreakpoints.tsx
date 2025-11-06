import { useEffect, useMemo, useState } from "react";

import type { Item } from "../types";
import { buildJunoTorpedoItems } from "../utils/junoItems";
import type { JunoBreakpoint, TorpedoItem } from "../utils/junoBreakpoints";
import { computeJunoTorpedoBreakpoints } from "../utils/junoBreakpoints";

interface Props {
  items: Item[];
}

type OptionsState = {
  baseDamage: number;
  minCash: number;
  maxCash: number;
  maxItems: number;
  allowBurn: boolean;
};

const DEFAULT_OPTIONS: OptionsState = {
  baseDamage: 85,
  minCash: 10000,
  maxCash: 70000,
  maxItems: 6,
  allowBurn: true,
};

export default function JunoTorpedoBreakpoints({ items }: Props) {
  const torpedoItems = useMemo(() => buildJunoTorpedoItems(items), [items]);
  const [enabledIds, setEnabledIds] = useState<Set<string>>(new Set());
  const [options, setOptions] = useState<OptionsState>(DEFAULT_OPTIONS);
  const [rows, setRows] = useState<JunoBreakpoint[]>([]);

  useEffect(() => {
    setEnabledIds(new Set(torpedoItems.map((it) => it.id)));
  }, [torpedoItems]);

  useEffect(() => {
    if (torpedoItems.length === 0) {
      setRows([]);
      return;
    }
    const enabledItems = torpedoItems.filter((it) => enabledIds.has(it.id));
    if (enabledItems.length === 0) {
      setRows([]);
      return;
    }
    const result = computeJunoTorpedoBreakpoints(enabledItems, options);
    setRows(result);
  }, [enabledIds, options, torpedoItems]);

  function onToggle(id: string) {
    setEnabledIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  }

  function onOptionChange(key: keyof OptionsState, value: number | boolean) {
    setOptions((prev) => ({
      ...prev,
      [key]: value,
    }));
  }

  function renderItemRow(item: TorpedoItem) {
    const enabled = enabledIds.has(item.id);
    return (
      <label
        key={item.id}
        className="flex items-center justify-between gap-4 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm dark:border-gray-700 dark:bg-gray-900"
      >
        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            checked={enabled}
            onChange={() => onToggle(item.id)}
            className="size-4"
          />
          <div>
            <p className="font-medium text-gray-900 dark:text-gray-100">{item.name}</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Cost {item.cost.toLocaleString()} · AP {item.ap}% · Base +{item.baseAdd}
            </p>
          </div>
        </div>
        {item.situational && (
          <span className="rounded bg-amber-200 px-2 py-1 text-xs font-semibold text-amber-900 dark:bg-amber-900 dark:text-amber-100">
            Situational
          </span>
        )}
      </label>
    );
  }

  return (
    <div className="glass-card space-y-6 rounded-xl p-4 shadow-lg dark:border-gray-700">
      <div className="space-y-1">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 sm:text-3xl">
          Juno Torpedo Breakpoints
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          Enumerate item combinations that maximize Pulsar Torpedoes damage within your budget.
        </p>
      </div>

      {torpedoItems.length === 0 ? (
        <p className="text-sm text-gray-500 dark:text-gray-400">
          No relevant items with Ability Power or torpedo bonuses were found for Juno.
        </p>
      ) : (
        <div className="space-y-6">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <label className="space-y-1">
              <span className="text-sm text-gray-700 dark:text-gray-300">Base Damage</span>
              <input
                type="number"
                value={options.baseDamage}
                onChange={(event) => onOptionChange("baseDamage", Number(event.target.value))}
                className="w-full rounded border border-gray-300 bg-white p-2 text-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
              />
            </label>
            <label className="space-y-1">
              <span className="text-sm text-gray-700 dark:text-gray-300">Min Budget</span>
              <input
                type="number"
                value={options.minCash}
                onChange={(event) => onOptionChange("minCash", Number(event.target.value))}
                className="w-full rounded border border-gray-300 bg-white p-2 text-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
              />
            </label>
            <label className="space-y-1">
              <span className="text-sm text-gray-700 dark:text-gray-300">Max Budget</span>
              <input
                type="number"
                value={options.maxCash}
                onChange={(event) => onOptionChange("maxCash", Number(event.target.value))}
                className="w-full rounded border border-gray-300 bg-white p-2 text-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
              />
            </label>
            <label className="space-y-1">
              <span className="text-sm text-gray-700 dark:text-gray-300">Max Items</span>
              <input
                type="number"
                min={1}
                max={6}
                value={options.maxItems}
                onChange={(event) =>
                  onOptionChange("maxItems", Math.min(6, Math.max(1, Number(event.target.value))))
                }
                className="w-full rounded border border-gray-300 bg-white p-2 text-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
              />
            </label>
            <label className="flex items-center gap-2 pt-6 text-sm text-gray-700 dark:text-gray-300">
              <input
                type="checkbox"
                checked={options.allowBurn}
                onChange={(event) => onOptionChange("allowBurn", event.target.checked)}
                className="size-4"
              />
              Allow burn multiplier
            </label>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Enabled items</h3>
            <div className="grid gap-3">
              {torpedoItems.map((item) => renderItemRow(item))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Breakpoints</h3>
            {rows.length === 0 ? (
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Enable at least one item to compute torpedo breakpoints.
              </p>
            ) : (
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 text-sm dark:divide-gray-700">
                  <thead className="bg-gray-100 dark:bg-gray-800">
                    <tr>
                      <th className="px-3 py-2 text-left font-semibold text-gray-700 dark:text-gray-200">Budget</th>
                      <th className="px-3 py-2 text-left font-semibold text-gray-700 dark:text-gray-200">Spend</th>
                      <th className="px-3 py-2 text-left font-semibold text-gray-700 dark:text-gray-200">Damage</th>
                      <th className="px-3 py-2 text-left font-semibold text-gray-700 dark:text-gray-200">AP</th>
                      <th className="px-3 py-2 text-left font-semibold text-gray-700 dark:text-gray-200">Base Add</th>
                      <th className="px-3 py-2 text-left font-semibold text-gray-700 dark:text-gray-200">Burn</th>
                      <th className="px-3 py-2 text-left font-semibold text-gray-700 dark:text-gray-200">Items</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    {rows.map((row) => (
                      <tr key={`${row.budget}-${row.names.join("-")}`} className="bg-white dark:bg-gray-900">
                        <td className="px-3 py-2 text-gray-900 dark:text-gray-100">{row.budget.toLocaleString()}</td>
                        <td className="px-3 py-2 text-gray-900 dark:text-gray-100">{row.cost.toLocaleString()}</td>
                        <td className="px-3 py-2 text-gray-900 dark:text-gray-100">{row.damage.toFixed(1)}</td>
                        <td className="px-3 py-2 text-gray-900 dark:text-gray-100">{row.ap.toFixed(1)}%</td>
                        <td className="px-3 py-2 text-gray-900 dark:text-gray-100">+{row.baseAdd.toFixed(1)}</td>
                        <td className="px-3 py-2 text-gray-900 dark:text-gray-100">{row.burn ? "Yes" : "No"}</td>
                        <td className="px-3 py-2 text-gray-900 dark:text-gray-100">{row.names.join(", ")}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
