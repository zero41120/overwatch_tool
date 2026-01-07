import { useEffect, useMemo, useState } from "react";

import type { Item } from "../../types";
import {
  computeJunoMediblasterBreakpoints,
  type MediblasterBreakpoint,
} from "../../utils/junoMediblasterBreakpoints";
import { useJunoMediblasterItems } from "../../utils/junoMediblasterItems";
import JunoBreakpointsControls from "./JunoBreakpointsControls";
import { formatStat, numberFormatter, type SelectableItem } from "./JunoBreakpointsShared";
import JunoMediblasterInputs from "./JunoMediblasterInputs";
import JunoMediblasterTable from "./JunoMediblasterTable";

type Props = {
  items: Item[];
};

export default function JunoMediblasterTab({ items }: Props) {
  const mediblasterItems = useJunoMediblasterItems(items);
  const itemByName = useMemo(() => {
    const map = new Map<string, Item>();
    items.forEach((it) => map.set(it.name.toLowerCase(), it));
    return map;
  }, [items]);

  const selectableItems = useMemo(
    () =>
      mediblasterItems.filter(
        (item) => item.wp > 0 || item.as > 0 || item.weaponMultiplier > 0 || item.ma > 0 || item.situational,
      ),
    [mediblasterItems],
  );
  const selectableList = useMemo<SelectableItem[]>(
    () =>
      selectableItems.map((item) => ({
        id: item.id,
        name: item.name,
        cost: item.cost,
        situational: item.situational,
        details: `Cost: ${numberFormatter.format(item.cost)} · WP: ${formatStat(item.wp)}% · AS: ${formatStat(
          item.as,
        )}% · WM: ${formatStat(item.weaponMultiplier)}% · MA: ${formatStat(item.ma)}%`,
      })),
    [selectableItems],
  );
  const defaultSelection = useMemo(() => selectableItems.map((item) => item.id), [selectableItems]);

  const [enabledIds, setEnabledIds] = useState<string[]>(defaultSelection);
  const [minCash, setMinCash] = useState(10000);
  const [maxCash, setMaxCash] = useState(70000);
  const [maxItems, setMaxItems] = useState(6);
  const [rows, setRows] = useState<MediblasterBreakpoint[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [hasCalculated, setHasCalculated] = useState(false);

  useEffect(() => {
    setEnabledIds(defaultSelection);
  }, [defaultSelection]);

  const enabledSet = useMemo(() => new Set(enabledIds), [enabledIds]);

  const toggleItem = (id: string) => {
    setEnabledIds((prev) => (prev.includes(id) ? prev.filter((entry) => entry !== id) : [...prev, id]));
  };

  const handleCompute = () => {
    setError(null);
    setHasCalculated(true);

    if (minCash > maxCash) {
      setError("Minimum cash must be less than or equal to maximum cash.");
      setRows([]);
      return;
    }

    if (maxItems < 1 || maxItems > 6) {
      setError("Maximum items must be between 1 and 6.");
      setRows([]);
      return;
    }

    const selectedItems = mediblasterItems.filter((item) => enabledSet.has(item.id));
    if (selectedItems.length === 0) {
      setError("Enable at least one item to evaluate.");
      setRows([]);
      return;
    }

    const result = computeJunoMediblasterBreakpoints(selectedItems, {
      maxCash,
      minCash,
      maxItems,
    });

    if (result.length === 0) {
      setError("No valid combinations found for the selected budgets.");
    }

    setRows(result);
  };

  return (
    <div className="space-y-5">
      <JunoBreakpointsControls
        description="Toggle items to include and compute Juno mediblaster DPS breakpoints across budgets. Output is prioritized; survival breaks ties."
        inputs={
          <JunoMediblasterInputs
            maxItems={maxItems}
            onMaxItemsChange={setMaxItems}
            minCash={minCash}
            onMinCashChange={setMinCash}
            maxCash={maxCash}
            onMaxCashChange={setMaxCash}
          />
        }
        enabledCount={enabledIds.length}
        totalCount={mediblasterItems.length}
        items={selectableList}
        enabledSet={enabledSet}
        onToggle={toggleItem}
        onCompute={handleCompute}
        onSelectAll={() => setEnabledIds(selectableItems.map((it) => it.id))}
        onClearAll={() => setEnabledIds([])}
        error={error}
      />

      {rows.length > 0 ? (
        <JunoMediblasterTable rows={rows} itemByName={itemByName} />
      ) : (
        hasCalculated &&
        !error && <p className="text-sm text-gray-600 dark:text-gray-300">No improvements found within the selected budgets.</p>
      )}
    </div>
  );
}
