import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { getRoleFromLocalStorage } from '../../helpers/localStorage';
import { APPLICATION_PATHS } from '../../constants';

/*TODO*/ export const AnonymousRoute = () => {
  const [userRole] = getRoleFromLocalStorage();
  console.log("AnonymousRoute.role="+userRole);
  return userRole ?  <Outlet /> : <Navigate to={APPLICATION_PATHS.login} />;
};
