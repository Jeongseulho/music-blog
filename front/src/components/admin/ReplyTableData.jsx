import React from 'react';

function ReplyTableData() {
  return (
    <tr className="mb-0 table-row text-center">
      <td className=" border p-3 hover:bg-gray-100">1</td>
      <td className=" w-[110px] border p-3 hover:bg-gray-100">1</td>
      <td className=" w-[320px] border p-3 hover:bg-gray-100">내용</td>
      <td className=" w-[190px] border p-3 hover:bg-gray-100">댓글 작성자 ip</td>
      <td className=" w-[130px] border p-3 hover:bg-gray-100">등록날짜</td>
      <td className=" cursor-pointer border p-3 text-red-400 hover:bg-gray-100 hover:font-medium hover:text-red-600">
        <button type="button">Delete</button>
      </td>
    </tr>
  );
}

export default ReplyTableData;
