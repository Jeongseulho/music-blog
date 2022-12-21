import React from 'react';
import PostTableData from './PostTableData';
import usePostManage from '../../hooks/useComponents/usePostManage';
import ViewPostPopup from '../etc/ViewPostPopup';

function PostManage() {
  const {
    postInfoList,
    setPostInfoList,
    deletePost,
    modalPopup,
    setModalPopup,
    setCurrentPostId,
    currentPostInfo,
  } = usePostManage();
  return (
    <>
      <div className="relative left-36 flex items-center justify-center">
        <div className="container">
          <table className="my-5 flex w-full table-fixed flex-col flex-nowrap overflow-hidden rounded-lg bg-white shadow-lg">
            <thead className="text-white">
              <tr className="mb-2 flex w-full flex-nowrap rounded-l-lg bg-teal-400 sm:mb-0 sm:table-row sm:rounded-none">
                <th className=" p-2 pr-3 text-center">ID</th>
                <th className=" p-3 px-16 text-center">제목</th>
                <th className=" p-3 px-16 text-center">가수</th>
                <th className=" p-3 px-12 text-center">작성자 IP</th>
                <th className=" p-3 px-12 text-center">등록일자</th>
                <th className=" p-3 px-[2.7rem] text-center">actions</th>
              </tr>
            </thead>
            <tbody className="sm:flex-none">
              {postInfoList.map((postInfo) => (
                <PostTableData
                  postId={postInfo.postId}
                  key={postInfo.postId}
                  title={postInfo.title}
                  singer={postInfo.singer}
                  userIp={postInfo.userIp}
                  registerDate={postInfo.registerDate}
                  deletePost={deletePost}
                  setPostInfoList={setPostInfoList}
                  setModalPopup={setModalPopup}
                  setCurrentPostId={setCurrentPostId}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {modalPopup && (
        <ViewPostPopup currentPostInfo={currentPostInfo} setModalPopup={setModalPopup} />
      )}
    </>
  );
}

export default PostManage;
