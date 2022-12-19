import axios from 'axios';

async function postReply(replyInfo) {
  try {
    const res = await axios.post(`/reply`, replyInfo);
    return res;
  } catch (error) {
    return null;
  }
}

export default postReply;
