import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import getPost from '../../api/post/getPost';
import useCurrentUserIp from './useCurrentUserIp';

function useAuthStatus() {
  const params = useParams();
  const currentUserIp = useCurrentUserIp();
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
