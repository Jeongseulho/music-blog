import React from 'react';
import formatDateTime from '../utils/formatDateTime';
import useViewPost from '../hooks/useViewPost';

function ViewPost() {
  const { postInfo, onChange, onAddReply } = useViewPost();
  const { title, singer, content, registerDate } = postInfo;

  return (
    <div className=" flex flex-col items-center px-8 pt-10 ">
      <article className=" mb-4 flex w-full flex-col rounded-xl border-4 border-gray-600 bg-white bg-clip-border p-6 sm:w-3/6">
        <div className="flex items-center justify-between pb-6">
          <div className="flex">
            <div className="flex flex-col">
              <div />
              <div className="text-slate-500">{registerDate && formatDateTime(registerDate)}</div>
            </div>
          </div>
        </div>
        <h2 className="text-3xl font-extrabold">
          {title} - {singer}
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
        <p>{content}</p>

        <form onSubmit={onAddReply} autoComplete="off" className="relative pt-8 ">
          <input
            id="content"
            className="h-11 w-full rounded-lg border-2 border-slate-400 py-2 pl-3 pr-20 font-medium placeholder:text-slate-600"
            type="text"
            onChange={onChange}
            placeholder="Write a comment"
          />
          <button type="submit" className="absolute top-12 right-3 -mt-3 flex items-center">
            <svg className="w-8 cursor-pointer fill-blue-500" viewBox="0 0 24 24">
              <path d="M2,21L23,12L2,3V10L17,12L2,14V21Z" />
            </svg>
          </button>
        </form>

        <div className="pt-6">
          <div className="flex pb-4">
            <div>
              <div>
                <span className="mr-2 inline-block text-base font-bold">익명1</span>
                <span className="text-slate-500 dark:text-slate-300">25 minutes ago</span>
              </div>
              <p>댓글 내용</p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

export default ViewPost;
