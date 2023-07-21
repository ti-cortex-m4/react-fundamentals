import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { isAdministrator } from '../../helpers/authentication';
import { COURSES_PATH } from '../../constants';

const PrivateRoute = () => {
  return isAdministrator() ? <Outlet /> : <Navigate to={COURSES_PATH} />;
};

export default PrivateRoute;
