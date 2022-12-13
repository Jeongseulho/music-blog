import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import putPost from '../api/putPost';
import getPost from '../api/getPost';

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

  return { postInfo, onChange, onEditPost };
}

export default useEditPost;
