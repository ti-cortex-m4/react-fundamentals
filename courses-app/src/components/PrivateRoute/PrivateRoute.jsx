import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { getRoleFromLocalStorage } from '../../helpers/localStorage';
import { APPLICATION_PATHS } from '../../constants';

export const PrivateRoute = () => {
  const [userRole] = getRoleFromLocalStorage();
  return userRole === 'admin' ? <Outlet /> : <Navigate to={APPLICATION_PATHS.courses} />;
};

export default PrivateRoute;
