import React from 'react';
import { Link } from 'react-router-dom';
import PreviewPostBtn from './PreviewPostBtn';
import formatDateTime from '../utils/formatDateTime';

function PreviewPost({ title, singer, registerDate, postId }) {
  return (
    <div className=" m-4 flex flex-col">
      <Link to={`/view-post/${postId}`}>
        <div className="flex h-80 w-full cursor-pointer flex-col p-4">
          <div className="relative block h-48 overflow-hidden rounded">
            <img
              alt="ecommerce"
              className="block h-full w-full object-cover object-center"
              src="https://dummyimage.com/420x260"
            />
          </div>
          <div className="mt-4">
            <h3 className=" mb-1 text-xs tracking-widest text-gray-500">
              {formatDateTime(registerDate)}
            </h3>
            <h2 className=" text-lg font-medium text-gray-900">{title}</h2>
            <p className="mt-1">{singer}</p>
          </div>
        </div>
      </Link>
      <PreviewPostBtn postId={postId} />
    </div>
  );
}

export default PreviewPost;