import { useAppDispatch, useAppSelector } from "../../hooks";
import {
  addAvoid,
  addEquippedSlot,
  setEquipped,
  setToBuy,
  toggleAvoidEnabled,
  toggleEquippedEnabled,
} from "../../slices/inputSlice";
import { clearTooltip, setTooltip } from "../../slices/tooltipSlice";
import type { Item } from "../../types";
import { sortItemsOverview } from "../../utils/item";
import { rarityColor } from "../../utils/utils";

interface Props {
  eqItems: Item[];
  resultItems: Item[];
  showHeader?: boolean;
}

export default function ItemsOverviewTable({ eqItems, resultItems, showHeader = true }: Props) {
  const dispatch = useAppDispatch();
  const avoidEnabled = useAppSelector((state) => state.input.present.avoidEnabled);
  const equipped = useAppSelector((state) => state.input.present.equipped);
  const equippedEnabled = useAppSelector((state) => state.input.present.equippedEnabled);
  const toBuy = useAppSelector((state) => state.input.present.toBuy);
  const equippedSet = new Set(equipped.filter(Boolean));
  const allItems = [...eqItems, ...resultItems].sort((a, b) => {
    const aKey = a.id || a.name;
    const bKey = b.id || b.name;
    const aEquipped = equippedSet.has(aKey);
    const bEquipped = equippedSet.has(bKey);
    if (aEquipped !== bEquipped) return aEquipped ? -1 : 1;
    return sortItemsOverview(a, b);
  });

  return (
    <div className="relative">
      {showHeader && (
        <h3 className="mb-2 text-lg font-bold text-gray-900 dark:text-gray-200">Items Overview</h3>
      )}
      <div className="grid grid-cols-3 gap-4">
        {Array.from({ length: 6 }).map((_, idx) => {
          const it = allItems[idx];
          const itemKey = it ? it.id || it.name : "";
          const equippedIndex = itemKey ? equipped.findIndex((id) => id === itemKey) : -1;
          const hasEmptySlot = equipped.some((id) => !id);
          const isEquipped = equippedIndex >= 0;
          const equipDisabled = !isEquipped && !hasEmptySlot && equipped.length >= 6;
          const handleAvoid = () => {
            if (!it) return;
            if (!avoidEnabled) dispatch(toggleAvoidEnabled());
            dispatch(addAvoid(it.id || it.name));
          };
          const handleEquip = () => {
            if (!it) return;
            if (isEquipped) {
              dispatch(setToBuy(Math.min(6, toBuy + 1)));
              dispatch(setEquipped({ index: equippedIndex, id: "" }));
              return;
            }
            dispatch(setToBuy(Math.max(0, toBuy - 1)));
            if (!equippedEnabled) dispatch(toggleEquippedEnabled());
            if (hasEmptySlot) {
              const emptyIndex = equipped.findIndex((id) => !id);
              dispatch(setEquipped({ index: emptyIndex, id: itemKey }));
              return;
            }
            if (equipped.length < 6) {
              const nextIndex = equipped.length;
              dispatch(addEquippedSlot());
              dispatch(setEquipped({ index: nextIndex, id: itemKey }));
            }
          };
          return (
            <div
              key={idx}
              className={`group relative flex min-h-12 min-h-[92px] flex-col justify-between rounded-lg border p-2 transition shadow-sm ${
                it
                  ? "border-slate-200/80 bg-white/80 hover:border-slate-300 hover:shadow-md dark:border-slate-700/80 dark:bg-slate-900/60 dark:hover:border-slate-600"
                  : "border-dashed border-slate-200 bg-slate-100/70 dark:border-slate-700 dark:bg-slate-900/40"
              }`}
              style={{ color: it ? rarityColor(it.rarity) : undefined }}
              onMouseEnter={e => it && dispatch(setTooltip({ item: it, x: e.clientX, y: e.clientY }))}
              onMouseMove={e => it && dispatch(setTooltip({ item: it, x: e.clientX, y: e.clientY }))}
              onMouseLeave={() => dispatch(clearTooltip())}
            >
              {it ? (
                <>
                  <div className="flex items-center gap-2">
                    {it.iconUrl && (
                      <img src={it.iconUrl} alt="" className="h-11 w-11 rounded-md object-cover bg-slate-900/5" />
                    )}
                    <div className="flex min-w-0 flex-1 flex-col">
                      <div
                        className="text-sm font-semibold leading-tight overflow-hidden max-w-[9rem] break-words"
                        style={{
                          display: "-webkit-box",
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: "vertical",
                          wordBreak: "break-word",
                          hyphens: "auto",
                        }}
                        title={it.name}
                      >
                        {it.name}
                      </div>
                      <div className="mt-1 text-xs font-mono text-slate-500 dark:text-slate-400">
                        {it.cost} G
                      </div>
                    </div>
                  </div>
                  <div className="mt-2 flex items-center justify-between border-t border-slate-200/70 pt-1 text-[10px] font-semibold uppercase tracking-wide dark:border-slate-700/70">
                    <button
                      type="button"
                      aria-label={`Equip ${it.name}`}
                      aria-pressed={isEquipped}
                      disabled={equipDisabled}
                      className={`rounded-full px-2 py-0.5 transition ${
                        isEquipped
                          ? "bg-emerald-500/15 text-emerald-700 dark:text-emerald-300"
                          : "text-emerald-600 hover:bg-emerald-500/10 dark:text-emerald-300"
                      } ${equipDisabled ? "cursor-not-allowed opacity-40" : ""}`}
                      onClick={handleEquip}
                    >
                      {isEquipped ? "Equipped" : "Equip"}
                    </button>
                    <button
                      type="button"
                      aria-label={`Avoid ${it.name}`}
                      className="rounded-full px-2 py-0.5 text-red-500 transition hover:bg-red-500/10 hover:text-red-600 dark:text-red-300"
                      onClick={handleAvoid}
                    >
                      Avoid
                    </button>
                  </div>
                </>
              ) : (
                <div className="text-xs font-semibold uppercase tracking-wide text-slate-400 dark:text-slate-600">
                  Empty slot
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
