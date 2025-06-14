import { useAppDispatch, useAppSelector } from "../../hooks";
import {
  addAttrToGroup,
  addMinGroup,
  removeAttrFromGroup,
  removeMinGroup,
  setMinGroupValue,
  toggleMinValueEnabled,
} from "../../slices/inputSlice";
import { attributeValueToLabel } from "../../utils/attributeUtils";
import Chip from "../shared/Chip";
import NumberInput from "../shared/NumberInput";
import SearchableDropdown from "../shared/SearchableDropdown";
import SimpleButton from "../shared/SimpleButton";

interface Props {
  attrTypes: string[];
}

export default function MinValueSection({ attrTypes }: Props) {
  const dispatch = useAppDispatch();
  const enabled = useAppSelector((s) => s.input.present.minValueEnabled);
  const groups = useAppSelector((s) => s.input.present.minAttrGroups);
  const options = attrTypes.map((t) => ({
    value: t,
    label: attributeValueToLabel(t),
  }));

  return (
    <div>
      <label className="block text-sm font-medium dark:text-gray-300">
        Minimum Attribute Totals
      </label>
      <div className="flex items-center gap-2 mt-1 mb-2">
        <input
          id="min-value-toggle"
          type="checkbox"
          checked={enabled}
          onChange={() => dispatch(toggleMinValueEnabled())}
          className="h-4 w-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500"
        />
        <label
          htmlFor="min-value-toggle"
          className="text-sm dark:text-gray-300 select-none"
        >
          Enable Minimum Values
        </label>
      </div>
      {enabled && (
        <div className="space-y-4">
          {groups.map((g, idx) => (
            <div key={idx} className="rounded border p-3 space-y-2">
              <div className="flex flex-col sm:flex-row items-center gap-2">
                <span className="text-sm font-medium dark:text-gray-300">
                  Target Value:
                </span>
                <NumberInput
                  value={g.value}
                  onChange={(val) =>
                    dispatch(setMinGroupValue({ index: idx, value: val }))
                  }
                  min={0}
                  label="Minimum Value"
                  className="w-full sm:w-24"
                />
                {groups.length > 1 && (
                  <button
                    type="button"
                    className="flex-shrink-0 rounded p-2 text-gray-400 hover:bg-red-50 hover:text-red-600"
                    onClick={() => dispatch(removeMinGroup(idx))}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                  </button>
                )}
              </div>
              <SearchableDropdown
                label="Add Attribute"
                placeholder="Add attribute"
                options={options.filter((o) => !g.attrs.includes(o.value))}
                value=""
                onChange={(val) =>
                  dispatch(addAttrToGroup({ index: idx, attr: val }))
                }
                className="w-full"
              />
              {g.attrs.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {g.attrs.map((a) => (
                    <Chip
                      key={a}
                      label={attributeValueToLabel(a)}
                      onRemove={() =>
                        dispatch(removeAttrFromGroup({ index: idx, attr: a }))
                      }
                    />
                  ))}
                </div>
              )}
            </div>
          ))}
          <SimpleButton
            text="Add Group"
            onClick={() => dispatch(addMinGroup())}
          />
        </div>
      )}
    </div>
  );
}
