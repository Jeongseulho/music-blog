import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import useCurrentUserIp from '../etc/useCurrentUserIp';
import getPost from '../../api/post/getPost';
import postReply from '../../api/reply/postReply';
import getReplyList from '../../api/reply/getReplyList';

function useViewPost() {
  const params = useParams();

  const currentUserIp = useCurrentUserIp();

  // 불러올 게시글 정보
  const [postInfo, setPostInfo] = useState([
    {
      title: '',
      singer: '',
      content: '',
      registerDate: '',
    },
  ]);

  // 작성할 댓글 정보
  const [replyInfo, setReplyInfo] = useState({
    postId: params.postId,
    content: '',
    userIp: currentUserIp,
  });

  // 불러올 댓글 정보
  const [replyList, setReplyList] = useState([]);

  useEffect(() => {
    getPost(params.postId).then((res) => {
      setPostInfo(res.data[0]);
    });
    getReplyList(params.postId).then((res) => {
      setReplyList(res.data);
    });
  }, []);

  const onChange = (e) => {
    setReplyInfo((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const onAddReply = async (e) => {
    e.preventDefault();
    e.target.reset();
    if (!replyInfo.content) {
      alert('content is necessary');
      return;
    }
    const response = postReply(replyInfo);
    if (response === null) alert('댓글 등록 실패');

    getReplyList(params.postId).then((res) => {
      setReplyList(res.data);
    });
  };

  return { postInfo, onChange, onAddReply, replyList, currentUserIp };
}

export default useViewPost;
