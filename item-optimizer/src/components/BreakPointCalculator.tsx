import { useEffect, useRef, useState } from "react";

import type { Item } from "../types";
import { useAppSelector } from "../hooks";
import JunoTorpedoCalculator from "./JunoTorpedoCalculator";
import StandardBreakPointCalculator from "./StandardBreakPointCalculator";

type Props = {
  items: Item[];
};

export default function BreakPointCalculator({ items }: Props) {
  const hero = useAppSelector((state) => state.input.present.hero);
  const [mode, setMode] = useState<"standard" | "juno">(hero === "Juno" ? "juno" : "standard");
  const previousHero = useRef(hero);

  useEffect(() => {
    if (hero !== "Juno") {
      setMode("standard");
    } else if (previousHero.current !== hero) {
      setMode("juno");
    }
    previousHero.current = hero;
  }, [hero]);

  const showToggle = hero === "Juno";

  return (
    <div className="glass-card space-y-6 rounded-xl shadow-lg p-4 sm:p-6 dark:border-gray-700">
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 sm:text-3xl">Damage Breakpoints</h2>
        {showToggle && (
          <div className="inline-flex overflow-hidden rounded-full border border-gray-300 dark:border-gray-600">
            <button
              type="button"
              onClick={() => setMode("standard")}
              className={`px-3 py-1 text-sm sm:text-base transition-colors ${
                mode === "standard"
                  ? "bg-indigo-600 text-white"
                  : "bg-white text-gray-700 dark:bg-gray-900 dark:text-gray-300"
              }`}
            >
              Standard
            </button>
            <button
              type="button"
              onClick={() => setMode("juno")}
              className={`px-3 py-1 text-sm sm:text-base transition-colors ${
                mode === "juno"
                  ? "bg-indigo-600 text-white"
                  : "bg-white text-gray-700 dark:bg-gray-900 dark:text-gray-300"
              }`}
            >
              Juno Torpedo
            </button>
          </div>
        )}
      </div>
      {showToggle && mode === "juno" ? (
        <JunoTorpedoCalculator items={items} />
      ) : (
        <StandardBreakPointCalculator />
      )}
    </div>
  );
}
