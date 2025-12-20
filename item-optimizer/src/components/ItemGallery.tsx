import { useEffect, useMemo, useState, type MouseEvent } from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { clearTooltip, setTooltip } from "../slices/tooltipSlice";
import type { Item, ItemOverride } from "../types";
import { attributeValueToLabel } from "../utils/attributeUtils";
import { rarityColor } from "../utils/utils";
import ItemCard from "./shared/ItemCard";
import SearchableDropdown from "./shared/SearchableDropdown";
import Chip from "./shared/Chip";
import ItemOverrideEditor from "./ItemOverrideEditor";
import LocalOverridesEditor from "./LocalOverridesEditor";
import { KEY, loadLocalOverrides, deleteLocalOverride } from "../utils/localOverrides";
import { bumpOverrideVersion } from "../slices/inputSlice";

function getLocalOverrideAttributes(override?: ItemOverride) {
  if (!override) return undefined;
  if (override.attributes?.length) return override.attributes;
  if (override.editor_overrides?.length) return override.editor_overrides[0].attributes;
  return undefined;
}

interface Props {
  items: Item[];
  heroes: string[];
  attrTypes: string[];
}

export default function ItemGallery({ items, heroes, attrTypes }: Props) {
  const [selected, setSelected] = useState(items[0]);
  const [, setMobilePreview] = useState<string | null>(null);
  const [editMode, setEditMode] = useState(false);
  const [showSaved, setShowSaved] = useState(false);
  const [savedText, setSavedText] = useState("");
  const [folded, setFolded] = useState(false);
  const [search, setSearch] = useState("");
  const [attrFilter, setAttrFilter] = useState<string[]>([]);
  const dispatch = useAppDispatch();
  const overrideVersion = useAppSelector((s) => s.input.present.overrideVersion);
  const overrides = useMemo(loadLocalOverrides, [overrideVersion]);
  const isMobile = useMemo(() => {
    if (typeof window === "undefined") return false;
    if (window.matchMedia?.("(pointer: coarse)")?.matches) return true;
    return window.innerWidth < 640;
  }, []);

  useEffect(() => {
    return () => {
      dispatch(clearTooltip());
    };
  }, [dispatch]);

  function handleItemClick(it: Item, e: MouseEvent<HTMLButtonElement>) {
    setSelected(it);
    if (!isMobile) return;
    setMobilePreview((current) => {
      if (current === it.name) {
        dispatch(clearTooltip());
        return null;
      }
      dispatch(setTooltip({ item: it, x: e.clientX, y: e.clientY }));
      return it.name;
    });
  }

  const filtered = items.filter(
    (it) =>
      it.name.toLowerCase().includes(search.toLowerCase()) &&
      attrFilter.every((a) => it.attributes.some((attr) => attr.type === a)),
  );

  return (
    <div className="glass-card space-y-6 rounded-xl shadow-lg p-4 sm:p-6 bg-white dark:bg-gray-800 dark:border-gray-700">
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
                      (getLocalOverrideAttributes(overrides[selected.name]) || []).map((attribute) => ({
                        text: `<strong>${attribute.value}</strong> <span class='font-sm text-[#8fa6d7]'>${attributeValueToLabel(
                          attribute.type,
                        )}</span>`,
                      }))
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
            <div className="mt-2 space-y-2">
              <SearchableDropdown
                label="Add Attribute"
                placeholder="Select attribute"
                options={attrTypes.map((t) => ({
                  value: t,
                  label: attributeValueToLabel(t),
                }))}
                value=""
                onChange={(val) => {
                  if (val && !attrFilter.includes(val)) {
                    setAttrFilter((cur) => [...cur, val]);
                  }
                }}
                className="w-full"
              />
              {attrFilter.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {attrFilter.map((a) => (
                    <Chip
                      key={a}
                      label={attributeValueToLabel(a)}
                      onRemove={() =>
                        setAttrFilter((cur) => cur.filter((x) => x !== a))
                      }
                    />
                  ))}
                </div>
              )}
            </div>
            <div className="grid grid-cols-3 gap-4 overflow-y-auto max-h-96 pt-4">
              {filtered.map((it, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={(e) => handleItemClick(it, e)}
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
