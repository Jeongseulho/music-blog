import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Analysis from '../../components/admin/Analysis';
import PostManage from '../../components/admin/PostManage';
import ReplyManage from '../../components/admin/ReplyManage';

function useAdmin() {
  const tabs = [<PostManage />, <ReplyManage />, <Analysis />];
  const [currentTab, setCurrentTab] = useState(0);
  const darkMode = useSelector((state) => state.darkMode.value);
  return { tabs, currentTab, setCurrentTab, darkMode };
}

export default useAdmin;
