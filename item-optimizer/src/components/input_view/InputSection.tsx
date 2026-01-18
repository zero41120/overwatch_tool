import type { Item } from "../../types";
import type { MetricOutputDescriptor } from "../../metrics/core/metricRegistry";
import AvoidSection from "./AvoidSection";
import CashInput from "./CashInput";
import EquippedSection from "./EquippedSection";
import HeroSelect from "./HeroSelect";
import MetricInputsSection from "./MetricInputsSection";
import OverrideToggle from "./OverrideToggle";
import MinValueSection from "./MinValueSection";
import SubmitSection from "./SubmitSection";
import WeightsSection from "./WeightsSection";

interface Props {
  heroes: string[];
  heroIcons: Record<string, string>;
  attrTypes: string[];
  metricOutputs: MetricOutputDescriptor[];
  filteredItems: Item[];
  onSubmit: (mode: "cheapest" | "premium" | "incremental") => void;
  validate: () => boolean;
  isCalculating: boolean;
  progressPercent: number | null;
  progressLabel: string | null;
}

export default function InputSection({
  heroes,
  heroIcons,
  attrTypes,
  metricOutputs,
  filteredItems,
  onSubmit,
  validate,
  isCalculating,
  progressPercent,
  progressLabel,
}: Props) {
  return (
    <div className="glass-card space-y-6 rounded-xl shadow-lg p-4 sm:p-6  dark:border-gray-700">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 sm:text-3xl">Configuration</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (validate()) onSubmit("cheapest");
        }}
        className="grid"
      >
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
          <HeroSelect heroes={heroes} heroIcons={heroIcons} />
          <CashInput />
        </div>
        <EquippedSection items={filteredItems} />
        <hr className="my-4 border-gray-300 dark:border-gray-600" />
        <AvoidSection items={filteredItems} />
        <div className="my-4">
          <OverrideToggle />
        </div>
        <hr className="my-4 border-gray-300 dark:border-gray-600" />
        <MinValueSection attrTypes={attrTypes} />
        <hr className="my-4 border-gray-300 dark:border-gray-600" />
        <WeightsSection metricOutputs={metricOutputs} />
        <div className="my-4">
          <MetricInputsSection />
        </div>
        <hr className="my-4 border-gray-300 dark:border-gray-600" />
        <SubmitSection
          onSubmit={onSubmit}
          validate={validate}
          isCalculating={isCalculating}
          progressPercent={progressPercent}
          progressLabel={progressLabel}
        />
      </form>
    </div>
  );
}
