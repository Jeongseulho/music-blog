import React from 'react';

function SetIpPopup({ setModalPopup }) {
  return (
    <div className="absolute top-0 left-0 z-10 h-screen w-screen bg-slate-900/70 ">
      <form className="absolute left-[38%] top-1/4 flex w-1/4 opacity-100">
        <div className="m-auto w-full max-w-2xl rounded-lg bg-white px-5 py-10 shadow dark:bg-gray-800">
          <div className="mb-6 text-center text-3xl font-light text-gray-800 dark:text-white">
            임시 IP 설정
          </div>
          <p className="mb-6 text-center font-light text-gray-800 dark:text-white">
            설정하지 않을시 실제 IP가 등록됩니다.
          </p>
          <div className="m-auto grid max-w-xl grid-cols-2 gap-4">
            <div className="col-span-2 ">
              <div className=" relative ">
                <input
                  type="text"
                  id="ipAdress"
                  className=" w-full flex-1 appearance-none rounded-lg border  border-gray-300 bg-white py-2 px-4 text-base text-gray-700 shadow-sm placeholder:text-gray-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600"
                  placeholder="your ip address"
                />
              </div>
            </div>

            <div className="col-span-2  flex w-full items-center justify-between gap-4 text-right">
              <button
                type="button"
                className="w-full rounded-lg  bg-indigo-600 py-2 px-4 text-center text-base font-semibold text-white shadow-md transition duration-200 ease-in hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2  focus:ring-offset-indigo-200 "
              >
                Register
              </button>
              <button
                type="button"
                onClick={() => {
                  setModalPopup(false);
                }}
                className="w-full  rounded-lg bg-white py-2 px-4 text-center text-base font-semibold text-indigo-500 shadow-md transition duration-200 ease-in hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2  focus:ring-offset-indigo-200 "
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SetIpPopup;
