interface Props {
  value: string;
  onChange: (v: string) => void;
  onClear: () => void;
  onCancel: () => void;
  onSave: () => void;
}

export default function LocalOverridesEditor({ value, onChange, onClear, onCancel, onSave }: Props) {
  return (
    <div className="mt-2">
      <label htmlFor="local-overrides" className="block">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-200">Local Overrides</span>
        <div className="relative mt-0.5 overflow-hidden rounded border border-gray-300 shadow-sm focus-within:ring focus-within:ring-blue-600 dark:border-gray-600">
          <textarea
            id="local-overrides"
            className="w-full resize-none border-none focus:ring-0 sm:text-sm dark:bg-gray-900 dark:text-white"
            rows={6}
            value={value}
            onChange={(e) => onChange(e.target.value)}
          />
          <div className="flex items-center justify-end gap-2 p-1.5">
            <button
              type="button"
              onClick={onClear}
              className="rounded border border-transparent px-3 py-1.5 text-sm font-medium text-gray-700 transition-colors hover:text-gray-900 dark:text-gray-200 dark:hover:text-white"
            >
              Clear
            </button>
            <button
              type="button"
              onClick={onCancel}
              className="rounded border border-gray-300 px-3 py-1.5 text-sm font-medium text-gray-900 shadow-sm transition-colors hover:bg-gray-100 dark:border-gray-600 dark:text-white dark:hover:bg-gray-700"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={onSave}
              className="rounded border border-gray-300 px-3 py-1.5 text-sm font-medium text-gray-900 shadow-sm transition-colors hover:bg-gray-100 dark:border-gray-600 dark:text-white dark:hover:bg-gray-700"
            >
              Save
            </button>
          </div>
        </div>
      </label>
    </div>
  );
}
