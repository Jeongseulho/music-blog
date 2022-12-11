import axios from 'axios';

async function getPost() {
  try {
    const res = await axios.get('/list');
    return res;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export default getPost;
