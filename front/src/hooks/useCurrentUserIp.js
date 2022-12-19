import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function useCurrentUserIp() {
  const navigate = useNavigate();
  const currentUserIp = useSelector((state) => state.userIp.value);
  const userIpStatus = useSelector((state) => state.userIp.status);
  if (userIpStatus === 'fail') {
    alert('유저ip 받아오기 실패');
    navigate('/');
  }
  return currentUserIp;
}

export default useCurrentUserIp;
