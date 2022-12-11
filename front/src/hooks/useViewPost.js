import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import getPost from '../api/getPost';

function useViewPost() {
  const params = useParams();
  const [postInfo, setPostInfo] = useState([
    {
      title: '',
      singer: '',
      content: '',
      registerDate: '',
    },
  ]);

  useEffect(() => {
    getPost(params.postId).then((data) => {
      setPostInfo(data);
    });
  }, []);

  return postInfo;
}

export default useViewPost;
