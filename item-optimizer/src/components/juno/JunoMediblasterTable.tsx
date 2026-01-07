import type { Item } from "../../types";
import type { MediblasterBreakpoint } from "../../utils/junoMediblasterBreakpoints";
import ItemsOverviewTable from "../results_view/ItemsOverviewTable";
import { formatStat, numberFormatter } from "./JunoBreakpointsShared";

type Props = {
  rows: MediblasterBreakpoint[];
  itemByName: Map<string, Item>;
};

export default function JunoMediblasterTable({ rows, itemByName }: Props) {
  return (
    <div className="overflow-x-auto mt-4 max-h-96 overflow-y-auto">
      <table className="min-w-max w-full text-sm border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
        <thead>
          <tr>
            <th className="border px-2 py-1 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200">$</th>
            <th className="border px-2 py-1 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200">Stats</th>
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
                <div className="space-y-0.5">
                  <div>DPS {row.output.toFixed(0)}</div>
                  <div>WP {formatStat(row.wp)}%</div>
                  <div>AS {formatStat(row.as)}%</div>
                  <div>WM {formatStat(row.weaponMultiplier)}%</div>
                </div>
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
  );
}
