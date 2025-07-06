import type { Item } from "../../types";
import { attributeValueToLabel } from "../../utils/attributeUtils";
import { sortItemsOverview } from "../../utils/item";
import ItemCard from "./ItemCard";

interface Props {
  items: Item[];
  onAvoid?: (item: Item) => void;
}

export default function ItemCardList({ items, onAvoid }: Props) {
  const sorted = [...items].sort(sortItemsOverview);
  return (
    <ul className="mt-2 space-y-3 max-h-fit overflow-y-auto pr-2">
      {sorted.map((it) => (
        <li key={it.id}>
          <ItemCard
            title={it.name}
            subtitle={it.tab}
            rarity={it.rarity}
            iconUrl={it.iconUrl}
            content={it.attributes.map((a) =>
              a.type === "description"
                ? { text: `<span class='font-sm text-[#8fa6d7]'>${a.value}</span>` }
                : a.type === "Editor's Note"
                  ? { text: `<strong>Editor's Note: </strong><br /><span class='font-sm text-[#8fa6d7]'>${a.value}</span>` }
                  : { text: `<strong>${a.value}</strong> <span class='font-sm text-[#8fa6d7]'>${attributeValueToLabel(a.type)}</span>` }
            )}
            price={`${it.cost} G`}
            showAvoidButton={!!onAvoid}
            onAvoid={() => onAvoid?.(it)}
          />
        </li>
      ))}
    </ul>
  );
}
