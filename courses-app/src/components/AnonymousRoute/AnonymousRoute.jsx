import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { getUserRoleFromLocalStorage } from '../../helpers/localStorage';
import { APPLICATION_PATHS } from '../../constants';

export const AnonymousRoute = () => {
  const userRole = getUserRoleFromLocalStorage();
  return !userRole ? <Outlet /> : <Navigate to={APPLICATION_PATHS.courses} />;
};

export default AnonymousRoute;