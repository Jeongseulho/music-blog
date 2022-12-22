import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import useCurrentUserIp from '../../hooks/etc/useCurrentUserIp';
import formatDateTime from '../../utils/formatDateTime';
import PreviewPostBtn from './PreviewPostBtn';

function PreviewPost({ title, singer, registerDate, postId, image, userIp, setPostInfoList }) {
  const currentUserIp = useCurrentUserIp();
  const darkMode = useSelector((state) => state.darkMode.value);
  return (
    <div className=" m-4 flex flex-col rounded-md border border-gray-600 pb-4 duration-300 hover:scale-110">
      <div className="flex h-80 w-full flex-col p-4">
        <Link to={`/view-post/${postId}`}>
          <div className="relative block h-48 cursor-pointer overflow-hidden rounded">
            <img
              alt="이미지 준비중"
              className="block h-[192px] w-[310px] object-cover object-center"
              src={image}
            />
          </div>
          <div className="mt-4">
            <h3 className=" mb-1 text-xs tracking-widest text-gray-500">
              {formatDateTime(registerDate)}
            </h3>
            <h2 className={`${darkMode ? 'dark' : ''} text-lg font-medium text-gray-900 `}>
              {title}
            </h2>
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
