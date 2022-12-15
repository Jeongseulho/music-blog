import { useState, useEffect } from 'react';
import getUserIp from '../api/getUserIp';

function useGetUserIp() {
  const [userIp, setUserIp] = useState();

  useEffect(() => {
    getUserIp().then((res) => {
      setUserIp(res.data.IPv4);
    });
  }, []);

  return { userIp, setUserIp };
}

export default useGetUserIp;
