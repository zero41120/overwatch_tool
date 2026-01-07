type Props = {
  baseDamage: number;
  onBaseDamageChange: (value: number) => void;
  maxItems: number;
  onMaxItemsChange: (value: number) => void;
  minCash: number;
  onMinCashChange: (value: number) => void;
  maxCash: number;
  onMaxCashChange: (value: number) => void;
};

export default function JunoTorpedoInputs({
  baseDamage,
  onBaseDamageChange,
  maxItems,
  onMaxItemsChange,
  minCash,
  onMinCashChange,
  maxCash,
  onMaxCashChange,
}: Props) {
  return (
    <>
      <label className="space-y-1 text-sm">
        <span className="text-gray-700 dark:text-gray-300">Base Torpedo Damage</span>
        <input
          type="number"
          value={baseDamage}
          min={0}
          onChange={(event) => onBaseDamageChange(Number(event.target.value))}
          className="w-full border rounded p-1 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-700"
        />
      </label>
      <label className="space-y-1 text-sm">
        <span className="text-gray-700 dark:text-gray-300">Max Items</span>
        <input
          type="number"
          value={maxItems}
          min={1}
          max={6}
          onChange={(event) => onMaxItemsChange(Number(event.target.value))}
          className="w-full border rounded p-1 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-700"
        />
      </label>
      <label className="space-y-1 text-sm">
        <span className="text-gray-700 dark:text-gray-300">Minimum Budget</span>
        <input
          type="number"
          value={minCash}
          min={0}
          step={500}
          onChange={(event) => onMinCashChange(Number(event.target.value))}
          className="w-full border rounded p-1 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-700"
        />
      </label>
      <label className="space-y-1 text-sm">
        <span className="text-gray-700 dark:text-gray-300">Maximum Budget</span>
        <input
          type="number"
          value={maxCash}
          min={0}
          step={500}
          onChange={(event) => onMaxCashChange(Number(event.target.value))}
          className="w-full border rounded p-1 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-700"
        />
      </label>
    </>
  );
}
