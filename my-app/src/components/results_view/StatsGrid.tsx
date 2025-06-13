import type { ResultCombo } from '../../types';

interface Props {
    results: ResultCombo;
    eqCost: number;
    cash: number;
}

export default function StatsGrid({ results, eqCost, cash }: Props) {
    return (
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
    );
}
