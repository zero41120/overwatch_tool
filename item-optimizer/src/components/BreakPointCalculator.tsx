import { useState } from "react";

import type { BreakPointResult } from "../utils/breakpoint";
import { calculateBreakpoints } from "../utils/breakpoint";

export default function BreakPointCalculator() {
  const [damage, setDamage] = useState(75); // ashe rifle default damage
  const [bullets, setBullets] = useState(1);
  const [hp, setHp] = useState(300); // reaper default HP
  const [armor, setArmor] = useState(0);
  const [penetrate, setPenetrate] = useState(false);
  const [rows, setRows] = useState<BreakPointResult[]>([]);
  const onCalc = () => {
    setRows(calculateBreakpoints(damage, bullets, hp, armor, penetrate));
  };

  return (
    <div className="glass-card space-y-6 rounded-xl shadow-lg p-6 sm:p-8   dark:border-gray-700">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 sm:text-3xl">
        Damage Breakpoints
      </h2>
      {/* Always show the content, no collapse */}
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
                      className={
                        highlight ? "bg-yellow-100 dark:bg-yellow-900" : ""
                      }
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
    </div>
  );
}
