import { useState } from "react";
import type { HeroMetadata, HeroPower, Item, ResultCombo } from "../../types";
import AllBuilds from "./AllBuilds";
import BreakdownTable from "./BreakdownTable";
import FinalBuildList from "./FinalBuildList";
import ItemsOverviewTable from "./ItemsOverviewTable";
import NoResultsState from "./NoResultsState";
import StatsGrid from "./StatsGrid";
import RecommendationPanel from "./RecommendationPanel";

interface Props {
  eqItems: Item[];
  eqCost: number;
  cash: number;
  builds: ResultCombo[];
  selected: number;
  results: ResultCombo | null; // For using the breakdown table
  onSelect: (idx: number) => void;
  allItems: Item[];
  powersByHero: Record<string, HeroPower[]>;
  heroMetadata: HeroMetadata[];
}

export default function ResultsSection({
  eqItems,
  eqCost,
  cash,
  builds,
  selected,
  results,
  onSelect,
  allItems,
  powersByHero,
  heroMetadata,
}: Props) {
  const current = builds[selected];
  const [tab, setTab] = useState<"results" | "recommendations">("results");

  return (
    <div className="glass-card space-y-6 rounded-xl shadow-lg p-4 sm:p-6 dark:border-gray-700">
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 sm:text-3xl">Results</h2>
        <div className="inline-flex overflow-hidden rounded-full border border-gray-300 dark:border-gray-600">
          <button
            type="button"
            onClick={() => setTab("results")}
            className={`px-3 py-1 text-sm sm:text-base transition-colors ${
              tab === "results"
                ? "bg-indigo-600 text-white"
                : "bg-white text-gray-700 dark:bg-gray-900 dark:text-gray-300"
            }`}
          >
            Results
          </button>
          <button
            type="button"
            onClick={() => setTab("recommendations")}
            className={`px-3 py-1 text-sm sm:text-base transition-colors ${
              tab === "recommendations"
                ? "bg-indigo-600 text-white"
                : "bg-white text-gray-700 dark:bg-gray-900 dark:text-gray-300"
            }`}
          >
            Recommendations
          </button>
        </div>
      </div>
      {tab === "results" ? (
        current ? (
          <div className="space-y-6">
            <StatsGrid results={current} eqCost={eqCost} cash={cash} />
            <BreakdownTable results={results} />
            <ItemsOverviewTable eqItems={eqItems} resultItems={current.items} />
            <AllBuilds eqItems={eqItems} builds={builds} selected={selected} onSelect={onSelect} />
            <FinalBuildList eqItems={eqItems} resultItems={current.items} />
          </div>
        ) : (
          <NoResultsState />
        )
      ) : (
        <RecommendationPanel
          allItems={allItems}
          powersByHero={powersByHero}
          heroMetadata={heroMetadata}
        />
      )}
    </div>
  );
}
