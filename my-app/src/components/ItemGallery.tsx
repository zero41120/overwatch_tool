import { useState } from "react";
import { useAppDispatch } from "../hooks";
import { clearTooltip, setTooltip } from "../slices/tooltipSlice";
import { bumpOverrideKey } from "../slices/inputSlice";
import type { Item } from "../types";
import { attributeValueToLabel } from "../utils/attributeUtils";
import { rarityColor } from "../utils/utils";
import ItemCard from "./shared/ItemCard";
import SearchableDropdown from "./shared/SearchableDropdown";
import ItemOverrideEditor from "./ItemOverrideEditor";
export const loadOverrides = () =>
  JSON.parse(localStorage.getItem("localOverrides") || "{}");
export const saveOverrides = (d: Record<string, unknown>) =>
  localStorage.setItem("localOverrides", JSON.stringify(d));
export const deleteOverrides = () => localStorage.removeItem("localOverrides");
interface Props {
  items: Item[];
  heroes: string[];
  attrTypes: string[];
}

export default function ItemGallery({ items, heroes, attrTypes }: Props) {
  const [selected, setSelected] = useState(items[0]);
  const [editMode, setEditMode] = useState(false);
  const [showSaved, setShowSaved] = useState(false);
  const [folded, setFolded] = useState(false);
  const [search, setSearch] = useState("");
  const dispatch = useAppDispatch();
  const filtered = items.filter((it) =>
    it.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="glass-card space-y-6 rounded-xl shadow-lg p-6 sm:p-8  dark:border-gray-700">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 sm:text-3xl">Configuration</h2>
      <div className="relative">
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
            <ItemOverrideEditor
              item={selected}
              heroes={heroes}
              attrTypes={attrTypes}
              onClose={() => {
                setEditMode(false);
                dispatch(bumpOverrideKey());
              }}
            />
          )}
          <button
            type="button"
            className="mt-2 text-sm underline"
            onClick={() => setShowSaved((v) => !v)}
          >
            {showSaved ? "Hide" : "View"} locally saved
          </button>
          {showSaved && (
            <pre className="mt-2 max-h-40 overflow-y-auto border p-2 text-xs">
              {JSON.stringify(loadOverrides(), null, 2)}
            </pre>
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
                  iconUrl: it.iconUrl,
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
                  onMouseEnter={(e) =>
                    dispatch(
                      setTooltip({ item: it, x: e.clientX, y: e.clientY }),
                    )
                  }
                  onMouseMove={(e) =>
                    dispatch(
                      setTooltip({ item: it, x: e.clientX, y: e.clientY }),
                    )
                  }
                  onMouseLeave={() => dispatch(clearTooltip())}
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
                      no icon
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
