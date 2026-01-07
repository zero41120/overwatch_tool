export type SelectableItem = {
  id: string;
  name: string;
  cost: number;
  situational: boolean;
  details: string;
};

export function formatStat(value: number) {
  return Number.isInteger(value) ? value.toString() : value.toFixed(1);
}

export const numberFormatter = new Intl.NumberFormat();

type SelectorProps = {
  items: SelectableItem[];
  enabledSet: Set<string>;
  onToggle: (id: string) => void;
};

export function JunoItemSelector({ items, enabledSet, onToggle }: SelectorProps) {
  return (
    <div>
      <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Enabled items</h4>
      <div className="mt-2 grid gap-2 sm:grid-cols-2 lg:grid-cols-3 max-h-64 overflow-y-auto pr-2">
        {items.map((item) => {
          const checked = enabledSet.has(item.id);
          return (
            <label
              key={item.id}
              className={`flex items-start gap-2 rounded border p-2 text-sm ${
                checked
                  ? "border-indigo-500 bg-indigo-50 dark:border-indigo-400 dark:bg-indigo-900/30"
                  : "border-gray-200 dark:border-gray-700"
              }`}
            >
              <input type="checkbox" checked={checked} onChange={() => onToggle(item.id)} className="mt-1" />
              <div>
                <div className="font-medium text-gray-900 dark:text-gray-100">
                  {item.name}
                  {item.situational && (
                    <span className="ml-2 rounded bg-amber-200 px-1 py-0.5 text-xs font-semibold text-amber-900 dark:bg-amber-500/30 dark:text-amber-200">
                      situational
                    </span>
                  )}
                </div>
                <div className="text-xs text-gray-600 dark:text-gray-400">{item.details}</div>
              </div>
            </label>
          );
        })}
        {items.length === 0 && (
          <p className="text-sm text-gray-600 dark:text-gray-400">No compatible items available.</p>
        )}
      </div>
    </div>
  );
}
