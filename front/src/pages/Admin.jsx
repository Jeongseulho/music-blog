import React from 'react';
import useAdmin from '../hooks/usePages/useAdmin';

function Admin() {
  const { tabs, currentTab, setCurrentTab, darkMode } = useAdmin();

  return (
    <div id="view" className="flex h-full w-screen flex-[1,2,auto] flex-row">
      <div
        id="sidebar"
        className={`${
          darkMode ? 'dark' : ''
        } h-screen w-28 overflow-x-hidden bg-white px-3 shadow-xl transition-transform duration-300 ease-in-out md:block md:w-60 lg:w-60`}
      >
        <div className="mt-10 space-y-6 md:space-y-10">
          <h1 className="hidden text-center text-sm font-bold md:block md:text-xl">Admin Page</h1>
          <div id="profile" className="space-y-3">
            <div>
              <h2 className="text-center text-xs font-medium text-teal-500 md:text-sm">
                Jeong seulho
              </h2>
              <p className="text-center text-xs text-gray-500">Administrator</p>
            </div>
          </div>

          <div id="menu" className="flex flex-col space-y-2">
            <button type="button" onClick={() => setCurrentTab(0)}>
              <p
                className={`${darkMode ? 'dark' : ''}  rounded-md
                p-2
                text-sm
                font-medium
                text-gray-700
                transition
                duration-150
                ease-in-out
                hover:scale-105
                hover:bg-teal-500
                hover:text-white`}
              >
                <svg
                  className="inline-block h-6 w-6 fill-current"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="">글 관리</span>
              </p>
            </button>
            <button type="button" onClick={() => setCurrentTab(1)}>
              <p
                className={`${darkMode ? 'dark' : ''}  rounded-md
                p-2
                text-sm
                font-medium
                text-gray-700
                transition
                duration-150
                ease-in-out
                hover:scale-105
                hover:bg-teal-500
                hover:text-white`}
              >
                <svg
                  className="inline-block h-6 w-6 fill-current"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                  <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
                </svg>
                <span className="">댓글 관리</span>
              </p>
            </button>
            <button type="button" onClick={() => setCurrentTab(2)}>
              <p
                className={`${darkMode ? 'dark' : ''}  rounded-md
                p-2
                text-sm
                font-medium
                text-gray-700
                transition
                duration-150
                ease-in-out
                hover:scale-105
                hover:bg-teal-500
                hover:text-white`}
              >
                <svg
                  className="inline-block h-6 w-6 fill-current"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z" />
                </svg>
                <span className="">UI 설정</span>
              </p>
            </button>
            <button type="button" onClick={() => setCurrentTab(3)}>
              <p
                className={`${darkMode ? 'dark' : ''}  rounded-md
                p-2
                text-sm
                font-medium
                text-gray-700
                transition
                duration-150
                ease-in-out
                hover:scale-105
                hover:bg-teal-500
                hover:text-white`}
              >
                <svg
                  className="inline-block h-6 w-6 fill-current"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                </svg>
                <span className="">유저 관리</span>
              </p>
            </button>
            <button type="button" onClick={() => setCurrentTab(4)}>
              <p
                className={`${darkMode ? 'dark' : ''}
                rounded-md
                p-2
                text-sm
                font-medium
                text-gray-700
                transition
                duration-150
                ease-in-out
                hover:scale-105
                hover:bg-teal-500
                hover:text-white`}
              >
                <svg
                  className="inline-block h-6 w-6 fill-current"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                  <path
                    fillRule="evenodd"
                    d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="">통계</span>
              </p>
            </button>
          </div>
        </div>
      </div>
      {tabs[currentTab]}
    </div>
  );
}

export default Admin;
