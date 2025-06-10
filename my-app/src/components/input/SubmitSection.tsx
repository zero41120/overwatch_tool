import { useAppDispatch, useAppSelector } from '../../hooks';
import { setToBuy } from '../../slices/inputSlice';

interface Props {
  onSubmit: () => void;
  validate: () => boolean;
}

export default function SubmitSection({ onSubmit, validate }: Props) {
  const dispatch = useAppDispatch();
  const toBuy = useAppSelector(state => state.input.present.toBuy);
  const error = useAppSelector(state => state.input.present.error);

  return (
    <div className="!mt-8 border-t pt-6">
      <button
        type="button"
        onClick={() => {
          if (validate()) onSubmit();
        }}
        className="w-full inline-flex items-center justify-center rounded-lg bg-teal-600 px-5 py-3 text-white text-base font-medium shadow-lg transition hover:bg-teal-700 disabled:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
        disabled={!validate()}
      >
        Calculate Optimal Build
      </button>
      <div className="mt-4 grid grid-cols-5 gap-2">
        {[2, 3, 4, 5, 6].map(n => (
          <button
            key={n}
            type="button"
            onClick={() => dispatch(setToBuy(n))}
            className={`rounded-lg py-2 text-sm font-medium ${toBuy === n ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
          >
            {n}
          </button>
        ))}
      </div>
      {error && (
        <div role="alert" className="mt-4 rounded border-s-4 border-red-500 bg-red-50 p-4 text-sm font-medium text-red-800">
          {error}
        </div>
      )}
    </div>
  );
}
