import { useEffect, useState } from 'react';
import type { Item, ResultCombo, RootData, WeightRow, ItemOverride } from './types';
import InputSection from './components/InputSection';
import ResultsSection from './components/ResultsSection';
import { aggregate, scoreFromMap } from './utils/optimizer';
import rawData from './data.json?raw';
import overridesRaw from './overrides.json?raw';
import { sortAttributes } from './utils/attribute';

export default function Optimizer() {
  const [data, setData] = useState<Item[]>([]);
  const [heroes, setHeroes] = useState<string[]>([]);
  const [attrTypes, setAttrTypes] = useState<string[]>([]);

  const [hero, setHero] = useState('Ashe');
  const [cash, setCash] = useState(11000);
  const [equipped, setEquipped] = useState<(string | '')[]>(Array(6).fill(''));
  const [toBuy, setToBuy] = useState(6);
  const [avoid, setAvoid] = useState<string[]>([]);
  const [weights, setWeights] = useState<WeightRow[]>([{ type: '', weight: 1 }]);

  const [results, setResults] = useState<ResultCombo | null>(null);
  const [alternatives, setAlternatives] = useState<ResultCombo[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const root: RootData = JSON.parse(rawData);
    const overrides: Record<string, ItemOverride> = overridesRaw
      ? JSON.parse(overridesRaw)
      : {};
    const items: Item[] = [];
    const add = (tab: string, rarity: 'common' | 'rare' | 'epic', arr: Item[]) => {
      arr.forEach(it => {
        const override = overrides[it.name];
        const item = { ...it, tab, rarity };
        if (override?.attributes) item.attributes = override.attributes;
        items.push(item);
      });
    };
    (['weapon', 'ability', 'survival'] as const).forEach(tab => {
      const rar = root.tabs[tab];
      add(tab, 'common', rar.common);
      add(tab, 'rare', rar.rare);
      add(tab, 'epic', rar.epic);
    });
    setData(items);
    const heroesSet = new Set<string>();
    const seen = new Map<string, number>();
    const types = new Set<string>();
    items.forEach(it => {
      if (it.character) heroesSet.add(it.character);
      it.attributes.forEach(a => {
        const count = (seen.get(a.type) ?? 0) + 1;
        seen.set(a.type, count);
        if (count === 2) types.add(a.type); // Only add if seen more than once
      });
    });
    types.delete('description');
    types.delete("Editor's Note");
    const sortedTypes = Array.from(types).sort(sortAttributes);
    setHeroes(Array.from(heroesSet).sort());
    setAttrTypes(sortedTypes);
    setWeights([{ type: sortedTypes[0], weight: 1 }]);
  }, []);

  useEffect(() => {
    const count = equipped.filter(id => id).length;
    if (toBuy + count > 6) setToBuy(Math.max(0, 6 - count));
  }, [equipped, toBuy]);

  function equippedItems() {
    return equipped
      .map(id => data.find(i => i.id === id))
      .filter((i): i is Item => Boolean(i));
  }

  function validate() {
    if (!hero) return false;
    if (cash < 0) return false;
    const eqCost = equippedItems().reduce((s, it) => s + it.cost, 0);
    if (eqCost > cash) return false;
    if (toBuy + equippedItems().length > 6) return false;
    if (weights.length === 0) return false;
    return true;
  }

  function calcScore(items: Item[]) {
    const map = aggregate(items);
    return scoreFromMap(map, weights);
  }

  function onCalculate() {
    setError('');
    const eqItems = equippedItems();
    const eqCost = eqItems.reduce((s, it) => s + it.cost, 0);
    const remainingCash = cash - eqCost;
    if (remainingCash < 0) {
      setError('Equipped items cost exceeds total cash');
      return;
    }
    const selectedAttrs = new Set(weights.map(w => w.type));
    const candidate = data.filter(
      it =>
        (!it.character || it.character === hero) &&
        !equipped.includes(it.id ?? '') &&
        !avoid.includes(it.id ?? '') &&
        it.attributes.some(a => selectedAttrs.has(a.type))
    );
    const needed = toBuy;
    if (needed === 0) {
      const score = calcScore(eqItems);
      setResults({ items: [], cost: 0, score });
      setAlternatives([]);
      return;
    }
    const itemScores = candidate.map(it => ({ item: it, score: calcScore([it]) }));
    itemScores.sort((a, b) => b.score - a.score);
    const prefix: number[] = [0];
    for (const i of itemScores) prefix.push(prefix[prefix.length - 1] + i.score);
    let bestScore = -Infinity;
    let bestCost = 0;
    let bestCombos: ResultCombo[] = [];
    const preferHighCost = eqItems.length + needed === 6;
    const n = itemScores.length;
    function dfs(start: number, selected: Item[], cost: number, score: number) {
      if (
        score > bestScore ||
        (score === bestScore && (preferHighCost ? cost > bestCost : cost < bestCost))
      ) {
        bestScore = score;
        bestCost = cost;
        bestCombos = [{ items: [...selected], cost, score }];
      } else if (
        score === bestScore &&
        (preferHighCost ? cost <= bestCost : cost >= bestCost)
      ) {
        bestCombos.push({ items: [...selected], cost, score });
      }
      if (selected.length === needed || start >= n) return;
      const remaining = needed - selected.length;
      const possible = score + (prefix[Math.min(n, start + remaining)] - prefix[start]);
      if (possible < bestScore) return;
      for (let i = start; i < n; i++) {
        const info = itemScores[i];
        if (cost + info.item.cost > remainingCash) continue;
        selected.push(info.item);
        dfs(i + 1, selected, cost + info.item.cost, score + info.score);
        selected.pop();
      }
    }
    dfs(0, [], 0, 0);

    if (bestCombos.length === 0) {
      setError('Insufficient cash for any purchase');
      return;
    }
    const [best, ...others] = bestCombos.sort((a, b) =>
      preferHighCost ? b.cost - a.cost : a.cost - b.cost
    );
    const alt = others
      .filter(c => (preferHighCost ? c.cost < best.cost : c.cost > best.cost))
      .sort((a, b) => preferHighCost ? b.cost - a.cost : a.cost - b.cost);
    const totalMap = aggregate([...best.items, ...eqItems]);
    const breakdown = weights.map(w => {
      const sum = totalMap.get(w.type) ?? 0;
      return { type: w.type, sum, contrib: sum * w.weight };
    });
    setResults({ items: best.items, cost: best.cost, score: scoreFromMap(totalMap, weights), breakdown });
    setAlternatives(alt.map(c => ({ ...c, score: calcScore([...c.items, ...eqItems]) })));
  }

  if (data.length === 0) return <div className="p-4">Loading...</div>;

  const filtered = data.filter(it => !hero || !it.character || it.character === hero);
  const eqItems = equippedItems();
  const eqCost = eqItems.reduce((s, it) => s + it.cost, 0);

  return (
    <div className="bg-gray-50 min-h-screen p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        <InputSection
          heroes={heroes}
          attrTypes={attrTypes}
          filteredItems={filtered}
          hero={hero}
          cash={cash}
          equipped={equipped}
          toBuy={toBuy}
          avoid={avoid}
          weights={weights}
          error={error}
          onHeroChange={setHero}
          onCashChange={setCash}
          onEquippedChange={(idx, id) => {
            setEquipped(prev => {
              const copy = [...prev];
              copy[idx] = id;
              return copy;
            });
          }}
          onToBuyChange={setToBuy}
          onAddAvoid={(id) => {
            if (!avoid.includes(id)) setAvoid([...avoid, id]);
          }}
          onRemoveAvoid={(id) => setAvoid(avoid.filter((a) => a !== id))}
          onWeightTypeChange={(idx, type) => {
            const copy = [...weights];
            copy[idx].type = type;
            setWeights(copy);
          }}
          onWeightValueChange={(idx, val) => {
            const copy = [...weights];
            copy[idx].weight = val;
            setWeights(copy);
          }}
          addWeightRow={() => setWeights([...weights, { type: attrTypes[0], weight: 1 }])}
          removeWeightRow={(idx) => setWeights(weights.filter((_, i) => i !== idx))}
          onSubmit={onCalculate}
          validate={validate}
        />
        <ResultsSection eqItems={eqItems} eqCost={eqCost} cash={cash} results={results} alternatives={alternatives} />
      </div>
    </div>
  );
}
