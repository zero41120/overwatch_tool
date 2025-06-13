import { useAppDispatch, useAppSelector } from '../../hooks';
import { addAvoid, toggleAvoidEnabled } from '../../slices/inputSlice';
import type { Item } from '../../types';
import { attributeValueToLabel } from '../../utils/attributeUtils';
import ItemCard from '../shared/ItemCard';


interface Props {
    eqItems: Item[];
    resultItems: Item[];
}

export default function FinalBuildList({ eqItems, resultItems }: Props) {
    const dispatch = useAppDispatch();
    const avoidEnabled = useAppSelector(state => state.input.present.avoidEnabled);

    const sortedItems = [...eqItems, ...resultItems].sort((a, b) => {
        // Sort by tab (alphabetically)
        if ((a.tab || '') < (b.tab || '')) return -1;
        if ((a.tab || '') > (b.tab || '')) return 1;
        // Then by rarity (assuming higher rarity is better, so descending)
        if ((a.rarity || 0) > (b.rarity || 0)) return -1;
        if ((a.rarity || 0) < (b.rarity || 0)) return 1;
        // Then by cost (ascending)
        return (a.cost || 0) - (b.cost || 0);
    });

    return (
        <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-gray-200">Final Build</h3>
            <ul className="mt-2 space-y-3 max-h-fit overflow-y-auto pr-2">
                {sortedItems.map(it => (
                    <li key={it.id}>
                        <ItemCard
                            title={it.name}
                            subtitle={it.tab}
                            rarity={it.rarity}
                            content={it.attributes.map(a =>
                                a.type === 'description'
                                    ? { text: `<span class='font-sm text-[#8fa6d7]'>${a.value}</span>` } :
                                    a.type === "Editor's Note"
                                        ? { text: `<strong>Editor's Note: </strong><br /><span class='font-sm text-[#8fa6d7]'>${a.value}</span>` }
                                        : {
                                            text: `<strong>${a.value}</strong> <span class='font-sm text-[#8fa6d7]'>${attributeValueToLabel(a.type)}</span>`,
                                        }
                            )}
                            price={`${it.cost} G`}
                            showAvoidButton
                            onAvoid={() => {
                                if (!avoidEnabled) dispatch(toggleAvoidEnabled());
                                dispatch(addAvoid(it.id || it.name));
                            }}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}
