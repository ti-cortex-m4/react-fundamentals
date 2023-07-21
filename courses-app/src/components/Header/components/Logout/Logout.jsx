import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Button } from '../../../../common/Button/Button';
import { getUserNameFromLocalStorage, removeUserFromLocalStorage } from '../../../../helpers/localStorage';
import { LOGIN_PATH } from '../../../../constants';

import { getUserSelector } from '../../../../store/user/selectors';
import { logoutUserThunk } from '../../../../store/user/thunk';
import { logoutUserErrorAction } from '../../../../store/user/actions';

import styles from './styles.module.css';

export const Logout = ({ setIsLogged }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector(getUserSelector);
    const userName = getUserNameFromLocalStorage();
//   console.log('logout ' + JSON.stringify(user));
//   const userName = getUserNameFromLocalStorage();

//   useEffect(() => {
//     if (user.actionResult === true) {
//       //setFormData(initialFormData);
// //       setIsLogged(true);
//       //setFormValid(true);
//
//       navigate(LOGIN_PATH);
//     }
//
// //     if (user.actionResult === false) {
// // //       setFormValid(false);
// //       alert('Logout error: ' + user.actionError);
// //
// //       dispatch(logoutUserErrorAction({
// //         actionResult: null,
// //         actionError: null
// //       }));
// //     }
//   },
//     [
//       user.actionResult,
//       user.actionError,
//       navigate,
//       dispatch
//     ]);

  const handleLogoutButtonClick = () => {
     removeUserFromLocalStorage();
     dispatch(logoutUserThunk());
     navigate(LOGIN_PATH);
//     localStorage.removeItem('user');
//     navigate('/login');

//     removeUserFromLocalStorage();
//     setIsLogged(false);
//
//     navigate(LOGIN_PATH);
  };

  return (
    <div className={styles.userContainer}>
      <div className={styles.userName}>
        {userName}
      </div>
      <Button
        buttonText='Logout'
        onClick={handleLogoutButtonClick}
      />
    </div>
  );
};

export default Logout;
