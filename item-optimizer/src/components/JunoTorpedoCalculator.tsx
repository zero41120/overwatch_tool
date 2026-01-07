import { useState } from "react";

import type { Item } from "../types";
import JunoMediblasterTab from "./juno/JunoMediblasterTab";
import JunoTorpedoTab from "./juno/JunoTorpedoTab";

type Props = {
  items: Item[];
};

export default function JunoTorpedoCalculator({ items }: Props) {
  const [mode, setMode] = useState<"torpedo" | "mediblaster">("torpedo");

  return (
    <div className="space-y-6">
      <div className="inline-flex overflow-hidden rounded-full border border-gray-300 dark:border-gray-600">
        <button
          type="button"
          onClick={() => setMode("torpedo")}
          className={`px-3 py-1 text-sm sm:text-base transition-colors ${
            mode === "torpedo"
              ? "bg-indigo-600 text-white"
              : "bg-white text-gray-700 dark:bg-gray-900 dark:text-gray-300"
          }`}
        >
          Torpedo
        </button>
        <button
          type="button"
          onClick={() => setMode("mediblaster")}
          className={`px-3 py-1 text-sm sm:text-base transition-colors ${
            mode === "mediblaster"
              ? "bg-indigo-600 text-white"
              : "bg-white text-gray-700 dark:bg-gray-900 dark:text-gray-300"
          }`}
        >
          Mediblaster
        </button>
      </div>
      {mode === "torpedo" ? <JunoTorpedoTab items={items} /> : <JunoMediblasterTab items={items} />}
    </div>
  );
}
