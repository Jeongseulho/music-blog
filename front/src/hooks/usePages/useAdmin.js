import React, { useState } from 'react';
import Analysis from '../../components/admin/Analysis';
import PostManage from '../../components/admin/PostManage';
import ReplyManage from '../../components/admin/ReplyManage';
import UiManage from '../../components/admin/UiManage';
import UserManage from '../../components/admin/UserManage';

function useAdmin() {
  const tabs = [<PostManage />, <ReplyManage />, <UserManage />, <UiManage />, <Analysis />];
  const [currentTab, setCurrentTab] = useState(0);
  return { tabs, currentTab, setCurrentTab };
}

export default useAdmin;
