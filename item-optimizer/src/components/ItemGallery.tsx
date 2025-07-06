import { useState, useMemo } from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { clearTooltip, setTooltip } from "../slices/tooltipSlice";
import type { Item } from "../types";
import { attributeValueToLabel } from "../utils/attributeUtils";
import { rarityColor } from "../utils/utils";
import ItemCard from "./shared/ItemCard";
import SearchableDropdown from "./shared/SearchableDropdown";
import ItemOverrideEditor from "./ItemOverrideEditor";
import LocalOverridesEditor from "./LocalOverridesEditor";
import { KEY, loadLocalOverrides, deleteLocalOverride } from "../utils/localOverrides";
import { bumpOverrideVersion } from "../slices/inputSlice";

interface Props {
  items: Item[];
  heroes: string[];
  attrTypes: string[];
}

export default function ItemGallery({ items, heroes, attrTypes }: Props) {
  const [selected, setSelected] = useState(items[0]);
  const [editMode, setEditMode] = useState(false);
  const [showSaved, setShowSaved] = useState(false);
  const [savedText, setSavedText] = useState("");
  const [folded, setFolded] = useState(false);
  const [search, setSearch] = useState("");
  const dispatch = useAppDispatch();
  const overrideVersion = useAppSelector((s) => s.input.present.overrideVersion);
  const overrides = useMemo(loadLocalOverrides, [overrideVersion]);

  const filtered = items.filter((it) => it.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="glass-card space-y-6 rounded-xl shadow-lg p-6 sm:p-8 bg-white dark:bg-gray-800 dark:border-gray-700">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 sm:text-3xl">Configuration</h2>
      <div className="relative">
        <div>
          {selected && (
            <div className="space-y-2">
              <div className="space-y-1">
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
                {overrides[selected.name] && (
                  <button
                    type="button"
                    className="rounded bg-red-600 px-3 py-1 text-white hover:bg-red-700"
                    onClick={() => {
                      deleteLocalOverride(selected.name);
                      dispatch(bumpOverrideVersion());
                    }}
                  >
                    Restore
                  </button>
                )}
              </div>
              {overrides[selected.name] && (
                <div className="space-y-1">
                  <ItemCard
                    title={selected.name}
                    subtitle="override"
                    rarity={selected.rarity}
                    iconUrl={selected.iconUrl}
                    content={
                      (overrides[selected.name].attributes || Object.values(overrides[selected.name])[0])?.map((a) => ({
                        text: `<strong>${a.value}</strong> <span class='font-sm text-[#8fa6d7]'>${attributeValueToLabel(
                          a.type,
                        )}</span>`,
                      })) || []
                    }
                    price={`${selected.cost} G`}
                  />
                  <button
                    type="button"
                    className="rounded bg-indigo-600 px-3 py-1 text-white hover:bg-indigo-700"
                    onClick={() => setEditMode(true)}
                  >
                    Update
                  </button>
                </div>
              )}
            </div>
          )}
          <div className="mt-2 flex items-center gap-2">
            {!overrides[selected?.name] && (
              <button
                type="button"
                className="rounded bg-indigo-600 px-3 py-1 text-white hover:bg-indigo-700"
                onClick={() => setEditMode(true)}
              >
                Customize
              </button>
            )}
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
              onClose={() => setEditMode(false)}
            />
          )}
          <button
            type="button"
            className="mt-2 text-sm underline"
            onClick={() => {
              if (!showSaved) setSavedText(JSON.stringify(overrides, null, 2));
              setShowSaved((v) => !v);
            }}
          >
            {showSaved ? "Hide" : "View"} locally saved
          </button>
          {showSaved && (
            <LocalOverridesEditor
              value={savedText}
              onChange={setSavedText}
              onClear={() => setSavedText("")}
              onCancel={() => setShowSaved(false)}
              onSave={() => {
                try {
                  JSON.parse(savedText);
                  localStorage.setItem(KEY, savedText);
                  dispatch(bumpOverrideVersion());
                  setShowSaved(false);
                } catch {
                  alert("Invalid JSON");
                }
              }}
            />
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
                  onMouseEnter={(e) => dispatch(setTooltip({ item: it, x: e.clientX, y: e.clientY }))}
                  onMouseMove={(e) => dispatch(setTooltip({ item: it, x: e.clientX, y: e.clientY }))}
                  onMouseLeave={() => dispatch(clearTooltip())}
                  className="relative flex flex-col items-center gap-1 p-2 rounded border dark:border-gray-700 bg-white dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  {overrides[it.name] && (
                    <span
                      className="absolute right-1 top-1 h-2 w-2 rounded-full bg-teal-500"
                      aria-label={`${it.name} override mark`}
                    />
                  )}
                  {it.iconUrl ? (
                    <img src={it.iconUrl} alt="" className="h-12 w-12 rounded-full object-cover" />
                  ) : (
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-200 text-xs text-gray-500">
                      no icon
                    </div>
                  )}
                  <span className="text-sm text-gray-800 dark:text-gray-200">{it.name}</span>
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
