import axios from 'axios';

async function putPost(postId, postInfo) {
  try {
    const res = await axios.put(`/post/${postId}`, postInfo);
    return res;
  } catch (error) {
    return null;
  }
}

export default putPost;
