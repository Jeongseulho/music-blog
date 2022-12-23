import React from 'react';
import ReplyTableData from './ReplyTableData';
import useReplyManage from '../../hooks/useComponents/useReplyManage';

function ReplyManage() {
  const { allReplyList, setAllReplyList, loading } = useReplyManage();
  return (
    <div className="relative left-36 mt-24 flex items-center justify-center overflow-auto">
      <div
        className={`${
          loading ? 'opacity-0' : 'opacity-100'
        } container overflow-auto duration-500 ease-linear`}
      >
        <table className="my-5 flex w-full table-fixed flex-col flex-nowrap overflow-hidden rounded-lg bg-white shadow-lg">
          <thead className="text-white">
            <tr className="mb-2 flex w-full flex-nowrap rounded-l-lg bg-teal-400 sm:mb-0 sm:table-row sm:rounded-none">
              <th className=" p-2 pr-4 text-left">ID</th>
              <th className=" p-3 text-left">해당 글 ID</th>
              <th className=" p-3 px-36 text-left">내용</th>
              <th className=" p-3 px-16 text-left">작성자 IP</th>
              <th className=" p-3 px-9 text-left">등록일자</th>
              <th className=" p-3 px-[0.5rem] text-left">action</th>
            </tr>
          </thead>
          <tbody className="sm:flex-none">
            {allReplyList.map((replyInfo) => (
              <ReplyTableData
                replyId={replyInfo.replyId}
                postId={replyInfo.postId}
                key={replyInfo.replyId}
                content={replyInfo.content}
                userIp={replyInfo.userIp}
                registerDate={replyInfo.registerDate}
                setAllReplyList={setAllReplyList}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ReplyManage;
