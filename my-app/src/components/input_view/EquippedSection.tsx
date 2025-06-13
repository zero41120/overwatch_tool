import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { addEquippedSlot, removeEquippedSlot, setEquipped } from '../../slices/inputSlice';
import type { Item } from '../../types';
import { attributeValueToLabel } from '../../utils/attributeUtils';
import { sortItemsByRarityAndName } from '../../utils/item';
import { rarityColor } from '../../utils/utils';
import SearchableDropdown from '../shared/SearchableDropdown';
import SimpleButton from '../shared/SimpleButton';

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
      <label className="block text-sm font-medium dark:text-gray-300">Equipped Items</label>
      <div className="flex items-center gap-2 mt-1 mb-2">
        <input
          id="use-equipped-checkbox"
          type="checkbox"
          checked={useEquipped}
          onChange={e => handleToggle(e.target.checked)}
          className="h-4 w-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500"
        />
        <label htmlFor="use-equipped-checkbox" className="text-sm dark:text-gray-300 select-none">
          Use Equipped Items
        </label>
      </div>
      {useEquipped && (
        <div className="space-y-4 mt-1">
          {equipped.map((id, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <SearchableDropdown
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
                className="flex-grow"
              />
              {equipped.length > 2 && (
                <button
                  type="button"
                  className="flex-shrink-0 rounded p-2 text-gray-400 hover:bg-red-50 hover:text-red-600"
                  onClick={() => dispatch(removeEquippedSlot(idx))}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              )}
            </div>
          ))}
          {equipped.length < 6 && (
            <SimpleButton text="Add Slot" onClick={() => dispatch(addEquippedSlot())} />
          )}
        </div>
      )}
    </div>
  );
}
