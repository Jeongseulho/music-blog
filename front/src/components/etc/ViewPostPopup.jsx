import React from 'react';
import formatDateTime from '../../utils/formatDateTime';

function ViewPostPopup({ currentPostInfo, setModalPopup }) {
  return (
    <button type="button" onClick={() => setModalPopup(false)}>
      <div className="absolute top-0 left-0 z-10 h-screen w-screen bg-slate-900/70 ">
        <div className="absolute left-1/2 top-20 flex w-full -translate-x-1/2 ">
          <div className=" flex flex-col items-center px-8 pt-10 ">
            <article className=" mb-4 flex w-full flex-col rounded-xl border-4 border-gray-600 bg-white bg-clip-border p-6 sm:w-3/6">
              <div className="flex items-center justify-between pb-6">
                <div className="flex">
                  <div className="flex flex-col">
                    <div />
                    <div className="text-slate-500">
                      {currentPostInfo.registerDate && formatDateTime(currentPostInfo.registerDate)}
                    </div>
                  </div>
                </div>
              </div>
              <h2 className="text-3xl font-extrabold">
                {currentPostInfo.title} - {currentPostInfo.singer}
              </h2>
              <div className="py-4">
                <div className="mb-1 flex justify-between gap-1">
                  <img
                    alt="이미지 준비중"
                    className="max-w-full rounded-tl-lg"
                    src="https://images.pexels.com/photos/92866/pexels-photo-92866.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  />
                </div>
                <div className="flex justify-between gap-1" />
              </div>
              <p>{currentPostInfo.content}</p>
            </article>
          </div>
        </div>
      </div>
    </button>
  );
}

export default ViewPostPopup;
