
interface NumberInputProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
  placeholder?: string;
  className?: string; // This className will now control the overall width of the component
  label?: string; // Optional label for accessibility
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
  return (
    // Removed 'w-full' from this outer div. Its width will now be determined by the 'className' prop passed to it.
    <div className={`relative inline-block ${className || ''}`}>
      <input
        type="number"
        // 'w-full' here ensures the input element itself fills the width of its parent div.
        className={`block w-full px-3 py-2 text-sm font-medium text-gray-700 rounded border border-gray-300 bg-white shadow-sm
                    transition-colors focus:border-indigo-500 focus:ring-indigo-500`}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        min={min}
        max={max}
        step={step}
        placeholder={placeholder}
        aria-label={label || placeholder || "Number input"}
      />
    </div>
  );
}