import { useAppDispatch } from "../../hooks";
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

  return (
    <div className="relative">
      {showHeader && (
        <h3 className="mb-2 text-lg font-bold text-gray-900 dark:text-gray-200">Items Overview</h3>
      )}
      <div className="grid grid-cols-3 gap-4">
        {Array.from({ length: 6 }).map((_, idx) => {
          const it = allItems[idx];
          return (
            <div
              key={idx}
              className={`flex items-center border border-gray-200 dark:border-gray-700 p-1 min-h-12 ${!it ? "bg-gray-200 dark:bg-gray-800" : ""
                }`}
              style={{ color: it ? rarityColor(it.rarity) : undefined }}
              onMouseEnter={e =>
                it && dispatch(setTooltip({ item: it, x: e.clientX, y: e.clientY }))
              }
              onMouseMove={e =>
                it && dispatch(setTooltip({ item: it, x: e.clientX, y: e.clientY }))
              }
              onMouseLeave={() => dispatch(clearTooltip())}
            >
              {it ? (
                <>
                  {it.iconUrl && <img src={it.iconUrl} alt="" className="w-10 h-10" />}
                  <div
                    className="ml-2 flex-1 text-sm leading-tight overflow-hidden max-w-[7rem] break-words"
                    style={{
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      wordBreak: 'break-all',
                      hyphens: 'auto'
                    }}
                    title={it.name}
                  >
                    {it.name}
                  </div>
                </>
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}
