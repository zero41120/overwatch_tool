import type { Item, ResultCombo } from "../../types";
import BuildList from "./BuildList";

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
      <BuildList eqItems={eqItems} builds={builds} selected={selected} onSelect={onSelect} />
    </div>
  );
}
