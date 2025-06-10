import SearchableDropdown from '../SearchableDropdown';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setHero } from '../../slices/inputSlice';

interface Props {
  heroes: string[];
}

export default function HeroSelect({ heroes }: Props) {
  const hero = useAppSelector(state => state.input.present.hero);
  const dispatch = useAppDispatch();
  return (
    <div>
      <label htmlFor="hero-select" className="block text-sm font-medium text-gray-700 mb-1">
        Hero
      </label>
      <SearchableDropdown
        label="Hero"
        placeholder="Select hero"
        options={[{ value: '', label: 'Select hero' }, ...heroes.map(h => ({ value: h, label: h }))]}
        value={hero}
        onChange={v => dispatch(setHero(v))}
      />
    </div>
  );
}
