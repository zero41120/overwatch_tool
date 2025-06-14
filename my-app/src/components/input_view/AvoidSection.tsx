import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { addAvoid, removeAvoid, toggleAvoidEnabled } from '../../slices/inputSlice';
import type { Item } from '../../types';
import { sortItemsByRarityAndName } from '../../utils/item';
import { rarityColor } from '../../utils/utils';
import Chip from '../shared/Chip';
import SearchableDropdown from '../shared/SearchableDropdown';
import SimpleButton from '../shared/SimpleButton';

interface Props {
  items: Item[];
}

export default function AvoidSection({ items }: Props) {
  const avoid = useAppSelector(state => state.input.present.avoid);
  const enabled = useAppSelector(state => state.input.present.avoidEnabled);
  const dispatch = useAppDispatch();
  const [selected, setSelected] = useState('');

  return (
    <div>
      <label className="block text-sm font-medium dark:text-gray-300">Avoid Items</label>
      <div className="flex items-center gap-2 mt-1 mb-2">
        <input
          id="avoid-toggle"
          type="checkbox"
          checked={enabled}
          onChange={() => dispatch(toggleAvoidEnabled())}
          className="h-4 w-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500"
        />
        <label htmlFor="avoid-toggle" className="text-sm dark:text-gray-300 select-none">
          Enable Avoid Items
        </label>
      </div>
      {enabled && (
        <>
          <div className="flex flex-col sm:flex-row items-stretch gap-2">
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
              className="flex-grow w-full"
            />
            <SimpleButton text="Add" onClick={() => {
              if (selected) {
                dispatch(addAvoid(selected));
                setSelected('');
              }
            }} />
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
        </>
      )}
    </div>
  );
}
