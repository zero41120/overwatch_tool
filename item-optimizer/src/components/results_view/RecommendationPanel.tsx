import { useEffect, useMemo, useState } from "react";
import type { HeroMetadata, HeroPower, HeroRole, Item } from "../../types";
import { useAppSelector } from "../../hooks";
import HeroPicker, { type HeroOption } from "../shared/HeroPicker";

type SlotConfig = {
  id: string;
  label: string;
  role: HeroRole;
};

const ALLY_SLOTS: SlotConfig[] = [
  { id: "tank", label: "Tank", role: "tank" },
  { id: "damage1", label: "Damage 1", role: "damage" },
  { id: "damage2", label: "Damage 2", role: "damage" },
  { id: "support1", label: "Support 1", role: "support" },
  { id: "support2", label: "Support 2", role: "support" },
];

const ENEMY_SLOTS: SlotConfig[] = [
  { id: "tank", label: "Tank", role: "tank" },
  { id: "damage1", label: "Damage 1", role: "damage" },
  { id: "damage2", label: "Damage 2", role: "damage" },
  { id: "support1", label: "Support 1", role: "support" },
  { id: "support2", label: "Support 2", role: "support" },
];

const ROLE_SLOT_ORDER: Record<HeroRole, string[]> = {
  tank: ["tank"],
  damage: ["damage1", "damage2"],
  support: ["support1", "support2"],
};

type SelectionState = Record<string, string>;

interface Props {
  allItems: Item[];
  powersByHero: Record<string, HeroPower[]>;
  heroMetadata: HeroMetadata[];
}

