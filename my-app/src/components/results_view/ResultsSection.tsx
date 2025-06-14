import type { Item, ResultCombo } from "../../types";
import AlternativeBuilds from "./AlternativeBuilds";
import BreakdownTable from "./BreakdownTable";
import FinalBuildList from "./FinalBuildList";
import ItemsOverviewTable from "./ItemsOverviewTable";
import NoResultsState from "./NoResultsState";
import StatsGrid from "./StatsGrid";

interface Props {
  eqItems: Item[];
  eqCost: number;
  cash: number;
  results: ResultCombo | null;
  alternatives: ResultCombo[];
}

export default function ResultsSection({
  eqItems,
  eqCost,
  cash,
  results,
  alternatives,
}: Props) {
  return (
    <div className="glass-card space-y-6 rounded-xl shadow-lg p-6 sm:p-8   dark:border-gray-700">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 sm:text-3xl">
        Results
      </h2>
      {results ? (
        <div className="space-y-6">
          <StatsGrid results={results} eqCost={eqCost} cash={cash} />
          <ItemsOverviewTable eqItems={eqItems} resultItems={results.items} />
          <BreakdownTable results={results} />
          <FinalBuildList eqItems={eqItems} resultItems={results.items} />
          <AlternativeBuilds alternatives={alternatives} />
        </div>
      ) : (
        <NoResultsState />
      )}
    </div>
  );
}
