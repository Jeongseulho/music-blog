import axios from 'axios';

async function getImgSaerch(postInfo) {
  try {
    const { title, singer } = postInfo;
    const searchText = `${title} ${singer}`;
    const res = await axios.get('/img', {
      params: {
        searchText,
      },
    });
    return res;
  } catch (error) {
    return null;
  }
}

export default getImgSaerch;
