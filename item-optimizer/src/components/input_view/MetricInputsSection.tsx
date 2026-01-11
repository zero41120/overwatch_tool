import { useAppDispatch, useAppSelector } from "../../hooks";
import type { MetricInputDefinition, MetricInputValue } from "../../metrics/ComputedMetric";
import {
  getMetricInputGroupsForHero,
  getSelectedMetricOutputKeys,
} from "../../metrics/metricRegistry";
import {
  clearMetricInputsForMetric,
  setMetricInputValue,
} from "../../slices/inputSlice";
import NumberInput from "../shared/NumberInput";

function clampNumber(value: number, input: MetricInputDefinition) {
  if (input.type !== "number") return value;
  let nextValue = value;
  if (input.min !== undefined) {
    nextValue = Math.max(input.min, nextValue);
  }
  if (input.max !== undefined) {
    nextValue = Math.min(input.max, nextValue);
  }
  return nextValue;
}

export default function MetricInputsSection() {
  const dispatch = useAppDispatch();
  const { hero, weights, metricInputs } = useAppSelector((state) => state.input.present);
  const selectedOutputs = getSelectedMetricOutputKeys(weights);
  const groups = getMetricInputGroupsForHero(hero, selectedOutputs, metricInputs);

  if (groups.length === 0) return null;

  return (
    <div>
      <label className="block text-sm font-medium dark:text-gray-300">Metric Options</label>
      <div className="mt-2 space-y-4">
        {groups.map((group) => (
          <div
            key={group.metricId}
            className="rounded-lg border border-gray-200 dark:border-gray-700 bg-white/60 dark:bg-gray-900/40 p-3"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                  {group.metricLabel}
                </p>
                {group.metricDescription && (
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {group.metricDescription}
                  </p>
                )}
              </div>
              <button
                type="button"
                className="text-xs font-semibold text-teal-700 dark:text-teal-300 hover:underline"
                onClick={() => dispatch(clearMetricInputsForMetric(group.metricId))}
              >
                Reset
              </button>
            </div>
            <div className="mt-3 space-y-3">
              {group.inputs.map((input) => {
                const currentValue = group.resolvedInputs[input.id];
                if (input.type === "bool") {
                  return (
                    <label
                      key={input.id}
                      className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300 select-none"
                    >
                      <input
                        type="checkbox"
                        checked={Boolean(currentValue)}
                        onChange={() =>
                          dispatch(
                            setMetricInputValue({
                              metricId: group.metricId,
                              inputId: input.id,
                              value: !currentValue,
                            }),
                          )
                        }
                        className="h-4 w-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500"
                      />
                      <span>{input.label}</span>
                    </label>
                  );
                }

                const numericValue = Number(currentValue ?? input.defaultValue) || 0;
                const clampedValue = clampNumber(numericValue, input);
                const step = input.step ?? 0.1;

                return (
                  <div key={input.id} className="space-y-1">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
                          {input.label}
                        </p>
                        {input.description && (
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            {input.description}
                          </p>
                        )}
                      </div>
                      <NumberInput
                        value={clampedValue}
                        onChange={(value) => {
                          const nextValue = clampNumber(value, input);
                          dispatch(
                            setMetricInputValue({
                              metricId: group.metricId,
                              inputId: input.id,
                              value: nextValue as MetricInputValue,
                            }),
                          );
                        }}
                        min={input.min}
                        max={input.max}
                        step={step}
                        label={input.label}
                        className="w-full sm:w-28"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
