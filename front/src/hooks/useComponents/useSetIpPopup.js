import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setIp } from '../../redux/userIpSlice';

function useSetIpPopup() {
  const dispatch = useDispatch();

  const [ipAdress, setIpAdress] = useState('');

  const onChange = (e) => {
    setIpAdress(e.target.value);
  };

  const onSetIp = (e) => {
    e.preventDefault();

    const ipformat =
      /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

    if (!ipformat.test(ipAdress)) {
      alert('ip adress is not valid');
      return;
    }

    dispatch(setIp(ipAdress));
  };

  return { onChange, onSetIp };
}

export default useSetIpPopup;
