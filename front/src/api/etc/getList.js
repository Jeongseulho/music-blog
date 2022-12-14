import axios from 'axios';

async function getList() {
  try {
    const res = await axios.get('/list');
    return res;
  } catch (error) {
    return null;
  }
}

export default getList;
