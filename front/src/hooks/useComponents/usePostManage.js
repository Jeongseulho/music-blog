import { useState, useEffect } from 'react';
import getList from '../../api/etc/getList';
import deletePost from '../../api/post/deletePost';

function usePostManage() {
  const [postInfoList, setPostInfoList] = useState([]);
  const [modalPopup, setModalPopup] = useState(false);
  const [currentPostId, setCurrentPostId] = useState(null);
  const currentPostInfo = postInfoList.find((postInfo) => postInfo.postId === currentPostId);
  useEffect(() => {
    getList().then((res) => {
      setPostInfoList(res.data);
    });
  }, []);

  return {
    postInfoList,
    setPostInfoList,
    deletePost,
    modalPopup,
    setModalPopup,
    currentPostId,
    setCurrentPostId,
    currentPostInfo,
  };
}

export default usePostManage;
