import { useState } from "react";

import type { BreakPointResult } from "../utils/breakpoint";
import { calculateBreakpoints } from "../utils/breakpoint";

export default function StandardBreakPointCalculator() {
  const [damage, setDamage] = useState(75);
  const [bullets, setBullets] = useState(1);
  const [hp, setHp] = useState(300);
  const [armor, setArmor] = useState(0);
  const [penetrate, setPenetrate] = useState(false);
  const [rows, setRows] = useState<BreakPointResult[]>([]);

  const onCalc = () => {
    setRows(calculateBreakpoints(damage, bullets, hp, armor, penetrate));
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <label className="space-y-1">
          <span className="block text-sm text-gray-700 dark:text-gray-300">Damage per Bullet</span>
          <input
            type="number"
            value={damage}
            onChange={(event) => setDamage(Number(event.target.value))}
            className="w-full border rounded p-1 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-700"
          />
        </label>
        <label className="space-y-1">
          <span className="block text-sm text-gray-700 dark:text-gray-300">Bullets per Shot</span>
          <input
            type="number"
            value={bullets}
            onChange={(event) => setBullets(Number(event.target.value))}
            className="w-full border rounded p-1 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-700"
          />
        </label>
        <label className="space-y-1">
          <span className="block text-sm text-gray-700 dark:text-gray-300">Enemy HP</span>
          <input
            type="number"
            value={hp}
            onChange={(event) => setHp(Number(event.target.value))}
            className="w-full border rounded p-1 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-700"
          />
        </label>
        <label className="space-y-1">
          <span className="block text-sm text-gray-700 dark:text-gray-300">Enemy Armor</span>
          <input
            type="number"
            value={armor}
            onChange={(event) => setArmor(Number(event.target.value))}
            className="w-full border rounded p-1 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-700"
          />
        </label>
        <label className="flex items-center space-x-2 mt-6 text-gray-700 dark:text-gray-300">
          <input
            type="checkbox"
            checked={penetrate}
            onChange={(event) => setPenetrate(event.target.checked)}
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
              {rows.map((row, index) => {
                const previousShots = index > 0 ? rows[index - 1].shots : row.shots;
                const highlight = row.shots < previousShots;
                const damagePerBullet = (damage * row.percent) / 100;
                const damagePerShot = damagePerBullet * bullets;
                return (
                  <tr
                    key={row.percent}
                    className={highlight ? "bg-yellow-100 dark:bg-yellow-900" : ""}
                  >
                    <td className="border px-2 py-1 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100">
                      {row.percent}%
                    </td>
                    <td className="border px-2 py-1 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100">
                      {damagePerBullet.toFixed(1)}
                    </td>
                    <td className="border px-2 py-1 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100">
                      {damagePerShot.toFixed(1)}
                    </td>
                    <td className="border px-2 py-1 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100">
                      {row.shots}
                    </td>
                    <td className="border px-2 py-1 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100">
                      {row.totalDamage.toFixed(1)}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
