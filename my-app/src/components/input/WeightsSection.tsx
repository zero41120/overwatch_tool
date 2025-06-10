import SearchableDropdown from '../SearchableDropdown';
import NumberInput from '../NumberInput';
import { useAppDispatch, useAppSelector } from '../../hooks';
import {
  setWeightType,
  setWeightValue,
  addWeightRow,
  removeWeightRow,
} from '../../slices/inputSlice';
import { attributeValueToLabel } from '../../utils/attribute';

interface Props {
  attrTypes: string[];
}

export default function WeightsSection({ attrTypes }: Props) {
  const weights = useAppSelector(state => state.input.present.weights);
  const dispatch = useAppDispatch();
  const options = attrTypes.map(t => ({ value: t, label: attributeValueToLabel(t) }));

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">Attribute Weights</label>
      <div className="space-y-4 mt-1">
        {weights.map((w, idx) => (
          <div key={idx} className="flex items-center gap-2">
            <SearchableDropdown
              label="Attribute Type"
              placeholder="Select type"
              options={options}
              value={w.type}
              onChange={value => dispatch(setWeightType({ index: idx, type: value }))}
              className="flex-grow"
            />
            <NumberInput
              value={w.weight}
              onChange={val => dispatch(setWeightValue({ index: idx, value: val }))}
              min={0}
              max={100}
              step={0.01}
              label={`Weight for ${attributeValueToLabel(w.type)}`}
              className="w-24"
            />
            {weights.length > 1 && (
              <button
                type="button"
                className="flex-shrink-0 rounded p-2 text-gray-400 hover:bg-red-50 hover:text-red-600"
                onClick={() => dispatch(removeWeightRow(idx))}
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
        onClick={() => dispatch(addWeightRow(attrTypes[0]))}
      >
        Add Row
      </button>
    </div>
  );
}
