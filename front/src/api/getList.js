import axios from 'axios';

async function getList() {
  try {
    const res = await axios.get('/list');
    return res.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export default getList;
