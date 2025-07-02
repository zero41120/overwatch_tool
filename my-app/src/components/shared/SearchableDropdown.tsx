import { useEffect, useRef, useState } from "react";

interface DropdownOption {
  value: string;
  label: string;
  color?: string;
  iconUrl?: string;
}

interface DropdownProps {
  label: string;
  options: DropdownOption[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export default function SearchableDropdown({
  label,
  options,
  value,
  onChange,
  placeholder = "Select an option",
  className,
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [openUpwards, setOpenUpwards] = useState(false);
  const [search, setSearch] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const selected = options.find((o) => o.value === value);
  const displayedLabel = selected?.label || placeholder;
  const displayedColor = selected?.color;

  const filteredOptions = options.filter((o) =>
    o.label.toLowerCase().includes(search.toLowerCase()),
  );

  const handleSelect = (optionValue: string) => {
    onChange(optionValue);
    setIsOpen(false);
    setSearch("");
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Focus the search input when dropdown opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen || !triggerRef.current) return;
    const triggerRect = triggerRef.current.getBoundingClientRect();
    const viewportHeight =
      window.innerHeight || document.documentElement.clientHeight;
    const estimatedDropdownHeight = viewportHeight * 0.4;
    const spaceBelow = viewportHeight - triggerRect.bottom;
    const spaceAbove = triggerRect.top;
    if (spaceBelow < estimatedDropdownHeight && spaceAbove > spaceBelow) {
      setOpenUpwards(true);
    } else {
      setOpenUpwards(false);
    }
  }, [isOpen]);

  const dropdownClasses = `absolute end-0 z-10 w-full divide-y divide-gray-200 dark:divide-gray-700 overflow-hidden rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-lg max-h-[40vh] overflow-y-auto`;

  return (
    <div className={`relative block ${className || ""}`} ref={dropdownRef}>
      <span className="flex w-full divide-x divide-gray-300 dark:divide-gray-700 overflow-hidden rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm">
        <button
          type="button"
          className="flex-grow px-3 py-2 text-sm font-medium text-gray-900 dark:text-gray-200 transition-colors hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white focus:relative text-left"
          onClick={() => {
            const next = !isOpen;
            setIsOpen(next);
            if (next) setSearch("");
          }}
          ref={triggerRef}
        >
          <span className="flex items-center gap-2">
            {selected?.iconUrl && (
              <img src={selected.iconUrl} alt="" className="size-8" />
            )}
            <span
              style={{
                color: displayedColor || "inherit",
                display: "-webkit-box",
                WebkitLineClamp: 3,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "normal",
                maxHeight: "4.5em",
                lineHeight: "1.5em",
              }}
              className="break-words"
            >
              {displayedLabel}
            </span>
          </span>
        </button>
        <button
          type="button"
          className="flex-shrink-0 px-3 py-2 text-sm font-medium text-gray-900 dark:text-gray-200 transition-colors hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white focus:relative"
          aria-label="Menu"
          onClick={() => {
            const next = !isOpen;
            setIsOpen(next);
            if (next) setSearch("");
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </button>
      </span>
      {isOpen && (
        <div
          role="menu"
          className={`${dropdownClasses} ${openUpwards ? "bottom-full mb-2" : "top-full mt-2"}`}
        >
          {options.length > 0 ? (
            <div>
              <p className="sticky top-0 bg-white dark:bg-gray-900 px-3 py-2 text-xs uppercase text-gray-500 dark:text-gray-400 border-b border-gray-200 dark:border-gray-700 z-20">
                {label}
              </p>
              <input
                type="text"
                ref={inputRef}
                className="mx-3 my-2 w-[calc(100%-1.5rem)] rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200 px-2 py-1 text-base placeholder-gray-400 dark:placeholder-gray-500"
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && filteredOptions.length === 1) {
                    e.preventDefault();
                    handleSelect(filteredOptions[0].value);
                  }
                }}
              />
              {filteredOptions.map((option) => (
                <a
                  key={option.value}
                  href="#"
                  className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-900 dark:text-gray-200 transition-colors hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white"
                  role="menuitem"
                  onClick={(e) => {
                    e.preventDefault();
                    handleSelect(option.value);
                  }}
                >
                  {option.iconUrl && (
                    <img src={option.iconUrl} alt="" className="size-8" />
                  )}
                  <span style={{ color: option.color || "inherit" }}>
                    {option.label}
                  </span>
                </a>
              ))}
              {filteredOptions.length === 0 && (
                <p className="block px-3 py-2 text-sm text-gray-500 dark:text-gray-400">
                  No matching options
                </p>
              )}
            </div>
          ) : (
            <p className="block px-3 py-2 text-sm text-gray-500 dark:text-gray-400">
              No options available
            </p>
          )}
        </div>
      )}
    </div>
  );
}
