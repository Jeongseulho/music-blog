import { useEffect, useState } from 'react';
import getAllReply from '../../api/reply/getAllReply';

function useReplyManage() {
  const [allReplyList, setAllReplyList] = useState([]);

  useEffect(() => {
    getAllReply().then((res) => {
      setAllReplyList(res.data);
    });
  }, []);

  return allReplyList;
}

export default useReplyManage;
