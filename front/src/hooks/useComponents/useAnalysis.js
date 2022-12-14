import { useEffect, useState } from 'react';
import getList from '../../api/etc/getList';
import getAllReply from '../../api/reply/getAllReply';
import countPerDay from '../../utils/countPerDay';

function useAnalysis() {
  const [postInfoList, setPostInfoList] = useState([]);
  const [replyInfoList, setReplyInfoList] = useState([]);

  useEffect(() => {
    getList().then((res) => {
      setPostInfoList(res.data);
    });
    getAllReply().then((res) => {
      setReplyInfoList(res.data);
    });
  }, []);

  const today = new Date();
  const postData = countPerDay(postInfoList, today);
  const replyData = countPerDay(replyInfoList, today);

  const data = [
    {
      id: '글 수',
      data: postData,
    },
    {
      id: '댓글 수',
      data: replyData,
    },
  ];

  return data;
}

export default useAnalysis;
