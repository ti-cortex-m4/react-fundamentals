import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { isAdministrator } from '../../helpers/authentification';
import { FRONTEND_PATHS } from '../../constants';

export const PrivateRoute = () => {
  return isAdministrator ? <Outlet /> : <Navigate to={FRONTEND_PATHS.courses} />;
};

export default PrivateRoute;
