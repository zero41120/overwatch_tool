import { useEffect, useMemo, useState } from "react";

import type { Item } from "../../types";
import {
  computeJunoTorpedoBreakpoints,
  type TorpedoBreakpoint,
} from "../../utils/junoBreakpoints";
import { useJunoTorpedoItems } from "../../utils/junoItems";
import JunoBreakpointsControls from "./JunoBreakpointsControls";
import { formatStat, numberFormatter, type SelectableItem } from "./JunoBreakpointsShared";
import JunoTorpedoInputs from "./JunoTorpedoInputs";
import JunoTorpedoTable from "./JunoTorpedoTable";

type Props = {
  items: Item[];
};

export default function JunoTorpedoTab({ items }: Props) {
  const torpedoItems = useJunoTorpedoItems(items);
  const itemByName = useMemo(() => {
    const map = new Map<string, Item>();
    items.forEach((it) => map.set(it.name.toLowerCase(), it));
    return map;
  }, [items]);

  const selectableItems = useMemo(
    () => torpedoItems.filter((item) => item.ap > 0 || item.baseAdd > 0 || item.situational),
    [torpedoItems],
  );
  const selectableList = useMemo<SelectableItem[]>(
    () =>
      selectableItems.map((item) => ({
        id: item.id,
        name: item.name,
        cost: item.cost,
        situational: item.situational,
        details: `Cost: ${numberFormatter.format(item.cost)} · AP: ${formatStat(item.ap)}% · Base +${formatStat(
          item.baseAdd,
        )}`,
      })),
    [selectableItems],
  );
  const defaultSelection = useMemo(() => selectableItems.map((item) => item.id), [selectableItems]);

  const [enabledIds, setEnabledIds] = useState<string[]>(defaultSelection);
  const [baseDamage, setBaseDamage] = useState(85);
  const [minCash, setMinCash] = useState(10000);
  const [maxCash, setMaxCash] = useState(70000);
  const [maxItems, setMaxItems] = useState(6);
  const [rows, setRows] = useState<TorpedoBreakpoint[]>([]);
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

    const selectedItems = torpedoItems.filter((item) => enabledSet.has(item.id));
    if (selectedItems.length === 0) {
      setError("Enable at least one item to evaluate.");
      setRows([]);
      return;
    }

    const result = computeJunoTorpedoBreakpoints(selectedItems, {
      baseDamage,
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
        description="Toggle items to include and compute Juno torpedo damage breakpoints across budgets. Damage is prioritized; survival breaks ties."
        inputs={
          <JunoTorpedoInputs
            baseDamage={baseDamage}
            onBaseDamageChange={setBaseDamage}
            maxItems={maxItems}
            onMaxItemsChange={setMaxItems}
            minCash={minCash}
            onMinCashChange={setMinCash}
            maxCash={maxCash}
            onMaxCashChange={setMaxCash}
          />
        }
        enabledCount={enabledIds.length}
        totalCount={torpedoItems.length}
        items={selectableList}
        enabledSet={enabledSet}
        onToggle={toggleItem}
        onCompute={handleCompute}
        onSelectAll={() => setEnabledIds(selectableItems.map((it) => it.id))}
        onClearAll={() => setEnabledIds([])}
        error={error}
      />

      {rows.length > 0 ? (
        <JunoTorpedoTable rows={rows} itemByName={itemByName} />
      ) : (
        hasCalculated &&
        !error && <p className="text-sm text-gray-600 dark:text-gray-300">No improvements found within the selected budgets.</p>
      )}
    </div>
  );
}
