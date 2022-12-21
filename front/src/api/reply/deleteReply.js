import axios from 'axios';

async function deleteReply(replyId) {
  try {
    const res = await axios.delete(`/reply/${replyId}`);
    return res;
  } catch (error) {
    return null;
  }
}

export default deleteReply;
