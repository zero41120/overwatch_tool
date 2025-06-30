import { useState } from "react";
import type { Item } from "../types";
import { loadOverrides, saveOverrides, ItemOverrideEntry } from "../utils/localOverrides";

interface Props {
  items: Item[];
}

export default function ItemGallery({ items }: Props) {
  const [overrides, setOverrides] = useState<Record<string, ItemOverrideEntry>>(
    () => loadOverrides(),
  );
  const [editing, setEditing] = useState<Record<string, boolean>>({});

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
      <ul className="max-h-64 overflow-y-auto space-y-2 text-sm">
        {items.map((it) => {
          const key = it.id || it.name;
          const entry = overrides[key] || {};
          const edit = editing[key];
          const cost = entry.cost ?? it.cost;
          const attrs = entry.attributes ?? it.attributes;
          return (
            <li key={key} className="border-b border-gray-300 dark:border-gray-600 pb-2">
              <div className="flex justify-between items-center">
                <span>{it.name}</span>
                <button
                  type="button"
                  className="text-indigo-500 hover:underline text-xs"
                  onClick={() => setEditing((e) => ({ ...e, [key]: !e[key] }))}
                >
                  {edit ? "Done" : "Edit"}
                </button>
              </div>
              {edit ? (
                <div className="mt-1 space-y-1">
                  <input
                    type="number"
                    value={cost}
                    onChange={(e) => update(key, { cost: Number(e.target.value) })}
                    className="w-full rounded border-gray-300 dark:border-gray-700 dark:bg-gray-800 p-1"
                  />
                  {attrs.map((a, i) => (
                    <input
                      key={i}
                      value={a.value}
                      onChange={(e) => {
                        const list = [...attrs];
                        list[i] = { ...a, value: e.target.value };
                        update(key, { attributes: list });
                      }}
                      className="w-full rounded border-gray-300 dark:border-gray-700 dark:bg-gray-800 p-1"
                    />
                  ))}
                </div>
              ) : (
                <div className="text-gray-700 dark:text-gray-300 mt-1">
                  Cost: {cost}
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
