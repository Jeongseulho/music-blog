import { useEffect, useState } from 'react';
import getList from '../../api/etc/getList';

function usePreviewPostList() {
  const [postInfoList, setPostInfoList] = useState([]);

  useEffect(() => {
    getList().then((res) => {
      setPostInfoList(res.data);
    });
  }, []);

  return { postInfoList, setPostInfoList };
}

export default usePreviewPostList;
