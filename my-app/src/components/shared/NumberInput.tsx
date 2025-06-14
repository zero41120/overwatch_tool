import React, { useEffect, useState } from "react";

interface NumberInputProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
  placeholder?: string;
  className?: string;
  label?: string;
}

export default function NumberInput({
  value,
  onChange,
  min,
  max,
  step,
  placeholder,
  className,
  label
}: NumberInputProps) {
  const [inputValue, setInputValue] = useState<string>(value.toString());

  useEffect(() => {
    // Sync internal state if parent value changes
    setInputValue(value.toString());
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setInputValue(val);

    // Only call onChange if val is a valid number (not empty or just "-")
    if (val === "" || val === "-") return;
    const num = Number(val);
    if (!isNaN(num)) {
      onChange(num);
    }
  };

  return (
    <div className={`relative inline-block ${className || ''}`}>
      <input
        type="number"
        className={`block w-full px-3 py-2 text-base font-medium text-gray-900 dark:text-gray-200 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm transition-colors focus:border-indigo-500 focus:ring-indigo-500 dark:focus:border-indigo-400 dark:focus:ring-indigo-400 placeholder-gray-400 dark:placeholder-gray-500`}
        value={inputValue}
        onChange={handleChange}
        inputMode="decimal"
        pattern=".*"
        min={min}
        max={max}
        step={step}
        placeholder={placeholder}
        aria-label={label || placeholder || "Number input"}
      />
    </div>
  );
}