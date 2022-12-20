import { useState, useEffect } from 'react';
import getList from '../../api/etc/getList';
import deletePost from '../../api/post/deletePost';

function usePostManage() {
  const [postInfoList, setPostInfoList] = useState([]);
  useEffect(() => {
    getList().then((res) => {
      setPostInfoList(res.data);
    });
  }, []);

  return { postInfoList, setPostInfoList, deletePost };
}

export default usePostManage;
