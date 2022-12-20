import React from 'react';

function PaginationBtn() {
  return (
    <nav aria-label="Page navigation" className="absolute left-1/2 -translate-x-1/2">
      <ul className="inline-flex space-x-2">
        <li>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full text-indigo-600 transition-colors duration-150 hover:bg-indigo-100"
          >
            <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
              <path
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
                fillRule="evenodd"
              />
            </svg>
          </button>
        </li>
        <li>
          <button
            type="button"
            className="h-10 w-10 rounded-full text-indigo-600 transition-colors duration-150 hover:bg-indigo-100"
          >
            1
          </button>
        </li>
        <li>
          <button
            type="button"
            className="h-10 w-10 rounded-full text-indigo-600 transition-colors duration-150 hover:bg-indigo-100"
          >
            2
          </button>
        </li>
        <li>
          <button
            type="button"
            className="h-10 w-10 rounded-full border border-r-0 border-indigo-600 bg-indigo-600 text-white transition-colors duration-150"
          >
            3
          </button>
        </li>
        <li>
          <button
            type="button"
            className=" flex h-10 w-10 items-center justify-center rounded-full bg-white text-indigo-600 transition-colors duration-150 hover:bg-indigo-100"
          >
            <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
              <path
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
                fillRule="evenodd"
              />
            </svg>
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default PaginationBtn;
