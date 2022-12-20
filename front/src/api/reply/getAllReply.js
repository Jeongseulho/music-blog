import axios from 'axios';

async function getAllReply() {
  try {
    const res = await axios.get(`/all-reply/`);
    return res;
  } catch (error) {
    return null;
  }
}

export default getAllReply;
