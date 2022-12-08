import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Post from './Post';

function PostList() {
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
        <Post
          key={postInfo.POST_ID}
          postId={postInfo.POST_ID}
          title={postInfo.TITLE}
          singer={postInfo.SINGER}
          date={postInfo.REGISTER_DATE}
        />
      ))}
    </main>
  );
}

export default PostList;
