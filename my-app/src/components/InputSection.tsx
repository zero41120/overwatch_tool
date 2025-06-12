import type { Item } from '../types';
import AvoidSection from './input/AvoidSection';
import CashInput from './input/CashInput';
import EquippedSection from './input/EquippedSection';
import HeroSelect from './input/HeroSelect';
import MinValueSection from './input/MinValueSection';
import SubmitSection from './input/SubmitSection';
import WeightsSection from './input/WeightsSection';

interface Props {
  heroes: string[];
  attrTypes: string[];
  filteredItems: Item[];
  onSubmit: () => void;
  validate: () => boolean;
}

export default function InputSection({ heroes, attrTypes, filteredItems, onSubmit, validate }: Props) {
  return (
    <div className="glass-card space-y-6 rounded-xl shadow-lg p-6 sm:p-8   dark:border-gray-700">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 sm:text-3xl">Configuration</h2>

      <form
        onSubmit={e => {
          e.preventDefault();
          if (validate()) onSubmit();
        }}
      >
        <HeroSelect heroes={heroes} />
        <CashInput />
        <EquippedSection items={filteredItems} />
        <AvoidSection items={filteredItems} />
        <MinValueSection attrTypes={attrTypes} />
        <WeightsSection attrTypes={attrTypes} />
        <SubmitSection onSubmit={onSubmit} validate={validate} />
      </form>
    </div>
  );
}