export default function RecommendationPanel({ allItems, powersByHero, heroMetadata }: Props) {
  const selfHero = useAppSelector((state) => state.input.present.hero);
  const [allySelections, setAllySelections] = useState<SelectionState>({
    tank: "",
    damage1: "",
    damage2: "",
    support1: "",
    support2: "",
  });
  const [enemySelections, setEnemySelections] = useState<SelectionState>({
    tank: "",
    damage1: "",
    damage2: "",
    support1: "",
    support2: "",
  });

  const heroesByRole = useMemo(() => {
    const grouped: Record<HeroRole, HeroMetadata[]> = {
      tank: [],
      damage: [],
      support: [],
    };
    heroMetadata.forEach((meta) => {
      if (meta.role) grouped[meta.role].push(meta);
    });
    (Object.keys(grouped) as HeroRole[]).forEach((role) => {
      grouped[role].sort((a, b) => a.name.localeCompare(b.name));
    });
    return grouped;
  }, [heroMetadata]);

  const heroLookup = useMemo(() => {
    const map = new Map<string, HeroMetadata>();
    heroMetadata.forEach((meta) => {
      if (meta.name) map.set(meta.name, meta);
    });
    return map;
  }, [heroMetadata]);

  useEffect(() => {
    if (!selfHero) return;
    const meta = heroLookup.get(selfHero);
    if (!meta?.role) return;
    const targets = ROLE_SLOT_ORDER[meta.role] || [];
    setAllySelections((prev) => {
      const next = { ...prev };
      Object.keys(next).forEach((key) => {
        if (next[key] === selfHero) next[key] = "";
      });
      const slot = targets.find((slotId) => next[slotId] === "" || next[slotId] === selfHero);
      if (!slot) return prev;
      next[slot] = selfHero;
      return next;
    });
  }, [selfHero, heroLookup]);

  const friendlyHeroes = useMemo(() => {
    const team = Object.values(allySelections).filter(Boolean);
    if (selfHero && !team.includes(selfHero)) {
      team.push(selfHero);
    }
    return team.filter((name): name is string => Boolean(name));
  }, [selfHero, allySelections]);

  const enemyHeroes = useMemo(() => {
    return Object.values(enemySelections).filter((name): name is string => Boolean(name));
  }, [enemySelections]);

  const friendlySet = useMemo(() => new Set(friendlyHeroes), [friendlyHeroes]);
  const enemySet = useMemo(() => new Set(enemyHeroes), [enemyHeroes]);

  const recommendedItems = useMemo(() => {
    return allItems
      .map((item) => {
        const synergyMatches = (item.synergyHeroes || []).filter((name) => friendlySet.has(name));
        const counterMatches = (item.counterHeroes || []).filter((name) => enemySet.has(name));
        if (!synergyMatches.length && !counterMatches.length) return null;
        return { item, synergyMatches, counterMatches };
      })
      .filter((entry): entry is { item: Item; synergyMatches: string[]; counterMatches: string[] } => Boolean(entry));
  }, [allItems, friendlySet, enemySet]);

  const recommendedPowers = useMemo(() => {
    const flattened = Object.values(powersByHero).flat();
    return flattened
      .map((power) => {
        const synergyMatches = (power.synergyHeroes || []).filter((name) => friendlySet.has(name));
        const counterMatches = (power.counterHeroes || []).filter((name) => enemySet.has(name));
        if (!synergyMatches.length && !counterMatches.length) return null;
        return { power, synergyMatches, counterMatches };
      })
      .filter(
        (
          entry,
        ): entry is { power: HeroPower; synergyMatches: string[]; counterMatches: string[] } => Boolean(entry),
      );
  }, [powersByHero, friendlySet, enemySet]);

  useEffect(() => {
    const taggedItems = allItems
      .filter((item) => item.synergyHeroes?.length || item.counterHeroes?.length)
      .map((item) => ({
        name: item.name,
        synergyHeroes: item.synergyHeroes,
        counterHeroes: item.counterHeroes,
      }));
    console.log("[recommendations] tagged items", JSON.stringify(taggedItems, null, 2));
    const taggedPowers = Object.values(powersByHero)
      .flat()
      .filter((power) => power.synergyHeroes?.length || power.counterHeroes?.length)
      .map((power) => ({
        hero: power.hero,
        name: power.name,
        synergyHeroes: power.synergyHeroes,
        counterHeroes: power.counterHeroes,
      }));
    console.log("[recommendations] tagged powers", JSON.stringify(taggedPowers, null, 2));
  }, [allItems, powersByHero]);

  useEffect(() => {
    console.log("[recommendations] friendly heroes", JSON.stringify(friendlyHeroes));
    console.log("[recommendations] enemy heroes", JSON.stringify(enemyHeroes));
    console.log(
      "[recommendations] item matches",
      JSON.stringify(
        recommendedItems.map(({ item, synergyMatches, counterMatches }) => ({
          name: item.name,
          synergyMatches,
          counterMatches,
        })),
        null,
        2,
      ),
    );
    console.log(
      "[recommendations] power matches",
      JSON.stringify(
        recommendedPowers.map(({ power, synergyMatches, counterMatches }) => ({
          hero: power.hero,
          name: power.name,
          synergyMatches,
          counterMatches,
        })),
        null,
        2,
      ),
    );
  }, [friendlyHeroes, enemyHeroes, recommendedItems, recommendedPowers]);


  return (
    <div className="space-y-8">
      <HeroRow
        title="Allied Team"
        description="Fill the remaining allied slots by role."
        slots={ALLY_SLOTS}
        selections={allySelections}
        onChange={(slotId, value) => {
          setAllySelections((prev) => {
            const next = { ...prev };
            Object.keys(next).forEach((key) => {
              if (key !== slotId && next[key] === value) next[key] = "";
            });
            next[slotId] = value;
            return next;
          });
        }}
        heroesByRole={heroesByRole}
        heroLookup={heroLookup}
        lockedHero={selfHero}
      />

      <HeroRow
        title="Enemy Team"
        description="Select the enemy lineup to surface counters."
        slots={ENEMY_SLOTS}
        selections={enemySelections}
        onChange={(slotId, value) => {
          setEnemySelections((prev) => {
            const next = { ...prev };
            Object.keys(next).forEach((key) => {
              if (key !== slotId && next[key] === value) next[key] = "";
            });
            next[slotId] = value;
            return next;
          });
        }}
        heroesByRole={heroesByRole}
        heroLookup={heroLookup}
        variant="enemy"
      />

      <RecommendationList
        title="Recommended Items"
        entries={recommendedItems.map(({ item, synergyMatches, counterMatches }) => ({
          name: item.name,
          matches: { synergyMatches, counterMatches },
        }))}
        emptyLabel="No items have been tagged with synergy/counter heroes yet. Add arrays on item overrides to populate this list."
      />

      <RecommendationList
        title="Recommended Powers"
        entries={recommendedPowers.map(({ power, synergyMatches, counterMatches }) => ({
          name: `${power.hero} — ${power.name}`,
          matches: { synergyMatches, counterMatches },
        }))}
        emptyLabel="Tag hero powers with synergy/counter heroes in wiki-data overrides to see suggestions."
      />
    </div>
  );
}

