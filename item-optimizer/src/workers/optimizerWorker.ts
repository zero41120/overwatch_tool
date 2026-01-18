import type { ResultCombo } from "../types";
import { findBestBuilds, findBestBuildsByBudget } from "../utils/optimizerSearch";
import type { OptimizerSearchOptions } from "../utils/optimizerSearch";
import type { OptimizerProgress } from "../utils/optimizerParetoTypes";
import { buildOptimizerProfileInputs } from "../utils/optimizerProfileInputs";

type OptimizerWorkerMode = "cheapest" | "premium" | "incremental";

type OptimizerWorkerSearchOptions = Omit<
  OptimizerSearchOptions,
  "attrKeys" | "extraFields" | "onProgress" | "progressInterval"
>;

type OptimizerWorkerRequest = {
  requestId: number;
  mode: OptimizerWorkerMode;
  options: OptimizerWorkerSearchOptions;
  budgets?: number[];
  progressInterval?: number;
};

type OptimizerWorkerMessage =
  | {
      type: "progress";
      requestId: number;
      progress: OptimizerProgress;
    }
  | {
      type: "result";
      requestId: number;
      results: ResultCombo[];
    }
  | {
      type: "error";
      requestId: number;
      error: string;
    };

function runSearch(payload: OptimizerWorkerRequest): ResultCombo[] {
  const onProgress = (progress: OptimizerProgress) => {
    const message: OptimizerWorkerMessage = {
      type: "progress",
      requestId: payload.requestId,
      progress,
    };
    self.postMessage(message);
  };
  const profileInputs = buildOptimizerProfileInputs({
    items: payload.options.items,
    weights: payload.options.weights,
    selectedMetricOutputs: payload.options.selectedMetricOutputs,
    metricInputValues: payload.options.metricInputValues,
    minValueEnabled: payload.options.minValueEnabled,
    minAttrGroups: payload.options.minAttrGroups,
    hero: payload.options.hero,
    heroPowers: payload.options.heroPowers,
  });
  const baseOptions: OptimizerSearchOptions = {
    ...payload.options,
    attrKeys: profileInputs.attrKeys,
    extraFields: profileInputs.extraFields,
    onProgress,
    progressInterval: payload.progressInterval,
  };

  if (payload.mode === "incremental") {
    return findBestBuildsByBudget({
      ...baseOptions,
      budgets: payload.budgets ?? [],
    });
  }

  return findBestBuilds(baseOptions);
}

self.onmessage = (event: MessageEvent<OptimizerWorkerRequest>) => {
  const payload = event.data;
  try {
    const results = runSearch(payload);
    const message: OptimizerWorkerMessage = {
      type: "result",
      requestId: payload.requestId,
      results,
    };
    self.postMessage(message);
  } catch (error) {
    const message: OptimizerWorkerMessage = {
      type: "error",
      requestId: payload.requestId,
      error: error instanceof Error ? error.message : String(error),
    };
    self.postMessage(message);
  }
};
