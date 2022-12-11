import axios from 'axios';

async function postNewPost(postInfo) {
  try {
    const res = await axios.post('/post', postInfo);
    return res;
  } catch (error) {
    return null;
  }
}

export default postNewPost;
