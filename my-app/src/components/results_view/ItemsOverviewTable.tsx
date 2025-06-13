import type { Item } from '../../types';
import { rarityColor } from '../../utils/utils';

interface Props {
    eqItems: Item[];
    resultItems: Item[];
}

export default function ItemsOverviewTable({ eqItems, resultItems }: Props) {
    const allItems = [...eqItems, ...resultItems].sort((b, a) => {
        // Define rarity and tab order
        const rarityOrder = { epic: 3, rare: 2, common: 1 };
        const tabOrder = { weapon: 1, ability: 2, survival: 3 };
        // Sort by rarity (descending)
        const rarityA = rarityOrder[a.rarity as keyof typeof rarityOrder] || 0;
        const rarityB = rarityOrder[b.rarity as keyof typeof rarityOrder] || 0;
        if (rarityA !== rarityB) return rarityB - rarityA;
        // Then by tab (custom order)
        const tabA = tabOrder[a.tab as keyof typeof tabOrder] || 99;
        const tabB = tabOrder[b.tab as keyof typeof tabOrder] || 99;
        if (tabA !== tabB) return tabA - tabB;
        // Then by cost (ascending)
        return (a.cost || 0) - (b.cost || 0);
    });

    return (
        <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-gray-200 mb-2">Items Overview</h3>
            <table className="w-full text-left border-collapse mb-4">
                <tbody>
                    {Array.from({ length: 2 }).map((_, rowIdx) => (
                        <tr key={rowIdx}>
                            {allItems
                                .slice(rowIdx * 3, rowIdx * 3 + 3)
                                .map((it, colIdx) => (
                                    <td
                                        key={colIdx}
                                        className="px-2 py-1 border border-gray-200 dark:border-gray-700 text-sm font-medium text-gray-800 dark:text-gray-100 min-w-[80px]"
                                        style={{ color: it ? rarityColor(it.rarity) : undefined }}
                                    >
                                        {it ? it.name : ''}
                                    </td>
                                ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
