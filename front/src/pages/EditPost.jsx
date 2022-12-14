import React from 'react';
import useEditPost from '../hooks/usePages/useEditPost';

function EditPost() {
  const {
    postInfo,
    onChange,
    onEditPost,
    darkMode,
    onSearchImg,

    currentImgIdx,
    imgList,
    onOtherImg,
  } = useEditPost();
  const { title, singer, content, image } = postInfo;

  return (
    <div className="mx-auto h-[85%] w-full max-w-lg rounded-md border border-gray-600 py-4 px-10 ">
      <h1 className="text-4xl font-medium">post recommended song</h1>
      <form onSubmit={onEditPost} className="mt-10" autoComplete="off">
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="relative z-0">
            <input
              id="title"
              type="text"
              name="title"
              value={title || ''}
              className={`${
                darkMode ? 'dark' : ''
              } block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0`}
              onChange={onChange}
            />
            <label
              htmlFor="title"
              className="absolute top-3 z-10 origin-[0] -translate-y-6 scale-75 text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500"
            />
          </div>
          <div className="relative z-0">
            <input
              id="singer"
              type="text"
              name="singer"
              value={singer || ''}
              className={`${
                darkMode ? 'dark' : ''
              }  block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0`}
              onChange={onChange}
            />
            <label
              htmlFor="singer"
              className="absolute top-3 z-10 origin-[0] -translate-y-6 scale-75 text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500"
            />
          </div>
          <div className="h-[420px] w-[420px]">
            <img
              className="h-3/4 w-full object-scale-down"
              src={imgList[currentImgIdx] || image}
              alt="????????? ?????????"
            />
            <div className="flex justify-between ">
              <button
                type="button"
                onClick={() => onSearchImg()}
                className="mt-5 rounded-md bg-gray-700 px-10 py-2 text-white duration-500 hover:bg-black"
              >
                ????????? ??????
              </button>
              <button
                type="button"
                onClick={onOtherImg}
                className="mt-5 rounded-md bg-gray-700 px-10 py-2 text-white duration-500 hover:bg-black"
              >
                ?????? ?????????
              </button>
            </div>
          </div>

          <div className="relative bottom-16 col-span-2 mt-4">
            <textarea
              id="content"
              name="content"
              rows="5"
              value={content || ''}
              className={`${
                darkMode ? 'dark' : ''
              } peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0`}
              onChange={onChange}
            />
            <label
              htmlFor="content"
              className="absolute top-3 z-10 origin-[0] -translate-y-6 scale-75 text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500"
            >
              content(option)
            </label>
          </div>
        </div>
        <button
          type="submit"
          className=" relative bottom-12 mt-2 rounded-md bg-gray-700 px-10 py-2 text-white duration-500 hover:bg-black"
        >
          ????????????
        </button>
      </form>
    </div>
  );
}

export default EditPost;
