import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { getUserRoleFromLocalStorage } from '../../helpers/localStorage';
import { FRONTEND_PATHS } from '../../constants';

export const AuthenticatedRoute = () => {
  const userRole = getUserRoleFromLocalStorage();
  return userRole ? <Outlet /> : <Navigate to={FRONTEND_PATHS.login} />;
};

export default AuthenticatedRoute;
