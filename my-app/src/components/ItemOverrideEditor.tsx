import { useEffect, useState } from "react";
import type { Attribute, Item, ItemOverride } from "../types";
import SearchableDropdown from "./shared/SearchableDropdown";
import SimpleButton from "./shared/SimpleButton";

interface Props {
  item: Item;
  heroes: string[];
  attrTypes: string[];
  onClose: () => void;
}

export default function ItemOverrideEditor({ item, heroes, attrTypes, onClose }: Props) {
  const [hero, setHero] = useState(heroes[0] || "");
  const [rows, setRows] = useState<Attribute[]>([{ type: "WP", value: "5" }]);
  const [note, setNote] = useState("");

  useEffect(() => {
    const data: Record<string, ItemOverride> = JSON.parse(
      localStorage.getItem("localOverrides") || "{}",
    );
    const attrs = data[item.name]?.[hero] || data[item.name]?.attributes;
    if (attrs?.length) {
      setRows(attrs.filter((a) => a.type !== "Editor's Note"));
      setNote(attrs.find((a) => a.type === "Editor's Note")?.value || "");
    } else {
      setRows([{ type: "WP", value: "5" }]);
      setNote("");
    }
  }, [hero, item.name]);

  function save() {
    const overrides: Record<string, ItemOverride> = JSON.parse(
      localStorage.getItem("localOverrides") || "{}",
    );
    const list = [...rows];
    if (note.trim()) list.push({ type: "Editor's Note", value: note.trim() });
    if (!overrides[item.name]) overrides[item.name] = {};
    if (hero) overrides[item.name][hero] = list;
    else overrides[item.name].attributes = list;
    localStorage.setItem("localOverrides", JSON.stringify(overrides));
    onClose();
  }

  function deleteOverride() {
    if (!confirm("Delete override?")) return;
    const overrides: Record<string, ItemOverride> = JSON.parse(
      localStorage.getItem("localOverrides") || "{}",
    );
    const entry = overrides[item.name];
    if (!entry) return onClose();
    if (hero) delete entry[hero];
    else delete entry.attributes;
    if (Object.keys(entry).length === 0) delete overrides[item.name];
    localStorage.setItem("localOverrides", JSON.stringify(overrides));
    onClose();
  }

  return (
    <div className="mt-2 border rounded p-2 space-y-2">
      <div className="flex items-center gap-2">
        <SearchableDropdown
          label="Hero"
          options={heroes.map((h) => ({ value: h, label: h }))}
          value={hero}
          onChange={setHero}
          className="flex-grow"
        />
        <button
          type="button"
          aria-label="Delete override"
          onClick={deleteOverride}
          className="rounded p-2 text-red-600 hover:bg-red-50"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <textarea
        className="w-full rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 p-2 text-sm"
        placeholder="Editor's Note"
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />
      <div className="space-y-2">
        {rows.map((r, idx) => (
          <div key={idx} className="flex items-center gap-2">
            <SearchableDropdown
              label="Type"
              options={attrTypes.map((a) => ({ value: a, label: a }))}
              value={r.type}
              onChange={(val) =>
                setRows((cur) => cur.map((c, i) => (i === idx ? { ...c, type: val } : c)))
              }
              className="flex-grow"
            />
            <input
              type="text"
              value={r.value}
              onChange={(e) => {
                const val = e.target.value;
                setRows((cur) => cur.map((c, i) => (i === idx ? { ...c, value: val } : c)));
              }}
              className="w-20 rounded border border-gray-300 dark:border-gray-700 p-1 text-sm"
            />
            {rows.length > 1 && (
              <button
                type="button"
                onClick={() => setRows((cur) => cur.filter((_, i) => i !== idx))}
                className="rounded p-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-900"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            )}
          </div>
        ))}
        <SimpleButton
          onClick={() => setRows((cur) => [...cur, { type: "WP", value: "" }])}
          text="Add Row"
        />
      </div>
      <div className="flex justify-end gap-2">
        <SimpleButton
          onClick={() => {
            if (confirm("Discard changes?")) onClose();
          }}
          text="Cancel"
        />
        <SimpleButton onClick={save} text="Save" />
      </div>
    </div>
  );
}
