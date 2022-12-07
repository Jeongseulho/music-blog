import React from 'react';
import Post from './Post';

function PostList() {
  return (
    <main className=" ml-20 flex flex-wrap">
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </main>
  );
}

export default PostList;
