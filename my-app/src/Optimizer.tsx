import { useEffect, useState } from 'react';
import type { Item, ResultCombo, RootData, WeightRow } from './types';


function parseNumeric(value: string): number {
  const m = value.match(/[-+]?\d+(?:\.\d+)?/);
  return m ? parseFloat(m[0]) : 0;
}

function aggregate(items: Item[]): Map<string, number> {
  const map = new Map<string, number>();
  items.forEach(it => {
    it.attributes.forEach(a => {
      const v = parseNumeric(a.value);
      map.set(a.type, (map.get(a.type) ?? 0) + v);
    });
  });
  return map;
}

function scoreFromMap(map: Map<string, number>, weights: WeightRow[]) {
  let total = 0;
  weights.forEach(w => {
    total += (map.get(w.type) ?? 0) * w.weight;
  });
  return total;
}

function rarityColor(r: Item['rarity']) {
  switch (r) {
    case 'common':
      return 'green';
    case 'rare':
      return 'blue';
    case 'epic':
      return 'purple';
    default:
      return 'black';
  }
}

export default function Optimizer() {
  const [data, setData] = useState<Item[]>([]);
  const [heroes, setHeroes] = useState<string[]>([]);
  const [attrTypes, setAttrTypes] = useState<string[]>([]);

  const [hero, setHero] = useState('Ashe');
  const [cash, setCash] = useState(11000);
  const [equipped, setEquipped] = useState<(string | '')[]>(Array(6).fill(''));
  const [toBuy, setToBuy] = useState(6);
  const [weights, setWeights] = useState<WeightRow[]>([{ type: '', weight: 1 }]);

  const [results, setResults] = useState<ResultCombo | null>(null);
  const [alternatives, setAlternatives] = useState<ResultCombo[]>([]);
  const [error, setError] = useState('');

  // load data.json
  useEffect(() => {
    fetch('/data.json')
      .then(r => r.json())
      .then((root: RootData) => {
        const items: Item[] = [];
        const add = (tab: string, rarity: 'common' | 'rare' | 'epic', arr: Item[]) => {
          arr.forEach(it => items.push({ ...it, tab, rarity }));
        };
        (['weapon', 'ability', 'survival'] as const).forEach(tab => {
          const rar = root.tabs[tab];
          add(tab, 'common', rar.common);
          add(tab, 'rare', rar.rare);
          add(tab, 'epic', rar.epic);
        });
        setData(items);
        const heroesSet = new Set<string>();
        const types = new Set<string>();
        items.forEach(it => {
          if (it.character) heroesSet.add(it.character);
          it.attributes.forEach(a => types.add(a.type));
        });
        setHeroes(Array.from(heroesSet).sort());
        setAttrTypes(Array.from(types).sort());
        setWeights([{ type: Array.from(types)[0] ?? '', weight: 1 }]);
      });
  }, []);

  // adjust toBuy when equipped changes
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
    const candidate = data.filter(it =>
      (!it.character || it.character === hero) &&
      !equipped.includes(it.id ?? '')
    );
    const needed = toBuy;
    if (needed === 0) {
      const score = calcScore(eqItems);
      setResults({ items: [], cost: 0, score });
      setAlternatives([]);
      return;
    }
    const itemScores = candidate.map(it => ({
      item: it,
      score: calcScore([it])
    }));
    // sort by score descending
    itemScores.sort((a,b) => b.score - a.score);
    const prefix: number[] = [0];
    for (const i of itemScores) prefix.push(prefix[prefix.length-1]+i.score);
    let bestScore = -Infinity;
    let bestCost = 0;
    let bestCombos: ResultCombo[] = [];
    const n = itemScores.length;
    function dfs(start: number, selected: Item[], cost: number, score: number) {
      if (selected.length === needed) {
        if (score > bestScore || (score === bestScore && cost < bestCost)) {
          bestScore = score;
          bestCost = cost;
          bestCombos = [{ items: [...selected], cost, score }];
        } else if (score === bestScore && cost >= bestCost) {
          bestCombos.push({ items: [...selected], cost, score });
        }
        return;
      }
      if (start >= n) return;
      const remaining = needed - selected.length;
      const possible = score + (prefix[start + remaining] - prefix[start]);
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
    const [best, ...others] = bestCombos.sort((a,b) => a.cost - b.cost);
    const alt = others.filter(c => c.cost > best.cost).sort((a,b)=>a.cost-b.cost);
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
  // Add a background color to the main container to make the white cards pop.
  <div className="bg-gray-50 min-h-screen p-4 sm:p-6 lg:p-8">
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
      
      {/* --- INPUT COLUMN --- */}
      {/* We'll make this a <form> for better semantics. */}
      <form
        onSubmit={(e) => {
          e.preventDefault(); // Prevent default form submission
          if (validate()) onCalculate();
        }}
        className="space-y-6 bg-white rounded-xl shadow-lg p-6 sm:p-8"
      >
        {/* Section for Hero Selection */}
        <div>
          <label htmlFor="hero-select" className="block text-sm font-medium text-gray-700">
            Hero
          </label>
          <select
            id="hero-select"
            className="mt-1 block w-full rounded-md border-gray-200 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            value={hero}
            onChange={(e) => setHero(e.target.value)}
          >
            <option value="">Select hero</option>
            {heroes.map((h) => <option key={h} value={h}>{h}</option>)}
          </select>
        </div>

        {/* Section for Cash Input */}
        <div>
          <label htmlFor="total-cash" className="block text-sm font-medium text-gray-700">
            Total Cash
          </label>
          <input
            type="number"
            id="total-cash"
            className="mt-1 block w-full rounded-md border-gray-200 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            min={0}
            value={cash}
            onChange={(e) => setCash(Number(e.target.value))}
          />
        </div>

        {/* Section for Equipped Items */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Equipped Items</label>
          <div className="space-y-2 mt-1">
            {equipped.map((id, idx) => (
              <select
                key={idx}
                className="block w-full rounded-md border-gray-200 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                value={id}
                onChange={(e) => {
                  const copy = [...equipped];
                  copy[idx] = e.target.value;
                  setEquipped(copy);
                }}
              >
                <option value="">None</option>
                {filtered.sort((a,b)=>a.cost-b.cost).map((it) => (
                  <option key={it.id} value={it.id} style={{ color: rarityColor(it.rarity) }}>
                    {`${it.name} (${it.cost}) ${it.attributes.filter(a => a.type !== 'description').map(a => `${a.type}-${a.value}`).join(', ')}`}
                  </option>
                ))}
              </select>
            ))}
          </div>
        </div>
        
        {/* Section for Purchase Count */}
        <div>
          <label htmlFor="items-to-buy" className="block text-sm font-medium text-gray-700">
            Items to Purchase
          </label>
          <input
            type="number"
            id="items-to-buy"
            className="mt-1 block w-full rounded-md border-gray-200 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            min={0}
            max={6}
            value={toBuy}
            onChange={(e) => setToBuy(Number(e.target.value))}
          />
        </div>

        {/* Section for Attribute Weights with improved styling */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Attribute Weights</label>
          <div className="space-y-2 mt-1">
            {weights.map((w, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <select
                  className="block w-full rounded-md border-gray-200 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  value={w.type}
                  onChange={(e) => {
                    const copy = [...weights];
                    copy[idx].type = e.target.value;
                    setWeights(copy);
                  }}
                >
                  {attrTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                </select>
                <input
                  type="number"
                  min={0}
                  step={0.1}
                  className="block w-24 rounded-md border-gray-200 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  value={w.weight}
                  onChange={(e) => {
                    const copy = [...weights];
                    copy[idx].weight = Number(e.target.value);
                    setWeights(copy);
                  }}
                />
                {weights.length > 1 && (
                  // Improved remove button styling
                  <button
                    type="button"
                    className="flex-shrink-0 rounded p-2 text-gray-400 hover:bg-red-50 hover:text-red-600"
                    onClick={() => setWeights(weights.filter((_, i) => i !== idx))}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                )}
              </div>
            ))}
          </div>
          {/* Secondary button style for "Add Row" */}
          <button
            type="button"
            className="mt-3 inline-flex items-center justify-center rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            onClick={() => setWeights([...weights, { type: attrTypes[0], weight: 1 }])}
          >
            Add Row
          </button>
        </div>

        <div className="!mt-8 border-t pt-6">
          {/* Primary action button with richer styling */}
          <button
            type="submit"
            className="w-full inline-flex items-center justify-center rounded-lg bg-teal-600 px-5 py-3 text-white text-base font-medium shadow-lg transition hover:bg-teal-700 disabled:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
            disabled={!validate()}
          >
            Calculate Optimal Build
          </button>
          
          {/* HyperUI-style alert for errors */}
          {error && (
             <div role="alert" className="mt-4 rounded border-s-4 border-red-500 bg-red-50 p-4 text-sm font-medium text-red-800">
               {error}
             </div>
          )}
        </div>
      </form>

      {/* --- RESULTS COLUMN --- */}
      <div className="space-y-6 bg-white rounded-xl shadow-lg p-6 sm:p-8">
        <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">Results</h2>
        
        {results ? (
          <div className="space-y-6">
            {/* Using a "Stat Card" layout for key metrics */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col rounded-lg border border-gray-100 bg-white p-4">
                <dt className="order-2 text-sm font-medium text-gray-500">Weighted Score</dt>
                <dd className="order-1 text-2xl font-extrabold text-teal-600">{results.score.toFixed(2)}</dd>
              </div>
              <div className="flex flex-col rounded-lg border border-gray-100 bg-white p-4">
                <dt className="order-2 text-sm font-medium text-gray-500">Total Cost</dt>
                <dd className="order-1 text-2xl font-extrabold text-indigo-600">{eqCost + results.cost}</dd>
              </div>
              <div className="flex flex-col rounded-lg border border-gray-100 bg-white p-4">
                <dt className="order-2 text-sm font-medium text-gray-500">Cash Remaining</dt>
                <dd className="order-1 text-2xl font-extrabold text-green-600">{cash - eqCost - results.cost}</dd>
              </div>
            </div>
            
             {/* Score breakdown with cleaner formatting */}
            {results.breakdown && (
                <div className="text-sm text-gray-600">
                    <strong>Breakdown:</strong> {results.breakdown.map((b, i) => (
                      <span key={b.type} className="mr-2">
                        {i > 0 && '• '}
                        {`${b.sum}${b.type} → ${b.contrib.toFixed(2)}`}
                      </span>
                    ))}
                </div>
            )}


            {/* Section for Chosen Items */}
            <div>
              <h3 className="text-lg font-bold text-gray-800">Final Build</h3>
              <ul className="mt-2 space-y-3">
                {[...eqItems, ...results.items].map((it) => (
                  <li key={it.id} className="block rounded-lg border border-gray-200 p-4 transition hover:shadow-sm" style={{ borderLeftColor: rarityColor(it.rarity), borderLeftWidth: '4px' }}>
                    <div className="flex justify-between items-center">
                       <strong className="font-semibold" style={{ color: rarityColor(it.rarity) }}>{it.name}</strong>
                       <span className="text-sm font-mono rounded-full bg-indigo-50 text-indigo-600 px-2 py-0.5">{it.cost} G</span>
                    </div>
                    <ul className="mt-2 text-xs text-gray-600 space-y-1">
                      {it.attributes.map((a, idx) => (
                        <li key={idx} className="flex items-center">
                           <svg className="h-3 w-3 mr-1.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                           {a.type}: <strong>{a.value}</strong>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Section for Alternative Builds */}
            {alternatives.length > 0 && (
              <div>
                <h3 className="text-lg font-bold text-gray-800">Alternative Builds</h3>
                <ul className="mt-2 space-y-2 rounded-lg border border-gray-200 bg-gray-50 p-3 max-h-48 overflow-y-auto">
                  {alternatives.map((alt, i) => (
                    <li key={i} className="text-sm text-gray-700 p-2 rounded-md hover:bg-gray-100">
                       <strong>Cost: {alt.cost}</strong> - {alt.items.map(it => it.name).join(', ')}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
          </div>
        ) : (
          // A placeholder for when there are no results yet.
          <div className="text-center rounded-lg border-2 border-dashed border-gray-200 p-12">
            <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path vectorEffect="non-scaling-stroke" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V7a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <h3 className="mt-2 text-sm font-medium text-gray-900">No results yet</h3>
            <p className="mt-1 text-sm text-gray-500">Fill out the form and click calculate to see the magic.</p>
          </div>
        )}
      </div>
    </div>
  </div>
);
}
