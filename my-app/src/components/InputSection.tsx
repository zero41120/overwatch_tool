import type { Item, WeightRow } from '../types';
import { rarityColor } from '../utils/optimizer'; // Make sure this utility is correctly imported
import Dropdown from './Dropdown'; // Import the new Dropdown component
import React from 'react'; // Explicitly import React for JSX

interface Props {
  heroes: string[];
  attrTypes: string[];
  filteredItems: Item[];
  hero: string;
  cash: number;
  equipped: (string | '')[];
  toBuy: number;
  weights: WeightRow[];
  error: string;
  onHeroChange: (v: string) => void;
  onCashChange: (v: number) => void;
  onEquippedChange: (idx: number, id: string) => void;
  onToBuyChange: (v: number) => void;
  onWeightTypeChange: (idx: number, type: string) => void;
  onWeightValueChange: (idx: number, val: number) => void;
  addWeightRow: () => void;
  removeWeightRow: (idx: number) => void;
  onSubmit: () => void;
  validate: () => boolean;
}

export default function InputSection({
  heroes,
  attrTypes,
  filteredItems,
  hero,
  cash,
  equipped,
  toBuy,
  weights,
  error,
  onHeroChange,
  onCashChange,
  onEquippedChange,
  onToBuyChange,
  onWeightTypeChange,
  onWeightValueChange,
  addWeightRow,
  removeWeightRow,
  onSubmit,
  validate,
}: Props) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (validate()) onSubmit();
      }}
      className="space-y-6 bg-white rounded-xl shadow-lg p-6 sm:p-8"
    >
      {/* Hero Selection */}
      <div>
        <label htmlFor="hero-select" className="block text-sm font-medium text-gray-700 mb-1">
          Hero
        </label>
        <Dropdown
          label="Hero"
          placeholder="Select hero"
          options={[
            { value: '', label: 'Select hero' }, // Add a default option
            ...heroes.map((h) => ({ value: h, label: h })),
          ]}
          value={hero}
          onChange={onHeroChange}
        />
      </div>

      {/* Cash Input */}
      <div>
        <label htmlFor="total-cash" className="block text-sm font-medium text-gray-700">
          Total Cash
        </label>
        <input
          type="number"
          id="total-cash"
          className="mt-1 block w-full rounded-md border-gray-200 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          min={0}
          value={cash}
          onChange={(e) => onCashChange(Number(e.target.value))}
        />
      </div>

      {/* Equipped Items */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Equipped Items</label>
        <div className="space-y-4 mt-1"> {/* Increased space for better visual separation */}
          {equipped.map((id, idx) => (
            <Dropdown
              key={idx}
              label={`Equipped Slot ${idx + 1}`}
              placeholder="None"
              options={[
                { value: '', label: 'None' }, // Default "None" option
                ...filteredItems
                  .sort((a, b) => a.cost - b.cost)
                  .map((it) => ({
                    value: it.id || it.name,
                    label: `${it.name} (${it.cost}) ${it.attributes.filter(a => a.type !== 'description').map(a => `${a.type}-${a.value}`).join(', ')}`,
                    color: rarityColor(it.rarity), // Pass rarity color for styling
                  })),
              ]}
              value={id}
              onChange={(value) => onEquippedChange(idx, value)}
              className="w-full" // Ensure the dropdown takes full width in this context
            />
          ))}
        </div>
      </div>

      {/* Purchase Count */}
      <div>
        <label htmlFor="items-to-buy" className="block text-sm font-medium text-gray-700">
          Items to Purchase
        </label>
        <input
          type="number"
          id="items-to-buy"
          className="mt-1 block w-full rounded-md border-gray-200 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          min={0}
          max={6}
          value={toBuy}
          onChange={(e) => onToBuyChange(Number(e.target.value))}
        />
      </div>

      {/* Attribute Weights */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Attribute Weights</label>
        <div className="space-y-4 mt-1"> {/* Increased space */}
          {weights.map((w, idx) => (
            <div key={idx} className="flex items-center gap-2">
              {/* Using a regular select for weight type for now, as integrating Dropdown here
                  would require more complex positioning within the flex container.
                  If you want this to also be the custom dropdown, it would require more
                  tailoring of the Dropdown component's positioning logic or adjustments
                  to this flex container's styling. */}
              <select
                className="block w-full rounded-md border-gray-200 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                value={w.type}
                onChange={(e) => onWeightTypeChange(idx, e.target.value)}
              >
                {attrTypes.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
              <input
                type="number"
                min={0}
                step={0.1}
                className="block w-24 rounded-md border-gray-200 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                value={w.weight}
                onChange={(e) => onWeightValueChange(idx, Number(e.target.value))}
              />
              {weights.length > 1 && (
                <button
                  type="button"
                  className="flex-shrink-0 rounded p-2 text-gray-400 hover:bg-red-50 hover:text-red-600"
                  onClick={() => removeWeightRow(idx)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              )}
            </div>
          ))}
        </div>
        <button
          type="button"
          className="mt-3 inline-flex items-center justify-center rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          onClick={addWeightRow}
        >
          Add Row
        </button>
      </div>

      <div className="!mt-8 border-t pt-6">
        <button
          type="submit"
          className="w-full inline-flex items-center justify-center rounded-lg bg-teal-600 px-5 py-3 text-white text-base font-medium shadow-lg transition hover:bg-teal-700 disabled:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
          disabled={!validate()}
        >
          Calculate Optimal Build
        </button>
        {error && (
          <div role="alert" className="mt-4 rounded border-s-4 border-red-500 bg-red-50 p-4 text-sm font-medium text-red-800">
            {error}
          </div>
        )}
      </div>
    </form>
  );
}