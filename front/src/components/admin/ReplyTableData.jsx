import React from 'react';
import { useSelector } from 'react-redux';
import formatDateTime from '../../utils/formatDateTime';
import deleteReply from '../../api/reply/deleteReply';

function ReplyTableData({ replyId, postId, content, userIp, registerDate, setAllReplyList }) {
  const darkMode = useSelector((state) => state.darkMode.value);
  return (
    <tr className={`${darkMode ? 'dark' : ''} mb-0 table-row text-center`}>
      <td className=" border p-3 hover:bg-gray-100">{replyId}</td>
      <td className=" w-[110px] border p-3 hover:bg-gray-100">{postId}</td>
      <td className=" w-[320px] border p-3 hover:bg-gray-100">{content}</td>
      <td className=" w-[190px] border p-3 hover:bg-gray-100">{userIp}</td>
      <td className=" w-[130px] border p-3 hover:bg-gray-100">{formatDateTime(registerDate)}</td>
      <td className=" border p-3 text-red-400 hover:bg-gray-100 hover:font-medium hover:text-red-600">
        <button
          className=""
          onClick={() => {
            deleteReply(replyId);
            setAllReplyList((prev) => prev.filter((replyInfo) => replyInfo.replyId !== replyId));
          }}
          type="button"
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

export default ReplyTableData;
