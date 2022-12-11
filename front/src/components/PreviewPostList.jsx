import React from 'react';
import PreviewPost from './PreviewPost';
import PreviewPostBtn from './PreviewPostBtn';
import usePreviewPostList from '../hooks/usePreviewPostList';

function PreviewPostList() {
  const postInfoList = usePreviewPostList();

  return (
    <main className=" ml-24 flex flex-wrap">
      {postInfoList.map((postInfo) => (
        <PreviewPost
          key={postInfo.postId}
          postId={postInfo.postId}
          title={postInfo.title}
          singer={postInfo.singer}
          registerDate={postInfo.registerDate}
        />
      ))}
      {postInfoList.map((postInfo) => (
        <PreviewPostBtn key={postInfo.postId} postId={postInfo.postId} />
      ))}
    </main>
  );
}

export default PreviewPostList;
