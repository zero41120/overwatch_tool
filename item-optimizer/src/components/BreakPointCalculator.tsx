import { useEffect, useMemo, useState } from "react";

import { useAppSelector } from "../hooks";
import type { Item } from "../types";
import type { BreakPointResult } from "../utils/breakpoint";
import { calculateBreakpoints } from "../utils/breakpoint";
import {
  computeJunoTorpedoBreakpoints,
  type JunoBreakpoint,
} from "../utils/junoBreakpoints";
import { buildJunoItems } from "../utils/junoItems";

interface Props {
  items: Item[];
}

export default function BreakPointCalculator({ items }: Props) {
  const [damage, setDamage] = useState(75); // ashe rifle default damage
  const [bullets, setBullets] = useState(1);
  const [hp, setHp] = useState(300); // reaper default HP
  const [armor, setArmor] = useState(0);
  const [penetrate, setPenetrate] = useState(false);
  const [rows, setRows] = useState<BreakPointResult[]>([]);
  const hero = useAppSelector((state) => state.input.present.hero);
  const [mode, setMode] = useState<"standard" | "juno">("standard");
  const [baseDamage, setBaseDamage] = useState(85);
  const [minCash, setMinCash] = useState(10000);
  const [maxCash, setMaxCash] = useState(70000);
  const [maxItems, setMaxItems] = useState(6);
  const [allowBurn, setAllowBurn] = useState(true);
  const [junoRows, setJunoRows] = useState<JunoBreakpoint[]>([]);

  useEffect(() => {
    if (hero === "Juno") {
      setMode("juno");
    } else {
      setMode("standard");
    }
  }, [hero]);

  const junoItems = useMemo(() => buildJunoItems(items), [items]);
  const [selected, setSelected] = useState<Set<string>>(new Set());

  useEffect(() => {
    setSelected(new Set(junoItems.map((item) => item.id)));
  }, [junoItems]);

  const sortedJunoItems = useMemo(() => {
    return junoItems.slice().sort((a, b) => {
      if (a.situational !== b.situational) {
        return a.situational ? -1 : 1;
      }
      if (a.cost !== b.cost) return a.cost - b.cost;
      return a.name.localeCompare(b.name);
    });
  }, [junoItems]);

  const onCalc = () => {
    setRows(calculateBreakpoints(damage, bullets, hp, armor, penetrate));
  };

  const onCalcJuno = () => {
    const enabled = sortedJunoItems.filter((item) => selected.has(item.id));
    const results = computeJunoTorpedoBreakpoints(enabled, {
      baseDamage,
      minCash,
      maxCash,
      maxItems,
      allowBurn,
    });
    setJunoRows(results);
  };

  const toggleItem = (id: string) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <div className="glass-card space-y-6 rounded-xl shadow-lg p-4 sm:p-6   dark:border-gray-700">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 sm:text-3xl">
        Damage Breakpoints
      </h2>
      <div className="flex gap-2">
        <button
          type="button"
          onClick={() => setMode("standard")}
          className={`px-3 py-1 rounded ${
            mode === "standard"
              ? "bg-indigo-600 text-white"
              : "bg-gray-200 text-gray-700 dark:bg-gray-800 dark:text-gray-200"
          }`}
        >
          Standard
        </button>
        {hero === "Juno" && (
          <button
            type="button"
            onClick={() => setMode("juno")}
            className={`px-3 py-1 rounded ${
              mode === "juno"
                ? "bg-indigo-600 text-white"
                : "bg-gray-200 text-gray-700 dark:bg-gray-800 dark:text-gray-200"
            }`}
          >
            Juno Torpedo
          </button>
        )}
      </div>
      {mode === "standard" && (
        <div className="space-y-4">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <label className="space-y-1">
              <span className="block text-sm text-gray-700 dark:text-gray-300">
                Damage per Bullet
              </span>
              <input
                type="number"
                value={damage}
                onChange={(e) => setDamage(Number(e.target.value))}
                className="w-full border rounded p-1 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-700"
              />
            </label>
            <label className="space-y-1">
              <span className="block text-sm text-gray-700 dark:text-gray-300">
                Bullets per Shot
              </span>
              <input
                type="number"
                value={bullets}
                onChange={(e) => setBullets(Number(e.target.value))}
                className="w-full border rounded p-1 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-700"
              />
            </label>
            <label className="space-y-1">
              <span className="block text-sm text-gray-700 dark:text-gray-300">
                Enemy HP
              </span>
              <input
                type="number"
                value={hp}
                onChange={(e) => setHp(Number(e.target.value))}
                className="w-full border rounded p-1 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-700"
              />
            </label>
            <label className="space-y-1">
              <span className="block text-sm text-gray-700 dark:text-gray-300">
                Enemy Armor
              </span>
              <input
                type="number"
                value={armor}
                onChange={(e) => setArmor(Number(e.target.value))}
                className="w-full border rounded p-1 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-700"
              />
            </label>
            <label className="flex items-center space-x-2 mt-6 text-gray-700 dark:text-gray-300">
              <input
                type="checkbox"
                checked={penetrate}
                onChange={(e) => setPenetrate(e.target.checked)}
              />
              <span>Using armor penetration item</span>
            </label>
          </div>
          <button
            onClick={onCalc}
            className="bg-indigo-600 text-white px-4 py-1 rounded hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600"
          >
            Calculate
          </button>
          {rows.length > 0 && (
            <div className="overflow-x-auto mt-4 max-h-96 overflow-y-auto">
              <table className="min-w-max w-full text-sm border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
                <thead>
                  <tr>
                    <th className="border px-2 py-1 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200">
                      Damage %
                    </th>
                    <th className="border px-2 py-1 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200">
                      Per Bullet
                    </th>
                    <th className="border px-2 py-1 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200">
                      Per Shot
                    </th>
                    <th className="border px-2 py-1 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200">
                      Shots
                    </th>
                    <th className="border px-2 py-1 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200">
                      Accumulated
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((r, idx) => {
                    const prev = idx > 0 ? rows[idx - 1].shots : r.shots;
                    const highlight = r.shots < prev;
                    const dmgPerBullet = (damage * r.percent) / 100;
                    const dmgPerShot = dmgPerBullet * bullets;
                    return (
                      <tr
                        key={r.percent}
                        className={highlight ? "bg-yellow-100 dark:bg-yellow-900" : ""}
                      >
                        <td className="border px-2 py-1 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100">
                          {r.percent}%
                        </td>
                        <td className="border px-2 py-1 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100">
                          {dmgPerBullet.toFixed(1)}
                        </td>
                        <td className="border px-2 py-1 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100">
                          {dmgPerShot.toFixed(1)}
                        </td>
                        <td className="border px-2 py-1 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100">
                          {r.shots}
                        </td>
                        <td className="border px-2 py-1 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100">
                          {r.totalDamage.toFixed(1)}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}
      {mode === "juno" && hero === "Juno" && (
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
              Juno Torpedo Breakpoints
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Toggle items to include in the calculation and compute the optimal damage breakpoints for
              Pulsar Torpedoes.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <label className="space-y-1">
              <span className="block text-sm text-gray-700 dark:text-gray-300">Base Damage</span>
              <input
                type="number"
                value={baseDamage}
                onChange={(e) => setBaseDamage(Number(e.target.value))}
                className="w-full border rounded p-1 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-700"
              />
            </label>
            <label className="space-y-1">
              <span className="block text-sm text-gray-700 dark:text-gray-300">Min Cash</span>
              <input
                type="number"
                value={minCash}
                onChange={(e) => setMinCash(Number(e.target.value))}
                className="w-full border rounded p-1 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-700"
              />
            </label>
            <label className="space-y-1">
              <span className="block text-sm text-gray-700 dark:text-gray-300">Max Cash</span>
              <input
                type="number"
                value={maxCash}
                onChange={(e) => setMaxCash(Number(e.target.value))}
                className="w-full border rounded p-1 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-700"
              />
            </label>
            <label className="space-y-1">
              <span className="block text-sm text-gray-700 dark:text-gray-300">Max Items</span>
              <input
                type="number"
                min={1}
                max={6}
                value={maxItems}
                onChange={(e) => setMaxItems(Number(e.target.value))}
                className="w-full border rounded p-1 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-700"
              />
            </label>
            <label className="flex items-center space-x-2 text-gray-700 dark:text-gray-300">
              <input
                type="checkbox"
                checked={allowBurn}
                onChange={(e) => setAllowBurn(e.target.checked)}
              />
              <span>Allow Skyline Nanites burn bonus</span>
            </label>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Enabled Items</h4>
            <div className="mt-2 grid gap-2 sm:grid-cols-2 lg:grid-cols-3 max-h-64 overflow-y-auto pr-2">
              {sortedJunoItems.map((item) => {
                const enabled = selected.has(item.id);
                return (
                  <label
                    key={item.id}
                    className={`flex items-start gap-2 rounded border p-2 text-sm ${
                      enabled
                        ? "border-indigo-500 bg-indigo-50 dark:border-indigo-400 dark:bg-indigo-900/30"
                        : "border-gray-200 dark:border-gray-700"
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={enabled}
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
                        Cost: ${item.cost.toLocaleString()} · AP: {item.ap.toFixed(1)} · Base +{item.baseAdd.toFixed(1)}
                      </div>
                    </div>
                  </label>
                );
              })}
              {sortedJunoItems.length === 0 && (
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  No items with Ability Power or survival stats available for Juno.
                </p>
              )}
            </div>
          </div>
          <button
            onClick={onCalcJuno}
            className="bg-indigo-600 text-white px-4 py-1 rounded hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600"
          >
            Compute Breakpoints
          </button>
          {junoRows.length > 0 ? (
            <div className="overflow-x-auto mt-4 max-h-96 overflow-y-auto">
              <table className="min-w-max w-full text-sm border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
                <thead>
                  <tr>
                    <th className="border px-2 py-1 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200">
                      Budget
                    </th>
                    <th className="border px-2 py-1 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200">
                      Spend
                    </th>
                    <th className="border px-2 py-1 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200">
                      Damage
                    </th>
                    <th className="border px-2 py-1 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200">
                      AP
                    </th>
                    <th className="border px-2 py-1 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200">
                      Flat Add
                    </th>
                    <th className="border px-2 py-1 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200">
                      Burn
                    </th>
                    <th className="border px-2 py-1 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200">
                      Survival
                    </th>
                    <th className="border px-2 py-1 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200">
                      Items
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {junoRows.map((row) => (
                    <tr key={`${row.budget}-${row.cost}`}>
                      <td className="border px-2 py-1 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100">
                        ${row.budget.toLocaleString()}
                      </td>
                      <td className="border px-2 py-1 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100">
                        ${row.cost.toLocaleString()}
                      </td>
                      <td className="border px-2 py-1 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100">
                        {row.damage.toFixed(2)}
                      </td>
                      <td className="border px-2 py-1 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100">
                        {row.ap.toFixed(1)}%
                      </td>
                      <td className="border px-2 py-1 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100">
                        +{row.baseAdd.toFixed(1)}
                      </td>
                      <td className="border px-2 py-1 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100">
                        {row.burn ? "Yes" : "No"}
                      </td>
                      <td className="border px-2 py-1 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100">
                        {row.survival.toFixed(1)}
                      </td>
                      <td className="border px-2 py-1 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100">
                        {row.names.join(", ")}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Select at least one item and run the calculation to see breakpoints.
            </p>
          )}
        </div>
      )}
    </div>
  );
}
