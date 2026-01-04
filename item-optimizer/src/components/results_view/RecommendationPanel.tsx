import type { MouseEvent } from "react";
import { useEffect, useMemo, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { clearTooltip, setTooltip } from "../../slices/tooltipSlice";
import type { HeroMetadata, HeroPower, HeroRole, Item } from "../../types";
import { calculateRecommendationScore, type RecommendationMatches, type RecommendationScore } from "../../utils/recommendationScore";
import HeroPicker from "../shared/HeroPicker";

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

type RecommendationSource = {
  synergyHeroes?: string[];
  counterHeroes?: string[];
  antiSynergyHeroes?: string[];
  beingCountered?: string[];
};

function buildMatches(source: RecommendationSource, friendlySet: Set<string>, enemySet: Set<string>): RecommendationMatches {
  const synergyMatches = (source.synergyHeroes || []).filter((name) => friendlySet.has(name));
  const counterMatches = (source.counterHeroes || []).filter((name) => enemySet.has(name));
  const antiMatches = (source.antiSynergyHeroes || []).filter((name) => friendlySet.has(name));
  const beingCounteredMatches = (source.beingCountered || []).filter((name) => enemySet.has(name));
  return { synergyMatches, counterMatches, antiMatches, beingCounteredMatches };
}

function hasAnyMatch(matches: RecommendationMatches) {
  return (
    matches.synergyMatches.length > 0 ||
    matches.counterMatches.length > 0 ||
    matches.antiMatches.length > 0 ||
    matches.beingCounteredMatches.length > 0
  );
}

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
        const matches = buildMatches(item, friendlySet, enemySet);
        if (!hasAnyMatch(matches)) return null;
        return { item, matches, score: calculateRecommendationScore(matches) };
      })
      .filter(
        (
          entry,
        ): entry is {
          item: Item;
          matches: RecommendationMatches;
          score: RecommendationScore;
        } => Boolean(entry),
      );
  }, [allItems, friendlySet, enemySet]);

  const recommendedPowers = useMemo(() => {
    if (!selfHero) {
      return [];
    }
    const heroPowers = powersByHero[selfHero] || [];
    return heroPowers
      .map((power) => {
        const matches = buildMatches(power, friendlySet, enemySet);
        if (!hasAnyMatch(matches)) return null;
        return { power, matches, score: calculateRecommendationScore(matches) };
      })
      .filter(
        (
          entry,
        ): entry is {
          power: HeroPower;
          matches: RecommendationMatches;
          score: RecommendationScore;
        } => Boolean(entry),
      );
  }, [powersByHero, friendlySet, enemySet, selfHero]);

  useEffect(() => {
    const taggedItems = allItems
      .filter(
        (item) =>
          item.synergyHeroes?.length || item.counterHeroes?.length || item.antiSynergyHeroes?.length || item.beingCountered?.length,
      )
      .map((item) => ({
        name: item.name,
        synergyHeroes: item.synergyHeroes,
        counterHeroes: item.counterHeroes,
        antiSynergyHeroes: item.antiSynergyHeroes,
        beingCountered: item.beingCountered,
      }));
    console.log("[recommendations] tagged items", JSON.stringify(taggedItems, null, 2));
    const taggedPowers = Object.values(powersByHero)
      .flat()
      .filter(
        (power) =>
          power.synergyHeroes?.length || power.counterHeroes?.length || power.antiSynergyHeroes?.length || power.beingCountered?.length,
      )
      .map((power) => ({
        hero: power.hero,
        name: power.name,
        synergyHeroes: power.synergyHeroes,
        counterHeroes: power.counterHeroes,
        antiSynergyHeroes: power.antiSynergyHeroes,
        beingCountered: power.beingCountered,
      }));
    console.log("[recommendations] tagged powers", JSON.stringify(taggedPowers, null, 2));
  }, [allItems, powersByHero]);

  useEffect(() => {
    console.log("[recommendations] friendly heroes", JSON.stringify(friendlyHeroes));
    console.log("[recommendations] enemy heroes", JSON.stringify(enemyHeroes));
    console.log(
      "[recommendations] item matches",
      JSON.stringify(
        recommendedItems.map(({ item, matches, score }) => ({
          name: item.name,
          ...matches,
          score: score.total,
        })),
        null,
        2,
      ),
    );
    console.log(
      "[recommendations] power matches",
      JSON.stringify(
        recommendedPowers.map(({ power, matches, score }) => ({
          hero: power.hero,
          name: power.name,
          ...matches,
          score: score.total,
        })),
        null,
        2,
      ),
    );
  }, [friendlyHeroes, enemyHeroes, recommendedItems, recommendedPowers]);


  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200">Allied Team</h3>
        <HeroRow
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
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200">Enemy Team</h3>
        <HeroRow
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
      </div>

      <RecommendationList
        title="Recommended Items"
        entries={recommendedItems.map(({ item, matches, score }) => ({
          type: "item" as const,
          item,
          id: item.id || item.name,
          name: item.name,
          iconUrl: item.iconUrl,
          matches,
          score,
        }))}
        emptyLabel="No items have been tagged with synergy/counter heroes yet. Add arrays on item overrides to populate this list."
      />

      <RecommendationList
        title="Recommended Powers"
        entries={recommendedPowers.map(({ power, matches, score }) => ({
          type: "power" as const,
          power,
          id: `${power.hero}-${power.name}`,
          name: power.name,
          iconUrl: power.iconUrl,
          matches,
          score,
        }))}
        emptyLabel="Tag hero powers with synergy/counter heroes in wiki-data overrides to see suggestions."
      />
    </div>
  );
}

