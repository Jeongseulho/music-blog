import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import postNewPost from '../api/postNewPost';

function useAddPost() {
  const navigate = useNavigate();
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

  return {
    onChange,
    onAddPost,
  };
}

export default useAddPost;
