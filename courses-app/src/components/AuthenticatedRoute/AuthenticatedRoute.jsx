import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { getRoleFromLocalStorage } from '../../helpers/localStorage';
import { APPLICATION_PATHS } from '../../constants';

/*TODO*/ export const AuthenticatedRoute = () => {
  const [userRole] = getRoleFromLocalStorage();
  console.log("AuthenticatedRoute.role="+userRole);
  return userRole ?  <Outlet /> : <Navigate to={APPLICATION_PATHS.login} />;
};
