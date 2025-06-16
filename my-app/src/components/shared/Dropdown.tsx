import { useState, useRef, useEffect } from "react";

interface Option {
  value: string;
  label: string;
}

interface Props {
  label: string;
  options: Option[];
  value: string;
  onChange: (v: string) => void;
}

export default function Dropdown({ label, options, value, onChange }: Props) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);
  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        aria-label={label}
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 shadow-sm hover:bg-gray-50 dark:hover:bg-gray-800"
      >
        {value ? options.find((o) => o.value === value)?.label : "Select an option"}
      </button>
      {open && (
        <div
          role="menu"
          className="absolute z-10 mt-1 w-40 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-lg"
        >
          {options.length === 0 ? (
            <p className="p-2 text-sm text-gray-500 dark:text-gray-400">No options available</p>
          ) : (
            <ul>
              {options.map((o) => (
                <li
                  key={o.value}
                  className="cursor-pointer px-3 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                  onClick={() => {
                    onChange(o.value);
                    setOpen(false);
                  }}
                >
                  {o.label}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
