import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getUserRoleFromLocalStorage } from '../../helpers/localStorage';
import { COURSES_PATH } from '../../constants';

import { getUserSelector } from '../../store/user/selectors';

const AnonymousRoute = () => {
//   const userRole = getUserRoleFromLocalStorage();

      const user = useSelector(getUserSelector);
  //     console.log('AuthenticatedRoute userRole ' + JSON.stringify(userRole));
      console.log('AuthenticatedRoute user ' + JSON.stringify(user));

  return !user.isAuthenticated ? <Outlet /> : <Navigate to={COURSES_PATH} />;
};

export default AnonymousRoute;