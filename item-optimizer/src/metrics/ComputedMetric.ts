export type MetricUnit = "raw" | "burst" | "sustain" | (string & {});

export type MetricInputValue = boolean | number;

export interface MetricInputBase {
  id: string;
  label: string;
  description?: string;
}

export interface MetricBoolInputDefinition extends MetricInputBase {
  type: "bool";
  defaultValue: boolean;
}

export interface MetricNumberInputDefinition extends MetricInputBase {
  type: "number";
  defaultValue: number;
  min?: number;
  max?: number;
  step?: number;
}

export type MetricInputDefinition =
  | MetricBoolInputDefinition
  | MetricNumberInputDefinition;

export interface MetricOutputDefinition {
  id: string;
  label: string;
  unit: MetricUnit;
  description?: string;
}

export type MetricInputValues<
  TInputs extends readonly MetricInputDefinition[] = readonly MetricInputDefinition[],
> = Partial<{
  [K in TInputs[number]["id"]]: MetricInputValue;
}>;

export type MetricResolvedInputValues<
  TInputs extends readonly MetricInputDefinition[] = readonly MetricInputDefinition[],
> = {
  [K in TInputs[number]["id"]]: MetricInputValue;
};

export type MetricOutputValues<
  TOutputs extends readonly MetricOutputDefinition[] = readonly MetricOutputDefinition[],
> = {
  [K in TOutputs[number]["id"]]: number;
};

export abstract class ComputedMetric<
  TInputs extends readonly MetricInputDefinition[] = readonly MetricInputDefinition[],
  TOutputs extends readonly MetricOutputDefinition[] = readonly MetricOutputDefinition[],
> {
  static readonly id: string;
  static readonly label: string;
  static readonly description?: string;
  static readonly hero?: string | readonly string[];
  static readonly inputs: readonly MetricInputDefinition[] = [];
  static readonly outputs: readonly MetricOutputDefinition[] = [];

  static resolveInputs<
    T extends typeof ComputedMetric,
    TResolved extends MetricResolvedInputValues = MetricResolvedInputValues,
  >(this: T, values: MetricInputValues = {}): TResolved {
    const resolved: Record<string, MetricInputValue> = {};
    this.inputs.forEach((input) => {
      const provided = values[input.id];
      if (input.type === "number") {
        let nextValue =
          typeof provided === "number" ? provided : input.defaultValue;
        if (input.min !== undefined) {
          nextValue = Math.max(input.min, nextValue);
        }
        if (input.max !== undefined) {
          nextValue = Math.min(input.max, nextValue);
        }
        resolved[input.id] = nextValue;
      } else {
        resolved[input.id] =
          typeof provided === "boolean" ? provided : input.defaultValue;
      }
    });
    return resolved as TResolved;
  }

  evaluateWithDefaults(
    values: MetricInputValues<TInputs> = {},
  ): MetricOutputValues<TOutputs> {
    const ctor = this.constructor as typeof ComputedMetric;
    const resolved = ctor.resolveInputs(values);
    return this.evaluate(resolved as MetricResolvedInputValues<TInputs>);
  }

  abstract evaluate(
    inputs: MetricResolvedInputValues<TInputs>,
  ): MetricOutputValues<TOutputs>;
}
