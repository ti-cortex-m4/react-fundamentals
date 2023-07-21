import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// import { isAdministrator } from '../../helpers/authentication';
import { COURSES_PATH } from '../../constants';

import { getUserSelector } from '../../store/user/selectors';

const PrivateRoute = () => {
    const user = useSelector(getUserSelector);
//     console.log('AuthenticatedRoute userRole ' + JSON.stringify(userRole));
    console.log('PrivateRoute user ' + JSON.stringify(user));

  return user.isAdministrator() ? <Outlet /> : <Navigate to={COURSES_PATH} />;
};

export default PrivateRoute;
