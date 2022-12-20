import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import useCurrentUserIp from '../etc/useCurrentUserIp';

function useHeader() {
  const location = useLocation();
  const [modalPopup, setModalPopup] = useState(false);
  const currentUserIp = useCurrentUserIp();
  return { modalPopup, setModalPopup, currentUserIp, location };
}

export default useHeader;
