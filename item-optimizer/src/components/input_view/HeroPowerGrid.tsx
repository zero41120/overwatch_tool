import { useEffect, useMemo, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { clearHeroPowers, toggleHeroPower } from "../../slices/inputSlice";
import type { HeroPower } from "../../types";
import { ALL_HEROES, NO_HERO } from "../../types";

interface Props {
  powersByHero: Record<string, HeroPower[]>;
}

export default function HeroPowerGrid({ powersByHero }: Props) {
  const hero = useAppSelector((state) => state.input.present.hero);
  const selected = useAppSelector((state) => state.input.present.heroPowers);
  const dispatch = useAppDispatch();
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const powers = useMemo(() => {
    const list = powersByHero[hero] || [];
    if (!list.length) return list;
    return [...list].sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
  }, [hero, powersByHero]);
  useEffect(() => {
    setExpanded({});
  }, [hero]);

  if (!hero || hero === NO_HERO || hero === ALL_HEROES) {
    return null;
  }

  const limitReached = selected.length >= 4;
  const onSelect = (power: HeroPower) => {
    dispatch(toggleHeroPower(power.name));
  };

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">Power Pick</p>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Stadium Powers</h3>
          <p className="text-xs text-gray-500 dark:text-gray-400">Select up to 4 powers</p>
        </div>
        {selected.length > 0 && (
          <button
            type="button"
            className="text-sm text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300"
            onClick={() => dispatch(clearHeroPowers())}
          >
            Clear selection
          </button>
        )}
      </div>
      {powers.length === 0 ? (
        <div className="rounded-lg border border-dashed border-gray-300 bg-white/70 p-4 text-sm text-gray-500 shadow-sm dark:border-gray-700 dark:bg-gray-800/60 dark:text-gray-300">
          No powers for this hero yet
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {powers.map((power) => {
            const isSelected = selected.includes(power.name);
            const isExpanded = expanded[power.name] || false;
            const disabled = limitReached && !isSelected;
            return (
              <div
                key={power.name}
                role="button"
                tabIndex={disabled ? -1 : 0}
                aria-pressed={isSelected}
                aria-disabled={disabled}
                onClick={() => {
                  if (!disabled) onSelect(power);
                }}
                onKeyDown={(event) => {
                  if (disabled) return;
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    onSelect(power);
                  }
                }}
                className={`flex h-full flex-col items-start gap-2 rounded-lg border p-3 text-left shadow-sm transition focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:shadow-none ${
                  isSelected
                    ? "border-indigo-500 bg-indigo-50/70 dark:border-indigo-400 dark:bg-indigo-900/40"
                    : "border-gray-200 bg-white hover:border-indigo-400 dark:border-gray-700 dark:bg-gray-800 dark:hover:border-indigo-400"
                } ${disabled ? "cursor-not-allowed opacity-60" : ""}`}
              >
                <div className="flex w-full items-center gap-2">
                  {power.iconUrl && <img src={power.iconUrl} alt="" className="h-10 w-10 rounded" />}
                  <div>
                    <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">{power.name}</p>
                    {power.affectedAbility && (
                      <p className="text-xs text-gray-500 dark:text-gray-400">Affects {power.affectedAbility}</p>
                    )}
                  </div>
                </div>
                {power.description && (
                  <div className="w-full text-left">
                    <button
                      type="button"
                      className="text-xs font-semibold uppercase tracking-wide text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300"
                      onClick={(event) => {
                        event.preventDefault();
                        event.stopPropagation();
                        setExpanded((prev) => ({ ...prev, [power.name]: !isExpanded }));
                      }}
                    >
                      {isExpanded ? "Hide details" : "Show details"}
                    </button>
                    {isExpanded && (
                      <p
                        className="mt-2 text-sm leading-snug text-gray-700 dark:text-gray-200"
                        dangerouslySetInnerHTML={{ __html: power.description }}
                      />
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
