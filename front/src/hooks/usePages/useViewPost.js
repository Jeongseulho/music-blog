import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import useCurrentUserIp from '../etc/useCurrentUserIp';
import getPost from '../../api/post/getPost';
import postReply from '../../api/reply/postReply';
import getReplyList from '../../api/reply/getReplyList';
import deleteReply from '../../api/reply/deleteReply';

function useViewPost() {
  const params = useParams();

  const currentUserIp = useCurrentUserIp();

  // 불러올 게시글 정보
  const [postInfo, setPostInfo] = useState([
    {
      title: '',
      singer: '',
      content: '',
      userIp: '',
      registerDate: '',
    },
  ]);

  // 작성할 댓글 정보
  const [replyInfo, setReplyInfo] = useState({
    replyId: 0,
    postId: params.postId,
    content: '',
    userIp: currentUserIp,
    registerDate: '방금전',
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

  useEffect(() => {
    setReplyInfo((prevState) => ({
      ...prevState,
      userIp: currentUserIp,
    }));
  }, [currentUserIp]);

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

    setReplyList((prevState) => [...prevState, { ...replyInfo, replyId: prevState.length + 1 }]);
  };

  const onDelReply = async (replyId) => {
    deleteReply(replyId).then((res) => {
      if (res === null) {
        alert('댓글 삭제 실패');
      }
    });
    setReplyList((prevState) => prevState.filter((reply) => reply.replyId !== replyId));
  };

  const darkMode = useSelector((state) => state.darkMode.value);

  return { postInfo, onChange, onAddReply, replyList, currentUserIp, onDelReply, darkMode };
}

export default useViewPost;
