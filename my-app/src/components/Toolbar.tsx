import { useEffect } from 'react';
import { ActionCreators } from 'redux-undo';
import { useAppDispatch } from '../hooks';

export default function Toolbar() {
  const dispatch = useAppDispatch();

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
    <div className="flex gap-2 mb-4">
      <button
        type="button"
        onClick={() => dispatch(ActionCreators.undo())}
        className="rounded bg-gray-200 px-3 py-1 text-sm font-medium text-gray-700 hover:bg-gray-300"
      >
        Undo
      </button>
      <button
        type="button"
        onClick={() => dispatch(ActionCreators.redo())}
        className="rounded bg-gray-200 px-3 py-1 text-sm font-medium text-gray-700 hover:bg-gray-300"
      >
        Redo
      </button>
    </div>
  );
}
