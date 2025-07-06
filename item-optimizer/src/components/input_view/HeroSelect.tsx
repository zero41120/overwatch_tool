import { useAppDispatch, useAppSelector } from "../../hooks";
import { setHero } from "../../slices/inputSlice";
import { ALL_HEROES, NO_HERO } from "../../types";
import SearchableDropdown from "../shared/SearchableDropdown";

interface Props {
  heroes: string[];
}

export default function HeroSelect({ heroes }: Props) {
  const hero = useAppSelector((state) => state.input.present.hero);
  const dispatch = useAppDispatch();
  const options = [NO_HERO, ALL_HEROES, ...heroes].map((h) => ({ value: h, label: h }));
  return (
    <div>
      <label
        htmlFor="hero-select"
        className="block text-sm font-medium mb-1 dark:text-gray-300"
      >
        Hero
      </label>
        <SearchableDropdown
          label="Hero"
          placeholder="Select hero"
          options={options}
          value={hero}
          onChange={(v) => dispatch(setHero(v))}
        />
    </div>
  );
}
