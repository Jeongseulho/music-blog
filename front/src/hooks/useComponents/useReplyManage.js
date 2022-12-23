import { useEffect, useState } from 'react';
import getAllReply from '../../api/reply/getAllReply';

function useReplyManage() {
  const [allReplyList, setAllReplyList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllReply().then((res) => {
      setAllReplyList(res.data);
      setLoading(false);
    });
  }, []);

  return { allReplyList, setAllReplyList, loading };
}

export default useReplyManage;
