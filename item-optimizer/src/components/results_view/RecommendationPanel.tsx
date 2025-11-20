import { useEffect, useMemo, useState } from "react";
import type { MouseEvent } from "react";
import type { HeroMetadata, HeroPower, HeroRole, Item } from "../../types";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { clearTooltip, setTooltip } from "../../slices/tooltipSlice";
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
        const antiMatches = (item.antiSynergyHeroes || []).filter((name) => friendlySet.has(name));
        if (!synergyMatches.length && !counterMatches.length && !antiMatches.length) return null;
        return { item, synergyMatches, counterMatches, antiMatches };
      })
      .filter(
        (
          entry,
        ): entry is { item: Item; synergyMatches: string[]; counterMatches: string[]; antiMatches: string[] } => Boolean(entry),
      );
  }, [allItems, friendlySet, enemySet]);

  const recommendedPowers = useMemo(() => {
    const flattened = Object.values(powersByHero).flat();
    return flattened
      .map((power) => {
        const synergyMatches = (power.synergyHeroes || []).filter((name) => friendlySet.has(name));
        const counterMatches = (power.counterHeroes || []).filter((name) => enemySet.has(name));
        const antiMatches = (power.antiSynergyHeroes || []).filter((name) => friendlySet.has(name));
        if (!synergyMatches.length && !counterMatches.length && !antiMatches.length) return null;
        return { power, synergyMatches, counterMatches, antiMatches };
      })
      .filter(
        (
          entry,
        ): entry is { power: HeroPower; synergyMatches: string[]; counterMatches: string[]; antiMatches: string[] } => Boolean(entry),
      );
  }, [powersByHero, friendlySet, enemySet]);

  useEffect(() => {
    const taggedItems = allItems
      .filter((item) => item.synergyHeroes?.length || item.counterHeroes?.length || item.antiSynergyHeroes?.length)
      .map((item) => ({
        name: item.name,
        synergyHeroes: item.synergyHeroes,
        counterHeroes: item.counterHeroes,
        antiSynergyHeroes: item.antiSynergyHeroes,
      }));
    console.log("[recommendations] tagged items", JSON.stringify(taggedItems, null, 2));
    const taggedPowers = Object.values(powersByHero)
      .flat()
      .filter((power) => power.synergyHeroes?.length || power.counterHeroes?.length || power.antiSynergyHeroes?.length)
      .map((power) => ({
        hero: power.hero,
        name: power.name,
        synergyHeroes: power.synergyHeroes,
        counterHeroes: power.counterHeroes,
        antiSynergyHeroes: power.antiSynergyHeroes,
      }));
    console.log("[recommendations] tagged powers", JSON.stringify(taggedPowers, null, 2));
  }, [allItems, powersByHero]);

  useEffect(() => {
    console.log("[recommendations] friendly heroes", JSON.stringify(friendlyHeroes));
    console.log("[recommendations] enemy heroes", JSON.stringify(enemyHeroes));
    console.log(
      "[recommendations] item matches",
      JSON.stringify(
        recommendedItems.map(({ item, synergyMatches, counterMatches, antiMatches }) => ({
          name: item.name,
          synergyMatches,
          counterMatches,
          antiMatches,
        })),
        null,
        2,
      ),
    );
    console.log(
      "[recommendations] power matches",
      JSON.stringify(
        recommendedPowers.map(({ power, synergyMatches, counterMatches, antiMatches }) => ({
          hero: power.hero,
          name: power.name,
          synergyMatches,
          counterMatches,
          antiMatches,
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
        entries={recommendedItems.map(({ item, synergyMatches, counterMatches, antiMatches }) => ({
          type: "item" as const,
          item,
          id: item.id || item.name,
          name: item.name,
          iconUrl: item.iconUrl,
          matches: { synergyMatches, counterMatches, antiMatches },
        }))}
        emptyLabel="No items have been tagged with synergy/counter heroes yet. Add arrays on item overrides to populate this list."
      />

      <RecommendationList
        title="Recommended Powers"
        entries={recommendedPowers.map(({ power, synergyMatches, counterMatches, antiMatches }) => ({
          type: "power" as const,
          power,
          id: `${power.hero}-${power.name}`,
          name: power.name,
          iconUrl: power.iconUrl,
          matches: { synergyMatches, counterMatches, antiMatches },
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

type MetricKey = "synergy" | "counter" | "anti";

type Matches = {
  synergyMatches: string[];
  counterMatches: string[];
  antiMatches: string[];
};

type RecommendationEntry =
  | {
      type: "item";
      item: Item;
      id: string;
      name: string;
      iconUrl?: string;
      matches: Matches;
    }
  | {
      type: "power";
      power: HeroPower;
      id: string;
      name: string;
      iconUrl?: string;
      matches: Matches;
    };

function RecommendationList({ title, entries, emptyLabel }: { title: string; entries: RecommendationEntry[]; emptyLabel: string }) {
  const sortedEntries = [...entries].sort((a, b) => {
    const totalA = a.matches.synergyMatches.length + a.matches.counterMatches.length + a.matches.antiMatches.length;
    const totalB = b.matches.synergyMatches.length + b.matches.counterMatches.length + b.matches.antiMatches.length;
    if (totalA === totalB) return a.name.localeCompare(b.name);
    return totalB - totalA;
  });

  return (
    <div>
      <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">{title}</h3>
      {sortedEntries.length === 0 ? (
        <p className="text-sm text-gray-500 dark:text-gray-400">{emptyLabel}</p>
      ) : (
        <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {sortedEntries.map((entry) => (
            <RecommendationCard key={entry.id} entry={entry} />
          ))}
        </div>
      )}
    </div>
  );
}

function RecommendationCard({ entry }: { entry: RecommendationEntry }) {
  const dispatch = useAppDispatch();
  const [activeMetric, setActiveMetric] = useState<MetricKey | null>(null);

  const renderIcon = () =>
    entry.iconUrl ? (
      <img src={entry.iconUrl} alt="" className="h-full w-full object-cover" />
    ) : (
      <div className="flex h-full w-full items-center justify-center text-xl font-semibold text-gray-500 dark:text-gray-300">
        {entry.name.slice(0, 2)}
      </div>
    );

  const handleTooltip = (event: MouseEvent<HTMLDivElement>) => {
    if (entry.type !== "item") return;
    dispatch(setTooltip({ item: entry.item, x: event.clientX, y: event.clientY }));
  };

  const handleTooltipLeave = () => {
    if (entry.type !== "item") return;
    dispatch(clearTooltip());
  };

  const handleMetricToggle = (key: MetricKey, count: number) => {
    if (count === 0) return;
    setActiveMetric((prev) => (prev === key ? null : key));
  };

  const buttonBase =
    "rounded-xl border px-3 py-1.5 text-center text-[0.7rem] font-semibold uppercase tracking-wide transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900 disabled:cursor-default disabled:opacity-40";

  const heroLists: Record<MetricKey, string[]> = {
    synergy: entry.matches.synergyMatches,
    counter: entry.matches.counterMatches,
    anti: entry.matches.antiMatches,
  };

  const activeMetricConfig = SCORE_METRICS.find((metric) => metric.key === activeMetric);
  const activeHeroList = activeMetric ? heroLists[activeMetric] : [];

  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition hover:shadow-md dark:border-gray-700 dark:bg-gray-900">
      <div
        className="relative h-28 w-full overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-800"
        onMouseEnter={handleTooltip}
        onMouseMove={handleTooltip}
        onMouseLeave={handleTooltipLeave}
      >
        {renderIcon()}
        <div className="pointer-events-none absolute inset-x-2 top-2 rounded bg-black/60 px-2 py-1 text-[0.65rem] font-semibold uppercase tracking-wide text-white shadow">
          {entry.name}
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {SCORE_METRICS.map((metric) => {
          const count = heroLists[metric.key].length;
          return (
            <button
              key={metric.key}
              type="button"
              disabled={count === 0}
              onClick={() => handleMetricToggle(metric.key, count)}
              className={`${buttonBase} ${metric.buttonClass} ${
                activeMetric === metric.key ? "ring-2 ring-offset-2 ring-offset-white dark:ring-offset-gray-900" : ""
              }`}
            >
              {metric.label}+{count}
            </button>
          );
        })}
      </div>

      {activeMetric && activeMetricConfig && activeHeroList.length > 0 && (
        <div
          className={`max-h-[300px] overflow-y-auto rounded-2xl border border-current/30 px-4 py-3 text-xs ${activeMetricConfig.listClass}`}
        >
          <p className="mb-2 text-[0.65rem] font-semibold uppercase tracking-wide opacity-80">{activeMetricConfig.listLabel}</p>
          <ul className="space-y-1">
            {activeHeroList.map((hero) => (
              <li key={`${activeMetric}-${hero}`} className="flex items-center gap-2 text-sm">
                <span className="inline-flex h-1.5 w-1.5 rounded-full bg-current" />
                <span>{hero}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

type ScoreMetric = {
  key: MetricKey;
  label: string;
  buttonClass: string;
  listClass: string;
  listLabel: string;
};

const SCORE_METRICS: ScoreMetric[] = [
  {
    key: "synergy",
    label: "SYN",
    buttonClass:
      "border-emerald-200 text-emerald-800 hover:bg-emerald-50 focus-visible:ring-emerald-300 dark:border-emerald-800 dark:text-emerald-200 dark:hover:bg-emerald-900/40",
    listClass: "text-emerald-700 dark:text-emerald-300",
    listLabel: "Synergy Heroes",
  },
  {
    key: "counter",
    label: "CNT",
    buttonClass:
      "border-amber-200 text-amber-800 hover:bg-amber-50 focus-visible:ring-amber-300 dark:border-amber-800 dark:text-amber-200 dark:hover:bg-amber-900/40",
    listClass: "text-amber-700 dark:text-amber-300",
    listLabel: "Countered Heroes",
  },
  {
    key: "anti",
    label: "ANTI",
    buttonClass:
      "border-rose-200 text-rose-800 hover:bg-rose-50 focus-visible:ring-rose-300 dark:border-rose-800 dark:text-rose-200 dark:hover:bg-rose-900/40",
    listClass: "text-rose-700 dark:text-rose-300",
    listLabel: "Anti-Synergy Heroes",
  },
];
