import axios from 'axios';

async function putPost(postId, postInfo) {
  const res = await axios.put(`/post/${postId}`, postInfo);
  return res;
}

export default putPost;
