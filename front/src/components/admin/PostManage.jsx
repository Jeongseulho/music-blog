import React from 'react';
import PostTableData from './PostTableData';
import usePostManage from '../../hooks/useComponents/usePostManage';

function PostManage() {
  const { postInfoList, setPostInfoList, deletePost } = usePostManage();
  return (
    <div className="relative left-36 flex w-[60%] items-center justify-center">
      <div className="container">
        <table className="my-5 flex w-full table-fixed flex-col flex-nowrap overflow-hidden rounded-lg bg-white shadow-lg">
          <thead className="text-white">
            <tr className="mb-2 flex w-full flex-nowrap rounded-l-lg bg-teal-400 sm:mb-0 sm:table-row sm:rounded-none">
              <th className=" p-3 text-left">#</th>
              <th className=" p-3 px-16 text-left">title</th>
              <th className=" p-3 px-16 text-left">singer</th>
              <th className=" p-3 px-16 text-left">userIp</th>
              <th className=" p-3 px-8 text-left">registerData</th>
              <th className=" p-3 text-left">action</th>
            </tr>
          </thead>
          <tbody className="sm:flex-none">
            {postInfoList.map((postInfo, idx) => (
              <PostTableData
                idx={idx}
                postId={postInfo.postId}
                key={postInfo.postId}
                title={postInfo.title}
                singer={postInfo.singer}
                userIp={postInfo.userIp}
                registerDate={postInfo.registerDate}
                deletePost={deletePost}
                setPostInfoList={setPostInfoList}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PostManage;