function HeroRow({
  title,
  description,
  slots,
  selections,
  onChange,
  heroesByRole,
  heroLookup,
  variant = "ally",
  lockedHero,
}: {
  title: string;
  description: string;
  slots: SlotConfig[];
  selections: SelectionState;
  onChange: (id: string, value: string) => void;
  heroesByRole: Record<HeroRole, HeroMetadata[]>;
  heroLookup: Map<string, HeroMetadata>;
  variant?: "ally" | "enemy";
  lockedHero?: string;
}) {
  const roleOptions = (role: HeroRole): HeroOption[] =>
    heroesByRole[role]?.map((meta) => ({
      value: meta.name,
      label: meta.name,
      iconUrl: meta.iconUrl,
      role: meta.role,
    })) ?? [];

  return (
    <div>
      <div className="mb-3">
        <p className={`text-lg font-semibold ${variant === "enemy" ? "text-red-700 dark:text-red-300" : ""}`}>{title}</p>
        <p className={`text-sm ${variant === "enemy" ? "text-red-600 dark:text-red-400" : "text-gray-600 dark:text-gray-400"}`}>
          {description}
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 rounded-xl border border-dashed border-gray-200 dark:border-gray-700 p-1">
        {slots.map((slot) => {
          const selectedValue = selections[slot.id] || "";
          const selectedMeta = selectedValue ? heroLookup.get(selectedValue) : undefined;
          const isLocked = lockedHero && selectedValue === lockedHero;
          return (
            <HeroPicker
              key={slot.id}
              className="relative"
              value={selectedValue}
              options={roleOptions(slot.role)}
              onChange={(value) => onChange(slot.id, value)}
              placeholder={`Select ${slot.label}`}
              disabled={Boolean(isLocked)}
              emptyOptionLabel="Clear slot"
              trigger={({ open, disabled }) => (
                <button
                  type="button"
                  onClick={() => {
                    if (!disabled) open();
                  }}
                  className={`w-full rounded-xl border p-2 text-center ${
                    variant === "enemy"
                      ? "border-red-200 bg-white/70 dark:border-red-700 dark:bg-red-950/30"
                      : "border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900"
                  } ${disabled ? "cursor-not-allowed opacity-80" : ""}`}
                >
                  <div className="mx-auto mb-2 aspect-[3/4] w-full overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-700">
                    {selectedMeta?.iconUrl ? (
                      <img src={selectedMeta.iconUrl} alt={`${selectedValue} portrait`} className="h-full w-full object-cover" />
                    ) : (
                      <div className="flex h-full items-center justify-center text-lg font-semibold text-gray-500 dark:text-gray-300">
                        {selectedValue.slice(0, 2) || slot.label.slice(0, 2)}
                      </div>
                    )}
                  </div>
                  <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                    {selectedValue || "Select hero"}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 capitalize">{selectedMeta?.role}</p>
                  {isLocked && <span className="mt-2 inline-block h-1 w-full rounded bg-teal-400 dark:bg-teal-500" />}
                </button>
              )}
            />
          );
        })}
      </div>
    </div>
  );
}

function RecommendationList({
  title,
  entries,
  emptyLabel,
}: {
  title: string;
  entries: { name: string; matches: { synergyMatches: string[]; counterMatches: string[] } }[];
  emptyLabel: string;
}) {
  return (
    <div>
      <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">{title}</h3>
      {entries.length === 0 ? (
        <p className="text-sm text-gray-500 dark:text-gray-400">{emptyLabel}</p>
      ) : (
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {entries.map((entry) => (
            <li key={entry.name} className="py-3">
              <p className="font-medium text-gray-900 dark:text-gray-100">{entry.name}</p>
              <div className="mt-1 flex flex-wrap gap-2 text-sm">
                {entry.matches.synergyMatches.length > 0 && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2 py-0.5 text-emerald-900 dark:bg-emerald-900/40 dark:text-emerald-200">
                    Synergy:
                    <strong>{entry.matches.synergyMatches.join(", ")}</strong>
                  </span>
                )}
                {entry.matches.counterMatches.length > 0 && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 px-2 py-0.5 text-amber-900 dark:bg-amber-900/40 dark:text-amber-200">
                    Counter:
                    <strong>{entry.matches.counterMatches.join(", ")}</strong>
                  </span>
                )}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
