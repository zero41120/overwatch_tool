import { useAppDispatch, useAppSelector } from "../../hooks";
import { addAvoid, toggleAvoidEnabled } from "../../slices/inputSlice";
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
  const allItems = [...eqItems, ...resultItems].sort(sortItemsOverview);
  const dispatch = useAppDispatch();
  const avoidEnabled = useAppSelector((state) => state.input.present.avoidEnabled);

  return (
    <div className="relative">
      {showHeader && (
        <h3 className="mb-2 text-lg font-bold text-gray-900 dark:text-gray-200">Items Overview</h3>
      )}
      <div className="grid grid-cols-3 gap-4">
        {Array.from({ length: 6 }).map((_, idx) => {
          const it = allItems[idx];
          const handleAvoid = () => {
            if (!it) return;
            if (!avoidEnabled) dispatch(toggleAvoidEnabled());
            dispatch(addAvoid(it.id || it.name));
          };
          return (
            <div
              key={idx}
              className={`group relative flex items-center gap-2 rounded-lg border p-2 min-h-[72px] transition shadow-sm ${
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
                  <button
                    type="button"
                    aria-label={`Avoid ${it.name}`}
                    className="absolute right-2 top-2 rounded-full border border-red-200 bg-white/90 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-red-600 opacity-0 transition hover:border-red-300 hover:text-red-700 group-hover:opacity-100 dark:border-red-900/60 dark:bg-slate-900/80 dark:text-red-300 dark:hover:text-red-200"
                    onClick={handleAvoid}
                  >
                    Avoid
                  </button>
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
