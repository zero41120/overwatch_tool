import { useCallback, useEffect, useState } from "react";

interface SliderRangeProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
  className?: string;
  label?: string;
  showValue?: boolean;
  disabled?: boolean;
}

export default function SliderRange({
  value,
  onChange,
  min = 0,
  max = 100,
  step = 1,
  className,
  label,
  showValue = true,
  disabled = false,
}: SliderRangeProps) {
  const [sliderValue, setSliderValue] = useState<number>(value);

  useEffect(() => {
    // Sync internal state if parent value changes
    setSliderValue(value);
  }, [value]);

  const handleSliderChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = Number(e.target.value);
      setSliderValue(newValue);
      onChange(newValue);
    },
    [onChange],
  );

  // Calculate percentage for styling
  const percentage = ((sliderValue - min) / (max - min)) * 100;

  return (
    <div className={`relative ${className || ""}`}>
      {label && (
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          {label}
          {showValue && (
            <span className="ml-2 text-indigo-600 dark:text-indigo-400 font-semibold">
              {sliderValue}
            </span>
          )}
        </label>
      )}

      <div className="relative">
        {/* Slider track */}
        <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg relative overflow-hidden">
          {/* Progress fill */}
          <div
            className="h-full bg-gradient-to-r from-indigo-500 to-indigo-600 dark:from-indigo-400 dark:to-indigo-500 rounded-lg transition-all duration-150 ease-out"
            style={{ width: `${percentage}%` }}
          />
        </div>

        {/* Slider input - make sure it overlays the track and thumb for full interactivity */}
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={sliderValue}
          onChange={handleSliderChange}
          disabled={disabled}
          className={`absolute top-1/2 left-0 w-full h-6 -translate-y-1/2 z-20 appearance-none bg-transparent focus:outline-none ${disabled ? "cursor-not-allowed" : "cursor-pointer"}`}
          aria-label={label || `Slider from ${min} to ${max}`}
          style={{ pointerEvents: disabled ? "none" : "auto" }}
        />

        {/* Slider thumb (visual only) */}
      </div>

      {/* Min/Max labels */}
      <div className="flex justify-between mt-1 text-xs text-gray-500 dark:text-gray-400">
        <span>{min}</span>
        <span>{max}</span>
      </div>
    </div>
  );
}
