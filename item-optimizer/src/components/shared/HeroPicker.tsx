import { useEffect, useMemo, useRef, useState } from "react";
import type { HeroRole } from "../../types";

export interface HeroOption {
  value: string;
  label: string;
  iconUrl?: string;
  role?: HeroRole;
}

interface TriggerProps {
  selected?: HeroOption;
  open: () => void;
  close: () => void;
  isOpen: boolean;
  disabled?: boolean;
}

interface HeroPickerProps {
  label?: string;
  value: string;
  options: HeroOption[];
  onChange: (next: string) => void;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  trigger?: (props: TriggerProps) => React.ReactNode;
  emptyOptionLabel?: string;
}

export default function HeroPicker({
  label,
  value,
  options,
  onChange,
  placeholder = "Select hero",
  className,
  disabled = false,
  trigger,
  emptyOptionLabel = "Clear selection",
}: HeroPickerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const selected = options.find((opt) => opt.value === value);

  const filtered = useMemo(() => {
    if (!query) return options;
    const needle = query.toLowerCase();
    return options.filter((opt) => opt.label.toLowerCase().includes(needle));
  }, [options, query]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (!containerRef.current) return;
      if (!containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const toggle = () => {
    if (disabled) return;
    setIsOpen((prev) => !prev);
    setQuery("");
  };

  const selectValue = (next: string) => {
    onChange(next);
    setIsOpen(false);
    setQuery("");
  };

  const triggerContent = trigger ? (
    trigger({
      selected,
      open: () => {
        if (!disabled) {
          setIsOpen(true);
          setQuery("");
        }
      },
      close: () => setIsOpen(false),
      isOpen,
      disabled,
    })
  ) : (
    <button
      type="button"
      onClick={toggle}
      disabled={disabled}
      className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2 text-left flex items-center gap-3 text-sm text-gray-900 dark:text-gray-100 hover:border-indigo-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 disabled:opacity-60"
    >
      {selected?.iconUrl ? (
        <img src={selected.iconUrl} alt="" className="size-10 rounded-md object-cover" />
      ) : (
        <span className="inline-flex size-10 items-center justify-center rounded-md bg-gray-200 dark:bg-gray-700 text-base font-semibold text-gray-700 dark:text-gray-100">
          {selected?.label.slice(0, 2) || placeholder.slice(0, 2)}
        </span>
      )}
      <span className="truncate">{selected?.label || placeholder}</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        strokeWidth={1.5}
        stroke="currentColor"
        className="ml-auto size-4"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="m6 9 6 6 6-6" />
      </svg>
    </button>
  );

  return (
    <div className={`relative ${className || ""}`} ref={containerRef}>
      {label && (
        <label className="block text-sm font-medium mb-1 text-gray-800 dark:text-gray-200">{label}</label>
      )}
      {triggerContent}
      {isOpen && !disabled && (
        <div className="absolute z-30 mt-2 w-full rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-lg">
          <div className="p-3 border-b border-gray-200 dark:border-gray-700">
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search hero"
              className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2 text-sm text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div className="max-h-72 overflow-y-auto p-3">
            <button
              type="button"
              className="w-full mb-3 rounded-md border border-gray-200 dark:border-gray-700 px-3 py-2 text-left text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
              onClick={() => selectValue("")}
            >
              {emptyOptionLabel}
            </button>
            {filtered.length === 0 ? (
              <p className="text-sm text-gray-500 dark:text-gray-400">No heroes found.</p>
            ) : (
              <div
                className="grid"
                style={{ gridTemplateColumns: "repeat(auto-fit, minmax(60px, 1fr))" }}
              >
                {filtered.map((option) => (
                  <button
                    type="button"
                    key={option.value}
                    className={`rounded-xl border p-2 text-center transition ${
                      option.value === value
                        ? "border-indigo-500 bg-indigo-50 dark:bg-indigo-900/20"
                        : "border-gray-200 dark:border-gray-700"
                    }`}
                    onClick={() => selectValue(option.value)}
                  >
                    <div className="aspect-[3/4] w-full overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-700 mb-2 flex items-center justify-center">
                      {option.iconUrl ? (
                        <img src={option.iconUrl} alt="" className="h-full w-full object-cover" />
                      ) : (
                        <span className="text-lg font-semibold text-gray-500 dark:text-gray-300">
                          {option.label.slice(0, 2)}
                        </span>
                      )}
                    </div>
                    <p className="text-sm font-medium text-gray-900 dark:text-gray-100">{option.label}</p>
                    {option.role && (
                      <p className="text-xs text-gray-500 dark:text-gray-400 capitalize">{option.role}</p>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
