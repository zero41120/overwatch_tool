import React from "react";

interface SimpleButtonProps {
  onClick: () => void;
  text: string;
}

const SimpleButton: React.FC<SimpleButtonProps> = ({ onClick, text }) => (
  <button
    type="button"
    className="inline-flex items-center justify-center rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-2 text-sm font-medium text-gray-900 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
    onClick={onClick}
  >
    {text}
  </button>
);

export default SimpleButton;
