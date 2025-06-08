import type { Item, ResultCombo } from '../types';
import { rarityColor } from '../utils/optimizer';

interface Props {
  eqItems: Item[];
  eqCost: number;
  cash: number;
  results: ResultCombo | null;
  alternatives: ResultCombo[];
}

export default function ResultsSection({ eqItems, eqCost, cash, results, alternatives }: Props) {
  return (
    <div className="space-y-6 bg-white rounded-xl shadow-lg p-6 sm:p-8">
      <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">Results</h2>
      {results ? (
        <div className="space-y-6">
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
          {results.breakdown && (
            <div className="text-sm text-gray-600">
              <strong>Breakdown:</strong>{' '}
              {results.breakdown.map((b, i) => (
                <span key={b.type} className="mr-2">
                  {i > 0 && '• '}
                  {`${b.sum}${b.type} → ${b.contrib.toFixed(2)}`}
                </span>
              ))}
            </div>
          )}
          <div>
            <h3 className="text-lg font-bold text-gray-800">Final Build</h3>
            <ul className="mt-2 space-y-3">
              {[...eqItems, ...results.items].map((it) => (
                <li
                  key={it.id}
                  className="block rounded-lg border border-gray-200 p-4 transition hover:shadow-sm"
                  style={{ borderLeftColor: rarityColor(it.rarity), borderLeftWidth: '4px' }}
                >
                  <div className="flex justify-between items-center">
                    <strong className="font-semibold" style={{ color: rarityColor(it.rarity) }}>
                      {it.name}
                    </strong>
                    <span className="text-sm font-mono rounded-full bg-indigo-50 text-indigo-600 px-2 py-0.5">
                      {it.cost} G
                    </span>
                  </div>
                  <ul className="mt-2 text-xs text-gray-600 space-y-1">
                    {it.attributes.map((a, idx) => (
                      <li key={idx} className="flex items-center">
                        <svg className="h-3 w-3 mr-1.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {a.type}: <strong>{a.value}</strong>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
          {alternatives.length > 0 && (
            <div>
              <h3 className="text-lg font-bold text-gray-800">Alternative Builds</h3>
              <ul className="mt-2 space-y-2 rounded-lg border border-gray-200 bg-gray-50 p-3 max-h-48 overflow-y-auto">
                {alternatives.map((alt, i) => (
                  <li key={i} className="text-sm text-gray-700 p-2 rounded-md hover:bg-gray-100">
                    <strong>Cost: {alt.cost}</strong> - {alt.items.map((it) => it.name).join(', ')}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ) : (
        <div className="text-center rounded-lg border-2 border-dashed border-gray-200 p-12">
          <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path vectorEffect="non-scaling-stroke" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V7a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <h3 className="mt-2 text-sm font-medium text-gray-900">No results yet</h3>
          <p className="mt-1 text-sm text-gray-500">Fill out the form and click calculate to see the magic.</p>
        </div>
      )}
    </div>
  );
}
