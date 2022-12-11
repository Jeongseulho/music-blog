import React, { useEffect, useState } from 'react';
import PreviewPost from './PreviewPost';
import getList from '../api/getList';

function PreviewPostList() {
  const [PostInfoList, setPostInfoList] = useState([]);

  useEffect(() => {
    getList().then((res) => {
      setPostInfoList(res.data);
    });
  }, []);
  return (
    <main className=" ml-24 flex flex-wrap">
      {PostInfoList.map((postInfo) => (
        <PreviewPost
          key={postInfo.postId}
          postId={postInfo.postId}
          title={postInfo.title}
          singer={postInfo.singer}
          registerDate={postInfo.registerDate}
        />
      ))}
    </main>
  );
}

export default PreviewPostList;
