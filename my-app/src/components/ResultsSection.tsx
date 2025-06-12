import type { Item, ResultCombo } from '../types';
import { stripHtmlTags } from '../utils/util';
import { attributeValueToLabel } from '../utils/attribute';
import ItemCard from './ItemCard';
import { useAppDispatch, useAppSelector } from '../hooks';
import { addAvoid, toggleAvoidEnabled } from '../slices/inputSlice';

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
              <strong>Breakdown:</strong>
              <table className="mt-2 w-full text-left border-collapse">
                <thead>
                  <tr>
                    <th className="px-2 py-1 border-b font-medium">Type</th>
                    <th className="px-2 py-1 border-b font-medium">Sum</th>
                    <th className="px-2 py-1 border-b font-medium">Contribution</th>
                  </tr>
                </thead>
                <tbody>
                  {results.breakdown.map((b) => (
                    <tr key={b.type}>
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
            <h3 className="text-lg font-bold text-gray-800">Final Build</h3>
            <ul className="mt-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {[...eqItems, ...results.items].map(it => (
                <li key={it.id}>
                  <ItemCard
                    title={it.name}
                    rarity={it.rarity}
                    content={it.attributes.map(a =>
                      a.type === 'description'
                        ? { text: stripHtmlTags(a.value) }
                        : {
                            text: `<span class='font-medium'>${attributeValueToLabel(a.type)}</span> <strong>${stripHtmlTags(a.value)}</strong>`,
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
