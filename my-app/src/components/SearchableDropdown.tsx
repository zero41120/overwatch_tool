import { useState, useRef, useEffect } from 'react';

interface DropdownOption {
  value: string;
  label: string;
  color?: string;
}

interface DropdownProps {
  label: string;
  options: DropdownOption[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export default function SearchableDropdown({ label, options, value, onChange, placeholder = 'Select an option', className }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [openUpwards, setOpenUpwards] = useState(false);
  const [search, setSearch] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const selected = options.find(o => o.value === value);
  const displayedLabel = selected?.label || placeholder;
  const displayedColor = selected?.color;

  const filteredOptions = options.filter(o => o.label.toLowerCase().includes(search.toLowerCase()));

  const handleSelect = (optionValue: string) => {
    onChange(optionValue);
    setIsOpen(false);
    setSearch('');
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (!isOpen || !triggerRef.current) return;
    const triggerRect = triggerRef.current.getBoundingClientRect();
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    const estimatedDropdownHeight = viewportHeight * 0.4;
    const spaceBelow = viewportHeight - triggerRect.bottom;
    const spaceAbove = triggerRect.top;
    if (spaceBelow < estimatedDropdownHeight && spaceAbove > spaceBelow) {
      setOpenUpwards(true);
    } else {
      setOpenUpwards(false);
    }
  }, [isOpen]);

  const dropdownClasses = `absolute end-0 z-10 w-full divide-y divide-gray-200 overflow-hidden rounded border border-gray-300 bg-white shadow-lg max-h-[40vh] overflow-y-auto`;

  return (
    <div className={`relative block ${className || ''}`} ref={dropdownRef}>
      <span className="flex w-full divide-x divide-gray-300 overflow-hidden rounded border border-gray-300 bg-white shadow-sm">
        <button
          type="button"
          className="flex-grow px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900 focus:relative text-left"
          onClick={() => setIsOpen(!isOpen)}
          ref={triggerRef}
        >
          <span style={{ color: displayedColor || 'inherit' }}>{displayedLabel}</span>
        </button>
        <button
          type="button"
          className="flex-shrink-0 px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900 focus:relative"
          aria-label="Menu"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>
        </button>
      </span>
      {isOpen && (
        <div role="menu" className={`${dropdownClasses} ${openUpwards ? 'bottom-full mb-2' : 'top-full mt-2'}`}>
          {options.length > 0 ? (
            <div>
              <p className="sticky top-0 bg-white px-3 py-2 text-xs uppercase text-gray-500 border-b border-gray-200 z-20">{label}</p>
              <input
                type="text"
                className="mx-3 my-2 w-[calc(100%-1.5rem)] rounded border border-gray-300 px-2 py-1 text-sm"
                placeholder="Search..."
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
              {filteredOptions.map(option => (
                <a
                  key={option.value}
                  href="#"
                  className="block px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900"
                  role="menuitem"
                  onClick={e => {
                    e.preventDefault();
                    handleSelect(option.value);
                  }}
                >
                  <span style={{ color: option.color || 'inherit' }}>{option.label}</span>
                </a>
              ))}
              {filteredOptions.length === 0 && (
                <p className="block px-3 py-2 text-sm text-gray-500">No matching options</p>
              )}
            </div>
          ) : (
            <p className="block px-3 py-2 text-sm text-gray-500">No options available</p>
          )}
        </div>
      )}
    </div>
  );
}
