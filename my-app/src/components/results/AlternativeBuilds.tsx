import type { ResultCombo } from '../../types';
import { rarityColor } from '../../utils/utils';

interface Props {
    alternatives: ResultCombo[];
}

export default function AlternativeBuilds({ alternatives }: Props) {
    if (alternatives.length === 0) return null;

    return (
        <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-gray-200">Alternative Builds</h3>
            <ul className="mt-2 space-y-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 p-3 max-h-48 overflow-y-auto">
                {alternatives.map((alt, i) => (
                    <li key={i} className="text-sm text-gray-700 dark:text-gray-300 p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700">
                        <strong>Cost: {alt.cost}</strong> - {alt.items.map((it, idx) => (
                            <span key={it.id || it.name} style={{ color: rarityColor(it.rarity) }}>
                                {it.name}{idx < alt.items.length - 1 ? ', ' : ''}
                            </span>
                        ))}
                    </li>
                ))}
            </ul>
        </div>
    );
}
