import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { getUserRoleFromLocalStorage } from '../../helpers/localStorage';
import { LOGIN_PATH } from '../../constants';

const AuthenticatedRoute = () => {
  const userRole = getUserRoleFromLocalStorage();
  return userRole ? <Outlet /> : <Navigate to={LOGIN_PATH} />;
};

export default AuthenticatedRoute;
