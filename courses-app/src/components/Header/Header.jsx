import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Logo } from './components/Logo/Logo';
import { Button } from '../../common/Button/Button';
import { getUserNameFromLocalStorage, getUserRoleFromLocalStorage, removeUserFromLocalStorage } from '../../helpers/localStorage';
import { LOGIN_PATH } from '../../constants';

import { getUserSelector } from '../../store/user/selectors';
import { logoutUserThunk } from '../../store/user/thunk';
import { logoutUserErrorAction } from '../../store/user/actions';

import styles from './styles.module.css';

export const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userName = getUserNameFromLocalStorage();
  const userRole = getUserRoleFromLocalStorage();

  const handleLogoutButtonClick = () => {
    dispatch(logoutUserThunk());

    removeUserFromLocalStorage();
    navigate(LOGIN_PATH);
  };

  return (
    <div className={styles.headerContainer}>
      <Logo />
      {(getUserRoleFromLocalStorage() !== null) &&
        <div className={styles.userContainer}>
          <div className={styles.userName}>
            {("admin" === userRole) ? "Administrator" : userName}
          </div>
          <Button
            buttonText='Logout'
            onClick={handleLogoutButtonClick}
          />
        </div>
      }
    </div>
  );
};

export default Header;
