import React from 'react';
import ReplyTableData from './ReplyTableData';

function ReplyManage() {
  return (
    <div className="relative left-36 flex items-center justify-center">
      <div className="container">
        <table className="my-5 flex w-full table-fixed flex-col flex-nowrap overflow-hidden rounded-lg bg-white shadow-lg">
          <thead className="text-white">
            <tr className="mb-2 flex w-full flex-nowrap rounded-l-lg bg-teal-400 sm:mb-0 sm:table-row sm:rounded-none">
              <th className=" p-3 text-left">ID</th>
              <th className=" p-3 text-left">해당 글 ID</th>
              <th className=" p-3 px-36 text-left">내용</th>
              <th className=" p-3 px-16 text-left">작성자 IP</th>
              <th className=" p-3 px-8 text-left">등록일자</th>
              <th className=" p-3 text-left">action</th>
            </tr>
          </thead>
          <tbody className="sm:flex-none">
            <ReplyTableData />
            {/* postInfoList.map((postInfo, idx) => (
              <ReplyTableData
                idx={idx}
                postId={postInfo.postId}
                key={postInfo.postId}
                title={postInfo.title}
                singer={postInfo.singer}
                userIp={postInfo.userIp}
                registerDate={postInfo.registerDate}
              />
            )) */}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ReplyManage;
