import { useState } from 'react';
import useCurrentUserIp from '../etc/useCurrentUserIp';

function useHeader() {
  const [modalPopup, setModalPopup] = useState(false);
  const currentUserIp = useCurrentUserIp();
  return { modalPopup, setModalPopup, currentUserIp };
}

export default useHeader;
