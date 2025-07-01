import { useState } from "react";
import type { Item } from "../types";
import { attributeValueToLabel } from "../utils/attributeUtils";
import { rarityColor } from "../utils/utils";
import ItemCard from "./shared/ItemCard";
import SearchableDropdown from "./shared/SearchableDropdown";

interface Props {
  items: Item[];
}

export default function ItemGallery({ items }: Props) {
  const [selected, setSelected] = useState(items[0]);
  const [hovered, setHovered] = useState<Item | null>(null);
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null);
  const [editMode, setEditMode] = useState(false);
  const [folded, setFolded] = useState(false);
  const [search, setSearch] = useState("");

  const display = hovered || selected;
  const filtered = items.filter((it) =>
    it.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="relative space-y-4">
      {hovered && pos && (
        <div
          className="absolute z-20 pointer-events-none"
          style={{ left: pos.x + 10, top: pos.y + 10 }}
        >
          <ItemCard
            title={hovered.name}
            subtitle={hovered.tab}
            rarity={hovered.rarity}
            iconUrl={hovered.iconUrl}
            content={hovered.attributes.map((a) => ({
              text: `<strong>${a.value}</strong> <span class='font-sm text-[#8fa6d7]'>${attributeValueToLabel(a.type)}</span>`,
            }))}
            price={`${hovered.cost} G`}
          />
        </div>
      )}
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
        <div className="mt-2 flex items-center gap-2">
          <button
            type="button"
            className="rounded bg-indigo-600 px-3 py-1 text-white hover:bg-indigo-700"
            onClick={() => setEditMode((v) => !v)}
          >
            Customize
          </button>
          <button
            type="button"
            onClick={() => setFolded((v) => !v)}
            className="rounded bg-gray-200 px-3 py-1 text-sm hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
          >
            {folded ? "Show" : "Hide"}
          </button>
        </div>
        {editMode && (
          <div className="mt-1 text-sm text-indigo-500">Edit mode enabled</div>
        )}
      </div>
      {!folded && (
        <>
          <SearchableDropdown
            label="Filter Items"
            options={[
              { value: "", label: "All Items" },
              ...items.map((it) => ({
                value: it.name,
                label: it.name,
                color: rarityColor(it.rarity),
              })),
            ]}
            value={search}
            onChange={setSearch}
            className="w-full"
          />
          <div className="grid grid-cols-3 gap-4 overflow-y-auto max-h-96">
            {filtered.map((it, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setSelected(it)}
                onMouseEnter={(e) => {
                  setHovered(it);
                  setPos({ x: e.clientX, y: e.clientY });
                }}
                onMouseMove={(e) => setPos({ x: e.clientX, y: e.clientY })}
                onMouseLeave={() => {
                  setHovered(null);
                  setPos(null);
                }}
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
        </>
      )}
    </div>
  );
}
