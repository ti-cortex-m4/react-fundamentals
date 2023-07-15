import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { getUserRoleFromLocalStorage } from '../../helpers/localStorage';
import { FRONTEND_PATHS } from '../../constants';

export const PrivateRoute = () => {
  const userRole = getUserRoleFromLocalStorage();
  return userRole === 'admin' ? <Outlet /> : <Navigate to={FRONTEND_PATHS.courses} />;
};

export default PrivateRoute;
