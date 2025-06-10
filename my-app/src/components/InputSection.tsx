import type { Item, WeightRow } from '../types';
import { attributeValueToLabel } from '../utils/attribute';
import { rarityColor } from '../utils/optimizer';
import SearchableDropdown from './SearchableDropdown';
import NumberInput from './NumberInput';
import { useState } from 'react';

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
  avoid: string[];
  onAddAvoid: (id: string) => void;
  onRemoveAvoid: (id: string) => void;
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
  avoid,
  onAddAvoid,
  onRemoveAvoid,
  onWeightTypeChange,
  onWeightValueChange,
  addWeightRow,
  removeWeightRow,
  onSubmit,
  validate,
}: Props) {
  // State for "Use Equipped Item" checkbox
  const [useEquipped, setUseEquipped] = useState(false);
  const handleUseEquippedChange = (checked: boolean) => {
    setUseEquipped(checked);
    if (!checked) {
      equipped.forEach((_, idx) => onEquippedChange(idx, ''));
    }
  };

  const [selectedAvoid, setSelectedAvoid] = useState('');

  const attributeOptions = attrTypes.map((t) => ({ value: t, label: attributeValueToLabel(t) }));

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
        <SearchableDropdown
          label="Hero"
          placeholder="Select hero"
          options={[
            { value: '', label: 'Select hero' },
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
        <NumberInput
          value={cash}
          onChange={onCashChange}
          min={0}
          label="Total Cash"
          className="mt-1"
        />
      </div>

      {/* Equipped Items */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Equipped Items</label>
        <div className="flex items-center gap-2 mt-1 mb-2">
          <input
            id="use-equipped-checkbox"
            type="checkbox"
            checked={useEquipped}
            onChange={(e) => handleUseEquippedChange(e.target.checked)}
            className="h-4 w-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500"
          />
          <label htmlFor="use-equipped-checkbox" className="text-sm text-gray-700 select-none">
            Use Equipped Item
          </label>
        </div>
        {useEquipped && (
          <div className="space-y-4 mt-1">
            {equipped.map((id, idx) => (
              <SearchableDropdown
                key={idx}
                label={`Equipped Slot ${idx + 1}`}
                placeholder="None"
                options={[
                  { value: '', label: 'None' },
                  ...filteredItems
                    .sort((a, b) => a.cost - b.cost)
                    .map((it) => ({
                      value: it.id || it.name,
                      label: `${it.name} (${it.cost}) ${it.attributes.filter(a => a.type !== 'description').map(a => `${a.type}-${a.value}`).join(', ')}`,
                      color: rarityColor(it.rarity),
                    })),
                ]}
                value={id}
                onChange={(value) => onEquippedChange(idx, value)}
                className="w-full"
              />
            ))}
          </div>
        )}
      </div>

      {/* Avoid Items */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Avoid Item</label>
        <div className="flex items-center gap-2 mt-1">
          <SearchableDropdown
            label="Avoid Item"
            placeholder="Select item"
            options={[
              { value: '', label: 'Select item' },
              ...filteredItems
                .sort((a, b) => a.cost - b.cost)
                .map((it) => ({
                  value: it.id || it.name,
                  label: `${it.name} (${it.cost})`,
                  color: rarityColor(it.rarity),
                })),
            ]}
            value={selectedAvoid}
            onChange={setSelectedAvoid}
            className="flex-grow"
          />
          <button
            type="button"
            className="rounded bg-gray-200 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-300"
            onClick={() => {
              if (selectedAvoid) {
                onAddAvoid(selectedAvoid);
                setSelectedAvoid('');
              }
            }}
          >
            Add
          </button>
        </div>
        {avoid.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-2">
            {avoid.map((id) => {
              const item = filteredItems.find((it) => (it.id || it.name) === id);
              return (
                <span
                  key={id}
                  className="flex items-center gap-1 rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-800"
                >
                  {item ? item.name : id}
                  <button
                    type="button"
                    className="ml-1 text-red-500 hover:text-red-700"
                    onClick={() => onRemoveAvoid(id)}
                  >
                    &times;
                  </button>
                </span>
              );
            })}
          </div>
        )}
      </div>



      {/* Attribute Weights */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Attribute Weights</label>
        <div className="space-y-4 mt-1">
          {weights.map((w, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <SearchableDropdown
                label="Attribute Type"
                placeholder="Select type"
                options={attributeOptions}
                value={w.type}
                onChange={(value) => onWeightTypeChange(idx, value)}
                className="flex-grow"
              />
              <NumberInput
                value={w.weight}
                onChange={(val) => onWeightValueChange(idx, val)}
                min={0}
                max={100} // Added max limit
                step={0.01}
                label={`Weight for ${w.type}`}
                className="w-24" // This will now correctly apply and limit the width
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
        <div className="mt-4 grid grid-cols-5 gap-2">
          {[2,3,4,5,6].map((n) => (
            <button
              key={n}
              type="button"
              onClick={() => onToBuyChange(n)}
              className={`rounded-lg py-2 text-sm font-medium ${toBuy === n ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
            >
              {n}
            </button>
          ))}
        </div>
        {error && (
          <div role="alert" className="mt-4 rounded border-s-4 border-red-500 bg-red-50 p-4 text-sm font-medium text-red-800">
            {error}
          </div>
        )}
      </div>
    </form>
  );
}