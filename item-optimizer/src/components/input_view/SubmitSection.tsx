import { useAppDispatch, useAppSelector } from "../../hooks";
import { setToBuy } from "../../slices/inputSlice";

interface Props {
  onSubmit: (preferHighCost: boolean) => void;
  validate: () => boolean;
}

export default function SubmitSection({ onSubmit, validate }: Props) {
  const dispatch = useAppDispatch();
  const toBuy = useAppSelector((state) => state.input.present.toBuy);
  const error = useAppSelector((state) => state.input.present.error);

  return (
    <div className="!mt-8 border-t pt-6 space-y-2">
      <button
        type="button"
        onClick={() => {
          if (validate()) onSubmit(false);
        }}
        className="w-full inline-flex items-center justify-center rounded-lg bg-teal-600 dark:bg-teal-700 px-5 py-3 text-white text-base font-medium shadow-lg transition hover:bg-teal-700 dark:hover:bg-teal-800 disabled:bg-gray-400 dark:disabled:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500 dark:focus:ring-teal-400 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
        disabled={!validate()}
      >
        Cheapest Best Build
      </button>
      <button
        type="button"
        onClick={() => {
          if (validate()) onSubmit(true);
        }}
        className="w-full inline-flex items-center justify-center rounded-lg bg-indigo-600 dark:bg-indigo-700 px-5 py-3 text-white text-base font-medium shadow-lg transition hover:bg-indigo-700 dark:hover:bg-indigo-800 disabled:bg-gray-400 dark:disabled:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
        disabled={!validate()}
      >
        Premium Best Build
      </button>
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
