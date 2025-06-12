import { useAppDispatch, useAppSelector } from '../hooks';
import { addAvoid, toggleAvoidEnabled } from '../slices/inputSlice';
import type { Item, ResultCombo } from '../types';
import { attributeValueToLabel } from '../utils/attribute';
import { rarityColor } from '../utils/optimizer';
import ItemCard from './ItemCard';

interface Props {
  eqItems: Item[];
  eqCost: number;
  cash: number;
  results: ResultCombo | null;
  alternatives: ResultCombo[];
}

export default function ResultsSection({ eqItems, eqCost, cash, results, alternatives }: Props) {
  const dispatch = useAppDispatch();
  const avoidEnabled = useAppSelector(state => state.input.present.avoidEnabled);
  return (
    <div className="glass-card space-y-6 rounded-xl shadow-lg p-6 sm:p-8   dark:border-gray-700">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 sm:text-3xl">Results</h2>
      {results ? (
        <div className="space-y-6">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col rounded-lg border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800 p-4">
              <dt className="order-2 text-sm font-medium text-gray-500 dark:text-gray-300">Weighted Score</dt>
              <dd className="order-1 text-2xl font-extrabold text-teal-600 dark:text-teal-400">{results.score.toFixed(2)}</dd>
            </div>
            <div className="flex flex-col rounded-lg border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800 p-4">
              <dt className="order-2 text-sm font-medium text-gray-500 dark:text-gray-300">Total Cost</dt>
              <dd className="order-1 text-2xl font-extrabold text-indigo-600 dark:text-indigo-400">{eqCost + results.cost}</dd>
            </div>
            <div className="flex flex-col rounded-lg border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800 p-4">
              <dt className="order-2 text-sm font-medium text-gray-500 dark:text-gray-300">Cash Remaining</dt>
              <dd className="order-1 text-2xl font-extrabold text-green-600 dark:text-green-400">{cash - eqCost - results.cost}</dd>
            </div>
          </div>
          {/* 3x2 Item Table Section */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-gray-200 mb-2">Items Overview</h3>
            <table className="w-full text-left border-collapse mb-4">
              <tbody>
                {Array.from({ length: 2 }).map((_, rowIdx) => (
                  <tr key={rowIdx}>
                    {([...eqItems, ...results.items]
                      .sort((b, a) => {
                        // Sort by rarity (descending)
                        if ((a.rarity || 0) > (b.rarity || 0)) return -1;
                        if ((a.rarity || 0) < (b.rarity || 0)) return 1;
                        // Then by tab (alphabetically)
                        if ((a.tab || '') < (b.tab || '')) return -1;
                        if ((a.tab || '') > (b.tab || '')) return 1;
                        // Then by cost (ascending)
                        return (a.cost || 0) - (b.cost || 0);
                      })
                      .slice(rowIdx * 3, rowIdx * 3 + 3)
                    ).map((it, colIdx) => (
                      <td
                        key={colIdx}
                        className="px-2 py-1 border border-gray-200 dark:border-gray-700 text-sm font-medium text-gray-800 dark:text-gray-100 min-w-[80px]"
                        style={{ color: it ? rarityColor(it.rarity) : undefined }}
                      >
                        {it ? it.name : ''}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {results.breakdown && (
            <div className="text-sm text-gray-600 dark:text-gray-300">
              <strong>Breakdown:</strong>
              <table className="mt-2 w-full text-left border-collapse">
                <thead>
                  <tr>
                    <th className="px-2 py-1 border-b border-gray-200 dark:border-gray-700 font-medium">Type</th>
                    <th className="px-2 py-1 border-b border-gray-200 dark:border-gray-700 font-medium">Sum</th>
                    <th className="px-2 py-1 border-b border-gray-200 dark:border-gray-700 font-medium">Contribution</th>
                  </tr>
                </thead>
                <tbody>
                  {results.breakdown.map((b) => (
                    <tr key={b.type} className="dark:bg-gray-900">
                      <td className="px-2 py-1">{attributeValueToLabel(b.type)}</td>
                      <td className="px-2 py-1">{b.sum}</td>
                      <td className="px-2 py-1">{b.contrib.toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-gray-200">Final Build</h3>
            <ul className="mt-2 space-y-3 max-h-72 overflow-y-auto pr-2">
              {[...eqItems, ...results.items]
                .sort((a, b) => {
                  // Sort by tab (alphabetically)
                  if ((a.tab || '') < (b.tab || '')) return -1;
                  if ((a.tab || '') > (b.tab || '')) return 1;
                  // Then by rarity (assuming higher rarity is better, so descending)
                  if ((a.rarity || 0) > (b.rarity || 0)) return -1;
                  if ((a.rarity || 0) < (b.rarity || 0)) return 1;
                  // Then by cost (ascending)
                  return (a.cost || 0) - (b.cost || 0);
                })
                .map(it => (
                  <li key={it.id}>
                    <ItemCard
                      title={it.name}
                      subtitle={it.tab}
                      rarity={it.rarity}
                      content={it.attributes.map(a =>
                        a.type === 'description'
                          ? { text: `<span class='font-sm text-[#8fa6d7]'>${a.value}</span>` } :
                          a.type === "Editor's Note"
                            ? { text: `<strong>Editor's Note: </strong><br /><span class='font-sm text-[#8fa6d7]'>${a.value}</span>` }
                            : {
                              text: `<strong>${a.value}</strong> <span class='font-sm text-[#8fa6d7]'>${attributeValueToLabel(a.type)}</span>`,
                            }
                      )}
                      price={`${it.cost} G`}
                      showAvoidButton
                      onAvoid={() => {
                        if (!avoidEnabled) dispatch(toggleAvoidEnabled());
                        dispatch(addAvoid(it.id || it.name));
                      }}
                    />
                  </li>
                ))}
            </ul>
          </div>
          {alternatives.length > 0 && (
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-gray-200">Alternative Builds</h3>
              <ul className="mt-2 space-y-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 p-3 max-h-48 overflow-y-auto">
                {alternatives.map((alt, i) => (
                  <li key={i} className="text-sm text-gray-700 dark:text-gray-300 p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700">
                    <strong>Cost: {alt.cost}</strong> - {alt.items.map((it, idx) => (
                      <span key={it.id || it.name} style={{ color: rarityColor(it.rarity) }}>
                        {it.name}{idx < alt.items.length - 1 ? ', ' : ''}
                      </span>
                    ))}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ) : (
        <div className="text-center rounded-lg border-2 border-dashed border-gray-200 dark:border-gray-700 p-12 bg-white dark:bg-gray-900">
          <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path vectorEffect="non-scaling-stroke" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V7a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <h3 className="mt-2 text-sm font-medium text-gray-900 dark:text-gray-100">No results yet</h3>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Fill out the form and click calculate to see the magic.</p>
        </div>
      )}
    </div>
  );
}
