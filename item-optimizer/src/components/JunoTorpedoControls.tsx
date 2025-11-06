import type { Dispatch, SetStateAction } from "react";

import type { TorpedoItem } from "../utils/junoTypes";

interface Props {
  baseDamage: number;
  setBaseDamage: Dispatch<SetStateAction<number>>;
  maxItems: number;
  setMaxItems: Dispatch<SetStateAction<number>>;
  minCash: number;
  setMinCash: Dispatch<SetStateAction<number>>;
  maxCash: number;
  setMaxCash: Dispatch<SetStateAction<number>>;
  allowBurn: boolean;
  setAllowBurn: Dispatch<SetStateAction<boolean>>;
  items: TorpedoItem[];
  enabled: Set<string>;
  onToggle: (id: string) => void;
}

export default function JunoTorpedoControls({
  baseDamage,
  setBaseDamage,
  maxItems,
  setMaxItems,
  minCash,
  setMinCash,
  maxCash,
  setMaxCash,
  allowBurn,
  setAllowBurn,
  items,
  enabled,
  onToggle,
}: Props) {
  return (
    <section className="space-y-4">
      <div className="grid grid-cols-2 gap-4 text-sm">
        <LabeledNumber
          label="Base Damage"
          value={baseDamage}
          onChange={(value) => setBaseDamage(Math.max(0, value))}
        />
        <LabeledNumber
          label="Max Items"
          value={maxItems}
          min={1}
          max={6}
          onChange={(value) => setMaxItems(Math.max(1, Math.min(6, value)))}
        />
        <LabeledNumber
          label="Minimum Budget"
          value={minCash}
          onChange={(value) => setMinCash(Math.max(0, value))}
        />
        <LabeledNumber
          label="Maximum Budget"
          value={maxCash}
          onChange={(value) => setMaxCash(Math.max(0, value))}
        />
      </div>
      <label className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
        <input
          type="checkbox"
          checked={allowBurn}
          onChange={(e) => setAllowBurn(e.target.checked)}
          className="h-4 w-4"
        />
        Allow burn multiplier
      </label>
      <div className="max-h-72 space-y-2 overflow-y-auto pr-1">
        {items.length > 0 ? (
          items.map((item) => {
            const checked = enabled.has(item.id);
            return (
              <label
                key={item.id}
                className="flex items-start justify-between gap-3 rounded border border-gray-200 px-3 py-2 dark:border-gray-700"
              >
                <span>
                  <span className="flex items-center gap-2 text-sm font-semibold text-gray-900 dark:text-gray-100">
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={() => onToggle(item.id)}
                      className="h-4 w-4"
                    />
                    {item.name}
                    {item.situational && (
                      <span className="rounded bg-amber-200 px-2 py-0.5 text-xs uppercase text-amber-900 dark:bg-amber-500/30 dark:text-amber-200">
                        Situational
                      </span>
                    )}
                  </span>
                  <span className="mt-1 block text-xs text-gray-600 dark:text-gray-400">
                    ${item.cost.toLocaleString()} • AP {item.ap}% • +{item.baseAdd} dmg
                    {item.burn ? " • Burn" : ""}
                  </span>
                </span>
              </label>
            );
          })
        ) : (
          <p className="text-sm text-gray-600 dark:text-gray-400">No ability items detected for Juno.</p>
        )}
      </div>
    </section>
  );
}

interface LabeledNumberProps {
  label: string;
  value: number;
  min?: number;
  max?: number;
  onChange: (value: number) => void;
}

function LabeledNumber({ label, value, min, max, onChange }: LabeledNumberProps) {
  return (
    <label className="space-y-1">
      <span className="block text-gray-700 dark:text-gray-300">{label}</span>
      <input
        type="number"
        value={value}
        min={min}
        max={max}
        onChange={(e) => onChange(Number(e.target.value) || 0)}
        className="w-full rounded border border-gray-300 bg-white px-2 py-1 dark:border-gray-700 dark:bg-gray-800"
      />
    </label>
  );
}
