import type { Item, ResultCombo } from "../../types";
import ItemsOverviewTable from "./ItemsOverviewTable";

interface Props {
  eqItems: Item[];
  builds: ResultCombo[];
  selected: number;
  onSelect: (idx: number) => void;
}

export default function AllBuilds({ eqItems, builds, selected, onSelect }: Props) {
  if (builds.length === 0) return null;

  return (
    <div>
      <h3 className="text-lg font-bold text-gray-900 dark:text-gray-200">All Possible Builds</h3>
      <ul className="mt-2 space-y-4 max-h-64 overflow-y-auto rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 p-3">
        {builds.map((b, i) => (
          <li key={i} className="space-y-2">
            <label className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
              <input type="radio" name="build" checked={i === selected} onChange={() => onSelect(i)} className="mr-2" />
              Cost: {b.cost}
            </label>
            <ItemsOverviewTable eqItems={eqItems} resultItems={b.items} showHeader={false} />
          </li>
        ))}
      </ul>
    </div>
  );
}
