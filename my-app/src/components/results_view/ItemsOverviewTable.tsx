import { useState } from "react";
import type { Item } from "../../types";
import { sortItemsOverview } from "../../utils/item";
import { getTooltipStyle } from "../../utils/tooltipUtils";
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

  const TOOLTIP_HEIGHT = 180;
  const TOOLTIP_WIDTH = 320;
  const OFFSET = 12;

  return (
    <div className="relative">
      {hover && (
        <div
          style={getTooltipStyle(hover.x, hover.y, {
            width: TOOLTIP_WIDTH,
            height: TOOLTIP_HEIGHT,
            offset: OFFSET,
          })}
          className="transform-none shadow-lg rounded-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700"
        >
          <ItemCard
            title={hover.item.name}
            subtitle={hover.item.tab}
            rarity={hover.item.rarity}
            iconUrl={hover.item.iconUrl}
            content={hover.item.attributes.map((a) => ({ text: a.value }))}
            price={hover.item.cost}
            width={320}
          />
        </div>
      )}
      {showHeader && (
        <h3 className="mb-2 text-lg font-bold text-gray-900 dark:text-gray-200">Items Overview</h3>
      )}
      <div className="grid grid-cols-3 gap-4">
        {Array.from({ length: 6 }).map((_, idx) => {
          const it = allItems[idx];
          return (
            <div
              key={idx}
              className="flex items-center border border-gray-200 dark:border-gray-700 p-1"
              style={{ color: it ? rarityColor(it.rarity) : undefined }}
              onMouseEnter={(e) => it && setHover({ item: it, x: e.clientX, y: e.clientY })}
              onMouseMove={(e) => it && setHover({ item: it, x: e.clientX, y: e.clientY })}
            // onMouseLeave={() => setHover(null)}
            >
              {it && (
                <>
                  {it.iconUrl && <img src={it.iconUrl} alt="" className="w-10 h-10" />}
                  <div className="ml-2 flex-1 break-words text-sm leading-tight">{it.name}</div>
                </>
              )}
            </div>
          );
        })}
      </div>

    </div>
  );
}
