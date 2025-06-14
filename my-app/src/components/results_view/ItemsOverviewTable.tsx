import type { Item } from "../../types";
import { sortItemsOverview } from "../../utils/item";
import { rarityColor } from "../../utils/utils";

interface Props {
  eqItems: Item[];
  resultItems: Item[];
}

export default function ItemsOverviewTable({ eqItems, resultItems }: Props) {
  const allItems = [...eqItems, ...resultItems].sort(sortItemsOverview);

  return (
    <div>
      <h3 className="text-lg font-bold text-gray-900 dark:text-gray-200 mb-2">
        Items Overview
      </h3>
      <table className="w-full text-left border-collapse mb-4">
        <tbody>
          {Array.from({ length: 2 }).map((_, rowIdx) => (
            <tr key={rowIdx}>
              {allItems.slice(rowIdx * 3, rowIdx * 3 + 3).map((it, colIdx) => (
                <td
                  key={colIdx}
                  className="px-2 py-1 border border-gray-200 dark:border-gray-700 text-sm font-medium text-gray-800 dark:text-gray-100 min-w-[80px]"
                  style={{ color: it ? rarityColor(it.rarity) : undefined }}
                >
                  {it ? it.name : ""}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
