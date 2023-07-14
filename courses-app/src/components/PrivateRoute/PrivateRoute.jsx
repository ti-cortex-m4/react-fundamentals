import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { getRoleFromLocalStorage } from '../../helpers/localStorage';
import { APPLICATION_PATHS } from '../../constants';

/*TODO*/ export const PrivateRoute = () => {
  const [userRole] = getRoleFromLocalStorage();
  console.log("PrivateRoute.role="+userRole);
  return userRole === 'admin' ?  <Outlet /> : <Navigate to={APPLICATION_PATHS.courses} />;
};
