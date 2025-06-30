import { useState } from "react";
import type { Item } from "../types";
import SearchableDropdown from "./shared/SearchableDropdown";
import { loadOverrides, saveOverrides, ItemOverrideEntry } from "../utils/localOverrides";

interface Props {
  items: Item[];
}

export default function ItemGallery({ items }: Props) {
  const [overrides, setOverrides] = useState<Record<string, ItemOverrideEntry>>(
    () => loadOverrides(),
  );
  const [selected, setSelected] = useState<string>("");

  const update = (key: string, entry: ItemOverrideEntry) => {
    const next = { ...overrides, [key]: { ...overrides[key], ...entry } };
    setOverrides(next);
    saveOverrides(next);
  };

  const openJson = () => {
    const w = window.open("", "json");
    if (w) {
      w.document.write(`<pre>${JSON.stringify(overrides, null, 2)}</pre>`);
    }
  };

  return (
    <div className="glass-card p-4 space-y-2 rounded-xl dark:border-gray-700">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100">
          Item Gallery
        </h2>
        <button
          type="button"
          onClick={openJson}
          className="text-sm text-indigo-500 hover:underline"
        >
          View JSON
        </button>
      </div>
      <SearchableDropdown
        label="Select Item"
        placeholder="Search items"
        options={items.map((it) => ({ value: it.id || it.name, label: it.name }))}
        value={selected}
        onChange={setSelected}
        className="w-full"
      />
      {selected && (
        (() => {
          const it = items.find((x) => (x.id || x.name) === selected);
          if (!it) return null;
          const entry = overrides[selected] || {};
          const cost = entry.cost ?? it.cost;
          const attrs = entry.attributes ?? it.attributes;
          return (
            <div className="space-y-2 text-sm">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold dark:text-gray-200">{it.name}</h3>
                <button
                  type="button"
                  className="text-xs text-red-500 hover:underline"
                  onClick={() => setSelected("")}
                >
                  Close
                </button>
              </div>
              <input
                type="number"
                value={cost}
                onChange={(e) => update(selected, { cost: Number(e.target.value) })}
                className="w-full rounded border-gray-300 dark:border-gray-700 dark:bg-gray-800 p-1"
              />
              {attrs.map((a, i) => (
                <input
                  key={i}
                  value={a.value}
                  onChange={(e) => {
                    const list = [...attrs];
                    list[i] = { ...a, value: e.target.value };
                    update(selected, { attributes: list });
                  }}
                  className="w-full rounded border-gray-300 dark:border-gray-700 dark:bg-gray-800 p-1"
                />
              ))}
            </div>
          );
        })()
      )}
    </div>
  );
}
