import axios from 'axios';

async function getReplyList(postId) {
  try {
    const res = await axios.get(`/reply/${postId}`);
    return res;
  } catch (error) {
    return null;
  }
}

export default getReplyList;
