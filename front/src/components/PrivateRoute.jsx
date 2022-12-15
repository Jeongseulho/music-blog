import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import useAuthStatus from '../hooks/useAuthStatus';
import Spinner from './Spinner';

function PrivateRoute() {
  const { isAuthorized, loading } = useAuthStatus();

  if (loading) {
    return <Spinner />;
  }
  if (!isAuthorized) {
    alert('글을 수정할 권한이 없습니다.');
    return <Navigate to="/" />;
  }

  return <Outlet />;
}

export default PrivateRoute;
