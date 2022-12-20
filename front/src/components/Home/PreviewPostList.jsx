import React from 'react';
import PreviewPost from './PreviewPost';
import usePreviewPostList from '../../hooks/useComponents/usePreviewPostList';
import PaginationBtn from './PaginationBtn';

function PreviewPostList() {
  const { currentPostList, setPostInfoList, setCurrentPage, totalPage, currentPage } =
    usePreviewPostList();

  return (
    <>
      <main className=" ml-24 flex flex-wrap">
        {currentPostList.map((postInfo) => (
          <PreviewPost
            key={postInfo.postId}
            postId={postInfo.postId}
            title={postInfo.title}
            singer={postInfo.singer}
            userIp={postInfo.userIp}
            registerDate={postInfo.registerDate}
            setPostInfoList={setPostInfoList}
          />
        ))}
      </main>
      <PaginationBtn
        setCurrentPage={setCurrentPage}
        totalPage={totalPage}
        currentPage={currentPage}
      />
    </>
  );
}

export default PreviewPostList;
