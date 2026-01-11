import type { Item, MinAttrGroup, WeightRow } from "../types";
import { JUNO_MEDIBLASTER_METRIC_ID } from "../metrics/JunoMediblasterMetric";
import { hasMetricOutputForMetric } from "../metrics/metricRegistry";
import { MEDIBLASTER_OUTPUT_ATTR } from "./junoMediblaster";
import { buildTorpedoItem, TORPEDO_DAMAGE_ATTR } from "./junoTorpedoDamage";
import type { OptimizerExtraField } from "./optimizerParetoTypes";
import { collectRelevantAttributes } from "./utils";

type OptimizerProfileInputOptions = {
  items: Item[];
  weights: WeightRow[];
  selectedMetricOutputs: Set<string>;
  minValueEnabled: boolean;
  minAttrGroups: MinAttrGroup[];
  hero?: string;
  enemyHasArmor?: boolean;
};

export type OptimizerProfileInputs = {
  attrKeys: string[];
  extraFields: OptimizerExtraField[];
};

const CODEBREAKER_NAME = "CODEBREAKER";

function buildItemAttributeSet(items: Item[]) {
  const set = new Set<string>();
  items.forEach((item) => {
    item.attributes.forEach((attr) => {
      set.add(attr.type);
    });
  });
  return set;
}

export function buildOptimizerProfileInputs({
  items,
  weights,
  selectedMetricOutputs,
  minValueEnabled,
  minAttrGroups,
  hero,
  enemyHasArmor,
}: OptimizerProfileInputOptions): OptimizerProfileInputs {
  const relevantAttrs = collectRelevantAttributes(weights, minValueEnabled, minAttrGroups);
  const itemAttrs = buildItemAttributeSet(items);
  const attrKeys = Array.from(relevantAttrs).filter((attr) => itemAttrs.has(attr));

  const extraFields: OptimizerExtraField[] = [];
  const isJuno = hero === "Juno";
  const considerTorpedo = isJuno && relevantAttrs.has(TORPEDO_DAMAGE_ATTR);
  if (considerTorpedo) {
    extraFields.push({
      id: "torpedo-base-add",
      combine: "sum",
      itemValue: (item) => buildTorpedoItem(item).baseAdd,
    });
    extraFields.push({
      id: "torpedo-skyline",
      combine: "max",
      itemValue: (item) => (/^skyline\s+nanites$/i.test(item.name) ? 1 : 0),
    });
  }

  const considerMediblaster =
    isJuno &&
    Boolean(enemyHasArmor) &&
    (relevantAttrs.has(MEDIBLASTER_OUTPUT_ATTR) ||
      hasMetricOutputForMetric(JUNO_MEDIBLASTER_METRIC_ID, selectedMetricOutputs));
  if (considerMediblaster) {
    extraFields.push({
      id: "mediblaster-codebreaker",
      combine: "max",
      itemValue: (item) => (item.name.toUpperCase() === CODEBREAKER_NAME ? 1 : 0),
    });
  }

  return { attrKeys, extraFields };
}
