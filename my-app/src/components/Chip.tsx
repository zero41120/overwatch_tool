interface ChipProps {
  label: string;
  onRemove?: () => void;
}

export default function Chip({ label, onRemove }: ChipProps) {
  return (
    <span className="flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-800">
      {label}
      {onRemove && (
        <button
          type="button"
          className="text-red-500 hover:text-red-700 text-lg leading-none"
          onClick={onRemove}
        >
          &times;
        </button>
      )}
    </span>
  );
}
