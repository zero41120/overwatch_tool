interface ChipProps {
  label: string;
  onRemove?: () => void;
}

export default function Chip({ label, onRemove }: ChipProps) {
  return (
    <span className="inline-flex items-center justify-center px-2 rounded-xl bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-100 border border-gray-300 dark:border-gray-600 text-xs mr-2 align-middle">
      {label}
      {onRemove && (
        <button
          type="button"
          onClick={onRemove}
          aria-label="Remove"
          className="ml-2 pl-2 pr-2 pt-1 pb-1 text-red-300 rounded-xl hover:bg-gray-300 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-300 text-xs align-middle flex items-center justify-center"
        >
          ×
        </button>
      )}
    </span>
  );
}
