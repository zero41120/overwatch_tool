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
  const fileRef = useRef<HTMLInputElement>(null);
  const onFile = async (f: File) => {
    setText(await f.text());
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
    try {
      const parsed = JSON.parse(text) as InputState;
      dispatch(importState(parsed));
      onClose();
    } catch {
      // ignore parse errors
    }
  };
  return (
    <div className="fixed inset-0 z-20 grid place-items-center bg-black/50 p-4">
      <div className="glass-card relative w-full max-w-2xl space-y-4 rounded-xl bg-white dark:bg-gray-800 p-4">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-2 top-2 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
        >
          ×
        </button>
        <div className="grid gap-4 md:grid-cols-2">
          <textarea
            className="w-full h-40 p-2 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
            placeholder="Paste JSON here"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <textarea
            className="w-full h-40 p-2 border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100"
            readOnly
            value={JSON.stringify(current, null, 2)}
          />
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
            onClick={confirm}
            className="rounded bg-teal-600 px-3 py-1 text-white hover:bg-teal-700"
          >
            Import
          </button>
        </div>
      </div>
    </div>
  );
}
