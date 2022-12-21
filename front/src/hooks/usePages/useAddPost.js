import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import postNewPost from '../../api/post/postNewPost';
import getImgSaerch from '../../api/etc/getImgSearch';

function useAddPost() {
  const navigate = useNavigate();
  const userIp = useSelector((state) => state.userIp.value);
  const userIpStatus = useSelector((state) => state.userIp.status);
  if (userIpStatus === 'fail') {
    alert('유저ip 받아오기 실패');
    navigate('/');
  }

  const [postInfo, setPostInfo] = useState({
    title: '',
    singer: '',
    content: '',
    userIp,
  });

  const [imgList, setImgList] = useState([]);
  const [currentImgIdx, setCurrentImgIdx] = useState(0);

  const onChange = (e) => {
    setPostInfo((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const onAddPost = async (e) => {
    e.preventDefault();
    if (!postInfo.title) {
      alert('song title is necessary');
      return;
    }
    if (!postInfo.singer) {
      alert('singer is necessary');
      return;
    }
    const res = postNewPost(postInfo);
    if (res === null) return;
    navigate('/');
  };

  const darkMode = useSelector((state) => state.darkMode.value);

  const onSearchImg = async () => {
    const res = await getImgSaerch(postInfo);
    if (res === null) return;
    const imgLinkList = res.data.items.map((item) => item.link);
    setImgList(imgLinkList);
  };

  return {
    onChange,
    onAddPost,
    darkMode,
    postInfo,
    imgList,
    onSearchImg,
    currentImgIdx,
    setCurrentImgIdx,
  };
}

export default useAddPost;
