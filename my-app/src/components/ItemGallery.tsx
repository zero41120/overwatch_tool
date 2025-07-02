import { useState } from "react";
import type { Item } from "../types";
import { attributeValueToLabel } from "../utils/attributeUtils";
import { getTooltipStyle } from "../utils/tooltipUtils";
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

  const filtered = items.filter((it) =>
    it.name.toLowerCase().includes(search.toLowerCase()),
  );

  // Tooltip size estimate
  const TOOLTIP_HEIGHT = 180;
  const TOOLTIP_WIDTH = 320;
  const OFFSET = 12;

  return (
    <div className="glass-card space-y-6 rounded-xl shadow-lg p-6 sm:p-8  dark:border-gray-700">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 sm:text-3xl">Configuration</h2>
      <div className="relative">
        {hovered && pos && (
          <div
            style={getTooltipStyle(pos.x, pos.y, {
              width: TOOLTIP_WIDTH,
              height: TOOLTIP_HEIGHT,
              offset: OFFSET,
            })}
            className="shadow-lg rounded-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700"
          >
            <ItemCard
              title={hovered.name}
              subtitle={hovered.tab}
              rarity={hovered.rarity}
              iconUrl={hovered.iconUrl}
              content={hovered.attributes.map((a) => ({
                text: `<strong>${a.value}</strong> <span class='font-sm text-[#8fa6d7]'>${attributeValueToLabel(
                  a.type,
                )}</span>`,
              }))}
              price={`${hovered.cost} G`}
              width={320}
            />
          </div>
        )}
        <div>
          {selected && (
            <ItemCard
              title={selected.name}
              subtitle={selected.tab}
              rarity={selected.rarity}
              iconUrl={selected.iconUrl}
              content={selected.attributes.map((a) => ({
                text: `<strong>${a.value}</strong> <span class='font-sm text-[#8fa6d7]'>${attributeValueToLabel(
                  a.type,
                )}</span>`,
              }))}
              price={`${selected.cost} G`}
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
            <div className="grid grid-cols-3 gap-4 overflow-y-auto max-h-96 pt-4">
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
                    // setHovered(null);
                    // setPos(null);
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
    </div>
  );
}
