import React from 'react';
import PostBtn from './PostBtn';

function Post({ title, singer, date }) {
  return (
    <div className=" m-4 flex flex-col">
      <div className="flex h-80 w-full flex-col p-4">
        <div className="relative block h-48 overflow-hidden rounded">
          <img
            alt="ecommerce"
            className="block h-full w-full cursor-pointer object-cover object-center"
            src="https://dummyimage.com/420x260"
          />
        </div>
        <div className="mt-4">
          <h3 className=" mb-1 text-xs tracking-widest text-gray-500">{date}</h3>
          <h2 className=" text-lg font-medium text-gray-900">{title}</h2>
          <p className="mt-1">{singer}</p>
        </div>
      </div>
      <PostBtn />
    </div>
  );
}

export default Post;