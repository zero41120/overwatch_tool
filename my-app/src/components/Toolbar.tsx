import { useEffect } from 'react';
import { ActionCreators } from 'redux-undo';
import { useAppDispatch, useAppSelector } from '../hooks';
import HistoryDropdown from './HistoryDropdown';

export default function Toolbar() {
  const dispatch = useAppDispatch();
  const past = useAppSelector(s => s.input.past);
  const future = useAppSelector(s => s.input.future);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key.toLowerCase() === 'z') {
        e.preventDefault();
        if (e.shiftKey) dispatch(ActionCreators.redo());
        else dispatch(ActionCreators.undo());
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [dispatch]);

  return (
    <div className="mb-6 flex items-center justify-between gap-4">
      <div className="flex gap-2">
        <button
          type="button"
          disabled={past.length === 0}
          onClick={() => dispatch(ActionCreators.undo())}
          className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-indigo-700 disabled:bg-gray-400"
        >
          Undo
        </button>
        <button
          type="button"
          disabled={future.length === 0}
          onClick={() => dispatch(ActionCreators.redo())}
          className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-indigo-700 disabled:bg-gray-400"
        >
          Redo
        </button>
      </div>
      <HistoryDropdown history={past} />
    </div>
  );
}
