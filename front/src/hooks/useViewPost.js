import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import getPost from '../api/getPost';
import postReply from '../api/postReply';

function useViewPost() {
  const params = useParams();
  const navigate = useNavigate();
  const userIp = useSelector((state) => state.userIp.value);
  const userIpStatus = useSelector((state) => state.userIp.status);
  if (userIpStatus === 'fail') {
    alert('유저ip 받아오기 실패');
    navigate('/');
  }

  const [postInfo, setPostInfo] = useState([
    {
      title: '',
      singer: '',
      content: '',
      registerDate: '',
    },
  ]);

  const [replyInfo, setReplyInfo] = useState({ postId: params.postId, content: '', userIp });

  useEffect(() => {
    getPost(params.postId).then((res) => {
      setPostInfo(res.data[0]);
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

    if (!replyInfo.content) {
      alert('content is necessary');
      return;
    }
    const res = postReply(replyInfo);
    if (res === null) alert('댓글 등록 실패');
  };

  return { postInfo, replyInfo, onChange, onAddReply };
}

export default useViewPost;
