import { useAppDispatch, useAppSelector } from "../../hooks";
import { setToBuy } from "../../slices/inputSlice";

interface Props {
  onSubmit: (mode: "cheapest" | "premium" | "incremental") => void;
  validate: () => boolean;
  isCalculating: boolean;
  progressPercent: number | null;
  progressLabel: string | null;
}

export default function SubmitSection({
  onSubmit,
  validate,
  isCalculating,
  progressPercent,
  progressLabel,
}: Props) {
  const dispatch = useAppDispatch();
  const toBuy = useAppSelector((state) => state.input.present.toBuy);
  const error = useAppSelector((state) => state.input.present.error);
  const canSubmit = validate() && !isCalculating;

  return (
    <div className="!mt-8 border-t pt-6 space-y-2">
      <button
        type="button"
        onClick={() => {
          if (validate()) onSubmit("cheapest");
        }}
        className="w-full inline-flex items-center justify-center rounded-lg bg-teal-600 dark:bg-teal-700 px-5 py-3 text-white text-base font-medium shadow-lg transition hover:bg-teal-700 dark:hover:bg-teal-800 disabled:bg-gray-400 dark:disabled:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500 dark:focus:ring-teal-400 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
        disabled={!canSubmit}
      >
        Cheapest Best Build
      </button>
      <button
        type="button"
        onClick={() => {
          if (validate()) onSubmit("premium");
        }}
        className="w-full inline-flex items-center justify-center rounded-lg bg-indigo-600 dark:bg-indigo-700 px-5 py-3 text-white text-base font-medium shadow-lg transition hover:bg-indigo-700 dark:hover:bg-indigo-800 disabled:bg-gray-400 dark:disabled:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
        disabled={!canSubmit}
      >
        Premium Best Build
      </button>
      <button
        type="button"
        onClick={() => {
          if (validate()) onSubmit("incremental");
        }}
        className="w-full inline-flex items-center justify-center rounded-lg bg-amber-600 dark:bg-amber-700 px-5 py-3 text-white text-base font-medium shadow-lg transition hover:bg-amber-700 dark:hover:bg-amber-800 disabled:bg-gray-400 dark:disabled:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-500 dark:focus:ring-amber-400 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
        disabled={!canSubmit}
      >
        Incremental Builds
      </button>
      {isCalculating && (
        <div className="mt-3 space-y-2 text-sm font-medium text-gray-700 dark:text-gray-200" aria-live="polite">
          <div className="flex items-center gap-2">
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-gray-400 border-t-transparent" />
            <span>
              Calculating builds
              {progressPercent === null ? "..." : `... ${progressPercent}%`}
            </span>
          </div>
          {progressLabel && (
            <div className="text-xs text-gray-600 dark:text-gray-300">
              {progressLabel} items processed
            </div>
          )}
          {progressPercent !== null && (
            <progress
              className="h-2 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700 [&::-webkit-progress-bar]:bg-gray-200 dark:[&::-webkit-progress-bar]:bg-gray-700 [&::-webkit-progress-value]:bg-teal-500 dark:[&::-webkit-progress-value]:bg-teal-500"
              value={progressPercent}
              max={100}
            />
          )}
        </div>
      )}
      <div className="mt-4 grid grid-cols-5 gap-2">
        {[2, 3, 4, 5, 6].map((n) => (
          <button
            key={n}
            type="button"
            onClick={() => dispatch(setToBuy(n))}
            className={`rounded-lg py-2 text-sm font-medium ${toBuy === n ? "bg-indigo-600 dark:bg-indigo-700 text-white" : "bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700"}`}
          >
            {n}
          </button>
        ))}
      </div>
      {error && (
        <div
          role="alert"
          className="mt-4 rounded border-s-4 border-red-500 dark:border-red-700 bg-red-50 dark:bg-gray-900 p-4 text-sm font-medium text-red-800 dark:text-red-300"
        >
          {error}
        </div>
      )}
    </div>
  );
}
