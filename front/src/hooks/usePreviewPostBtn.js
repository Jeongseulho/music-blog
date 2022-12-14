import { useNavigate } from 'react-router-dom';
import deletePost from '../api/deletePost';

function usePreviewPostBtn() {
  const navigate = useNavigate();

  const onDeletePost = (e, postId) => {
    e.preventDefault();
    const res = deletePost(postId);
    if (res === null) {
      alert('삭제 실패');
    }
  };

  const onDeletePostFromState = (prevState, postId) =>
    prevState.filter((postInfo) => postInfo.postId !== postId);

  return { navigate, onDeletePost, onDeletePostFromState };
}

export default usePreviewPostBtn;
