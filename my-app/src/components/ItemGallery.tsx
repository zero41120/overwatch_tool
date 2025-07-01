import { useState } from "react";
import type { Item } from "../types";
import { attributeValueToLabel } from "../utils/attributeUtils";
import { iconUrlForName } from "../utils/item";
import { rarityColor } from "../utils/utils";
import ItemCard from "./shared/ItemCard";

interface Props {
  items: Item[];
}

function AttributeEditor({ item }: { item: Item }) {
  return (
    <div data-testid="editor" className="p-2 space-y-2 border rounded">
      {item.attributes.map((a, idx) => (
        <div key={idx} className="flex items-center gap-2">
          <span className="w-32 text-sm">{attributeValueToLabel(a.type)}</span>
          <input
            className="flex-grow rounded border border-gray-300 p-1 text-sm dark:bg-gray-800"
            defaultValue={a.value}
          />
        </div>
      ))}
    </div>
  );
}

export default function ItemGallery({ items }: Props) {
  const [openId, setOpenId] = useState<string | null>(null);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {items.map((it) => (
        <div key={it.id || it.name} className="space-y-2">
          <ItemCard
            title={it.name}
            subtitle={it.tab}
            rarity={it.rarity}
            iconUrl={iconUrlForName(it.name)}
            content={it.attributes.map((a) => ({
              text: `<strong>${a.value}</strong> <span class='text-[#8fa6d7] text-sm'>${attributeValueToLabel(a.type)}</span>`,
            }))}
            price={`${it.cost} G`}
          />
          <button
            type="button"
            className="rounded bg-indigo-600 px-2 py-1 text-xs text-white"
            style={{ backgroundColor: rarityColor(it.rarity) }}
            onClick={() => setOpenId(openId === (it.id || it.name) ? null : it.id || it.name)}
          >
            Edit
          </button>
          {openId === (it.id || it.name) && <AttributeEditor item={it} />}
        </div>
      ))}
    </div>
  );
}
