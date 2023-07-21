import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { getUserRoleFromLocalStorage } from '../../helpers/localStorage';
import { COURSES_PATH } from '../../constants';

const AnonymousRoute = () => {
  const userRole = getUserRoleFromLocalStorage();
  return !userRole ? <Outlet /> : <Navigate to={COURSES_PATH} />;
};

export default AnonymousRoute;