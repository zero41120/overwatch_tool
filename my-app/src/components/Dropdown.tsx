import React, { useState, useRef, useEffect } from 'react';

interface DropdownOption {
  value: string;
  label: string;
  color?: string; // Optional color for the label, like rarityColor
}

interface DropdownProps {
  label: string;
  options: DropdownOption[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string; // For additional styling on the main button/display
}

export default function Dropdown({ label, options, value, onChange, placeholder = "Select an option", className }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedOptionLabel = options.find(option => option.value === value)?.label || placeholder;
  const selectedOptionColor = options.find(option => option.value === value)?.color;

  const handleSelect = (optionValue: string) => {
    onChange(optionValue);
    setIsOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className={`relative block ${className}`} ref={dropdownRef}>
      <span
        className="flex w-full divide-x divide-gray-300 overflow-hidden rounded border border-gray-300 bg-white shadow-sm"
      >
        <button
          type="button"
          className="flex-grow px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900 focus:relative text-left"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span style={{ color: selectedOptionColor || 'inherit' }}>{selectedOptionLabel}</span>
        </button>

        <button
          type="button"
          className="flex-shrink-0 px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900 focus:relative"
          aria-label="Menu"
          onClick={() => setIsOpen(!isOpen)}
        >
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
      </span>

      {isOpen && (
        <div
          role="menu"
          // Added max-h-[40vh] and overflow-y-auto for max height and scrolling
          className="absolute end-0 top-full z-10 mt-2 w-full divide-y divide-gray-200 overflow-hidden rounded border border-gray-300 bg-white shadow-lg max-h-[40vh] overflow-y-auto"
        >
          {options.length > 0 ? (
            <div>
              <p className="sticky top-0 bg-white px-3 py-2 text-xs uppercase text-gray-500 border-b border-gray-200 z-20">
                {label}
              </p>
              {options.map((option) => (
                <a
                  key={option.value}
                  href="#"
                  className="block px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900"
                  role="menuitem"
                  onClick={(e) => {
                    e.preventDefault();
                    handleSelect(option.value);
                  }}
                >
                  <span style={{ color: option.color || 'inherit' }}>{option.label}</span>
                </a>
              ))}
            </div>
          ) : (
            <p className="block px-3 py-2 text-sm text-gray-500">No options available</p>
          )}
        </div>
      )}
    </div>
  );
}