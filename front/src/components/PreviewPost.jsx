import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import formatDateTime from '../utils/formatDateTime';
import PreviewPostBtn from './PreviewPostBtn';

function PreviewPost({ title, singer, registerDate, postId, userIp, setPostInfoList }) {
  const currentUserIp = useSelector((state) => state.userIp.value);
  return (
    <div className=" m-4 flex flex-col rounded-md border border-gray-600 pb-4">
      <div className="flex h-80 w-full flex-col p-4">
        <Link to={`/view-post/${postId}`}>
          <div className="relative block h-48 cursor-pointer overflow-hidden rounded">
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
          </div>
        </Link>
        <div className="mt-1">
          <p>{singer}</p>
          {currentUserIp === userIp && (
            <PreviewPostBtn postId={postId} setPostInfoList={setPostInfoList} />
          )}
        </div>
      </div>
    </div>
  );
}

export default PreviewPost;
