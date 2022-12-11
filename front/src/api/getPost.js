import axios from 'axios';

async function getPost(postId) {
  try {
    const res = await axios.get(`/post/${postId}`);
    return res;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export default getPost;
