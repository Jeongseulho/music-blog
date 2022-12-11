import { useEffect, useState } from 'react';
import getList from '../api/getList';

function usePreviewPostList() {
  const [postInfoList, setPostInfoList] = useState([]);

  useEffect(() => {
    getList().then((data) => {
      setPostInfoList(data);
    });
  }, []);

  return postInfoList;
}

export default usePreviewPostList;
