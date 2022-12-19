import axios from 'axios';

async function getPost(postId) {
  try {
    const res = await axios.delete(`/post/${postId}`);
    return res;
  } catch (error) {
    return null;
  }
}

export default getPost;
