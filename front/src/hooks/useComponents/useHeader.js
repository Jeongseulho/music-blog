import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import useCurrentUserIp from '../etc/useCurrentUserIp';

function useHeader() {
  const location = useLocation();
  const [modalPopup, setModalPopup] = useState(false);
  const currentUserIp = useCurrentUserIp();
  const darkMode = useSelector((state) => state.darkMode.value);
  const dispatch = useDispatch();
  return { dispatch, modalPopup, setModalPopup, currentUserIp, location, darkMode };
}

export default useHeader;
