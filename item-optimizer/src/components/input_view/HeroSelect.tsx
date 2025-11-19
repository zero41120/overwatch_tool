import { useMemo } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { setHero } from "../../slices/inputSlice";
import { ALL_HEROES, NO_HERO } from "../../types";
import HeroPicker from "../shared/HeroPicker";

interface Props {
  heroes: string[];
  heroIcons?: Record<string, string>;
}

export default function HeroSelect({ heroes, heroIcons }: Props) {
  const hero = useAppSelector((state) => state.input.present.hero);
  const dispatch = useAppDispatch();
  const options = useMemo(() => {
    const heroSet = new Set(heroes);
    const heroOptions = Array.from(heroSet).sort().map((name) => ({
      value: name,
      label: name,
      iconUrl: heroIcons?.[name],
    }));
    heroOptions.push({ value: NO_HERO, label: NO_HERO, iconUrl: heroIcons?.[NO_HERO] });
    heroOptions.push({ value: ALL_HEROES, label: ALL_HEROES, iconUrl: heroIcons?.[ALL_HEROES] });
    return heroOptions;
  }, [heroes, heroIcons]);

  return (
    <HeroPicker
      label="Hero"
      value={hero}
      options={options}
      onChange={(next) => dispatch(setHero(next))}
      placeholder="Select hero"
      emptyOptionLabel="Clear hero"
    />
  );
}
