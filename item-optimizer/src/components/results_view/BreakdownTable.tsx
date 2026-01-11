import type { ResultCombo } from "../../types";
import { attributeValueToLabel } from "../../utils/attributeUtils";

interface Props {
  results: ResultCombo | null;
}

export default function BreakdownTable({ results }: Props) {
  if (!results?.breakdown) return null;

  const grouped = new Map<string, typeof results.breakdown>();
  results.breakdown.forEach((row) => {
    const unit = row.unit || "raw";
    const rows = grouped.get(unit);
    if (rows) {
      rows.push(row);
    } else {
      grouped.set(unit, [row]);
    }
  });

  const preferredOrder = ["raw", "burst", "sustain"];
  const unitOrder = Array.from(grouped.keys()).sort((a, b) => {
    const aIdx = preferredOrder.indexOf(a);
    const bIdx = preferredOrder.indexOf(b);
    if (aIdx !== -1 || bIdx !== -1) {
      const nextA = aIdx === -1 ? Number.MAX_SAFE_INTEGER : aIdx;
      const nextB = bIdx === -1 ? Number.MAX_SAFE_INTEGER : bIdx;
      return nextA - nextB;
    }
    return a.localeCompare(b);
  });

  const formatUnit = (unit: string) =>
    unit ? `${unit[0].toUpperCase()}${unit.slice(1)}` : "Other";
  const formatNumber = (value: number) => value.toFixed(2);

  return (
    <div className="text-sm text-gray-600 dark:text-gray-300">
      <strong>Breakdown:</strong>
      <div className="mt-2 space-y-4">
        {unitOrder.map((unit) => (
          <div key={unit} className="rounded-lg border border-gray-200 dark:border-gray-700">
            <div className="px-2 py-1 text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
              {formatUnit(unit)}
            </div>
            <table className="w-full text-left border-collapse">
              <thead>
                <tr>
                  <th className="px-2 py-1 border-b border-gray-200 dark:border-gray-700 font-medium">
                    Type
                  </th>
                  <th className="px-2 py-1 border-b border-gray-200 dark:border-gray-700 font-medium">
                    Value
                  </th>
                  <th className="px-2 py-1 border-b border-gray-200 dark:border-gray-700 font-medium">
                    Weight
                  </th>
                  <th className="px-2 py-1 border-b border-gray-200 dark:border-gray-700 font-medium">
                    Contribution
                  </th>
                </tr>
              </thead>
              <tbody>
                {grouped.get(unit)?.map((row) => (
                  <tr key={row.type} className="dark:bg-gray-900">
                    <td className="px-2 py-1">{attributeValueToLabel(row.type)}</td>
                    <td className="px-2 py-1">{formatNumber(row.sum)}</td>
                    <td className="px-2 py-1">{formatNumber(row.weight)}</td>
                    <td className="px-2 py-1">{formatNumber(row.contrib)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </div>
  );
}
