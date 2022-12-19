import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getUserIpThunk } from '../../redux/userIpSlice';

function useGetUserIp() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserIpThunk());
  }, []);
}

export default useGetUserIp;
