import React from 'react';
import { useSelector } from 'react-redux';
import formatDateTime from '../../utils/formatDateTime';

function PostTableData({
  postId,
  title,
  singer,
  userIp,
  registerDate,
  deletePost,
  setPostInfoList,
  setModalPopup,
  setCurrentPostId,
}) {
  const darkMode = useSelector((state) => state.darkMode.value);

  return (
    <tr className={`${darkMode ? 'dark' : ''} mb-0 table-row text-center`}>
      <td className=" border p-3 ">{postId}</td>
      <td className=" w-[158px] border p-3 ">{title}</td>
      <td className=" w-[160px] border p-3 ">{singer}</td>
      <td className=" w-[160px] border p-3 ">{userIp}</td>
      <td className=" w-[160px] border p-3 ">{formatDateTime(registerDate)}</td>
      <td className=" border p-3 text-red-400 hover:bg-gray-100 hover:font-medium hover:text-red-600">
        <button
          type="button"
          onClick={() => {
            deletePost(postId);
            setPostInfoList((prev) => prev.filter((postInfo) => postInfo.postId !== postId));
          }}
        >
          Delete
        </button>
      </td>
      <td className=" w-[70px] border p-3 text-blue-400 hover:bg-gray-100 hover:font-medium hover:text-blue-600">
        <button
          type="button"
          onClick={() => {
            setModalPopup(true);
            setCurrentPostId(postId);
          }}
        >
          Show
        </button>
      </td>
    </tr>
  );
}

export default PostTableData;
