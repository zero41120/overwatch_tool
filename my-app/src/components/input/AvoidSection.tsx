import { useState } from 'react';
import SearchableDropdown from '../SearchableDropdown';
import Chip from '../Chip';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { addAvoid, removeAvoid } from '../../slices/inputSlice';
import type { Item } from '../../types';
import { rarityColor } from '../../utils/optimizer';
import { sortItemsByRarityAndName } from '../../utils/item';

interface Props {
  items: Item[];
}

export default function AvoidSection({ items }: Props) {
  const avoid = useAppSelector(state => state.input.present.avoid);
  const dispatch = useAppDispatch();
  const [selected, setSelected] = useState('');

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">Avoid Item</label>
      <div className="flex items-center gap-2 mt-1">
        <SearchableDropdown
          label="Avoid Item"
          placeholder="Select item"
          options={[
            { value: '', label: 'Select item' },
            ...items.sort(sortItemsByRarityAndName).map(it => ({
              value: it.id || it.name,
              label: `${it.name} (${it.cost})`,
              color: rarityColor(it.rarity),
            })),
          ]}
          value={selected}
          onChange={setSelected}
          className="flex-grow"
        />
        <button
          type="button"
          className="rounded bg-gray-200 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-300"
          onClick={() => {
            if (selected) {
              dispatch(addAvoid(selected));
              setSelected('');
            }
          }}
        >
          Add
        </button>
      </div>
      {avoid.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-2">
          {avoid.map(id => {
            const item = items.find(it => (it.id || it.name) === id);
            return (
              <Chip
                key={id}
                label={item ? item.name : id}
                onRemove={() => dispatch(removeAvoid(id))}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
