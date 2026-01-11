import { useAppDispatch, useAppSelector } from "../../hooks";
import {
  addWeightRow,
  removeWeightRow,
  setWeightType,
  setWeightValue,
  toggleEnemyHasArmor,
} from "../../slices/inputSlice";
import { attributeValueToLabel } from "../../utils/attributeUtils";
import { MEDIBLASTER_OUTPUT_ATTR } from "../../utils/junoMediblaster";
import { JUNO_MEDIBLASTER_METRIC_ID } from "../../metrics/JunoMediblasterMetric";
import type { MetricOutputDescriptor } from "../../metrics/metricRegistry";
import { hasMetricOutputForMetric } from "../../metrics/metricRegistry";
import NumberInput from "../shared/NumberInput";
import SearchableDropdown from "../shared/SearchableDropdown";
import SimpleButton from "../shared/SimpleButton";
import SliderRange from "../SliderRange";

interface Props {
  metricOutputs?: MetricOutputDescriptor[];
}

export default function WeightsSection({
  metricOutputs = [],
}: Props) {
  const weights = useAppSelector((state) => state.input.present.weights);
  const hero = useAppSelector((state) => state.input.present.hero);
  const enemyHasArmor = useAppSelector((state) => state.input.present.enemyHasArmor);
  const dispatch = useAppDispatch();
  const hasMediblasterWeight =
    weights.some((row) => row.type === MEDIBLASTER_OUTPUT_ATTR) ||
    hasMetricOutputForMetric(
      JUNO_MEDIBLASTER_METRIC_ID,
      weights.map((row) => row.type),
    );
  const outputLabels = new Map(
    metricOutputs.map((output) => [output.outputKey, output.displayLabel]),
  );
  const options = [
    ...metricOutputs.map((output) => ({
      value: output.outputKey,
      label: output.displayLabel,
    })),
  ];

  return (
    <div>
      <label className="block text-sm font-medium dark:text-gray-300">
        Metric Weights
      </label>
      {hero === "Juno" && hasMediblasterWeight && (
        <label className="mt-2 flex items-center gap-2 text-sm dark:text-gray-300 select-none">
          <input
            type="checkbox"
            checked={enemyHasArmor}
            onChange={() => dispatch(toggleEnemyHasArmor())}
            className="h-4 w-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500"
          />
          Enemy has armor (Mediblaster output)
        </label>
      )}
      <div className="space-y-4 mt-1 mb-4">
        {weights.map((w, idx) => {
          const selectedTypes = weights
            .map((row, i) => (i !== idx ? row.type : null))
            .filter(Boolean);
          const uniqueOptions = options.filter(
            (opt) => !selectedTypes.includes(opt.value) || opt.value === w.type,
          );
          return (
            <div key={idx} className="grid">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
                <div className="w-full">
                  <SearchableDropdown
                    label="Metric Output"
                    placeholder="Select output"
                    options={uniqueOptions}
                    value={w.type}
                    onChange={(value) =>
                      dispatch(setWeightType({ index: idx, type: value }))
                    }
                    className="flex-grow w-full"
                  />
                </div>
                <div className="flex flex-col gap-2 w-full sm:w-auto">
                <div className="flex flex-row items-center gap-2">
                  <NumberInput
                    value={w.weight}
                    onChange={(val) =>
                      dispatch(setWeightValue({ index: idx, value: val }))
                    }
                    min={0}
                    max={100}
                    step={0.01}
                    label={`Weight for ${w.type ? outputLabels.get(w.type) ?? attributeValueToLabel(w.type) : "output"}`}
                    className="w-full sm:w-24"
                  />
                    <button
                      type="button"
                      className="flex-shrink-0 rounded p-2 text-gray-400 dark:text-gray-500 hover:bg-red-50 dark:hover:bg-gray-900 hover:text-red-600 dark:hover:text-red-400"
                      onClick={() => dispatch(removeWeightRow(idx))}
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
                  </div>
                </div>
              </div>
              <div className="w-full">
                <SliderRange
                  value={w.weight}
                  onChange={(val) =>
                    dispatch(setWeightValue({ index: idx, value: val }))
                  }
                  min={0}
                  max={1}
                  step={0.05}
                  showValue={false}
                  className="w-full mt-2"
                />
              </div>
            </div>
          );
        })}
      </div>
      <SimpleButton
        onClick={() => {
          // Find the first unused weight option.
          const selectedTypes = weights.map((w) => w.type);
          const optionValues = options.map((option) => option.value);
          const firstUnused =
            optionValues.find((type) => !selectedTypes.includes(type)) || optionValues[0];
          if (firstUnused) dispatch(addWeightRow(firstUnused));
        }}
        text="Add Row"
      />
    </div>
  );
}
