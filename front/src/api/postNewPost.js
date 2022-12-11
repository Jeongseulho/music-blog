import axios from 'axios';

async function postNewPost(postInfo) {
  const res = await axios.post('/post', postInfo);
  return res;
}

export default postNewPost;
