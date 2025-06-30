import { useAppDispatch, useAppSelector } from "../../hooks";
import { setHero } from "../../slices/inputSlice";
import SearchableDropdown from "../shared/SearchableDropdown";
import { ALL_HEROES, NO_HERO } from "../../types";

interface Props {
  heroes: string[];
}

export default function HeroSelect({ heroes }: Props) {
  const hero = useAppSelector((state) => state.input.present.hero);
  const dispatch = useAppDispatch();
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
        options={[
          { value: "", label: "Select hero" },
          { value: NO_HERO, label: NO_HERO },
          { value: ALL_HEROES, label: ALL_HEROES },
          ...heroes.map((h) => ({ value: h, label: h })),
        ]}
        value={hero}
        onChange={(v) => dispatch(setHero(v))}
      />
    </div>
  );
}
