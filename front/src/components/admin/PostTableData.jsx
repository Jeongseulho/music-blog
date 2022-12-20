import React from 'react';
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
  return (
    <tr className="mb-0 table-row text-center">
      <td className=" border p-3 hover:bg-gray-100">{postId}</td>
      <td className=" w-[158px] border p-3 hover:bg-gray-100">{title}</td>
      <td className=" w-[160px] border p-3 hover:bg-gray-100">{singer}</td>
      <td className=" w-[160px] border p-3 hover:bg-gray-100">{userIp}</td>
      <td className=" w-[160px] border p-3 hover:bg-gray-100">{formatDateTime(registerDate)}</td>
      <td className=" cursor-pointer border p-3 text-red-400 hover:bg-gray-100 hover:font-medium hover:text-red-600">
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
      <td className=" w-[70px] cursor-pointer border p-3 text-blue-400 hover:bg-gray-100 hover:font-medium hover:text-blue-600">
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
