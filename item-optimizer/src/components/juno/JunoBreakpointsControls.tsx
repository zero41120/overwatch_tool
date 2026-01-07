import type { ReactNode } from "react";

import { JunoItemSelector, type SelectableItem } from "./JunoBreakpointsShared";

type Props = {
  description: string;
  inputs: ReactNode;
  enabledCount: number;
  totalCount: number;
  items: SelectableItem[];
  enabledSet: Set<string>;
  onToggle: (id: string) => void;
  onCompute: () => void;
  onSelectAll: () => void;
  onClearAll: () => void;
  error: string | null;
};

export default function JunoBreakpointsControls({
  description,
  inputs,
  enabledCount,
  totalCount,
  items,
  enabledSet,
  onToggle,
  onCompute,
  onSelectAll,
  onClearAll,
  error,
}: Props) {
  return (
    <>
      <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>

      <div className="grid gap-4 sm:grid-cols-2">{inputs}</div>

      <div className="flex flex-wrap items-center gap-3">
        <span className="text-xs text-gray-500 dark:text-gray-400">
          {enabledCount} of {totalCount} items enabled
        </span>
      </div>

      <JunoItemSelector items={items} enabledSet={enabledSet} onToggle={onToggle} />

      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onCompute}
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600"
        >
          Compute breakpoints
        </button>
        <button type="button" onClick={onSelectAll} className="text-sm text-gray-600 dark:text-gray-300 underline">
          Select all
        </button>
        <button type="button" onClick={onClearAll} className="text-sm text-gray-600 dark:text-gray-300 underline">
          Clear all
        </button>
      </div>

      {error && <p className="text-sm text-red-500 dark:text-red-400">{error}</p>}
    </>
  );
}
