import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import getPost from '../api/getPost';

function useAuthStatus() {
  const params = useParams();
  const currentUserIp = useSelector((state) => state.userIp.value);
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPost(params.postId).then((res) => {
      setIsAuthorized(res.data[0].userIp === currentUserIp);
      setLoading(false);
    });
  }, []);

  return { isAuthorized, loading };
}

export default useAuthStatus;
