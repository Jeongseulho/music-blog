import { useState, useEffect } from 'react';
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

  const [imgList, setImgList] = useState([]);
  const [currentImgIdx, setCurrentImgIdx] = useState(0);

  const [postInfo, setPostInfo] = useState({
    title: '',
    singer: '',
    content: '',
    image: '',
    userIp,
  });

  const onChange = (e) => {
    setPostInfo((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  useEffect(() => {
    setPostInfo((prevState) => ({
      ...prevState,
      image: imgList[currentImgIdx],
    }));
  }, [imgList, currentImgIdx]);

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

  const onOtherImg = () => {
    if (imgList.length === 0) {
      alert('이미지를 먼저 검색해주세요');
      return;
    }
    setCurrentImgIdx((prev) => {
      if (prev === 9) return 0;
      return prev + 1;
    });
  };

  return {
    onChange,
    onAddPost,
    darkMode,
    postInfo,
    imgList,
    onSearchImg,
    currentImgIdx,
    onOtherImg,
  };
}

export default useAddPost;
