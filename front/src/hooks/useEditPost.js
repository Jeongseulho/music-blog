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

  const editPost = async (e) => {
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
      putPost(params.postId, postInfo);
      navigate(`/view-post/${params.postId}`);
    } catch (error) {
      console.error(error);
    }
  };

  return { postInfo, onChange, editPost };
}

export default useEditPost;
