import { useState } from "react";
import type { Item } from "../types";
import { attributeValueToLabel } from "../utils/attributeUtils";
import ItemCard from "./shared/ItemCard";

interface Props {
  items: Item[];
}

export default function ItemGallery({ items }: Props) {
  const [selected, setSelected] = useState(items[0]);
  const [hovered, setHovered] = useState<Item | null>(null);
  const [editMode, setEditMode] = useState(false);

  const display = hovered || selected;

  return (
    <div className="relative space-y-4">
      <div>
        {display && (
          <ItemCard
            title={display.name}
            subtitle={display.tab}
            rarity={display.rarity}
            iconUrl={display.iconUrl}
            content={display.attributes.map((a) => ({
              text: `<strong>${a.value}</strong> <span class='font-sm text-[#8fa6d7]'>${attributeValueToLabel(a.type)}</span>`,
            }))}
            price={`${display.cost} G`}
          />
        )}
        <button
          type="button"
          className="mt-2 rounded bg-indigo-600 px-3 py-1 text-white hover:bg-indigo-700"
          onClick={() => setEditMode((v) => !v)}
        >
          Customize
        </button>
        {editMode && (
          <div className="mt-1 text-sm text-indigo-500">Edit mode enabled</div>
        )}
      </div>
      <div className="grid grid-cols-3 gap-4">
        {items.map((it, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setSelected(it)}
            onMouseEnter={() => setHovered(it)}
            onMouseLeave={() => setHovered(null)}
            className="flex flex-col items-center gap-1 p-2 rounded border dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            {it.iconUrl ? (
              <img
                src={it.iconUrl}
                alt=""
                className="h-12 w-12 rounded-full object-cover"
              />
            ) : (
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-200 text-xs text-gray-500">
                no icon :(
              </div>
            )}
            <span className="text-sm text-gray-800 dark:text-gray-200">
              {it.name}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
