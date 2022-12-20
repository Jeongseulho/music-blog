import axios from 'axios';

async function getAllReply() {
  try {
    const res = await axios.get(`/reply/all`);
    return res;
  } catch (error) {
    return null;
  }
}

export default getAllReply;
