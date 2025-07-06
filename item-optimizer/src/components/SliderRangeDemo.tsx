import { useState } from "react";
import SliderRange from "./SliderRange";

export default function SliderRangeDemo() {
  const [basicValue, setBasicValue] = useState(50);
  const [preciseValue, setPreciseValue] = useState(2.5);
  const [rangeValue, setRangeValue] = useState(75);

  return (
    <div className="max-w-md mx-auto p-6 space-y-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 text-center mb-6">
        Slider Range Examples
      </h2>

      {/* Basic slider */}
      <div>
        <SliderRange
          label="Basic Slider"
          value={basicValue}
          onChange={setBasicValue}
          min={0}
          max={100}
          step={1}
        />
      </div>

      {/* Precise slider with decimal steps */}
      <div>
        <SliderRange
          label="Precise Slider (0.1 steps)"
          value={preciseValue}
          onChange={setPreciseValue}
          min={0}
          max={5}
          step={0.1}
          className="mt-4"
        />
      </div>

      {/* Custom range slider */}
      <div>
        <SliderRange
          label="Custom Range"
          value={rangeValue}
          onChange={setRangeValue}
          min={10}
          max={200}
          step={5}
          className="mt-4"
        />
      </div>

      {/* Disabled slider */}
      <div>
        <SliderRange
          label="Disabled Slider"
          value={30}
          onChange={() => {}}
          min={0}
          max={100}
          step={1}
          disabled={true}
          className="mt-4"
        />
      </div>

      {/* Slider without value display */}
      <div>
        <SliderRange
          label="Hidden Value"
          value={basicValue}
          onChange={setBasicValue}
          min={0}
          max={100}
          step={1}
          showValue={false}
          className="mt-4"
        />
      </div>

      {/* Current values display */}
      <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
        <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
          Current Values:
        </h3>
        <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
          <li>Basic: {basicValue}</li>
          <li>Precise: {preciseValue}</li>
          <li>Custom Range: {rangeValue}</li>
        </ul>
      </div>
    </div>
  );
}
