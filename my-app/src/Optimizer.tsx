import { useEffect, useState } from 'react';

interface Attribute {
  type: string;
  value: string;
}
interface Item {
  name: string;
  attributes: Attribute[];
  cost: number;
  character?: string;
  id?: string;
  tab: string;
}
interface RootData {
  tabs: {
    weapon: Rarity;
    ability: Rarity;
    survival: Rarity;
    powers: Record<string, unknown>;
  };
}
interface Rarity {
  common: Item[];
  rare: Item[];
  epic: Item[];
}

interface WeightRow {
  type: string;
  weight: number;
}

interface ResultCombo {
  items: Item[];
  cost: number;
  score: number;
}

function parseNumeric(value: string): number {
  const m = value.match(/[-+]?\d+(?:\.\d+)?/);
  return m ? parseFloat(m[0]) : 0;
}

export default function Optimizer() {
  const [data, setData] = useState<Item[]>([]);
  const [heroes, setHeroes] = useState<string[]>([]);
  const [attrTypes, setAttrTypes] = useState<string[]>([]);

  const [hero, setHero] = useState('');
  const [cash, setCash] = useState(0);
  const [equipped, setEquipped] = useState<(string | '')[]>(Array(6).fill(''));
  const [toBuy, setToBuy] = useState(1);
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
        const add = (tab: string, arr: Item[]) => {
          arr.forEach(it => items.push({ ...it, tab }));
        };
        (['weapon', 'ability', 'survival'] as const).forEach(tab => {
          const rar = root.tabs[tab];
          add(tab, rar.common);
          add(tab, rar.rare);
          add(tab, rar.epic);
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
    const map = new Map<string, number>();
    items.forEach(it => {
      it.attributes.forEach(a => {
        const v = parseNumeric(a.value);
        map.set(a.type, (map.get(a.type) ?? 0) + v);
      });
    });
    let score = 0;
    weights.forEach(w => {
      score += (map.get(w.type) ?? 0) * w.weight;
    });
    return score;
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
    setResults({ items: best.items, cost: best.cost, score: calcScore([...best.items, ...eqItems]) });
    setAlternatives(alt.map(c => ({ ...c, score: calcScore([...c.items, ...eqItems]) })));
  }

  if (data.length === 0) return <div className="p-4">Loading...</div>;

  const filtered = data.filter(it => !hero || !it.character || it.character === hero);
  const eqItems = equippedItems();
  const eqCost = eqItems.reduce((s, it) => s + it.cost, 0);

  return (
    <div className="p-4 grid md:grid-cols-2 gap-4">
      <div className="space-y-4">
        <div>
          <label className="block font-bold">Hero</label>
          <select className="border p-2 rounded w-full" value={hero} onChange={e=>setHero(e.target.value)}>
            <option value="">Select hero</option>
            {heroes.map(h=> <option key={h} value={h}>{h}</option>)}
          </select>
        </div>
        <div>
          <label className="block font-bold">Total Cash</label>
          <input type="number" className="border p-2 rounded w-full" min={0} value={cash} onChange={e=>setCash(Number(e.target.value))}/>
        </div>
        <div>
          <label className="block font-bold">Equipped Items</label>
          {equipped.map((id, idx) => (
            <select key={idx} className="border p-2 rounded w-full mt-1" value={id} onChange={e=>{
              const copy=[...equipped];copy[idx]=e.target.value;setEquipped(copy);
            }}>
              <option value="">None</option>
              {filtered.sort((a,b)=>a.cost-b.cost).map(it=> (
                <option key={it.id} value={it.id}>{`${it.name} (${it.cost})`}</option>
              ))}
            </select>
          ))}
        </div>
        <div>
          <label className="block font-bold">Items to Purchase</label>
          <input type="number" className="border p-2 rounded w-full" min={0} max={6} value={toBuy} onChange={e=>setToBuy(Number(e.target.value))}/>
        </div>
        <div>
          <label className="block font-bold">Attribute Weights</label>
          {weights.map((w,idx)=>(
            <div key={idx} className="flex items-center gap-2 mt-1">
              <select className="border p-2 rounded flex-1" value={w.type} onChange={e=>{
                const copy=[...weights];copy[idx].type=e.target.value;setWeights(copy);
              }}>
                {attrTypes.map(t=> <option key={t} value={t}>{t}</option>)}
              </select>
              <input type="number" min={0} step={0.1} className="border p-2 rounded w-24" value={w.weight} onChange={e=>{
                const copy=[...weights];copy[idx].weight=Number(e.target.value);setWeights(copy);
              }}/>
              {weights.length>1 && <button className="px-2" onClick={()=>setWeights(weights.filter((_,i)=>i!==idx))}>Remove</button>}
            </div>
          ))}
          <button className="mt-2 px-2 py-1 border rounded" onClick={()=>setWeights([...weights,{type:attrTypes[0],weight:1}])}>Add Row</button>
        </div>
        <button className="px-4 py-2 bg-blue-600 text-white rounded" disabled={!validate()} onClick={onCalculate}>Calculate</button>
        {error && <div className="text-red-600">{error}</div>}
      </div>
      <div className="space-y-4">
        <h2 className="text-xl font-bold">Results</h2>
        {results && (
          <div className="space-y-2">
            <div>Weighted Score: {results.score.toFixed(2)}</div>
            <div>Total Cost: {eqCost + results.cost}</div>
            <div>Remaining Cash: {cash - eqCost - results.cost}</div>
            <div className="border p-2 rounded">
              <div className="font-bold">Chosen Items:</div>
              <ul className="list-disc ml-5">
                {results.items.map(it=> <li key={it.id}>{it.name} ({it.cost})</li>)}
              </ul>
            </div>
            {alternatives.length>0 && (
              <div>
                <div className="font-bold">Alternative Builds</div>
                <ul className="list-disc ml-5">
                  {alternatives.map((alt,i)=>(
                    <li key={i}>{alt.items.map(it=>it.name).join(', ')} - Cost: {alt.cost}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
