import { useEffect, useState } from 'react';
import getList from '../../api/etc/getList';

function usePreviewPostList() {
  const [postInfoList, setPostInfoList] = useState([]);
  const [postPerPage, setPostPerPage] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);
  const firstPostOfCurrentPage = (currentPage - 1) * postPerPage;
  const totalPage = Math.ceil(postInfoList.length / postPerPage);

  useEffect(() => {
    getList().then((res) => {
      setPostInfoList(res.data.reverse());
    });
  }, []);

  const currentPostList = postInfoList.slice(
    firstPostOfCurrentPage,
    firstPostOfCurrentPage + postPerPage,
  );

  return {
    currentPostList,
    setPostInfoList,
    setPostPerPage,
    setCurrentPage,
    totalPage,
    currentPage,
  };
}

export default usePreviewPostList;
