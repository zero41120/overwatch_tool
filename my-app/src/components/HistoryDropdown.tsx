import { useEffect, useRef, useState } from 'react';
import type { InputState } from '../slices/inputSlice';

interface Props {
  history: InputState[];
}

function summary(s: InputState) {
  return `${s.hero} - $${s.cash}`;
}

export default function HistoryDropdown({ history }: Props) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen(v => !v)}
        className="flex items-center gap-1 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 shadow-sm hover:bg-gray-50 dark:hover:bg-gray-800"
      >
        History
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-4"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>
      </button>
      {open && (
        <div className="absolute z-10 mt-2 w-48 max-h-40 overflow-y-auto rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-sm shadow-lg">
          {history.length > 0 ? (
            <ul>
              {history.map((h, idx) => (
                <li key={idx} className="border-b border-gray-200 dark:border-gray-700 px-3 py-2 last:border-none dark:text-gray-100">
                  {summary(h)}
                </li>
              ))}
            </ul>
          ) : (
            <p className="p-3 text-gray-500 dark:text-gray-400">No history</p>
          )}
        </div>
      )}
    </div>
  );
}
