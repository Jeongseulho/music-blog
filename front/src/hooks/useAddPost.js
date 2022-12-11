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

  const addPost = async (e) => {
    e.preventDefault();
    try {
      if (!postInfo.title) {
        alert('song title is necessary');
        return;
      }
      if (!postInfo.singer) {
        alert('singer is necessary');
        return;
      }
      postNewPost(postInfo);
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };

  return {
    onChange,
    addPost,
  };
}

export default useAddPost;
