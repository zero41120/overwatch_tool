import type { Item } from "../types";
import { buildItemMeta, insertProfile } from "./optimizerParetoHelpers";
import type { OptimizerParetoOptions, OptimizerProfile } from "./optimizerParetoTypes";

export type { OptimizerParetoOptions, OptimizerProfile } from "./optimizerParetoTypes";

export function buildOptimizerProfiles(items: Item[], opts: OptimizerParetoOptions): OptimizerProfile[] {
  const scaledBudget = Math.floor(opts.maxCash / opts.costStep);
  if (scaledBudget < 0) return [];

  const attrIndex = new Map<string, number>();
  opts.attrKeys.forEach((key, idx) => attrIndex.set(key, idx));
  const extraFields = opts.extraFields ?? [];
  const metas = items.map((item) => buildItemMeta(item, opts.attrKeys, attrIndex, extraFields));
  const extraFieldCount = extraFields.length;
  const onProgress = opts.onProgress;
  const totalItems = metas.length;
  const progressInterval = Math.max(1, opts.progressInterval ?? 25);

  if (onProgress) {
    onProgress({ phase: "profiles", completed: 0, total: totalItems });
  }

  const dp: OptimizerProfile[][][] = Array.from({ length: opts.maxItems + 1 }, () =>
    Array.from({ length: scaledBudget + 1 }, () => []),
  );

  dp[0][0] = [
    {
      cost: 0,
      attrs: Array(opts.attrKeys.length).fill(0) as number[],
      extras: Array(extraFieldCount).fill(0) as number[],
      indices: [],
    },
  ];

  metas.forEach((meta, index) => {
    const scaledCost = Math.ceil(meta.cost / opts.costStep);
    if (scaledCost <= scaledBudget) {
      for (let k = opts.maxItems; k >= 1; k -= 1) {
        for (let w = scaledBudget; w >= scaledCost; w -= 1) {
          const sourceProfiles = dp[k - 1][w - scaledCost];
          if (sourceProfiles.length === 0) continue;

          const target = dp[k][w];
          for (const profile of sourceProfiles) {
            const attrs = profile.attrs.map((value, i) => value + meta.attrs[i]);
            const extras = profile.extras.map((value, i) => {
              const field = extraFields[i];
              if (!field) return value;
              if (field.combine === "max") return Math.max(value, meta.extras[i] ?? 0);
              return value + (meta.extras[i] ?? 0);
            });
            insertProfile(
              target,
              {
                cost: profile.cost + meta.cost,
                attrs,
                extras,
                indices: [...profile.indices, index],
              },
              opts,
            );
          }
        }
      }
    }

    if (onProgress && ((index + 1) % progressInterval === 0 || index + 1 === totalItems)) {
      onProgress({ phase: "profiles", completed: index + 1, total: totalItems });
    }
  });

  const profiles: OptimizerProfile[] = [];
  for (let k = 0; k <= opts.maxItems; k += 1) {
    for (let w = 0; w <= scaledBudget; w += 1) {
      profiles.push(...dp[k][w]);
    }
  }

  return profiles;
}
