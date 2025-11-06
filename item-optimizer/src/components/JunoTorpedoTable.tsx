import type { TorpedoBreakpoint } from "../utils/junoBreakpoints";
import type { TorpedoItem } from "../utils/junoTypes";

interface Props {
  breakpoints: TorpedoBreakpoint[];
  enabledCount: number;
  items: TorpedoItem[];
  onSelectAll: () => void;
}

export default function JunoTorpedoTable({ breakpoints, enabledCount, items, onSelectAll }: Props) {
  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
        <span>{enabledCount} item(s) enabled</span>
        <button
          type="button"
          onClick={onSelectAll}
          disabled={items.length === 0}
          className="rounded bg-indigo-600 px-3 py-1 text-white transition hover:bg-indigo-700 disabled:opacity-60 dark:bg-indigo-500 dark:hover:bg-indigo-600"
        >
          Select all
        </button>
      </div>
      <div className="overflow-x-auto rounded border border-gray-200 dark:border-gray-700">
        {breakpoints.length > 0 ? (
          <table className="min-w-full text-sm text-gray-900 dark:text-gray-100">
            <thead className="bg-gray-100 dark:bg-gray-800">
              <tr>
                <th className="px-3 py-2 text-left">Budget</th>
                <th className="px-3 py-2 text-left">Spend</th>
                <th className="px-3 py-2 text-left">Damage</th>
                <th className="px-3 py-2 text-left">AP</th>
                <th className="px-3 py-2 text-left">Flat</th>
                <th className="px-3 py-2 text-left">Burn</th>
                <th className="px-3 py-2 text-left">Items</th>
              </tr>
            </thead>
            <tbody>
              {breakpoints.map((row) => (
                <tr key={`${row.budget}-${row.cost}`} className="border-t border-gray-200 dark:border-gray-700">
                  <td className="px-3 py-2">${row.budget.toLocaleString()}</td>
                  <td className="px-3 py-2">${row.cost.toLocaleString()}</td>
                  <td className="px-3 py-2">{row.damage.toFixed(1)}</td>
                  <td className="px-3 py-2">{row.ap.toFixed(1)}%</td>
                  <td className="px-3 py-2">+{row.baseAdd.toFixed(1)}</td>
                  <td className="px-3 py-2">{row.burn ? "Yes" : "No"}</td>
                  <td className="px-3 py-2">{row.names.join(", ")}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="p-6 text-sm text-gray-600 dark:text-gray-400">
            Enable at least one item to build torpedo breakpoints within the budget window.
          </div>
        )}
      </div>
    </section>
  );
}
