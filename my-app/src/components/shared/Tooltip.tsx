import { useAppSelector } from "../../hooks";
import ItemCard from "./ItemCard";
import { getTooltipStyle } from "../../utils/tooltipUtils";
import { attributeValueToLabel } from "../../utils/attributeUtils";

const TOOLTIP_HEIGHT = 180;
const TOOLTIP_WIDTH = 320;
const OFFSET = 12;

export default function Tooltip() {
  const tooltip = useAppSelector((s) => s.tooltip);
  if (!tooltip) return null;
  const { item, x, y } = tooltip;
  return (
    <div
      style={getTooltipStyle(x, y, { width: TOOLTIP_WIDTH, height: TOOLTIP_HEIGHT, offset: OFFSET })}
      className="shadow-lg rounded-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700"
    >
      <ItemCard
        title={item.name}
        subtitle={item.tab}
        rarity={item.rarity}
        iconUrl={item.iconUrl}
        content={item.attributes.map((a) => ({
          text: `<strong>${a.value}</strong> <span class='font-sm text-[#8fa6d7]'>${attributeValueToLabel(a.type)}</span>`,
        }))}
        price={`${item.cost} G`}
        width={320}
      />
    </div>
  );
}
