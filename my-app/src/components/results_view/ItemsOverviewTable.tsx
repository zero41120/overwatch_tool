import { useState } from "react";
import type { Item } from "../../types";
import { sortItemsOverview } from "../../utils/item";
import { rarityColor } from "../../utils/utils";
import ItemCard from "../shared/ItemCard";

interface Props {
  eqItems: Item[];
  resultItems: Item[];
  showHeader?: boolean;
}

export default function ItemsOverviewTable({ eqItems, resultItems, showHeader = true }: Props) {
  const allItems = [...eqItems, ...resultItems].sort(sortItemsOverview);

  const [hover, setHover] = useState<{
    item: Item;
    x: number;
    y: number;
  } | null>(null);

  return (
    <div className="relative">
      {showHeader && <h3 className="text-lg font-bold text-gray-900 dark:text-gray-200 mb-2">Items Overview</h3>}
      <div className="grid grid-cols-3 gap-2 w-fit">
        {Array.from({ length: 6 }).map((_, idx) => {
          const it = allItems[idx];
          return (
            <div
              key={idx}
              className="w-32 h-16 flex flex-col items-center justify-center border border-gray-200 dark:border-gray-700 text-center text-sm font-medium text-gray-800 dark:text-gray-100"
              style={{ color: it ? rarityColor(it.rarity) : undefined }}
              onMouseEnter={(e) => it && setHover({ item: it, x: e.clientX + 10, y: e.clientY + 10 })}
              onMouseLeave={() => setHover(null)}
            >
              {it && (
                <>
                  {it.iconUrl && <img src={it.iconUrl} alt="" width={40} height={40} className="inline-block mb-1" />}
                  <span className="leading-tight break-words">{it.name}</span>
                </>
              )}
            </div>
          );
        })}
      </div>
      {hover && (
        <div className="fixed z-50" style={{ top: hover.y, left: hover.x }}>
          <ItemCard
            title={hover.item.name}
            subtitle={hover.item.tab}
            rarity={hover.item.rarity}
            iconUrl={hover.item.iconUrl}
            content={hover.item.attributes.map((a) => ({ text: a.value }))}
            price={hover.item.cost}
          />
        </div>
      )}
    </div>
  );
}
