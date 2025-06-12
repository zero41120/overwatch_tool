import type { Item } from '../types';
import HeroSelect from './input/HeroSelect';
import CashInput from './input/CashInput';
import EquippedSection from './input/EquippedSection';
import AvoidSection from './input/AvoidSection';
import WeightsSection from './input/WeightsSection';
import MinValueSection from './input/MinValueSection';
import SubmitSection from './input/SubmitSection';

interface Props {
  heroes: string[];
  attrTypes: string[];
  filteredItems: Item[];
  onSubmit: () => void;
  validate: () => boolean;
}

export default function InputSection({ heroes, attrTypes, filteredItems, onSubmit, validate }: Props) {
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        if (validate()) onSubmit();
      }}
      className="space-y-6 bg-white rounded-xl shadow-lg p-6 sm:p-8 lg:col-span-1"
    >
      <HeroSelect heroes={heroes} />
      <CashInput />
      <EquippedSection items={filteredItems} />
      <AvoidSection items={filteredItems} />
      <MinValueSection attrTypes={attrTypes} />
      <WeightsSection attrTypes={attrTypes} />
      <SubmitSection onSubmit={onSubmit} validate={validate} />
    </form>
  );
}
