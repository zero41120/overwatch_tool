import type { Item, ResultCombo } from "../../types";
import AllBuilds from "./AllBuilds";
import BreakdownTable from "./BreakdownTable";
import FinalBuildList from "./FinalBuildList";
import ItemsOverviewTable from "./ItemsOverviewTable";
import NoResultsState from "./NoResultsState";
import StatsGrid from "./StatsGrid";

interface Props {
  eqItems: Item[];
  eqCost: number;
  cash: number;
  builds: ResultCombo[];
  selected: number;
  onSelect: (idx: number) => void;
}

export default function ResultsSection({ eqItems, eqCost, cash, builds, selected, onSelect }: Props) {
  const current = builds[selected];

  return (
    <div className="glass-card space-y-6 rounded-xl shadow-lg p-6 sm:p-8   dark:border-gray-700">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 sm:text-3xl">Results</h2>
      {current ? (
        <div className="space-y-6">
          <StatsGrid results={current} eqCost={eqCost} cash={cash} />
          <ItemsOverviewTable eqItems={eqItems} resultItems={current.items} />
          <BreakdownTable results={current} />
          <FinalBuildList eqItems={eqItems} resultItems={current.items} />
          <AllBuilds eqItems={eqItems} builds={builds} selected={selected} onSelect={onSelect} />
        </div>
      ) : (
        <NoResultsState />
      )}
    </div>
  );
}
