import { useState } from 'react';

function useHeader() {
  const [modalPopup, setModalPopup] = useState(false);
  return { modalPopup, setModalPopup };
}

export default useHeader;
