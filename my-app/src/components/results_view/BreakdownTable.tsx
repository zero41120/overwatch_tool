import type { ResultCombo } from '../../types';
import { attributeValueToLabel } from '../../utils/attributeUtils';

interface Props {
    results: ResultCombo;
}

export default function BreakdownTable({ results }: Props) {
    if (!results.breakdown) return null;

    return (
        <div className="text-sm text-gray-600 dark:text-gray-300">
            <strong>Breakdown:</strong>
            <table className="mt-2 w-full text-left border-collapse">
                <thead>
                    <tr>
                        <th className="px-2 py-1 border-b border-gray-200 dark:border-gray-700 font-medium">Type</th>
                        <th className="px-2 py-1 border-b border-gray-200 dark:border-gray-700 font-medium">Sum</th>
                        <th className="px-2 py-1 border-b border-gray-200 dark:border-gray-700 font-medium">Contribution</th>
                    </tr>
                </thead>
                <tbody>
                    {results.breakdown.map((b) => (
                        <tr key={b.type} className="dark:bg-gray-900">
                            <td className="px-2 py-1">{attributeValueToLabel(b.type)}</td>
                            <td className="px-2 py-1">{b.sum}</td>
                            <td className="px-2 py-1">{b.contrib.toFixed(2)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
