import { useNavigate } from 'react-router-dom';
import deletePost from '../../api/post/deletePost';

function usePreviewPostBtn() {
  const navigate = useNavigate();

  const onDeletePost = (e, postId) => {
    e.preventDefault();
    const res = deletePost(postId);
    if (res === null) {
      alert('삭제 실패');
    }
  };

  const onDeletePostFromState = (prevState, postId) => {
    const deletedPostInfoList = prevState.filter((postInfo) => postInfo.postId !== postId);
    return deletedPostInfoList;
  };

  return { navigate, onDeletePost, onDeletePostFromState };
}

export default usePreviewPostBtn;
