import React from 'react';
import formatDateTime from '../../utils/formatDateTime';

function Reply({ replyId, content, registerDate, userIp, postUserIp, currentUserIp, onDelReply }) {
  return (
    <div className="pt-6">
      <div className="flex pb-4">
        <div>
          <div>
            <span className="mr-2 inline-block text-base font-bold">
              {postUserIp === userIp ? `글 작성자` : `익명`}
            </span>
            <span className="text-slate-500 dark:text-slate-300">
              {registerDate === '방금전' ? registerDate : formatDateTime(registerDate)}
            </span>
            {currentUserIp === userIp && (
              <button
                type="button"
                onClick={() => onDelReply(replyId)}
                className=" ml-2 inline-flex h-6 items-center space-x-1 rounded-lg border border-slate-200 bg-white p-2 text-sm font-medium text-slate-800 hover:bg-slate-100 hover:text-blue-600"
              >
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                </span>
                <span>Delete</span>
              </button>
            )}
          </div>
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
}

export default Reply;
