import React from 'react';
import PreviewPost from './PreviewPost';
import usePreviewPostList from '../hooks/usePreviewPostList';

function PreviewPostList() {
  const { postInfoList, setPostInfoList } = usePreviewPostList();

  return (
    <main className=" ml-24 flex flex-wrap">
      {postInfoList.map((postInfo) => (
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
  );
}

export default PreviewPostList;
