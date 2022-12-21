import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import putPost from '../../api/post/putPost';
import getPost from '../../api/post/getPost';

function useEditPost() {
  const navigate = useNavigate();
  const params = useParams();
  const [postInfo, setPostInfo] = useState({
    title: '',
    singer: '',
    content: '',
  });

  const onChange = (e) => {
    setPostInfo((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

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

  return { postInfo, onChange, onEditPost, darkMode };
}

export default useEditPost;
