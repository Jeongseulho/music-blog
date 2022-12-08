import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PreviewPost from './PreviewPost';

function PreviewPostList() {
  const [PostInfoList, setPostInfoList] = useState([]);

  const getList = async () => {
    try {
      const res = await axios.get('/list');
      setPostInfoList(res.data);
      console.log(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getList();
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
