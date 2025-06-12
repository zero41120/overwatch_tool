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
    <form
      onSubmit={e => {
        e.preventDefault();
        if (validate()) onSubmit();
      }}
      className="glass-card space-y-6 rounded-xl shadow-lg p-6 sm:p-8"
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
