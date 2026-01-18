import type { Item, MinAttrGroup, WeightRow } from "../types";
import { collectMetricExtraFields } from "../metrics/core/metricRegistry";
import type { MetricInputValuesByMetric } from "../metrics/core/metricRegistry";
import type { OptimizerExtraField } from "./optimizerParetoTypes";
import { collectRelevantAttributes } from "./utils";

type OptimizerProfileInputOptions = {
  items: Item[];
  weights: WeightRow[];
  selectedMetricOutputs: Set<string>;
  metricInputValues?: MetricInputValuesByMetric;
  minValueEnabled: boolean;
  minAttrGroups: MinAttrGroup[];
  hero?: string;
  heroPowers?: string[];
};

export type OptimizerProfileInputs = {
  attrKeys: string[];
  extraFields: OptimizerExtraField[];
};

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
  metricInputValues,
  minValueEnabled,
  minAttrGroups,
  hero,
}: OptimizerProfileInputOptions): OptimizerProfileInputs {
  const relevantAttrs = collectRelevantAttributes(weights, minValueEnabled, minAttrGroups);
  const itemAttrs = buildItemAttributeSet(items);
  const attrKeys = Array.from(relevantAttrs).filter((attr) => itemAttrs.has(attr));

  const extraFields: OptimizerExtraField[] = [];
  if (selectedMetricOutputs.size > 0) {
    extraFields.push(
      ...collectMetricExtraFields(hero ?? "", selectedMetricOutputs, metricInputValues),
    );
  }

  return { attrKeys, extraFields };
}