function HeroRow({
  slots,
  selections,
  onChange,
  heroesByRole,
  heroLookup,
  variant = "ally",
  lockedHero,
}: {
  slots: SlotConfig[];
  selections: SelectionState;
  onChange: (id: string, value: string) => void;
  heroesByRole: Record<HeroRole, HeroMetadata[]>;
  heroLookup: Map<string, HeroMetadata>;
  variant?: "ally" | "enemy";
  lockedHero?: string;
}) {
  return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 rounded-xl border border-dashed border-gray-200 dark:border-gray-700 p-1">
        {slots.map((slot) => {
          const selectedValue = selections[slot.id] || "";
          const selectedMeta = selectedValue ? heroLookup.get(selectedValue) : undefined;
          const isLocked = lockedHero && selectedValue === lockedHero;

          const unavailableHeroes = new Set(
            Object.entries(selections)
              .filter(([slotId, heroName]) => slotId !== slot.id && Boolean(heroName))
              .map(([, heroName]) => heroName),
          );

          const optionsForSlot =
            heroesByRole[slot.role]
              ?.filter((meta) => !unavailableHeroes.has(meta.name))
              .map((meta) => ({
                value: meta.name,
                label: meta.name,
                iconUrl: meta.iconUrl,
                role: meta.role,
              })) ?? [];

          return (
            <HeroPicker
              key={slot.id}
              className="relative"
              value={selectedValue}
              options={optionsForSlot}
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

type MetricKey = "synergy" | "counter" | "anti" | "threat";

type RecommendationEntryBase = {
  id: string;
  name: string;
  iconUrl?: string;
  matches: RecommendationMatches;
  score: RecommendationScore;
};

type RecommendationEntry =
  | (RecommendationEntryBase & {
      type: "item";
      item: Item;
    })
  | (RecommendationEntryBase & {
      type: "power";
      power: HeroPower;
    });

function RecommendationList({ title, entries, emptyLabel }: { title: string; entries: RecommendationEntry[]; emptyLabel: string }) {
  const sortedEntries = [...entries].sort((a, b) => {
    if (a.score.total === b.score.total) {
      if (a.score.positive === b.score.positive) return a.name.localeCompare(b.name);
      return b.score.positive - a.score.positive;
    }
    return b.score.total - a.score.total;
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
  const [isFlipped, setIsFlipped] = useState(false); // New state

  const handleTooltip = (event: MouseEvent<HTMLDivElement>) => {
    if (entry.type !== "item") return;
    dispatch(setTooltip({ item: entry.item, x: event.clientX, y: event.clientY }));
  };

  const handleTooltipLeave = () => {
    if (entry.type !== "item") return;
    dispatch(clearTooltip());
  };

  const handleCardClick = () => {
    // Only flip if not currently showing tooltip (to avoid accidental flips while interacting with tooltip)
    // Or, if tooltip is active, maybe prevent flip? For now, just flip.
    setIsFlipped(!isFlipped);
  };

  const heroLists: Record<MetricKey, string[]> = {
    synergy: entry.matches.synergyMatches,
    counter: entry.matches.counterMatches,
    anti: entry.matches.antiMatches,
    threat: entry.matches.beingCounteredMatches,
  };

  const formattedScore = entry.score.total > 0 ? `+${entry.score.total}` : `${entry.score.total}`;

  return (
    <div data-testid="recommendation-card" className="group w-28 [perspective:1000px]">
      <div
        className={`relative h-28 w-28 rounded-lg shadow-md transition-transform duration-500 [transform-style:preserve-3d] ${isFlipped ? "[transform:rotateY(180deg)]" : ""}`}
        onClick={handleCardClick} // Add click handler
      >
        {/* Front Face */}
        <div
          className="absolute flex h-full w-full flex-col items-center justify-center rounded-lg border border-gray-700 bg-gray-900 p-2 text-white [backface-visibility:hidden]"
          onMouseEnter={handleTooltip}
          onMouseMove={handleTooltip}
          onMouseLeave={handleTooltipLeave}
        >
          {entry.iconUrl ? (
            <img src={entry.iconUrl} alt={entry.name} className="h-12 w-12 rounded-md object-cover" />
          ) : (
            <div className="flex h-12 w-12 items-center justify-center rounded-md bg-gray-800 text-xl font-semibold text-gray-500">
              {entry.name.slice(0, 2)}
            </div>
          )}
          <p className="mt-1 text-center text-xs font-semibold leading-tight">{entry.name}</p>
          <div
            className="absolute top-1 right-1 rounded-full bg-emerald-900/40 px-1.5 py-0.5 text-[10px] font-bold text-emerald-200 shadow"
            data-testid="recommendation-score"
          >
            {formattedScore}
          </div>
        </div>

        {/* Back Face */}
        <div className="absolute h-full w-full rounded-lg border border-gray-700 bg-gray-800 p-2 text-white [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <div className="flex h-full flex-col">
            <div className="mb-1 flex-shrink-0">
              <p className="truncate text-xs font-bold">{entry.name}</p>
              <p className="text-[10px] text-gray-300">
                Score: <span className="font-bold">{formattedScore}</span> (+{entry.score.positive}/-{entry.score.negative})
              </p>
            </div>
            <div className="flex-grow space-y-0.5 overflow-y-auto text-[10px] leading-tight">
              {SCORE_METRICS.map((metric) => {
                const heroes = heroLists[metric.key];
                if (heroes.length === 0) return null;
                return (
                  <div key={metric.key}>
                    <p className={`font-bold uppercase ${metric.listClass}`}>
                      {metric.label} ({heroes.length})
                    </p>
                    <p className="text-gray-300">{heroes.join(", ")}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
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
    key: "threat",
    label: "THRT",
    buttonClass:
      "border-orange-200 text-orange-800 hover:bg-orange-50 focus-visible:ring-orange-300 dark:border-orange-800 dark:text-orange-200 dark:hover:bg-orange-900/40",
    listClass: "text-orange-700 dark:text-orange-300",
    listLabel: "Being Countered By",
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
