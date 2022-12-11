import React from 'react';
import useEditPost from '../hooks/useEditPost';

function EditPost() {
  const { postInfo, onChange, editPost } = useEditPost();
  const { title, singer, content } = postInfo;

  return (
    <div className="flex items-center justify-start bg-white">
      <div className="mx-auto w-full max-w-lg">
        <h1 className="text-4xl font-medium">post your recommended song</h1>
        <form onSubmit={editPost} className="mt-10" autoComplete="off">
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="relative z-0">
              <input
                id="title"
                type="text"
                name="title"
                spellCheck="false"
                value={title || ''}
                className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                onChange={onChange}
              />
              <label
                htmlFor="title"
                className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500"
              >
                song title
              </label>
            </div>
            <div className="relative z-0">
              <input
                id="singer"
                type="text"
                name="singer"
                spellCheck="false"
                value={singer || ''}
                className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                onChange={onChange}
              />
              <label
                htmlFor="singer"
                className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500"
              >
                singer
              </label>
            </div>
            <img src="" alt="이미지 준비중" />
            <div className="relative z-0 col-span-2">
              <textarea
                id="content"
                name="content"
                rows="5"
                spellCheck="false"
                value={content || ''}
                className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                onChange={onChange}
              />
              <label
                htmlFor="content"
                className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500"
              >
                content(option)
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="mt-5 rounded-md bg-gray-700 px-10 py-2 text-white duration-500 hover:bg-black"
          >
            posting
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditPost;
