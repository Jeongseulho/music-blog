import { useNavigate } from 'react-router-dom';

function usePreviewPostBtn() {
  const navigate = useNavigate();
  return navigate;
}

export default usePreviewPostBtn;
