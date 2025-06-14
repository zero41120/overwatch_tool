export default function NoResultsState() {
  return (
    <div className="text-center rounded-lg border-2 border-dashed border-gray-200 dark:border-gray-700 p-12 bg-white dark:bg-gray-900">
      <svg
        className="mx-auto h-12 w-12 text-gray-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          vectorEffect="non-scaling-stroke"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V7a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
      <h3 className="mt-2 text-sm font-medium text-gray-900 dark:text-gray-100">
        No results yet
      </h3>
      <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
        Fill out the form and click calculate to see the magic.
      </p>
    </div>
  );
}
