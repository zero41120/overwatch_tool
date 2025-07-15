import type { Item } from "../../types";
import AvoidSection from "./AvoidSection";
import CashInput from "./CashInput";
import EquippedSection from "./EquippedSection";
import HeroSelect from "./HeroSelect";
import OverrideToggle from "./OverrideToggle";
import MinValueSection from "./MinValueSection";
import SubmitSection from "./SubmitSection";
import WeightsSection from "./WeightsSection";

interface Props {
  heroes: string[];
  attrTypes: string[];
  filteredItems: Item[];
  onSubmit: (mode: "cheapest" | "premium" | "incremental") => void;
  validate: () => boolean;
}

export default function InputSection({ heroes, attrTypes, filteredItems, onSubmit, validate }: Props) {
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
          <HeroSelect heroes={heroes} />
          <CashInput />
        </div>
        <hr className="my-4 border-gray-300 dark:border-gray-600" />
        <EquippedSection items={filteredItems} />
        <hr className="my-4 border-gray-300 dark:border-gray-600" />
        <AvoidSection items={filteredItems} />
        <div className="my-4">
          <OverrideToggle />
        </div>
        <hr className="my-4 border-gray-300 dark:border-gray-600" />
        <MinValueSection attrTypes={attrTypes} />
        <hr className="my-4 border-gray-300 dark:border-gray-600" />
        <WeightsSection attrTypes={attrTypes} />
        <hr className="my-4 border-gray-300 dark:border-gray-600" />
        <SubmitSection onSubmit={onSubmit} validate={validate} />
      </form>
    </div>
  );
}
