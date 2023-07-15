import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { isAdmin } from '../../helpers/authentification';
import { FRONTEND_PATHS } from '../../constants';

export const PrivateRoute = () => {
  return isAdmin ? <Outlet /> : <Navigate to={FRONTEND_PATHS.courses} />;
};

export default PrivateRoute;
