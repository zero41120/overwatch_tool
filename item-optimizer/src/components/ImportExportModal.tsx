import { useState, useRef } from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { importState } from "../slices/inputSlice";
import type { InputState } from "../slices/inputSlice";

interface Props {
  onClose: () => void;
}

export default function ImportExportModal({ onClose }: Props) {
  const dispatch = useAppDispatch();
  const current = useAppSelector((s) => s.input.present);
  const [text, setText] = useState("");
  const [parsed, setParsed] = useState<InputState | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);
  const onFile = async (f: File) => {
    const t = await f.text();
    setText(t);
    try {
      setParsed(JSON.parse(t) as InputState);
    } catch {
      setParsed(null);
    }
  };
  const exportFile = () => {
    const blob = new Blob([JSON.stringify(current, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "state.json";
    a.click();
    URL.revokeObjectURL(url);
  };
  const confirm = () => {
    if (parsed) {
      dispatch(importState(parsed));
      onClose();
    }
  };
  return (
    <div className="fixed inset-0 z-20 grid place-items-center bg-black/50 p-4">
      <div className="glass-card relative w-full max-w-2xl space-y-4 rounded-xl bg-white dark:bg-gray-800 p-4">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-2 top-2 rounded-full p-2 text-2xl text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
        >
          ×
        </button>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="flex flex-col gap-1">
            <label htmlFor="import-text" className="text-sm font-medium dark:text-gray-300">
              Import JSON
            </label>
            <textarea
              id="import-text"
              className="w-full h-40 p-2 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
              placeholder="Paste JSON here"
              value={text}
              onChange={(e) => {
                const val = e.target.value;
                setText(val);
                try {
                  setParsed(JSON.parse(val) as InputState);
                } catch {
                  setParsed(null);
                }
              }}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="current-state" className="text-sm font-medium dark:text-gray-300">
              Current State
            </label>
            <textarea
              id="current-state"
              className="w-full h-40 p-2 border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100"
              readOnly
              value={JSON.stringify(current, null, 2)}
            />
          </div>
        </div>
        <div
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => {
            e.preventDefault();
            const file = e.dataTransfer.files[0];
            if (file) onFile(file);
          }}
          className="flex items-center justify-center rounded border-2 border-dashed border-gray-400 p-4 text-sm text-gray-600 dark:text-gray-300"
        >
          <input
            type="file"
            accept="application/json"
            ref={fileRef}
            onChange={(e) => {
              const f = e.target.files?.[0];
              if (f) onFile(f);
            }}
            className="hidden"
          />
          <button type="button" onClick={() => fileRef.current?.click()}>
            Drop file or click to upload
          </button>
        </div>
        <div className="flex justify-end gap-2">
          <button
            type="button"
            onClick={exportFile}
            className="rounded bg-indigo-600 px-3 py-1 text-white hover:bg-indigo-700"
          >
            Export
          </button>
          <button
            type="button"
            onClick={onClose}
            className="rounded bg-gray-500 px-3 py-1 text-white hover:bg-gray-600"
          >
            Cancel
          </button>
          <button
            type="button"
            disabled={!parsed}
            onClick={confirm}
            className="rounded bg-teal-600 px-3 py-1 text-white hover:bg-teal-700 disabled:bg-gray-400"
          >
            Import
          </button>
        </div>
      </div>
    </div>
  );
}
