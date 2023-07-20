import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { isAdministrator } from '../../helpers/authentication';
import { APPLICATION_PATHS } from '../../constants';

const PrivateRoute = () => {
  return isAdministrator() ? <Outlet /> : <Navigate to={APPLICATION_PATHS.courses} />;
};

export default PrivateRoute;
