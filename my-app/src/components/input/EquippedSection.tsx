import { useState } from 'react';
import SearchableDropdown from '../SearchableDropdown';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setEquipped, addEquippedSlot } from '../../slices/inputSlice';
import type { Item } from '../../types';
import { rarityColor } from '../../utils/optimizer';
import { attributeValueToLabel } from '../../utils/attribute';
import { sortItemsByRarityAndName } from '../../utils/item';

interface Props {
  items: Item[];
}

export default function EquippedSection({ items }: Props) {
  const equipped = useAppSelector(state => state.input.present.equipped);
  const dispatch = useAppDispatch();
  const [useEquipped, setUseEquipped] = useState(false);

  const handleToggle = (checked: boolean) => {
    setUseEquipped(checked);
    if (!checked) {
      equipped.forEach((_, idx) => dispatch(setEquipped({ index: idx, id: '' })));
    }
  };

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">Equipped Items</label>
      <div className="flex items-center gap-2 mt-1 mb-2">
        <input
          id="use-equipped-checkbox"
          type="checkbox"
          checked={useEquipped}
          onChange={e => handleToggle(e.target.checked)}
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
                ...items
                  .sort(sortItemsByRarityAndName)
                  .map(it => ({
                    value: it.id || it.name,
                    label: `${it.name} (${it.cost}) ${it.attributes
                      .filter(a => a.type !== 'description')
                      .map(a => `${attributeValueToLabel(a.type)}-${a.value}`)
                      .join(', ')}`,
                    color: rarityColor(it.rarity),
                  })),
              ]}
              value={id}
              onChange={value => dispatch(setEquipped({ index: idx, id: value }))}
              className="w-full"
            />
          ))}
          {equipped.length < 6 && (
            <button
              type="button"
              onClick={() => dispatch(addEquippedSlot())}
              className="inline-flex items-center justify-center rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50"
            >
              Add Slot
            </button>
          )}
        </div>
      )}
    </div>
  );
}
