import type { Item, ResultCombo } from "../../types";
import ItemsOverviewTable from "./ItemsOverviewTable";

interface Props {
  eqItems: Item[];
  builds: ResultCombo[];
  selected: number;
  onSelect: (idx: number) => void;
}

export default function BuildList({ eqItems, builds, selected, onSelect }: Props) {
  if (builds.length === 0) return null;
  const sorted = builds
    .map((b, idx) => ({ build: b, idx }))
    .sort((a, b) => a.build.cost - b.build.cost || b.build.items.length - a.build.items.length);
  return (
    <ul className="mt-2 space-y-4 max-h-64 overflow-y-auto rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 p-3">
      {sorted.map(({ build, idx }) => (
        <li key={idx} className="space-y-2">
          <label className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
            <input
              type="radio"
              name="build"
              checked={idx === selected}
              onChange={() => onSelect(idx)}
              className="mr-2"
            />
            Cost: {build.cost}
          </label>
          <ItemsOverviewTable eqItems={eqItems} resultItems={build.items} showHeader={false} />
        </li>
      ))}
    </ul>
  );
}
