import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import putPost from '../../api/post/putPost';
import getPost from '../../api/post/getPost';
import getImgSaerch from '../../api/etc/getImgSearch';

function useEditPost() {
  const navigate = useNavigate();
  const params = useParams();

  const [imgList, setImgList] = useState([]);
  const [currentImgIdx, setCurrentImgIdx] = useState(0);

  const [postInfo, setPostInfo] = useState({
    title: '',
    singer: '',
    image: '',
    content: '',
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

  useEffect(() => {
    getPost(params.postId).then((res) => {
      setPostInfo(res.data[0]);
    });
  }, []);

  const onEditPost = async (e) => {
    e.preventDefault();
    if (!postInfo.title) {
      alert('song title is necessary');
      return;
    }
    if (!postInfo.singer) {
      alert('singer is necessary');
      return;
    }
    const res = putPost(params.postId, postInfo);
    if (res === null) return;
    navigate(`/view-post/${params.postId}`);
  };

  const darkMode = useSelector((state) => state.darkMode);

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
    postInfo,
    onChange,
    onEditPost,
    darkMode,
    onSearchImg,
    currentImgIdx,
    imgList,
    onOtherImg,
  };
}

export default useEditPost;
